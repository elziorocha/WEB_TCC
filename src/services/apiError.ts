import axios from 'axios';
import toast from 'react-hot-toast';

export function apiError(err: unknown, defaultMessage = 'Erro inesperado') {
  let message = defaultMessage;

  if (axios.isAxiosError(err)) {
    message =
      (err.response?.data as { message?: string })?.message ||
      `Erro ${err.response?.status || ''}: ${err.message}`;
  } else if (err instanceof Error) {
    message = err.message;
  }

  toast.error(message);
}
