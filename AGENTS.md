# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

PRISM (Platform for Real-time Intelligent Skills Mapping) is a SaaS platform that transforms static HR records into a dynamic, searchable, and intelligent internal talent marketplace.

## Architecture

Microservices monorepo with three main components:

- **`client/`** — Next.js 16 frontend (React 19, TypeScript, Tailwind CSS v4, shadcn/ui)
- **`services/auth-service/`** — FastAPI (Python 3.14) authentication service
- **`docker-compose.yml`** — Orchestration with Traefik v3.6 as the API gateway/reverse proxy

### Request Flow

Traefik sits in front of all services. It uses **forward authentication**: requests hit Traefik, which forwards auth checks to `auth-service/verify`. On success, the auth service injects `X-User-ID` and `X-User-Role` headers that are passed to downstream services. This means individual backend services do not handle authentication themselves — they trust headers from Traefik.

### Client Details

- Uses the **App Router** (`client/app/`)
- **shadcn/ui** (new-york style) with Radix UI primitives, lucide-react icons, and `cn()` utility in `client/lib/utils.ts`
- Path alias: `@/*` resolves to the `client/` root
- Standalone output mode for Docker deployment

### Auth Service Details

- Managed with **uv** (lockfile: `uv.lock`, config: `pyproject.toml`)
- Multi-stage Docker build that copies uv from `ghcr.io/astral-sh/uv:latest`
- Runs via `fastapi run app/main.py` on port 8000

## Build & Run Commands

### Client (`client/`)

```powershell
# Install dependencies
pnpm install

# Development server (http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Lint
pnpm lint
```

### Auth Service (`services/auth-service/`)

```powershell
# Install dependencies
uv sync

# Run dev server (http://localhost:8000)
uv run fastapi dev app/main.py

# Run production server
uv run fastapi run app/main.py --host 0.0.0.0 --port 8000
```

### Docker (full stack)

```powershell
# Start all services (Traefik on :80/:8080, client on :3000, auth on :8000)
docker compose up --build

# Start a single service
docker compose up client --build
docker compose up auth-service --build
```

## Adding New Backend Services

New microservices go in `services/<service-name>/`. Each needs its own `Dockerfile` and an entry in `docker-compose.yml`. To protect a service behind authentication, apply the Traefik `my-auth` middleware label:

```yaml
labels:
  - "traefik.http.routers.<service-name>.middlewares=my-auth"
```
