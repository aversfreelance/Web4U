import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, Globe2, ShieldCheck, Server, Wrench, Gauge, Mail, Menu, X, Sparkles, Search, LifeBuoy, Rocket } from 'lucide-react';
import './styles.css';

const plans = [
  {
    name: 'Starter Website',
    price: '£349',
    sub: 'one-off build',
    text: 'A clean, mobile-ready website for a new business, sole trader or local service.',
    features: ['Up to 4 pages', 'Contact form', 'Basic SEO setup', '1 year SSL included', 'Launch support'],
    badge: 'Best for starting out'
  },
  {
    name: 'Business Website',
    price: '£599',
    sub: 'one-off build',
    text: 'A stronger website with more pages, clearer calls-to-action and better local visibility.',
    features: ['Up to 8 pages', 'Local SEO structure', 'Google Business links', 'Speed-focused build', 'Analytics setup'],
    badge: 'Most popular'
  },
  {
    name: 'Growth Website',
    price: '£899',
    sub: 'one-off build',
    text: 'For businesses that need a more persuasive online presence and room to grow.',
    features: ['Up to 12 pages', 'Landing page sections', 'Blog/news area', 'Advanced forms', 'Conversion-focused copy'],
    badge: 'More impact'
  }
];

const care = [
  ['Hosting', '£9/mo', 'Fast hosting, SSL, backups and technical setup.'],
  ['Care Plan', '£29/mo', 'Updates, security checks, uptime checks and small content edits.'],
  ['Care Plus', '£59/mo', 'Priority support, monthly improvements and extra edit time.']
];

const work = [
  'Websites for trades, local shops, cafés, care providers and small companies',
  'Simple hosting and domain help without jargon',
  'Monthly website care so your site does not get abandoned after launch',
  'Content updates, landing pages, speed checks and practical SEO foundations'
];

function Logo({ compact = false }) {
  return <img className={compact ? 'logo compact-logo' : 'logo'} src="/assets/web4u-media-logo.svg" alt="Web4U Media logo" />;
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand"><img src="/assets/w4u-icon.svg" alt="W4U" /><span>Web4U Media Ltd</span></a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
          <div className={open ? 'nav-links open' : 'nav-links'}>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#process">Process</a>
            <a href="#contact" className="nav-cta">Get a quote</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={18}/> Websites, hosting & monthly care</p>
            <h1>Affordable websites that look professional and keep working after launch.</h1>
            <p className="lead">Web4U Media Ltd builds modern, colourful, mobile-friendly websites for small businesses — with simple hosting and optional monthly management at fair, transparent prices.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#pricing">See packages <ArrowRight size={18}/></a>
              <a className="btn secondary" href="#contact">Ask for a free quote</a>
            </div>
            <div className="trust-row">
              <span><Check size={16}/> No confusing tech talk</span>
              <span><Check size={16}/> Clear monthly options</span>
              <span><Check size={16}/> Built for local businesses</span>
            </div>
          </div>
          <div className="hero-card">
            <Logo />
            <div className="mini-panel">
              <div><strong>From £349</strong><span>website build</span></div>
              <div><strong>£9/mo</strong><span>hosting</span></div>
              <div><strong>£29/mo</strong><span>care plan</span></div>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="container strip-inner">
            <span>Responsive design</span><span>Fast hosting</span><span>SEO foundations</span><span>Monthly updates</span><span>Content changes</span>
          </div>
        </section>

        <section id="services" className="section container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Everything a small business needs to get online properly.</h2>
          </div>
          <div className="service-grid">
            <Service icon={<Globe2 />} title="Website design" text="Clean, modern websites designed to explain what you do, build trust and turn visitors into enquiries." />
            <Service icon={<Server />} title="Hosting & setup" text="Domain help, SSL, email guidance, launch checks and dependable hosting without technical headaches." />
            <Service icon={<Wrench />} title="Monthly management" text="Keep your website updated, secure and fresh with a simple monthly care plan." />
            <Service icon={<Search />} title="Local visibility" text="Basic SEO structure, page titles, local keywords and Google-friendly content foundations." />
            <Service icon={<Gauge />} title="Performance" text="Lightweight builds, image optimisation and clear layouts that work well on mobile." />
            <Service icon={<LifeBuoy />} title="Rescue & refresh" text="Already have a website? We can tidy, improve, move or maintain it." />
          </div>
        </section>

        <section className="section split container">
          <div className="panel bright">
            <h2>Designed to sell your service, not just sit online.</h2>
            <p>Your website should tell people what you offer, why they should trust you and how to contact you — quickly. We build around that simple goal.</p>
            <ul>
              {work.map((item) => <li key={item}><Check size={18}/>{item}</li>)}
            </ul>
          </div>
          <div className="panel dark">
            <Rocket size={42}/>
            <h3>Launch-ready structure</h3>
            <p>Every site includes a clear homepage, service sections, contact route, mobile layout, SEO basics and a handover that makes sense.</p>
            <div className="score"><span>Fast</span><span>Clear</span><span>Managed</span></div>
          </div>
        </section>

        <section id="pricing" className="section container">
          <div className="section-head pricing-head">
            <div>
              <p className="eyebrow">Simple pricing</p>
              <h2>Built to sit below many local agency prices.</h2>
            </div>
            <p className="muted">Prices are starting points. Final quote depends on pages, content, features and whether you already have a domain or logo.</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => <Plan key={plan.name} {...plan} />)}
          </div>
          <div className="care-grid">
            {care.map(([name, price, text]) => <div className="care-card" key={name}><h3>{name}</h3><strong>{price}</strong><p>{text}</p></div>)}
          </div>
        </section>

        <section id="process" className="section container process">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>A straightforward process from idea to live website.</h2>
          </div>
          <div className="steps">
            <Step n="01" title="Quick discovery" text="We discuss your business, services, customers and what the site needs to achieve." />
            <Step n="02" title="Design & build" text="Your site is built with clear sections, strong calls-to-action and mobile-first layouts." />
            <Step n="03" title="Launch & support" text="We publish the website, check the basics and offer hosting or monthly care if needed." />
          </div>
        </section>

        <section id="contact" className="cta-section">
          <div className="container cta-card">
            <div>
              <p className="eyebrow">Ready to look better online?</p>
              <h2>Tell us what you need and get a clear quote.</h2>
              <p>No pressure. No jargon. Just practical advice and a sensible price.</p>
            </div>
            <div className="contact-box">
              <a className="btn primary" href="mailto:avers.freelance@gmail.com?subject=Website%20quote%20request%20-%20Web4U%20Media">Email Web4U Media <Mail size={18}/></a>
              <p className="small">Replace this email in <code>src/main.jsx</code> with your business address when ready.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#top"><img src="/assets/w4u-icon.svg" alt="W4U"/> Web4U Media Ltd</a>
          <p>Website design, hosting and monthly website care for small businesses.</p>
        </div>
      </footer>
    </div>
  );
}

function Service({ icon, title, text }) {
  return <article className="service-card"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}
function Plan({ name, price, sub, text, features, badge }) {
  return <article className="plan"><span className="badge">{badge}</span><h3>{name}</h3><div className="price"><strong>{price}</strong><span>{sub}</span></div><p>{text}</p><ul>{features.map(f => <li key={f}><Check size={17}/>{f}</li>)}</ul><a className="btn plan-btn" href="#contact">Request this</a></article>;
}
function Step({ n, title, text }) {
  return <article className="step"><span>{n}</span><h3>{title}</h3><p>{text}</p></article>;
}

createRoot(document.getElementById('root')).render(<App />);
