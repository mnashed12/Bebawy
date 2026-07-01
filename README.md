# Wedding website (Carolyn & Marco)

This repository contains a minimal Django backend and a React frontend (Vite) as a foundation for the wedding website.

Quick start (dev):

1. Backend

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

2. Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the Django backend API at `/api/` on the same origin. For local development you can run both and use a proxy, or run the frontend with Vite and set `proxy` in `vite.config.js` (not included by default).

Deployment notes (PythonAnywhere):
- Host the Django backend on PythonAnywhere (create a web app, point WSGI to `backend/weddingsite/wsgi.py`).
- Install backend requirements into the PythonAnywhere virtualenv.
- Build the frontend (`npm run build`) and serve the static files from PythonAnywhere's static file settings, or host the frontend separately (Netlify/Vercel) and point API calls to the Django app.
