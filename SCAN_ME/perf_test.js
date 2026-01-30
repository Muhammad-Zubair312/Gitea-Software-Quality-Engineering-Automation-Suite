import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,           // 10 virtual users
  duration: '30s',   // run for 30 seconds
};

export default function () {
  // Use host.docker.internal instead of localhost
  const res = http.get('http://host.docker.internal:3000');
  
  // This verifies the test is actually working
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}