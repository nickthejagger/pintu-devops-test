# Pintu Devops Test

### Installation

This project require Kubernetes, helm and docker

Build to Docker image
```sh
$ docker build -f frontend/Dockerfile -t frontend:v1.0.0 frontend
$ docker build -f backend/Dockerfile -t backend:v1.0.0 backend
```

After that run the helm script
```sh
$ helm install --name backend backend/chart/backend
$ helm install --name frontend frontend/chart/frontend
```
or you can just run it with run.sh
it's should be ready on http://localhost:3001/
