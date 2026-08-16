import { Resend } from 'resend';

// Load .env automatically in Node 20+
try {
  process.loadEnvFile?.();
} catch {
  // .env file not found or not needed
}

// ⚠️ GANTI 're_xxxxxxxxx' DENGAN API KEY ASLI ANDA DARI RESEND DASHBOARD
// Atau buat file .env dengan isi: RESEND_API_KEY=re_APIKEYASLIANDA
const apiKey = process.env.RESEND_API_KEY || 're_xxxxxxxxx';

if (!apiKey || apiKey === 're_xxxxxxxxx') {
  console.error('\n❌ [ERROR] API Key masih menggunakan placeholder: "re_xxxxxxxxx"');
  console.error('👉 Silakan ganti "re_xxxxxxxxx" di file send-email.js dengan API Key asli dari https://resend.com/api-keys');
  console.error('👉 Atau buat file .env dan tambahkan:\n   RESEND_API_KEY=re_APIKEYASLIANDA\n');
  process.exit(1);
}

const resend = new Resend(apiKey);

async function sendEmail() {
  console.log('⏳ Mengirim email via Resend...');
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'onlineclass0612@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    if (error) {
      console.error('❌ Gagal mengirim email:');
      console.error(error);
      return;
    }

    console.log('✅ Email berhasil terkirim!');
    console.log('Detail Response:', data);
  } catch (error) {
    console.error('❌ Terjadi kesalahan:', error);
  }
}

sendEmail();
