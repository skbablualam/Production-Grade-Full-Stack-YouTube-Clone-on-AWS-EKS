# 🚀 Production-Grade Full Stack YouTube Clone on AWS EKS

## 📌 Project Overview

This project demonstrates a **production-style full stack application deployment** on AWS using modern DevOps practices and cloud-native architecture.

The application consists of:

* 🎨 React Frontend (SPA)
* 🟢 Node.js Backend API
* 🗄 PostgreSQL (Amazon RDS)
* ☸ Amazon EKS (Managed Kubernetes)
* 🐳 Dockerized microservices
* 🔁 GitHub Actions CI/CD (OIDC-based)
* 📦 Amazon ECR
* 🚦 Blue/Green Deployment Strategy
* 📊 Observability & Autoscaling
* 🔐 IAM Roles for Service Accounts (IRSA)

All infrastructure is provisioned using **Terraform (modularized IaC)**.

This project simulates how a real company builds and releases production software.

---

# 🏗️ Architecture

## High-Level Architecture

```
Users
  ↓
AWS ALB (Public Subnet)
  ↓
EKS Cluster (Private Subnets)
  ├── React Frontend Pod
  ├── Node.js Backend Pod
  ↓
Amazon RDS PostgreSQL (Private)
```

---

## 🔹 Infrastructure Layer (AWS)

* Custom VPC (Multi-AZ)
* 2 Public Subnets (ALB)
* 2 Private Subnets (EKS + RDS)
* Internet Gateway
* NAT Gateway
* Security Group isolation
* Remote Terraform state (S3 + DynamoDB locking)

---

## 🔹 Kubernetes Layer

* Amazon EKS (Managed control plane)
* Managed Node Group (private nodes)
* ALB Ingress Controller
* Horizontal Pod Autoscaler (HPA)
* Blue/Green deployment setup
* ArgoCD for GitOps
* Metrics Server

---

## 🔹 CI/CD Pipeline

GitHub Actions pipeline includes:

1. Code checkout
2. Install dependencies
3. Build (React + Node)
4. Unit tests
5. SonarCloud quality scan
6. Trivy vulnerability scan
7. Docker multi-stage build
8. Push image to Amazon ECR (OIDC authentication)
9. Update GitOps manifests
10. ArgoCD auto-sync deployment

No static AWS credentials are stored in GitHub.

---

# 🧰 Technology Stack

| Layer               | Tools Used               |
| ------------------- | ------------------------ |
| IaC                 | Terraform                |
| Cloud               | AWS (EKS, ECR, RDS, ALB) |
| Frontend            | React                    |
| Backend             | Node.js + Express        |
| Database            | PostgreSQL (RDS)         |
| CI/CD               | GitHub Actions           |
| GitOps              | ArgoCD                   |
| Containerization    | Docker                   |
| Security Scan       | Trivy                    |
| Code Quality        | SonarCloud               |
| Observability       | HPA + Metrics Server     |
| Deployment Strategy | Blue/Green               |

---

# 🔁 CI/CD Flow

```
Developer Push
    ↓
GitHub Actions
    ├── Build & Test
    ├── SonarCloud Scan
    ├── Trivy Scan
    ├── Docker Build
    ├── Push to ECR (OIDC)
    ↓
Update GitOps Repo
    ↓
ArgoCD Sync
    ↓
EKS Deployment
```

---

# 🔐 Security Practices Implemented

* IAM Roles for Service Accounts (IRSA)
* OIDC authentication (GitHub → AWS)
* No static AWS keys
* Private EKS worker nodes
* Private RDS (no public access)
* Security group isolation
* Docker non-root user
* Image vulnerability scanning
* Code quality gates

---

# 🚦 Deployment Strategy

### Blue/Green Deployment

Two deployments:

* `app-blue`
* `app-green`

Traffic is switched via Kubernetes service or ALB routing.

This enables:

* Zero downtime deployments
* Safe rollback capability

---

# 📊 Autoscaling

Horizontal Pod Autoscaler configured:

* Min replicas: 1
* Max replicas: 3
* CPU threshold: 50%

Demonstrates dynamic scaling capability.

---

# 💾 Backup & Disaster Recovery

* RDS automated backups (7-day retention)
* Manual snapshot capability
* Terraform destroy strategy for cost control
* Infrastructure redeployable via IaC

---

# 🌿 Branching Strategy

```
main        → Production
develop     → Integration
feature/*   → Feature development
release/*   → Pre-release
hotfix/*    → Emergency fixes
```

CI behavior:

* feature → Build + Test
* develop → Build + Scan
* main → Full pipeline + Deployment

---

# 📁 Repository Structure

```
enterprise-youtube-clone/
│
├── terraform/
│   ├── modules/
│   │   ├── networking/
│   │   ├── eks/
│   │   ├── rds/
│   │   ├── ecr/
│   │   └── iam/
│   └── envs/dev/
│
├── frontend/
├── backend/
├── k8s-manifests/
├── .github/workflows/
└── docs/
```

---

# 💰 Cost Optimization Strategy

This project is designed as a learning lab:

* t3.micro nodes
* db.t3.micro RDS
* Infrastructure destroyed after demo
* Single NAT Gateway
* Minimal ECR retention policy

Primary paid components:

* EKS control plane (~$0.10/hr)
* ALB hourly cost

Infrastructure is intentionally destroyed after successful deployment.

---

# 🎯 What This Project Demonstrates

* Production-grade Kubernetes architecture
* Secure CI/CD using OIDC federation
* Full-stack containerized application
* GitOps workflow
* Blue/Green deployment
* Infrastructure as Code (modular Terraform)
* Cost-aware cloud operations

This simulates real enterprise DevOps engineering practices.

---

# 🚀 Future Enhancements

* AWS WAF integration
* Prometheus + Grafana stack
* Redis caching layer
* S3 for media storage
* Canary deployments
* Multi-environment promotion strategy

---

# 👨‍💻 Author

Bablu Alam

Cloud Operations Engineer

Bangalore, India

---

# 🏁 Final Note

This project is not a tutorial deployment.
It is a controlled simulation of enterprise DevOps architecture built with cost awareness and security-first principles.

---
