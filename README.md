=> Gitea Software Quality Engineering (SQE) Suite

A comprehensive end-to-end testing and security orchestration project for a containerized Gitea instance. This project demonstrates the integration of functional automation, performance benchmarking, and multi-layer security scanning (DAST & SAST).

=> 🛠️ Tech Stack & Tools
- Containerization: Docker & Docker-Compose
- Functional Testing: Cypress (UI) & Postman (API)
- Performance Testing: Grafana k6
- Security Testing (DAST): OWASP ZAP
- Static Analysis (SAST): SonarQube

---

 📋 Project Tasks & Execution

 1. Environment Deployment
Gitea was deployed using a microservices architecture via Docker.
- URL: `http://localhost:3000`

 2. Functional UI Automation (Cypress)
Automated end-to-end user journeys including login authentication and dashboard navigation.
- Command: `npx cypress run`

 3. API Validation (Postman)
Verified REST API integrity for repository management and milestone creation.
- Status: Verified `201 Created` for backend operations.

 4. Performance Benchmarking (k6)
Executed a stress test simulating 200 concurrent virtual users to establish system baselines.
- Result: 100% Request success rate under peak load.

 5. Dynamic Security Assessment (OWASP ZAP)
Performed a DAST scan to identify web vulnerabilities and missing security headers.
- Outcome: 0 High-Risk vulnerabilities detected. 14 configuration warnings identified for hardening.

 6. Static Code Analysis (SonarQube)
Integrated SonarScanner to analyze code quality, bugs, and maintainability.
- Outcome: Execution Success; quality gate passed.
## 👤 Author
**Muhammad Zubair**
[Roll Number: Your Roll Number]
