import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  PhoneCall,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, InstagramIcon, ThreadsIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let result = {};
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        if (!response.ok) {
          throw new Error(text || `Server error (${response.status})`);
        }
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || result.error?.message || 'Gagal mengirim pesan.');
      }

      setIsSubmitted(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#8B5CF6', '#EC4899', '#10B981'],
        });
      } catch (err) {
        console.log(err);
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(err.message || 'Terjadi gangguan saat mengirim transmisi pesan. Silakan coba lagi atau hubungi via WhatsApp/Email langsung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <span>// 06. GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Mari Mulai <span className="cyber-gradient-text">Kolaborasi & Diskusi</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Punya ide proyek menarik, peluang karir, atau ingin berdiskusi seputar frontend development? Kirimkan pesan sekarang!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Informasi Kontak Langsung
              </h3>
              
              <div className="space-y-4">
                {/* Email Direct */}
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email Resmi</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {personal.email}
                    </div>
                  </div>
                </motion.a>

                {/* WhatsApp Direct */}
                <motion.a
                  href={`https://wa.me/${personal.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20Averous,%20saya%20tertarik%20dengan%20portofolio%20anda`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">WhatsApp Chat</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {personal.whatsapp}
                    </div>
                  </div>
                </motion.a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Lokasi / Basis</div>
                    <div className="text-sm font-semibold text-slate-200">
                      {personal.location} (Remote / Onsite)
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-cyan-200 font-mono">
                  Waktu respon rata-rata: &lt; 24 Jam
                </span>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">Ikuti Profil:</span>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={personal.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram Profile"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={personal.threads}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Threads Profile"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    <ThreadsIcon className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 text-left relative shadow-xl">
              
              {isSubmitted ? (
                /* Success Feedback Card */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-100">
                    Pesan Berhasil Dikirim!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                    Terima kasih telah menghubungi. Pesan Anda telah tercatat dan saya akan merespon secepat mungkin.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono font-semibold bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-colors cursor-pointer"
                  >
                    &lt; KIRIM PESAN LAIN /&gt;
                  </motion.button>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading text-xl font-bold text-slate-100 mb-2">
                    Kirim Pesan Cepat
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase font-medium">
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase font-medium">
                        Alamat Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 uppercase font-medium">
                      Subjek Pesan *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      autoComplete="off"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Penawaran Proyek Frontend / Fullstack"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase font-medium">
                      Detail Pesan *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan kebutuhan proyek atau tawaran kolaborasi Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification Alert */}
                  {errorMessage && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3 text-red-300 text-xs font-mono"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-200">Gagal Mengirim:</div>
                        <p className="mt-0.5 text-red-300/90">{errorMessage}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs">MENGIRIM TRANSMISI...</span>
                    ) : (
                      <>
                        <span>Kirim Pesan Sekarang</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
