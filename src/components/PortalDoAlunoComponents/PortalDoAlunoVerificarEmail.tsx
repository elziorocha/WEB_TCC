import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { verifyEmail, resendVerificationEmail } from '@/services/AuthApi/auth';
import { ArrowRight, MailCheck, Loader2 } from 'lucide-react';
import { apiError } from '@/services/apiError';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { motion } from 'framer-motion';

export const PortalDoAlunoVerificarEmail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [codigo, setCodigo] = useState('');
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const email = state?.email || '';

  const handleVerificar = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await verifyEmail({ email, codigo });
      toast.success('E-mail verificado com sucesso!');

      setTimeout(() => {
        navigate('/portal-do-aluno/dashboard');
      }, 300);

      navigate('/portal-do-aluno/dashboard');
    } catch (error) {
      apiError(error);
    }
  };

  const handleReenvio = async () => {
    if (cooldown > 0) return;

    setResending(true);
    try {
      await resendVerificationEmail(email);
      toast.success('Novo código enviado para seu e-mail!');
      setCooldown(30);

      const interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      apiError(error);
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="mt-10 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-md rounded-2xl border border-none bg-white p-8 shadow-lg"
      >
        <div className="flex flex-col items-center gap-2">
          <MailCheck className="size-10 text-blue-600" />
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Verifique seu e-mail
          </h2>
          <p className="text-center text-sm text-gray-600">
            Digite o código de 6 dígitos enviado para <br />
            <strong className="text-gray-800">{email}</strong>
          </p>
        </div>

        <form
          onSubmit={handleVerificar}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <InputOTP
            maxLength={6}
            value={codigo}
            onChange={(value) => setCodigo(value)}
          >
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>

          <button
            type="submit"
            disabled={codigo.length < 6}
            className="bg-secondary text-whiteText hover:bg-tertiary flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-3 font-semibold shadow-md transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            Verificar
            <ArrowRight className="size-5" />
          </button>

          <p className="text-center text-sm text-gray-500">
            Não recebeu o e-mail? <br />
            <span
              onClick={handleReenvio}
              className={`inline-flex cursor-pointer items-center gap-1 text-blue-600 hover:underline ${
                cooldown > 0 ? 'pointer-events-none opacity-60' : ''
              }`}
            >
              {resending ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Reenviando...
                </>
              ) : cooldown > 0 ? (
                `Aguarde ${cooldown}s`
              ) : (
                'Reenviar código'
              )}
            </span>
          </p>
        </form>
      </motion.div>
    </main>
  );
};
