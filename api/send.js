import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Hanya izinkan method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // Validasi input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Nama, email, dan pesan wajib diisi.' 
    });
  }

  // Email tujuan (bisa diatur via environment variable TO_EMAIL atau default)
  const recipientEmail = process.env.TO_EMAIL || 'onlineclass0612@gmail.com';

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: recipientEmail,
      replyTo: email,
      subject: `[Portofolio] ${subject ? subject : 'Pesan Baru'} dari ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #1e293b; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
          
          <div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6); padding: 24px 30px; text-align: left;">
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">
              📬 Pesan Baru dari Website Portofolio
            </h1>
            <p style="margin: 6px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 13px;">
              Ada pengunjung yang mengirimkan pesan melalui formulir kontak.
            </p>
          </div>

          <div style="padding: 30px;">
            <div style="background-color: #1e293b; border-radius: 8px; padding: 18px; margin-bottom: 20px; border-left: 4px solid #06b6d4;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; color: #94a3b8; width: 110px; font-weight: 600;">Nama Pengirim:</td>
                  <td style="padding: 6px 0; color: #f1f5f9; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Email:</td>
                  <td style="padding: 6px 0;">
                    <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Subjek:</td>
                  <td style="padding: 6px 0; color: #f1f5f9;">${subject || 'Tidak ada subjek spesifik'}</td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 24px;">
              <h3 style="margin: 0 0 10px 0; color: #cbd5e1; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                Isi Pesan:
              </h3>
              <div style="background-color: #020617; border-radius: 8px; padding: 20px; color: #e2e8f0; font-size: 14px; line-height: 1.7; white-space: pre-wrap; border: 1px solid #1e293b;">
${message}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b; text-align: center;">
              Pesan ini dikirim secara otomatis melalui sistem kontak web portofolio Anda.
            </div>
          </div>

        </div>
      `
    });

    if (data.error) {
      return res.status(400).json({ success: false, error: data.error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend Handler Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Gagal mengirim email.',
      error: error.message 
    });
  }
}
