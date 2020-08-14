#!/bin/bash
docker build -f frontend/Dockerfile -t frontend:v1.0.0 frontend
docker build -f backend/Dockerfile -t backend:v1.0.0 backend
helm install --name backend backend/chart/backend
helm install --name frontend frontend/chart/frontend