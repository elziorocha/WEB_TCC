import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="h-[100vh]">
      <RouterProvider router={router} />
    </main>
  </StrictMode>
);
