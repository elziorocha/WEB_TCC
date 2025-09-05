import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from 'react-hot-toast';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="h-[100vh]">
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  </StrictMode>
);
