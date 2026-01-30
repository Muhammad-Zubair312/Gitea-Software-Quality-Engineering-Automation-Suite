import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Ramp up to 50 users
    { duration: '30s', target: 100 }, // Ramp up to 100 users
    { duration: '30s', target: 200 }, // Ramp up to 200 users (Stress point)
    { duration: '30s', target: 0 },   // Ramp down to 0 (Recovery)
  ],
  thresholds: {
    // If more than 10% of requests fail, the test stops (System is broken)
    http_req_failed: ['rate<0.10'], 
    // If 95% of requests take longer than 1 second, the test fails
    http_req_duration: ['p(95)<1000'], 
  },
};

export default function () {
  const baseUrl = 'http://host.docker.internal:3000';
  
  // We use a "Batch" request to simulate realistic heavy browser loading
  const responses = http.batch([
    ['GET', `${baseUrl}/`],
    ['GET', `${baseUrl}/explore/repos`],
  ]);

  check(responses[0], { 'Home status 200': (r) => r.status === 200 });
  check(responses[1], { 'Explore status 200': (r) => r.status === 200 });

  sleep(1);
}