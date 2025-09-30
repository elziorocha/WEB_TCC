import { type FormEvent, type ReactElement, useRef, useState } from 'react';
import {
  MailIcon,
  SendIcon,
  UserIcon,
  AtSignIcon,
  MessageSquareIcon,
} from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  time: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
}

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (formData: ContactFormData): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, value]) => value !== undefined)
    ) as FormErrors;

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  const getFormData = (): ContactFormData | null => {
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
      const { enviarEmail } = await import('@/utils/enviarEmail');

      const response: EmailResponse = await enviarEmail({
        formData,
        timestamp: Date.now(),
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
    <main className="flex min-h-screen flex-col p-4 md:gap-12 md:p-8">
      <section className="flex flex-col gap-2 text-center">
        <div className="flex items-center justify-center gap-3">
          <h1 className="from-tertiary to-quarter bg-gradient-to-r bg-clip-text py-1.5 text-3xl font-bold text-transparent sm:text-5xl">
            Fale Conosco
          </h1>
          <div className="from-quarter to-tertiary rounded-full bg-gradient-to-br p-2 sm:p-3">
            <MailIcon
              className="size-8 text-white sm:size-10"
              strokeWidth={1.5}
            />
          </div>
        </div>
        <h2 className="text-base font-bold text-zinc-700 italic sm:text-xl">
          Estamos aqui para ouvir você. Envie sua mensagem e retornaremos em
          breve.
        </h2>
      </section>

      <hr className="via-quarter my-4 h-1 border-0 bg-gradient-to-r from-transparent to-transparent md:-my-6" />

      <section className="mx-auto w-full max-w-6xl">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 p-6 shadow-xl sm:p-8 lg:p-10"
          noValidate
        >
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          />

          <div className="space-y-6 sm:space-y-8">
            <div className="group">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Nome completo
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <UserIcon
                    className={`size-5 transition-colors duration-200 ${
                      focusedField === 'name'
                        ? 'text-tertiary'
                        : 'text-gray-400'
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  minLength={3}
                  maxLength={100}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="focus:border-tertiary focus:ring-tertiary/20 w-full rounded-xl border border-zinc-300 bg-white py-3 pr-4 pl-12 text-gray-700 transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isSubmitting}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
              </div>
              {errors.name && (
                <p
                  id="name-error"
                  className="text-destructive mt-2 text-sm"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <AtSignIcon
                    className={`size-5 transition-colors duration-200 ${
                      focusedField === 'email'
                        ? 'text-tertiary'
                        : 'text-gray-400'
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  maxLength={255}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="focus:border-tertiary focus:ring-tertiary/20 w-full rounded-xl border border-zinc-300 bg-white py-3 pr-4 pl-12 text-gray-700 transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isSubmitting}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  className="text-destructive mt-2 text-sm"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Mensagem
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute top-0 left-0 flex pt-3 pl-4">
                  <MessageSquareIcon
                    className={`size-5 transition-colors duration-200 ${
                      focusedField === 'message'
                        ? 'text-tertiary'
                        : 'text-gray-400'
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Digite sua mensagem aqui..."
                  rows={6}
                  required
                  minLength={10}
                  maxLength={5000}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="focus:border-tertiary focus:ring-tertiary/20 w-full resize-none rounded-xl border border-zinc-300 bg-white py-3 pr-4 pl-12 text-gray-700 transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isSubmitting}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                />
              </div>
              {errors.message && (
                <p
                  id="message-error"
                  className="text-destructive mt-2 text-sm"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary group hover:bg-tertiary relative w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br py-4 font-bold text-white shadow-xl transition-all focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg
                      className="size-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <SendIcon
                      className="size-5 transition-transform duration-300"
                      strokeWidth={2}
                    />
                  </>
                )}
              </span>
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-600 sm:text-sm">
            Suas informações estão seguras conosco e não serão compartilhadas
            com terceiros.
          </p>
        </form>
      </section>
    </main>
  );
};
