import emailjs from '@emailjs/browser';

interface SendEmailData {
  form: HTMLFormElement;
}

export const enviarEmail = async ({ form }: SendEmailData) => {
  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_MAIL_SERVICE_ID,
      import.meta.env.VITE_MAIL_TEMPLATE_ID,
      form,
      import.meta.env.VITE_MAIL_API_KEY
    );
    return { success: true, message: result.text };
  } catch (error: any) {
    return { success: false, message: error.text || 'Erro desconhecido' };
  }
};
