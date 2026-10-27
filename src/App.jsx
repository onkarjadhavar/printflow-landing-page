import React, { useState, useEffect } from 'react';
import {
  Printer,
  QrCode,
  FileText,
  Clock,
  Layers,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Shield,
  Send,
  Users,
  Menu,
  X,
  ChevronRight,
  Building2,
  Sparkles,
  Info,
  Check,
  ChevronUp
} from 'lucide-react';
import HeroIllustration from './components/HeroIllustration';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStepTab, setActiveStepTab] = useState(1);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Student',
    message: ''
  });

  // Close mobile menu on click or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 890) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    setContactSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      {/* 1. NAVBAR */}
      <header className="header">
        <div className="container nav-container">
          <a
            href="#home"
            className="logo"
            onClick={(e) => scrollToSection(e, 'home')}
            aria-label="PrintFlow Home"
          >
            <div className="logo-badge">
              <Printer size={20} strokeWidth={2.2} />
            </div>
            <span className="logo-text">
              Print<span>Flow</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li>
                <a
                  href="#home"
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#problem"
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'problem')}
                >
                  Why PrintFlow
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'benefits')}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'about-us')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-cta">
            <a
              href="#how-it-works"
              className="btn btn-primary btn-sm"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
            >
              Explore PrintFlow
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer" id="mobile-menu">
            <ul className="mobile-nav-list">
              <li>
                <a
                  href="#home"
                  className="mobile-nav-link"
                  onClick={(e) => scrollToSection(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#problem"
                  className="mobile-nav-link"
                  onClick={(e) => scrollToSection(e, 'problem')}
                >
                  Why PrintFlow
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="mobile-nav-link"
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="mobile-nav-link"
                  onClick={(e) => scrollToSection(e, 'benefits')}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="mobile-nav-link"
                  onClick={(e) => scrollToSection(e, 'about-us')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mobile-nav-link"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#how-it-works"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={(e) => scrollToSection(e, 'how-it-works')}
            >
              Explore PrintFlow
            </a>
          </div>
        )}
      </header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="section hero-section" id="home">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-badge">
                  <Sparkles size={14} />
                  <span>Introducing PrintFlow | Smart Printing Concept</span>
                </div>

                <h1 className="hero-title">
                  Printing Made Simple. Just Scan and Print.
                </h1>

                <p className="hero-subtitle">
                  PrintFlow is our QR-based smart printing concept designed to
                  simplify document printing for students, professionals, and
                  local Xerox shop owners.
                </p>

                <div className="hero-actions">
                  <a
                    href="#how-it-works"
                    className="btn btn-primary btn-lg"
                    onClick={(e) => scrollToSection(e, 'how-it-works')}
                  >
                    <span>Discover How It Works</span>
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-secondary btn-lg"
                    onClick={(e) => scrollToSection(e, 'contact')}
                  >
                    Contact Our Team
                  </a>
                </div>

                <div className="hero-meta">
                  <div className="meta-item">
                    <CheckCircle2 size={16} />
                    <span>No App Download Needed</span>
                  </div>
                  <div className="meta-item">
                    <CheckCircle2 size={16} />
                    <span>Simple QR Counter Scan</span>
                  </div>
                  <div className="meta-item">
                    <CheckCircle2 size={16} />
                    <span>Student-Led Innovation</span>
                  </div>
                </div>
              </div>

              {/* Lightweight SVG Hero Illustration */}
              <div className="hero-visual-card">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROBLEM SECTION */}
        <section className="section section-alt" id="problem">
          <div className="container">
            <div className="section-header">
              <div className="section-pill">The Challenge</div>
              <h2 className="section-title">
                Traditional Printing Can Be Simpler
              </h2>
              <p className="section-desc">
                Everyday document printing at campus kiosks and local Xerox
                shops often suffers from repetitive friction and crowded
                counters.
              </p>
            </div>

            <div className="problem-grid">
              {/* Problem Card 1 */}
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <FileText size={24} />
                </div>
                <h3 className="problem-title">Manual Process</h3>
                <p className="problem-text">
                  Printing orders often require repeated instructions and
                  manual file handling.
                </p>
              </div>

              {/* Problem Card 2 */}
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <Clock size={24} />
                </div>
                <h3 className="problem-title">Waiting Time</h3>
                <p className="problem-text">
                  Customers may need to wait while their documents are
                  processed.
                </p>
              </div>

              {/* Problem Card 3 */}
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <Layers size={24} />
                </div>
                <h3 className="problem-title">Extra Effort</h3>
                <p className="problem-text">
                  Shop owners handle multiple requests and printing details
                  manually.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SOLUTION SECTION */}
        <section className="section" id="solution">
          <div className="container">
            <div className="section-header">
              <div className="section-pill">The Proposed Solution</div>
              <h2 className="section-title">Meet PrintFlow</h2>
              <p className="section-desc">
                Our vision is to make printing more convenient through a simple
                QR-based ordering experience.
              </p>
            </div>

            <div className="solution-grid">
              {/* Feature 1 */}
              <div className="solution-card">
                <div className="solution-icon-wrapper">
                  <QrCode size={24} />
                </div>
                <h3 className="solution-title">Scan &amp; Start</h3>
                <p className="solution-text">
                  Scan a shop&apos;s QR code using a smartphone.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="solution-card">
                <div className="solution-icon-wrapper">
                  <Sliders size={24} />
                </div>
                <h3 className="solution-title">Submit Print Details</h3>
                <p className="solution-text">
                  Upload a document and select printing preferences through the
                  proposed interface.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="solution-card">
                <div className="solution-icon-wrapper">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="solution-title">Simplified Workflow</h3>
                <p className="solution-text">
                  Help customers and shop owners manage printing requests more
                  efficiently.
                </p>
              </div>
            </div>

            {/* Clear Concept Notice */}
            <div className="concept-disclaimer">
              <Info size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <div>
                <strong>Proposed Concept Note:</strong> PrintFlow is an academic
                startup concept currently in active architectural planning.
                Direct hardware printer connectivity and automated queueing are
                planned prototype phases to be validated through field tests.
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="section section-alt" id="how-it-works">
          <div className="container">
            <div className="section-header">
              <div className="section-pill">Simple 3-Step Flow</div>
              <h2 className="section-title">How It Works</h2>
              <p className="section-desc">
                A streamlined workflow designed to bridge customers and print
                operators in three frictionless steps.
              </p>
            </div>

            <div className="steps-container">
              {/* Step 1 */}
              <div className="step-card">
                <div className="step-header">
                  <span className="step-number">STEP 01</span>
                  <div className="step-icon-badge">
                    <QrCode size={22} />
                  </div>
                </div>
                <h3 className="step-title">Scan the QR Code</h3>
                <p className="step-desc">
                  Open your smartphone camera and scan the PrintFlow QR code
                  placed on the local Xerox shop counter. No app installation
                  required.
                </p>
              </div>

              {/* Step 2 */}
              <div className="step-card">
                <div className="step-header">
                  <span className="step-number">STEP 02</span>
                  <div className="step-icon-badge">
                    <Sliders size={22} />
                  </div>
                </div>
                <h3 className="step-title">Select Document and Print Options</h3>
                <p className="step-desc">
                  Attach your document (PDF/Word), choose copies, color mode
                  (B&amp;W or Color), duplex preferences, and paper size on a
                  clean mobile screen.
                </p>
              </div>

              {/* Step 3 */}
              <div className="step-card">
                <div className="step-header">
                  <span className="step-number">STEP 03</span>
                  <div className="step-icon-badge">
                    <Printer size={22} />
                  </div>
                </div>
                <h3 className="step-title">Submit Your Print Request</h3>
                <p className="step-desc">
                  Transmit your organized print specifications directly to the
                  shop operator&apos;s queue for instant, error-free printing.
                </p>
              </div>
            </div>

            {/* Mandatory concept status note */}
            <div className="notice-box">
              <p>
                <strong>Development Note:</strong> PrintFlow is currently being
                developed. Features will be validated through prototype
                testing.
              </p>
            </div>

            {/* Interactive Concept Showcase (Simulated Walkthrough) */}
            <div className="interactive-preview-card">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: 'var(--accent-primary)',
                    letterSpacing: '0.05em'
                  }}
                >
                  Interactive Prototype Preview
                </span>
                <h4 style={{ fontSize: '1.25rem', marginTop: '6px' }}>
                  Explore the Proposed Mobile Interface
                </h4>
              </div>

              <div className="preview-nav-tabs">
                <button
                  type="button"
                  className={`preview-tab-btn ${activeStepTab === 1 ? 'active' : ''}`}
                  onClick={() => setActiveStepTab(1)}
                >
                  <span>1. QR Scanning Screen</span>
                </button>
                <button
                  type="button"
                  className={`preview-tab-btn ${activeStepTab === 2 ? 'active' : ''}`}
                  onClick={() => setActiveStepTab(2)}
                >
                  <span>2. Print Specifications</span>
                </button>
                <button
                  type="button"
                  className={`preview-tab-btn ${activeStepTab === 3 ? 'active' : ''}`}
                  onClick={() => setActiveStepTab(3)}
                >
                  <span>3. Order Queue Ticket</span>
                </button>
              </div>

              <div className="preview-display">
                {/* Simulated Phone Frame */}
                <div className="phone-mockup-frame">
                  <div className="phone-screen">
                    {activeStepTab === 1 && (
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                            PrintFlow Scanner
                          </div>
                          <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: '12px' }}>
                            Aim camera at counter stand
                          </div>
                          <div
                            style={{
                              background: '#0f172a',
                              borderRadius: '12px',
                              padding: '24px 16px',
                              textAlign: 'center',
                              color: '#ffffff'
                            }}
                          >
                            <QrCode size={48} style={{ color: '#60a5fa', margin: '0 auto 8px' }} />
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                              Scanning SGI Campus Xerox #02...
                            </div>
                          </div>
                        </div>
                        <div style={{ background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '12px' }}>
                          <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#16a34a' }}>
                            ✓ Shop Connected
                          </div>
                          <div style={{ fontSize: '0.65rem', color: '#64748b' }}>
                            Ready to configure document
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStepTab === 2 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.7rem' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a' }}>Print Options</div>
                        <div style={{ background: '#ffffff', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                          <span style={{ color: '#64748b' }}>File: </span>
                          <strong>Project_Report_v2.pdf</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                          <span>Copies:</span>
                          <strong>2 Copies</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                          <span>Color:</span>
                          <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Black &amp; White</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ffffff', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                          <span>Sides:</span>
                          <strong>Double-sided (Duplex)</strong>
                        </div>
                        <button
                          type="button"
                          style={{
                            background: '#2563eb',
                            color: '#ffffff',
                            padding: '8px',
                            borderRadius: '6px',
                            fontWeight: 600,
                            marginTop: '6px'
                          }}
                        >
                          Confirm Preferences
                        </button>
                      </div>
                    )}

                    {activeStepTab === 3 && (
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', textAlign: 'center' }}>
                        <div>
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              background: '#dcfce7',
                              color: '#16a34a',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '8px auto 12px'
                            }}
                          >
                            <Check size={20} />
                          </div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                            Order #PF-104
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px' }}>
                            Sent to Operator Terminal
                          </div>
                        </div>
                        <div
                          style={{
                            background: '#ffffff',
                            border: '1px dashed #cbd5e1',
                            borderRadius: '8px',
                            padding: '12px',
                            fontSize: '0.7rem'
                          }}
                        >
                          <div style={{ color: '#64748b' }}>Estimated Prep Time:</div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                            ~2 Minutes
                          </div>
                        </div>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
                          Show order number at counter
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Explanation Beside Phone */}
                <div style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'var(--bg-accent-light)',
                      color: 'var(--accent-primary)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      marginBottom: '10px'
                    }}
                  >
                    {activeStepTab === 1 && 'Step 1: Contactless Counter Engagement'}
                    {activeStepTab === 2 && 'Step 2: Transparent Digital Configuration'}
                    {activeStepTab === 3 && 'Step 3: Organized Operator Fulfillment'}
                  </div>
                  <h5 style={{ fontSize: '1.35rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                    {activeStepTab === 1 && 'Instant Shop Detection via Web QR'}
                    {activeStepTab === 2 && 'Clear, Error-Free Print Instructions'}
                    {activeStepTab === 3 && 'Streamlined Queue Token Generation'}
                  </h5>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                    {activeStepTab === 1 &&
                      'Customers do not need to install an app from the Play Store. Scanning the shop’s unique QR stand loads the lightweight browser interface directly, immediately linking the customer to the specific Xerox counter.'}
                    {activeStepTab === 2 &&
                      'No more shouting instructions across noisy shop floors or handing over pen drives. Choose exact page ranges, orientation, binding options, and color modes with upfront visual clarity.'}
                    {activeStepTab === 3 &&
                      'The request appears on the shopkeeper’s dashboard with all parameters pre-validated. Once printed, the customer simply collects the prepared documents and completes payment.'}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <Shield size={16} style={{ color: 'var(--accent-primary)' }} />
                    <span>User files are purged after job completion for privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BENEFITS SECTION */}
        <section className="section" id="benefits">
          <div className="container">
            <div className="section-header">
              <div className="section-pill">Value Proposition</div>
              <h2 className="section-title">
                Designed for Customers and Local Print Shops
              </h2>
              <p className="section-desc">
                A thoughtfully designed concept that creates value for everyday
                print buyers while supporting local Xerox entrepreneurs.
              </p>
            </div>

            <div className="benefits-grid">
              {/* Column 1: For Customers */}
              <div className="benefit-column">
                <div className="benefit-header">
                  <div className="benefit-icon-badge">
                    <Users size={22} />
                  </div>
                  <div>
                    <h3 className="benefit-heading">For Customers</h3>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      Students, Faculty &amp; Working Professionals
                    </span>
                  </div>
                </div>

                <ul className="benefit-list">
                  <li className="benefit-item">
                    <CheckCircle2 size={18} className="benefit-check" />
                    <span>A convenient way to submit print requests.</span>
                  </li>
                  <li className="benefit-item">
                    <CheckCircle2 size={18} className="benefit-check" />
                    <span>Less repetitive communication.</span>
                  </li>
                  <li className="benefit-item">
                    <CheckCircle2 size={18} className="benefit-check" />
                    <span>A simple mobile-friendly experience.</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: For Shop Owners */}
              <div className="benefit-column">
                <div className="benefit-header">
                  <div className="benefit-icon-badge">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className="benefit-heading">For Shop Owners</h3>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      Local Xerox Centers &amp; Print Businesses
                    </span>
                  </div>
                </div>

                <ul className="benefit-list">
                  <li className="benefit-item">
                    <CheckCircle2 size={18} className="benefit-check" />
                    <span>
                      Potential reduction in manual order handling.
                    </span>
                  </li>
                  <li className="benefit-item">
                    <CheckCircle2 size={18} className="benefit-check" />
                    <span>Better organization of print requests.</span>
                  </li>
                  <li className="benefit-item">
                    <CheckCircle2 size={18} className="benefit-check" />
                    <span>
                      An opportunity to adopt affordable digital technology.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ABOUT US SECTION */}
        <section className="section section-alt" id="about-us">
          <div className="container">
            <div className="section-header">
              <div className="section-pill">Our Student Team</div>
              <h2 className="section-title">
                Built by Students, Designed for Everyday Needs
              </h2>
            </div>

            <div className="about-card">
              <div className="about-intro-badge">
                <Building2 size={14} />
                <span>Sanjay Ghodawat Institute, Kolhapur</span>
              </div>
              <p className="about-text">
                PrintFlow is a student-led venture developed by a team of four
                third-year Computer Science Engineering students at Sanjay
                Ghodawat Institute, Kolhapur. We aim to use practical
                technology to simplify everyday printing and support local
                printing businesses.
              </p>
            </div>

            {/* Compact Team Cards with Initials */}
            <div className="team-grid">
              {/* Member 1 */}
              <div className="team-card">
                <div className="team-avatar" aria-label="Onkar Jadhavar initials">
                  OJ
                </div>
                <h4 className="team-name">Onkar Jadhavar</h4>
                <div className="team-role">Product Development</div>
                <div className="team-college">3rd Year CSE • SGI Kolhapur</div>
              </div>

              {/* Member 2 */}
              <div className="team-card">
                <div className="team-avatar" aria-label="Rohan Umbarepatil initials">
                  RU
                </div>
                <h4 className="team-name">Rohan Umbarepatil</h4>
                <div className="team-role">Finance &amp; Business Planning</div>
                <div className="team-college">3rd Year CSE • SGI Kolhapur</div>
              </div>

              {/* Member 3 */}
              <div className="team-card">
                <div className="team-avatar" aria-label="Shailesh Gaikawad initials">
                  SG
                </div>
                <h4 className="team-name">Shailesh Gaikawad</h4>
                <div className="team-role">Marketing &amp; Outreach</div>
                <div className="team-college">3rd Year CSE • SGI Kolhapur</div>
              </div>

              {/* Member 4 */}
              <div className="team-card">
                <div className="team-avatar" aria-label="Aashish Pawde initials">
                  AP
                </div>
                <h4 className="team-name">Aashish Pawde</h4>
                <div className="team-role">Research &amp; Documentation</div>
                <div className="team-college">3rd Year CSE • SGI Kolhapur</div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section className="section" id="contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-content">
                <div className="section-pill">Startup Feedback &amp; Outreach</div>
                <h2 className="section-title">Interested in PrintFlow?</h2>
                <p className="section-desc">
                  We are looking to connect with students and local Xerox shop
                  owners to understand their needs and improve our concept.
                </p>

                <div style={{ marginTop: '28px' }}>
                  {!contactOpen && (
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={() => setContactOpen(true)}
                    >
                      <Send size={18} />
                      <span>Get in Touch</span>
                    </button>
                  )}
                </div>

                <div className="contact-note">
                  Feedback from campus peers and local printing vendors helps us
                  shape the next iteration of the prototype.
                </div>
              </div>

              {/* Inline Form / Modal Dialog for Contact */}
              {contactOpen && (
                <div className="contact-form-box">
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
                    Share Your Feedback or Inquiry
                  </h4>

                  {contactSubmitted ? (
                    <div className="form-success-banner">
                      <CheckCircle2 size={20} />
                      <div>
                        Thank you for your message! Your feedback has been noted
                        for our academic concept evaluation.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-name">
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            className="form-input"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-role">
                            I am a...
                          </label>
                          <select
                            id="contact-role"
                            className="form-select"
                            value={formData.role}
                            onChange={(e) =>
                              setFormData({ ...formData, role: e.target.value })
                            }
                          >
                            <option value="Student">Student (College / School)</option>
                            <option value="Shop Owner">Local Xerox / Print Shop Owner</option>
                            <option value="Faculty">Faculty / Project Evaluator</option>
                            <option value="Professional">Working Professional</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="form-group full-width">
                          <label className="form-label" htmlFor="contact-msg">
                            Your Message or Suggestion *
                          </label>
                          <textarea
                            id="contact-msg"
                            required
                            rows={3}
                            placeholder="Tell us what printing challenges you face or how PrintFlow could work better..."
                            className="form-textarea"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <button type="submit" className="btn btn-primary">
                          <Send size={16} />
                          <span>Submit Inquiry</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setContactOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="form-placeholder-info">
                        <Info size={16} />
                        <span>
                          <strong>Contact Placeholder:</strong> Submissions in
                          this evaluation build are logged in-browser. Connect to
                          your verified team email address when publishing live.
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <Printer size={22} style={{ color: '#38bdf8' }} />
                <span>PrintFlow</span>
              </div>
              <p className="footer-tagline">
                PrintFlow — Smart Printing Concept
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>
                &ldquo;Making everyday printing simpler.&rdquo;
              </p>
              <p className="footer-college-tag">
                A student venture developed by third-year Computer Science
                Engineering students at Sanjay Ghodawat Institute, Kolhapur.
              </p>
            </div>

            <div className="footer-links-group">
              <div>
                <h4 className="footer-nav-title">Quick Links</h4>
                <ul className="footer-nav-list">
                  <li>
                    <a
                      href="#home"
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, 'home')}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#problem"
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, 'problem')}
                    >
                      The Challenge
                    </a>
                  </li>
                  <li>
                    <a
                      href="#solution"
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, 'solution')}
                    >
                      Solution
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, 'how-it-works')}
                    >
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="footer-nav-title">Organization</h4>
                <ul className="footer-nav-list">
                  <li>
                    <a
                      href="#benefits"
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, 'benefits')}
                    >
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about-us"
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, 'about-us')}
                    >
                      About Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, 'contact')}
                    >
                      Get in Touch
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} PrintFlow. Sanjay Ghodawat
              Institute, Kolhapur. Promotional landing page for college startup
              submission.
            </div>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={(e) => scrollToSection(e, 'home')}
              aria-label="Back to top"
            >
              <ChevronUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
