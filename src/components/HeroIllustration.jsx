import React from 'react';

export default function HeroIllustration() {
  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 540 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="phoneBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="printerBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="scanBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0.4)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
          </linearGradient>
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Ambient background soft circles */}
        <circle cx="270" cy="200" r="170" fill="#f8fafc" />
        <circle cx="390" cy="140" r="90" fill="#eff6ff" />
        <circle cx="140" cy="240" r="70" fill="#f0fdf4" />

        {/* --- PRINTER SECTION (Right) --- */}
        <g id="printer-group" filter="url(#subtleGlow)">
          {/* Printer Base Shadow */}
          <ellipse cx="380" cy="305" rx="100" ry="14" fill="#cbd5e1" opacity="0.6" />

          {/* Printer Bottom Body */}
          <rect x="290" y="210" width="180" height="85" rx="12" fill="url(#printerBody)" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Paper Output Slot */}
          <rect x="320" y="250" width="120" height="12" rx="4" fill="#0f172a" />
          
          {/* Dispensed Print Document */}
          <rect x="330" y="256" width="100" height="42" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Document Content Lines */}
          <line x1="342" y1="268" x2="418" y2="268" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="342" y1="276" x2="400" y2="276" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="342" y1="284" x2="410" y2="284" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

          {/* Printer Top Section */}
          <path d="M305 210 V165 C305 160 309 156 314 156 H446 C451 156 455 160 455 165 V210" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Top Paper Tray & Feeder Paper */}
          <rect x="335" y="125" width="90" height="40" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="345" y1="137" x2="415" y2="137" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />

          {/* Control Panel / LED Indicators */}
          <rect x="310" y="222" width="40" height="18" rx="4" fill="#1e293b" />
          <circle cx="318" cy="231" r="3" fill="#22c55e" />
          <circle cx="328" cy="231" r="3" fill="#3b82f6" />
          <circle cx="338" cy="231" r="3" fill="#94a3b8" />
        </g>

        {/* --- CONNECTING WIRELESS FLOW --- */}
        <g id="wireless-flow" stroke="#2563eb" strokeWidth="2" strokeDasharray="5 5">
          <path d="M 195 180 C 235 150, 275 160, 310 170" fill="none" opacity="0.75" />
        </g>
        
        {/* Floating Digital File Node in Transition */}
        <g id="floating-doc" filter="url(#subtleGlow)" transform="translate(225, 130)">
          <rect x="0" y="0" width="48" height="60" rx="6" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M 32 0 L 48 16 H 34 C 33 16 32 15 32 14 V 0 Z" fill="#dbeafe" />
          <text x="10" y="24" fill="#2563eb" fontSize="9" fontWeight="700" fontFamily="sans-serif">PDF</text>
          <line x1="10" y1="34" x2="38" y2="34" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="42" x2="32" y2="42" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="50" x2="36" y2="50" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* --- QR CODE STAND AT XEROX COUNTER --- */}
        <g id="qr-stand" filter="url(#subtleGlow)" transform="translate(80, 240)">
          {/* Acrylic Stand Base */}
          <path d="M -15 90 L 75 90 L 65 78 L -5 78 Z" fill="#94a3b8" opacity="0.4" />
          {/* Acrylic Stand Plate */}
          <rect x="0" y="10" width="60" height="72" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="4" y="14" width="52" height="12" rx="2" fill="#2563eb" />
          <text x="9" y="23" fill="#ffffff" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">PrintFlow QR</text>

          {/* QR Code Matrix */}
          <rect x="10" y="30" width="40" height="40" rx="2" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* QR Corners */}
          <rect x="13" y="33" width="10" height="10" fill="#0f172a" />
          <rect x="15" y="35" width="6" height="6" fill="#ffffff" />
          <rect x="16.5" y="36.5" width="3" height="3" fill="#0f172a" />

          <rect x="37" y="33" width="10" height="10" fill="#0f172a" />
          <rect x="39" y="35" width="6" height="6" fill="#ffffff" />
          <rect x="40.5" y="36.5" width="3" height="3" fill="#0f172a" />

          <rect x="13" y="57" width="10" height="10" fill="#0f172a" />
          <rect x="15" y="59" width="6" height="6" fill="#ffffff" />
          <rect x="16.5" y="60.5" width="3" height="3" fill="#0f172a" />

          {/* QR Data Pixels */}
          <rect x="26" y="34" width="3" height="3" fill="#0f172a" />
          <rect x="31" y="37" width="3" height="3" fill="#2563eb" />
          <rect x="25" y="44" width="4" height="4" fill="#0f172a" />
          <rect x="31" y="46" width="3" height="5" fill="#0f172a" />
          <rect x="27" y="55" width="4" height="4" fill="#0f172a" />
          <rect x="35" y="56" width="4" height="4" fill="#2563eb" />
        </g>

        {/* --- SMARTPHONE SCANNER (Foreground Left) --- */}
        <g id="smartphone" filter="url(#subtleGlow)">
          {/* Phone Shadow */}
          <ellipse cx="145" cy="335" rx="55" ry="10" fill="#94a3b8" opacity="0.3" />

          {/* Phone Outer Shell */}
          <rect x="85" y="80" width="120" height="235" rx="24" fill="url(#phoneBody)" stroke="#334155" strokeWidth="2.5" />
          
          {/* Phone Screen */}
          <rect x="91" y="88" width="108" height="219" rx="18" fill="url(#screenGrad)" />
          
          {/* Speaker / Dynamic Island */}
          <rect x="125" y="94" width="40" height="7" rx="3.5" fill="#0f172a" />
          <circle cx="157" cy="97.5" r="1.5" fill="#1e3a8a" />

          {/* In-App Scan Header */}
          <rect x="97" y="108" width="96" height="24" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="106" cy="120" r="4" fill="#2563eb" />
          <text x="115" y="123" fill="#0f172a" fontSize="7" fontWeight="600" fontFamily="sans-serif">PrintFlow Scan</text>

          {/* Viewfinder Window */}
          <rect x="99" y="138" width="92" height="92" rx="8" fill="#0f172a" />
          
          {/* Viewfinder Scan Beam */}
          <path d="M 103 142 L 187 142 L 175 185 L 115 185 Z" fill="url(#scanBeam)" />
          <line x1="103" y1="168" x2="187" y2="168" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />

          {/* Viewfinder Reticle Corners */}
          <path d="M 105 148 V 144 H 109" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
          <path d="M 185 148 V 144 H 181" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
          <path d="M 105 220 V 224 H 109" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
          <path d="M 185 220 V 224 H 181" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />

          {/* Micro QR Target in Viewfinder */}
          <rect x="135" y="174" width="20" height="20" fill="#ffffff" rx="2" />
          <rect x="138" y="177" width="5" height="5" fill="#0f172a" />
          <rect x="147" y="177" width="5" height="5" fill="#0f172a" />
          <rect x="138" y="186" width="5" height="5" fill="#0f172a" />
          <rect x="146" y="186" width="4" height="4" fill="#2563eb" />

          {/* Bottom Card in Phone: "Xerox Shop Recognized" */}
          <rect x="97" y="238" width="96" height="58" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="103" y="244" width="14" height="14" rx="4" fill="#dbeafe" />
          <text x="107" y="254" fill="#2563eb" fontSize="8" fontWeight="700">✓</text>
          
          <text x="122" y="250" fill="#0f172a" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Campus Xerox</text>
          <text x="122" y="257" fill="#64748b" fontSize="6.5" fontFamily="sans-serif">Counter #1 • Ready</text>

          {/* Action button inside phone */}
          <rect x="103" y="266" width="84" height="18" rx="5" fill="#2563eb" />
          <text x="122" y="278" fill="#ffffff" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">Upload Document</text>
        </g>

        {/* --- FLOATING STATUS BADGES --- */}
        <g id="badge-fast" filter="url(#subtleGlow)" transform="translate(38, 95)">
          <rect x="0" y="0" width="86" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="14" cy="14" r="5" fill="#22c55e" />
          <text x="25" y="18" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Zero App Install</text>
        </g>

        <g id="badge-print" filter="url(#subtleGlow)" transform="translate(385, 85)">
          <rect x="0" y="0" width="98" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="14" cy="14" r="5" fill="#2563eb" />
          <text x="25" y="18" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Instant Print Queue</text>
        </g>
      </svg>
    </div>
  );
}
