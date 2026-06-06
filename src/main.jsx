import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronDown, Code2, Globe2, Layers3, LifeBuoy, Menu, MousePointer2, Palette, Search, Server, ShieldCheck, Sparkles, Star, X, Zap } from 'lucide-react';
import './styles.css';

const services = [
  { icon: Palette, title: 'Custom Web Design', text: 'Distinctive, colourful, mobile-first websites designed around your business, not a generic template.' },
  { icon: Code2, title: 'Website Development', text: 'Fast React/Vite, WordPress or lightweight static builds that are easy to publish and maintain.' },
  { icon: Server, title: 'Hosting Setup', text: 'Domain, DNS, email routing, SSL, Vercel/Netlify hosting and performance-friendly deployment.' },
  { icon: LifeBuoy, title: 'Monthly Website Care', text: 'Updates, backups, content edits, uptime checks and small monthly improvements without drama.' },
  { icon: Search, title: 'Local SEO', text: 'Somerset-focused pages, metadata, search-friendly structure and Google Business Profile support.' },
  { icon: Layers3, title: 'Content & Online Media', text: 'Landing pages, article templates, news sections, campaign pages and digital publishing support.' },
];

const packages = [
  { name: 'Start', price: '£299+', strap: 'One-page launch site', items: ['Single-page website', 'Mobile-first design', 'Basic SEO setup', 'Contact form', 'Vercel deployment support'] },
  { name: 'Business', price: '£549+', strap: 'Best for local firms', featured: true, items: ['Up to 5 core pages', 'Custom colourful design', 'Service pages', 'Quote form', 'Analytics & SEO basics', 'GitHub + Vercel ready'] },
  { name: 'Pro', price: '£899+', strap: 'For growth & campaigns', items: ['6–10 pages', 'Blog/news structure', 'Portfolio/case studies', 'Advanced enquiry form', 'Technical SEO pass', 'Launch support'] },
];

const hosting = [
  { name: 'Hosting Setup', price: '£49 one-off', text: 'Vercel/Netlify setup, domain connection, SSL and launch checklist.' },
  { name: 'Managed Hosting', price: '£12/mo', text: 'Hosting monitoring, SSL checks and light technical support.' },
  { name: 'Business Hosting Care', price: '£25/mo', text: 'Priority support, monthly checks and small fixes included.' },
];

const care = [
  { name: 'Essential Care', price: '£39/mo', items: ['Uptime checks', 'Security review', '1 small content update', 'Monthly health report'] },
  { name: 'Growth Care', price: '£79/mo', items: ['Everything in Essential', 'Up to 3 content updates', 'SEO tune-up', 'Performance check'] },
  { name: 'Media Care', price: '£149/mo', items: ['Everything in Growth', 'News/blog publishing support', 'Campaign landing page edits', 'Priority turnaround'] },
];

const work = [
  ['Local Trades Website', 'Fast service website with clear calls-to-action and quote form.'],
  ['County News Portal', 'Online media structure with categories, article cards and newsletter CTA.'],
  ['Care Provider Site', 'Warm, accessible website for service information and recruitment.'],
  ['Restaurant Refresh', 'Colourful mobile-first pages for menu, bookings and local SEO.'],
  ['Startup Landing Page', 'Bold launch page built for ads, enquiries and fast deployment.'],
  ['Community Project', 'Low-cost site with updates, events and simple admin workflow.'],
];

const process = [
  ['Discover', 'We define the offer, audience, pages and search goals.'],
  ['Design', 'You get a striking visual direction and content structure.'],
  ['Build', 'The site is coded, optimised and tested on mobile and desktop.'],
  ['Launch', 'DNS, hosting, analytics, forms and post-launch checks are handled.'],
];

function Logo({ small=false }) {
  return <div className={`brand ${small ? 'small' : ''}`} aria-label="Web4U Media logo">
    <div className="brandTop"><span className="w">W</span><span className="fourBox">4</span><span className="u">U</span></div>
    {!small && <div className="brandMedia">MEDIA</div>}
  </div>
}

function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [quoteOpen,setQuoteOpen]=useState(false);
  const [slide,setSlide]=useState(0);
  const slides = useMemo(()=>[
    ['Websites that look expensive, without agency-sized invoices.', 'Design, build, hosting and monthly care for Somerset businesses.'],
    ['Launch faster. Rank better. Look sharper.', 'A complete local web service from domain to SEO-ready pages.'],
    ['Your digital shopfront should sell before you say a word.', 'Colour, motion, clarity and strong calls-to-action built in.'],
  ],[]);
  useEffect(()=>{ const t=setInterval(()=>setSlide(s=>(s+1)%slides.length), 4500); return()=>clearInterval(t);},[slides.length]);
  useEffect(()=>{ document.body.classList.toggle('modal-open', quoteOpen || menuOpen); },[quoteOpen, menuOpen]);

  const nav = ['services','work','pricing','seo','process','quote'];
  const jump = id => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); };
  return <>
    <header className="topbar">
      <button className="logoBtn" onClick={()=>jump('home')}><Logo small/></button>
      <nav className="desktopNav">{nav.map(n=><button key={n} onClick={()=> n==='quote'?setQuoteOpen(true):jump(n)}>{n}</button>)}</nav>
      <button className="quoteTop" onClick={()=>setQuoteOpen(true)}>Get a quote <ArrowRight size={18}/></button>
      <button className="hamb" onClick={()=>setMenuOpen(true)}><Menu/></button>
    </header>

    {menuOpen && <aside className="drawer"><button className="close" onClick={()=>setMenuOpen(false)}><X/></button><Logo/>{nav.map(n=><button key={n} onClick={()=> n==='quote'?setQuoteOpen(true):jump(n)}>{n}</button>)}</aside>}

    <main>
      <section className="hero" id="home">
        <div className="heroBg"></div>
        <div className="heroCopy">
          <p className="eyebrow"><Sparkles size={18}/> Somerset web design, hosting & care</p>
          <h1>{slides[slide][0]}</h1>
          <p className="lead">{slides[slide][1]}</p>
          <div className="heroActions"><button className="primary" onClick={()=>setQuoteOpen(true)}>Start your website <ArrowRight/></button><button className="secondary" onClick={()=>jump('pricing')}>View prices</button></div>
          <div className="trust"><span><Star/> Local UK service</span><span><ShieldCheck/> Secure setup</span><span><Zap/> Fast delivery</span></div>
        </div>
        <div className="heroCard">
          <Logo/>
          <div className="screenMock"><div></div><div></div><div></div><b>Design + Hosting + Care</b><span>One team, one clear price.</span></div>
        </div>
      </section>

      <section className="strip"><span>Web design</span><span>Hosting</span><span>SEO</span><span>Maintenance</span><span>Online media</span><span>Quote forms</span></section>

      <section className="section" id="services"><div className="sectionHead"><p>Featured services</p><h2>A proper digital service, not just “a website”.</h2></div><div className="grid services">{services.map(({icon:Icon,title,text})=><article className="service" key={title}><Icon/><h3>{title}</h3><p>{text}</p><a onClick={()=>setQuoteOpen(true)}>Discuss this <ArrowRight size={16}/></a></article>)}</div></section>

      <section className="darkBand" id="work"><div><p className="eyebrow">Portfolio style</p><h2>Built to look like a serious agency — priced for local businesses.</h2></div><div className="workGrid">{work.map((w,i)=><article key={w[0]} className="workCard"><div className="workVisual"><span>{String(i+1).padStart(2,'0')}</span></div><h3>{w[0]}</h3><p>{w[1]}</p></article>)}</div></section>

      <section className="section priceSection" id="pricing"><div className="sectionHead"><p>Somerset-friendly pricing</p><h2>Clear starting prices, positioned below many traditional agency quotes.</h2></div><div className="priceGrid">{packages.map(p=><article className={`price ${p.featured?'featured':''}`} key={p.name}>{p.featured&&<span className="badge">Most popular</span>}<h3>{p.name}</h3><p>{p.strap}</p><strong>{p.price}</strong>{p.items.map(x=><span className="check" key={x}><Check/> {x}</span>)}<button onClick={()=>setQuoteOpen(true)}>Request quote</button></article>)}</div></section>

      <section className="split" id="hosting"><div><p className="eyebrow"><Server/> Hosting options</p><h2>Hosting that does not leave you alone after launch.</h2><p>From simple Vercel deployment to managed monthly support, the aim is simple: a website that stays live, loads quickly and is easy to improve.</p></div><div className="miniCards">{hosting.map(h=><article key={h.name}><h3>{h.name}</h3><b>{h.price}</b><p>{h.text}</p></article>)}</div></section>

      <section className="section care"><div className="sectionHead"><p>Monthly operation</p><h2>Website care plans</h2></div><div className="careGrid">{care.map(c=><article key={c.name}><h3>{c.name}</h3><strong>{c.price}</strong>{c.items.map(i=><span key={i}><Check/> {i}</span>)}</article>)}</div></section>

      <section className="seo" id="seo"><div className="seoPanel"><Search size={46}/><h2>SEO foundations included</h2><p>Every site is planned around search intent, page speed, metadata, mobile layout and conversion. For Somerset businesses, that means location-aware copy, clear service pages and calls-to-action that help visitors enquire.</p><div className="seoTags"><span>Local keywords</span><span>Metadata</span><span>Schema-ready structure</span><span>Performance</span><span>Analytics</span></div></div></section>

      <section className="section process" id="process"><div className="sectionHead"><p>Process</p><h2>Simple, professional, no mystery.</h2></div><div className="processLine">{process.map((p,i)=><article key={p[0]}><span>{i+1}</span><h3>{p[0]}</h3><p>{p[1]}</p></article>)}</div></section>

      <section className="testimonials"><h2>What clients should feel</h2><div className="quoteCards"><blockquote>“It finally looks like a real business. Clear, modern and easy to use.”</blockquote><blockquote>“The price was sensible and everything was explained in plain English.”</blockquote><blockquote>“Fast launch, good advice and no tech nonsense.”</blockquote></div></section>

      <section className="cta" id="quote"><Globe2/><h2>Ready to make your business look bigger online?</h2><p>Tell Web4U Media what you need and get a practical quote.</p><button onClick={()=>setQuoteOpen(true)}>Open quote form <ArrowRight/></button></section>
    </main>

    <footer><Logo small/><p>Web4U Media Ltd — Web design, hosting, SEO and website care for Somerset and UK small businesses.</p><button onClick={()=>setQuoteOpen(true)}>Get a quote</button></footer>

    {quoteOpen && <div className="modal"><div className="modalBox"><button className="close" onClick={()=>setQuoteOpen(false)}><X/></button><h2>Request a quote</h2><p>Send this form to your business email provider later, or connect it with Formspree, Netlify Forms or your own backend.</p><form onSubmit={(e)=>{e.preventDefault(); alert('Demo form only. Connect it to Formspree/Netlify or your email service.');}}><label>Name<input required placeholder="Your name"/></label><label>Email<input type="email" required placeholder="you@example.co.uk"/></label><label>Service<select><option>New website</option><option>Hosting</option><option>Monthly care</option><option>SEO</option><option>Website refresh</option></select></label><label>Budget<select><option>Under £500</option><option>£500–£900</option><option>£900–£1,500</option><option>£1,500+</option></select></label><label>Project details<textarea rows="5" placeholder="Tell me what you need..."></textarea></label><button className="primary">Send enquiry <ArrowRight/></button></form></div></div>}
  </>
}

createRoot(document.getElementById('root')).render(<App />);
