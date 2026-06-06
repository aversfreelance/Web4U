import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronRight, Globe2, LineChart, Lock, Mail, Menu, MonitorSmartphone, Rocket, Search, Server, ShieldCheck, Sparkles, Star, Wrench, X } from 'lucide-react';
import './styles.css';

const services = [
  { icon: <MonitorSmartphone />, title: 'Custom Web Design', text: 'Modern, mobile-first websites designed to make your business look established, trustworthy and easy to contact.' },
  { icon: <Server />, title: 'Fast UK Hosting', text: 'Managed hosting on reliable infrastructure, SSL included, performance tuned and monitored for peace of mind.' },
  { icon: <Wrench />, title: 'Monthly Care Plans', text: 'Updates, small content changes, backups, uptime checks and technical support without surprise invoices.' },
  { icon: <Search />, title: 'Local SEO', text: 'Google-friendly structure, metadata, speed, Google Business Profile support and content built around Somerset searches.' },
  { icon: <Rocket />, title: 'Landing Pages', text: 'Campaign-ready pages for ads, offers and lead capture with persuasive copy and simple quote journeys.' },
  { icon: <Lock />, title: 'Security & Maintenance', text: 'SSL, backups, plugin care where needed, spam protection and regular health checks for business websites.' }
];

const packages = [
  { name: 'Starter Website', price: 'from £299', tag: 'Best for new businesses', items: ['1–3 page professional website', 'Mobile responsive design', 'Contact form', 'Basic SEO setup', 'Launch support'] },
  { name: 'Business Website', price: 'from £549', tag: 'Most popular', items: ['Up to 6 pages', 'Custom design sections', 'Service pages & FAQs', 'Google Analytics ready', 'SEO page structure'] },
  { name: 'Growth Website', price: 'from £899', tag: 'For serious lead generation', items: ['Up to 10 pages', 'Advanced quote form', 'Blog/news ready', 'Local SEO foundations', 'Conversion-focused copy'] }
];

const hosting = [
  { name: 'Hosting Lite', price: '£9/mo', items: ['SSL certificate', 'Secure UK/EU hosting', 'Email support', 'Monthly uptime check'] },
  { name: 'Managed Hosting', price: '£19/mo', items: ['Everything in Lite', 'Backups', 'Performance checks', 'Minor technical fixes'] },
  { name: 'Care & Growth', price: '£49/mo', items: ['Hosting included', 'Monthly updates', 'Small content changes', 'SEO health checks'] }
];

const portfolio = [
  ['Local Trades', 'Fast brochure site with quote form and service areas.'],
  ['Care Provider', 'Accessible website structure for services, referrals and recruitment.'],
  ['Cafe / Takeaway', 'Menu-led mobile design with Google Maps and click-to-call.'],
  ['Consultant', 'Premium personal-brand website with SEO landing pages.'],
  ['Community Project', 'News-ready layout with simple content publishing.'],
  ['Property Service', 'Lead generation site for local searches and enquiries.']
];

function Logo({ small=false }) {
  return <div className={`logo ${small ? 'small' : ''}`} aria-label="Web4U Media logo">
    <div className="logoTop"><span className="w">W</span><span className="four">4</span><span className="u">U</span></div>
    {!small && <div className="logoMedia">MEDIA</div>}
  </div>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [quote, setQuote] = useState({ budget: '£500–£1,000', service: 'New website' });
  const estimate = useMemo(() => {
    if (quote.service === 'Hosting only') return 'Likely from £9–£19/month';
    if (quote.service === 'Monthly management') return 'Likely from £29–£49/month';
    if (quote.budget === 'Under £500') return 'Starter website from £299';
    if (quote.budget === '£500–£1,000') return 'Business website from £549';
    return 'Growth website from £899';
  }, [quote]);

  const nav = ['Services','Prices','SEO','Work','Quote','Contact'];
  return <>
    <header className="siteHeader">
      <a className="brand" href="#top"><Logo small /><span>Web4U Media</span></a>
      <nav className="desktopNav">{nav.map(n => <a href={`#${n.toLowerCase()}`} key={n}>{n}</a>)}<a className="navCta" href="#quote">Get a quote</a></nav>
      <button className="menuBtn" onClick={()=>setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </header>
    {menu && <div className="mobileNav">{nav.map(n => <a onClick={()=>setMenu(false)} href={`#${n.toLowerCase()}`} key={n}>{n}</a>)}</div>}

    <main id="top">
      <section className="hero">
        <div className="heroGlow one"></div><div className="heroGlow two"></div>
        <div className="heroText">
          <p className="eyebrow"><Sparkles size={18}/> Somerset web design, hosting & website care</p>
          <h1>Websites that look sharp, load fast and bring in enquiries.</h1>
          <p className="lead">Web4U Media Ltd builds colourful, modern business websites for Somerset and UK clients — with hosting, SEO foundations and optional monthly management included.</p>
          <div className="heroActions"><a className="primaryBtn" href="#quote">Start your quote <ArrowRight size={18}/></a><a className="secondaryBtn" href="#prices">View prices</a></div>
          <div className="trust"><span><Star/> Competitive Somerset pricing</span><span><ShieldCheck/> SSL & backups</span><span><LineChart/> SEO-ready structure</span></div>
        </div>
        <div className="heroCard"><Logo/><div className="miniStats"><div><strong>£299+</strong><span>website builds</span></div><div><strong>£9/mo</strong><span>hosting</span></div><div><strong>£49/mo</strong><span>care plan</span></div></div></div>
      </section>

      <section className="marquee"><span>Web design</span><span>Hosting</span><span>SEO</span><span>Maintenance</span><span>Landing pages</span><span>Local business websites</span></section>

      <section id="services" className="section darkPanel">
        <div className="sectionHead"><p className="eyebrow">Featured services</p><h2>A complete website service, not just a pretty homepage.</h2><p>Inspired by top agency layouts with clear service cards, portfolio proof and conversion-focused quote routes.</p></div>
        <div className="serviceGrid">{services.map((s,i)=><article className="serviceCard" key={s.title}><div className="iconWrap">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><span>0{i+1}</span></article>)}</div>
      </section>

      <section id="prices" className="section priceSection">
        <div className="sectionHead"><p className="eyebrow">Somerset-friendly pricing</p><h2>Professional websites without London agency pricing.</h2><p>Simple starting prices for small businesses. Final quote depends on pages, content, integrations and urgency.</p></div>
        <div className="pricingGrid">{packages.map((p,i)=><article className={`priceCard ${i===1?'featured':''}`} key={p.name}><div className="tag">{p.tag}</div><h3>{p.name}</h3><div className="price">{p.price}</div>{p.items.map(it=><p className="tick" key={it}><Check size={16}/>{it}</p>)}<a href="#quote">Request this package <ChevronRight size={16}/></a></article>)}</div>
      </section>

      <section className="section hostingSection">
        <div className="split"><div><p className="eyebrow">Hosting & monthly care</p><h2>Keep your website online, updated and looked after.</h2><p>Choose hosting only, or a monthly website care plan for small changes, updates and support.</p></div><div className="hostingGrid">{hosting.map(h=><article key={h.name}><h3>{h.name}</h3><strong>{h.price}</strong>{h.items.map(x=><p key={x}><Check size={15}/>{x}</p>)}</article>)}</div></div>
      </section>

      <section id="seo" className="section seoPanel">
        <div className="seoText"><p className="eyebrow"><Globe2 size={18}/> Local SEO</p><h2>Built for customers searching in Somerset.</h2><p>Your website should be more than a digital business card. Every build includes sensible page titles, fast loading, mobile layout, service-area copy and Google-friendly structure.</p></div>
        <div className="seoList"><div>Google Business Profile guidance</div><div>Service pages for local searches</div><div>Metadata and clean headings</div><div>Speed and mobile checks</div></div>
      </section>

      <section id="work" className="section portfolioSection">
        <div className="sectionHead"><p className="eyebrow">References / sample sectors</p><h2>Designed for real local businesses.</h2><p>Example project types Web4U Media can deliver for trades, care, hospitality, consultants and community organisations.</p></div>
        <div className="portfolioGrid">{portfolio.map((p,i)=><article key={p[0]}><div className="screenMock"><span></span><span></span><span></span></div><h3>{p[0]}</h3><p>{p[1]}</p></article>)}</div>
      </section>

      <section className="section processSection">
        <div className="sectionHead"><p className="eyebrow">Process</p><h2>Clear, quick and practical.</h2></div>
        <div className="steps"><div><b>01</b><h3>Discovery</h3><p>We define your services, audience and best pages.</p></div><div><b>02</b><h3>Design</h3><p>You get a modern visual direction and clear content flow.</p></div><div><b>03</b><h3>Build</h3><p>Responsive, SEO-ready pages built for Vercel or managed hosting.</p></div><div><b>04</b><h3>Launch & care</h3><p>DNS, SSL, analytics and monthly support if required.</p></div></div>
      </section>

      <section id="quote" className="section quoteSection">
        <div><p className="eyebrow">Online quote request</p><h2>Tell us what you need.</h2><p>Use this form layout on your site. For live submissions, connect it to Formspree, Netlify Forms, Basin or your own backend.</p><div className="estimate">Estimated starting point: <strong>{estimate}</strong></div></div>
        <form className="quoteForm" onSubmit={e=>e.preventDefault()}>
          <label>Name<input placeholder="Your name" /></label><label>Email<input placeholder="you@example.co.uk" /></label>
          <label>Service<select value={quote.service} onChange={e=>setQuote({...quote, service:e.target.value})}><option>New website</option><option>Website redesign</option><option>Hosting only</option><option>Monthly management</option><option>SEO support</option></select></label>
          <label>Budget<select value={quote.budget} onChange={e=>setQuote({...quote, budget:e.target.value})}><option>Under £500</option><option>£500–£1,000</option><option>£1,000+</option></select></label>
          <label className="full">Project details<textarea placeholder="Tell us about your business, pages needed and timescale..."></textarea></label>
          <button className="primaryBtn">Prepare quote request <ArrowRight size={18}/></button>
        </form>
      </section>
    </main>

    <footer id="contact"><div><Logo small/><p>Web4U Media Ltd — web design, hosting, SEO and website care for Somerset and UK small businesses.</p></div><div><h3>Contact</h3><p><Mail size={16}/> hello@web4umedia.co.uk</p><p>Somerset & remote UK projects</p></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />);
