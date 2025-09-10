# neme.site - Personal Cloud Engineer Portfolio & Blog

Welcome to the source of [neme.site](https://neme.site), a **cloud-native portfolio and blog project**, serving as both a personal showcase and a demonstration of modern DevOps, automation, and observability best practices.

---

## 📝 Overview

This project hosts:

- **Portfolio** → A static React-based portfolio behind a secure NGINX proxy.  
- **Blog** → A lightweight static blog (Markdown + templates), styled to match the portfolio.

Both are deployed on an Oracle Cloud VM with automated SSL, observability, and GitLab CI/CD integration.  
All infrastructure runs on Docker Compose and is designed for smooth migration to Kubernetes.

---

## 🛠️ Tech Stack

| Layer           | Technology               |
|-----------------|--------------------------|
| Frontend        | React (portfolio) + Blog engine (Markdown/HTML) |
| Web Server      | NGINX (Dockerized)       |
| Certificates    | Let's Encrypt + Certbot  |
| CI/CD           | GitLab CI/CD             |
| Infrastructure  | Oracle Cloud VM, UFW     |
| Monitoring      | Prometheus, Grafana      |
| IaC (Optional)  | Terraform (future)       |

---

## 📁 Project Structure

```
/
├── blog/                # Blog content (Markdown + templates)
├── portfolio/           # React portfolio source
├── certbot/             # SSL certificate automation scripts/configs
├── dist/                # Static build output (portfolio + blog)
├── nginx/               # NGINX config files
├── prometheus/          # Prometheus configs
├── renew-certificates.sh# Certificate renewal automation
├── docker-compose.yml   # Main orchestration file
├── .gitlab-ci.yml       # GitLab CI/CD pipeline
├── .gitignore           # Ignore rules for Git
└── README.md            # Project docs
```

---

## 🚀 Getting Started

### Prerequisites

- Oracle Cloud VM (Ubuntu 22.04+)
- Docker & Docker Compose
- Domain name (e.g., neme.site)
- Cloudflare account (for DNS/API cert automation)

### Installation

```bash
git clone https://gitlab.com/yourusername/portfolio.git
cd portfolio
cp .env.example .env   # Set secrets/variables as needed
docker compose up -d --build
```

### Environment Variables

Set in your `.env` file or in your CI/CD:

- `APP_NAME`
- `PORT`
- `GRAFANA_USER`
- `GRAFANA_PASS`
- `DEPLOY_PRIVATE_KEY_B64` (for CI/CD)

---

## ⚡ Deployment

- **Production**: Runs via Docker Compose (`docker compose up -d --build`)  
- **CI/CD**: All deployments are automated via GitLab CI/CD using SSH and Docker Compose.  
- **Domain**: Managed by Cloudflare. DNS records point to your Oracle VM's public IP.  

---

## 🔒 SSL & Security

- Automated certificate management with Certbot and Cloudflare DNS plugin.  
- NGINX configured with secure TLS protocols, recommended ciphers, and [HTTP Security Headers](#http-security-headers).  
- UFW (Uncomplicated Firewall) restricts inbound ports to 80/443 and SSH (custom port).  

#### HTTP Security Headers Example (NGINX)

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; object-src 'none';" always;
```

---

## 🔄 Certificate Renewal

- Automated via Certbot and a shell script: `renew-certificates.sh`  
- Cron job is recommended (example: renew weekly):  

```cron
0 3 * * 1 cd ~/portfolio && ./renew-certificates.sh >> ~/cert-renew.log 2>&1
```

- NGINX container reloads after renewal.  

---

## 📊 Monitoring & Metrics

- **Prometheus**: Collects metrics from node-exporter and (optionally) other services.  
- **Grafana**: Visualizes key metrics, accessible at `http://<your-vm>:3000`  
- **Healthchecks**:  
  - NGINX: `/` returns `200 OK` if site is healthy  
  - (Add `/health` endpoint if backend service is added)  

---

## 🤖 CI/CD

- GitLab CI/CD deploys changes to the Oracle VM using SSH and Docker Compose.  
- `.gitlab-ci.yml` automates deployments with safe SSH key handling.  

---

## 📄 Useful Scripts

- `renew-certificates.sh`: Renews and updates certs, reloads NGINX.  
- `deploy.sh`: (If present) Custom one-shot deployment steps.  

---

## 🗄️ .gitignore Example

```
node_modules/
dist/
.env
*.pem
certbot/conf/*
!certbot/conf/README
certbot/live-resolved/*
!certbot/live-resolved/.gitkeep
*.log
__pycache__/
*.pyc
.DS_Store
```

---

## 🤝 Contributing

Pull requests are welcome. Please open issues for any suggestions, bugs, or questions!

---

## 📄 License

[MIT License](LICENSE) — Feel free to use, share, and adapt.

---

## 📬 Contact

**Alex Neme Marmontel**  
Cloud Engineer  
[alexneme@me.com](mailto:alexneme@me.com)  
[LinkedIn](https://www.linkedin.com/in/alexneme/)

---

## ⭐ Extra

- **Planned Improvements:** Kubernetes migration, IaC with Terraform, multi-stage blue/green deployments.  
- **Demo:** [neme.site](https://neme.site)