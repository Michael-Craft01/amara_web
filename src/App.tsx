import { useState } from 'react'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen w-full font-sans relative flex items-center justify-center overflow-hidden bg-black text-white selection:bg-white/20">

      {/* ── BACKGROUND LAYERS ─────────────────────────── */}

      {/* 1. fullname watermark — much more vivid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/fullname.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '85% auto',
          backgroundPosition: 'center center',
          opacity: 0.07,
        }}
      />

      {/* 2. Radial vignette so edges are dark & centre glows */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_0%,black_100%)]" />

      {/* 3. Subtle dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* 4. Soft centre glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-[140px] pointer-events-none z-0" />
      {/* ─────────────────────────────────────────────── */}


      {/* ── HERO CONTENT ──────────────────────────────── */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl w-full mx-auto py-14">

        {/* Logo */}
        <div className="mb-6 w-12 h-12 md:w-14 md:h-14 mx-auto relative">
          <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
          <img
            src="/amara-logo.svg"
            alt="Amara"
            className="relative w-full h-full object-contain drop-shadow-[0_0_24px_rgba(255,255,255,0.3)]"
          />
        </div>

        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase text-white/60 border border-white/10"
          style={{ backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.04)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_6px_white]" />
          Offline-First · Zero Cost · Total Sovereignty
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] mb-5 leading-[1.02]"
          style={{ backgroundImage: 'linear-gradient(165deg, #ffffff 30%, rgba(255,255,255,0.45) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
        >
          Ivy League Quality.<br />
          <span className="font-extralight italic" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Anywhere.
          </span>
        </h1>

        {/* Sub */}
        <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-8 leading-relaxed font-light tracking-wide">
          Amara is a sovereign Edge Server that turns any school into an offline powerhouse — interactive simulations, an AI tutor, and a full digital library. <strong className="text-white/70 font-medium">No internet. No data cost. No compromise.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto">
          {/* Primary */}
          <a
            href="/AMARA BOOKLET.pdf"
            download="Amara Booklet.pdf"
            className="group flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold text-sm px-6 py-3 rounded-xl hover:bg-neutral-100 active:scale-95 transition-all duration-200 shadow-[0_0_50px_rgba(255,255,255,0.18)]"
          >
            <span className="material-symbols-outlined text-[20px] leading-none">download</span>
            Download Booklet
          </a>

          {/* Secondary */}
          <button
            onClick={() => setShowModal(true)}
            className="group flex-1 flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-white/15 hover:border-white/35 hover:bg-white/5 active:scale-95 transition-all duration-200"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <span className="material-symbols-outlined text-[20px] leading-none">send</span>
            Request Info
          </button>
        </div>

        {/* Key stats */}
        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6 w-full max-w-lg mx-auto">
          {[
            { num: '~900%', label: 'Average School ROI' },
            { num: '$1', label: 'Per Student / Month' },
            { num: '30-Day', label: 'Free Sovereign Trial' },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">{num}</span>
              <span className="text-[11px] md:text-xs text-white/40 tracking-wide font-medium uppercase text-center">{label}</span>
            </div>
          ))}
        </div>

      </main>
      {/* ─────────────────────────────────────────────── */}


      {/* ── CONTACT MODAL ─────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            style={{ backdropFilter: 'blur(16px)' }}
            onClick={() => setShowModal(false)}
          />

          {/* Sheet */}
          <div
            className="relative w-full max-w-sm rounded-3xl border border-white/10 overflow-hidden"
            style={{ background: 'rgba(14,14,14,0.95)', backdropFilter: 'blur(24px)', boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' }}
          >
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-7">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-1">Amara Team</p>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Get in Touch</h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white/30 hover:text-white transition-colors mt-1"
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:michaelragu@logichq.tech"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/25 transition-colors">
                    <span className="material-symbols-outlined text-white/60 text-[20px] group-hover:text-white transition-colors">alternate_email</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white/90 text-sm mb-0.5">Send an Email</div>
                    <div className="text-xs text-white/40 truncate">michaelragu@logichq.tech</div>
                  </div>
                  <span className="material-symbols-outlined text-white/20 text-[18px] ml-auto">arrow_forward</span>
                </a>

                <a
                  href="https://wa.me/263719200295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-[#25D366]/40 hover:bg-[#25D366]/8 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/40 transition-all">
                    <span className="material-symbols-outlined text-white/60 text-[20px] group-hover:text-[#25D366] transition-colors">forum</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white/90 text-sm mb-0.5">WhatsApp</div>
                    <div className="text-xs text-white/40">+263 719 200 295</div>
                  </div>
                  <span className="material-symbols-outlined text-white/20 text-[18px] ml-auto group-hover:text-[#25D366]/50 transition-colors">arrow_forward</span>
                </a>

                <a
                  href="https://wa.me/263785733582"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-[#25D366]/40 hover:bg-[#25D366]/8 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/40 transition-all">
                    <span className="material-symbols-outlined text-white/60 text-[20px] group-hover:text-[#25D366] transition-colors">forum</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white/90 text-sm mb-0.5">WhatsApp</div>
                    <div className="text-xs text-white/40">+263 785 733 582</div>
                  </div>
                  <span className="material-symbols-outlined text-white/20 text-[18px] ml-auto group-hover:text-[#25D366]/50 transition-colors">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ─────────────────────────────────────────────── */}

    </div>
  )
}

export default App
