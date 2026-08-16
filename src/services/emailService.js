import { Resend } from 'resend';

// Make sure to replace 're_xxxxxxxxx' with your actual Resend API key or set it in your environment
const RESEND_API_KEY = import.meta.env?.VITE_RESEND_API_KEY || 're_xxxxxxxxx';

export const resend = new Resend(RESEND_API_KEY);

/**
 * Send a contact or notification email via Resend
 * @param {Object} options
 * @param {string} [options.from='onboarding@resend.dev']
 * @param {string} [options.to='onlineclass0612@gmail.com']
 * @param {string} [options.subject='Hello World']
 * @param {string} [options.html='<p>Congrats on sending your <strong>first email</strong>!</p>']
 */
export async function sendNotificationEmail({
  from = 'onboarding@resend.dev',
  to = 'onlineclass0612@gmail.com',
  subject = 'Hello World',
  html = '<p>Congrats on sending your <strong>first email</strong>!</p>'
} = {}) {
  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html
    });
    return { success: true, data };
  } catch (error) {
    console.error('Resend Error:', error);
    return { success: false, error };
  }
}
