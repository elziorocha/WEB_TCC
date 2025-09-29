import { type FormEvent, type ReactElement, useRef, useState } from 'react';
import { MailIcon } from 'lucide-react';

// Tipos
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  time: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
}

// Validações
const validateName = (name: string): string | undefined => {
  const trimmed = name.trim();
  if (!trimmed) return 'Nome é obrigatório.';
  if (trimmed.length < 3) return 'Nome deve ter pelo menos 3 caracteres.';
  if (trimmed.length > 100) return 'Nome deve ter no máximo 100 caracteres.';
  return undefined;
};

const validateEmail = (email: string): string | undefined => {
  const trimmed = email.trim();
  if (!trimmed) return 'Email é obrigatório.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Email inválido.';
  if (trimmed.length > 255) return 'Email deve ter no máximo 255 caracteres.';
  return undefined;
};

const validateMessage = (message: string): string | undefined => {
  const trimmed = message.trim();
  if (!trimmed) return 'Mensagem é obrigatória.';
  if (trimmed.length < 10) return 'Mensagem deve ter pelo menos 10 caracteres.';
  if (trimmed.length > 5000)
    return 'Mensagem deve ter no máximo 5000 caracteres.';
  return undefined;
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

export const FaleConosco = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData: FormData): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    // Remove undefined values
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, value]) => value !== undefined)
    ) as FormErrors;

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  const getFormData = (): FormData | null => {
    if (!formRef.current) return null;

    const formElements = formRef.current.elements;
    const name =
      (formElements.namedItem('name') as HTMLInputElement)?.value || '';
    const email =
      (formElements.namedItem('email') as HTMLInputElement)?.value || '';
    const message =
      (formElements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    return {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const formData = getFormData();
    if (!formData || !validateForm(formData)) return;

    setIsSubmitting(true);

    try {
      // Importação dinâmica para code splitting
      const { enviarEmail } = await import('@/utils/enviarEmail');

      const response: EmailResponse = await enviarEmail({
        formData,
        timestamp: Date.now(), // Prevenção contra replay attacks
      });

      if (response.success) {
        alert('Mensagem enviada com sucesso!');
        formRef.current?.reset();
        setErrors({});
      } else {
        throw new Error(
          response.message || 'Erro desconhecido ao enviar mensagem'
        );
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Erro ao enviar mensagem. Tente novamente.';
      alert(`Erro: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
        noValidate // Deixa a validação nativa do HTML desativada
      >
        <div className="flex items-center justify-center gap-3">
          <h1 className="from-quarter to-tertiary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            Fale Conosco
          </h1>
          <div className="from-quarter to-tertiary relative flex items-center rounded-full bg-gradient-to-br p-3">
            <MailIcon className="size-6 font-bold text-white sm:size-7" />
          </div>
        </div>

        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        />

        <div>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            minLength={3}
            maxLength={100}
            className="input-email"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            required
            maxLength={255}
            className="input-email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Digite sua mensagem..."
            rows={5}
            required
            minLength={10}
            maxLength={5000}
            className="input-email resize-none"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="from-quarter to-tertiary rounded-lg bg-gradient-to-r py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-lg"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </main>
  );
};
