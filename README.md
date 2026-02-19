## 🚀 Production-Style Containerized Application Deployment on AWS

This project demonstrates end-to-end deployment of a production-style containerized full-stack application on AWS using Infrastructure as Code, CI/CD automation, and Kubernetes orchestration.

The goal of this project is to simulate a real-world cloud platform setup including networking, security, automation, and scalable deployment architecture.

### 🏗️ Architecture Overview

The solution includes:

Multi-AZ VPC architecture provisioned using Terraform

Public and private subnets across Availability Zones

Internet Gateway and NAT Gateway configuration

Application Load Balancer (ALB) in public subnet

EC2-based Kubernetes worker nodes in private subnet

Dockerized full-stack application

GitHub Actions for CI/CD automation

Secure IAM role-based access

Remote Terraform backend using S3 with state locking

### 🧱 Infrastructure Components
#### 1️⃣ Networking (Terraform)

Custom VPC with CIDR block

Public and Private Subnets (Multi-AZ)

Internet Gateway (IGW)

NAT Gateway for outbound internet access

Route Tables (Public & Private)

Security Groups following least privilege principle

Application Load Balancer (ALB)

#### 2️⃣ Containerization (Docker)

Built Docker images for frontend and backend services

Used multi-stage builds for optimized image size

Tested container locally before deployment

Pushed images to container registry

#### 3️⃣ Kubernetes Deployment

Created Deployments and Services

Configured LoadBalancer/ALB integration

Implemented rolling updates

Managed ConfigMaps and environment variables

Verified pod health and scaling behavior

#### 4️⃣ CI/CD Pipeline (GitHub Actions)

Automated workflow includes:

Code push triggers pipeline

Docker image build

Image push to registry

Kubernetes deployment update

Infrastructure validation

Pipeline ensures consistent and repeatable deployments.

#### 5️⃣ Infrastructure as Code (Terraform)

Modular Terraform structure

Remote state stored in S3

State locking enabled

Variables and reusable modules

Automated plan and apply workflow

### 🔐 Security Best Practices Implemented

IAM roles with least privilege access

No hardcoded credentials

Private subnets for compute workloads

Controlled inbound traffic via ALB

Security group-based access restriction

Remote state locking to prevent concurrent changes

### 📦 Project Structure

/terraform

   ├── vpc.tf
   
   ├── ec2.tf
   
   ├── alb.tf
   
   ├── variables.tf
   
   └── backend.tf

/docker

   ├── Dockerfile
   
   └── docker-compose.yml

/k8s

   ├── deployment.yaml
   
   ├── service.yaml

/.github/workflows

   └── ci-cd.yml


### 🛠️ Technologies Used

AWS (VPC, EC2, ALB, IAM, S3)

Terraform

Docker

Kubernetes

GitHub Actions

Linux

### 🎯 Key Outcomes

Infrastructure fully automated using Terraform

Application deployed in private subnets

Scalable Kubernetes deployment model

Secure networking with ALB-based access

CI/CD-driven automated deployment pipeline

Production-style architecture simulation

### 📌 What This Project Demonstrates

✔ Cloud networking fundamentals
✔ Infrastructure as Code capability
✔ Containerization skills
✔ Kubernetes deployment knowledge
✔ CI/CD automation
✔ Cloud security best practices
✔ Platform engineering mindset

### 👨‍💻 Author

Bablu Alam

Cloud Operations / Infrastructure Engineer,
Bangalore, India
