# simple-frontend

A minimal static frontend app for learning Docker and Kubernetes. Served by nginx in an Alpine container, with a few client-side dynamic touches.

## Features

- **Home** — Welcome and status
- **About** — App and stack overview
- **Dashboard** — Live clock, random K8s tips, and activity list (all client-side)

No backend; just HTML, CSS, and vanilla JavaScript.

## Tech stack

- HTML5, CSS3, vanilla JS
- nginx on Alpine Linux (Docker)

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- For Kubernetes: [Minikube](https://minikube.sigs.k8s.io/docs/start/) and [kubectl](https://kubernetes.io/docs/tasks/tools/)

## Run locally (no Docker)

From the repo root: `cd public && python3 -m http.server 8000`, then open http://localhost:8000. Or open `public/index.html` directly in a browser.

## Docker

### Build

```bash
docker build -t simple-frontend .
```

### Run

```bash
docker run -p 8080:80 simple-frontend
```

Then open http://localhost:8080

### Push to Docker Hub

```bash
docker tag simple-frontend <your-username>/simple-frontend:latest
docker login
docker push <your-username>/simple-frontend:latest
```

## Deploy to Minikube

1. Start Minikube: `minikube start`
2. Create a Deployment and a NodePort (or other) Service that use your image (e.g. `pranavp30/simple-frontend:latest`).
3. Expose the service: `minikube service <service-name>` and open the URL shown.

## Project structure

```
.
├── public/              # Static web assets (copied into image as nginx root)
│   ├── index.html       # Home
│   ├── about.html       # About page
│   ├── dashboard.html   # Dashboard (dynamic)
│   ├── css/
│   │   └── styles.css   # Shared styles
│   └── js/
│       ├── script.js    # Home page script
│       └── dashboard.js # Dashboard logic (clock, tips, activity)
├── Dockerfile           # nginx:alpine image
├── .dockerignore
└── README.md
```
