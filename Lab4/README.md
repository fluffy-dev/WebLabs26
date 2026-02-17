# Lab 4: Angular

This repository contains two Angular projects for Web Development Lab 4.

## Structure

- `task1/`: Official Angular Tutorial (Homes App)
- `task2/online-store/`: Online Store Application (Kaspi.kz products)

## Prerequisites

- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)
- Docker (optional)

## Running the Projects

### Option 1: Using Docker (Recommended)

Run both items with Docker Compose:

```bash
docker-compose up --build
```

- **Task 1 (Tutorial):** http://localhost:4201
- **Task 2 (Online Store):** http://localhost:4202

### Option 2: Running Locally

#### Task 1: Angular Tutorial

```bash
cd task1
npm install
ng serve
```

Access at: http://localhost:4200

#### Task 2: Online Store

```bash
cd task2/online-store
npm install
ng serve
```

Access at: http://localhost:4200 (or 4201 if 4200 is busy)

## Task 2 Features

- **Product List:** Displays 10 real products from Kaspi.kz.
- **Product Card:** Visual component with image gallery, rating, and description.
- **Sharing:** Share products via WhatsApp and Telegram.
- **Responsive Design:** Adapts to mobile and desktop screens.
