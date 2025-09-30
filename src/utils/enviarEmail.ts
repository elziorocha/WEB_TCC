import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  time: string;
}

interface SendEmailData {
  formData: ContactFormData;
  timestamp: number;
}

interface EmailResponse {
  success: boolean;
  message?: string;
}

export const enviarEmail = async ({
  formData,
  timestamp,
}: SendEmailData): Promise<EmailResponse> => {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_MAIL_SERVICE_ID,
      import.meta.env.VITE_MAIL_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: formData.time,
        timestamp: timestamp.toString(),
      },
      import.meta.env.VITE_MAIL_API_KEY
    );
    return { success: true, message: result.text };
  } catch (error: any) {
    console.error('Erro no enviarEmail:', error);
    return {
      success: false,
      message: error.text || 'Erro desconhecido ao enviar email',
    };
  }
};
