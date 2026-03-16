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

Open `index.html` in a browser, or serve the project root with any static server (e.g. `python3 -m http.server 8000`).

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
├── index.html      # Home
├── about.html      # About page
├── dashboard.html  # Dashboard (dynamic)
├── dashboard.js    # Dashboard logic (clock, tips, activity)
├── styles.css      # Shared styles
├── script.js       # Home page script
├── Dockerfile      # nginx:alpine image
└── .dockerignore
```
