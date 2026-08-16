import { Resend } from 'resend';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Hanya izinkan method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // Periksa apakah RESEND_API_KEY sudah diset di Vercel
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === 're_xxxxxxxxx') {
    console.error('RESEND_API_KEY is not set or still default');
    return res.status(500).json({
      success: false,
      message: 'RESEND_API_KEY belum diset di Vercel Environment Variables.'
    });
  }

  // Parse body jika berupa string
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ success: false, message: 'Invalid JSON payload' });
    }
  }

  const { name, email, subject, message } = body || {};

  // Validasi input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Nama, email, dan pesan wajib diisi.' 
    });
  }

  const recipientEmail = process.env.TO_EMAIL || 'onlineclass0612@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

  try {
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
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
              Ada pengunjung yang mengirimkan pesan melalui formulir kontak portofolio Anda.
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

    if (error) {
      console.error('Resend API Returned Error:', error);
      return res.status(400).json({ 
        success: false, 
        message: error.message || 'Resend gagal mengirim email.', 
        error 
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server Handler Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Terjadi kesalahan pada server saat mengirim email.',
      error: error.message 
    });
  }
}
