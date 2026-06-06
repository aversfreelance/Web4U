import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Check, Globe2, Server, ShieldCheck, Search, PenTool, Mail, Phone, MapPin, Star, Zap, Clock, Wrench, BarChart3, Menu, X, Sparkles, Rocket, MousePointerClick, Layers3, BadgePoundSterling, Gauge, LifeBuoy, LockKeyhole, MessageCircle } from 'lucide-react'
import './styles.css'

const nav = [
  ['Home','home'], ['Web Design','services'], ['Pricing','pricing'], ['Hosting','hosting'], ['SEO','seo'], ['Work','work'], ['Quote','quote']
]

function Logo({compact=false, dark=false}){
  return <div className={compact?'logo compact':'logo'} aria-label="Web4U Media logo">
    <div className="mark" aria-hidden="true"><span className="w">W</span><span className="four">4</span><span className="u">U</span></div>
    {!compact && <div className="word"><strong>WEB4U</strong><small>MEDIA LTD</small></div>}
  </div>
}

const packages = [
  {name:'Starter Website', price:'£349', note:'one-off build', text:'A sharp 1–3 page site for trades, sole traders and new local businesses.', items:['Modern responsive design','Contact / enquiry form','Basic local SEO setup','Google Analytics ready','Launch checklist included']},
  {name:'Business Website', price:'£649', note:'one-off build', text:'A stronger 5–7 page website for businesses that want to look established and win enquiries.', items:['Custom homepage layout','Service pages that sell','Copy polish included','Performance optimisation','Blog/news option'], featured:true},
  {name:'Growth Website', price:'£895+', note:'one-off build', text:'For businesses that need deeper content, conversion-focused pages or extra functionality.', items:['Up to 10 core pages','Advanced forms','Local landing pages','SEO content structure','Launch support & training']}
]

const care = [
  {name:'Essential Hosting', price:'£19/mo', kicker:'For simple brochure sites', items:['Fast managed hosting','SSL certificate','Monthly backup','Basic uptime checks','Email support']},
  {name:'Care Plan', price:'£39/mo', kicker:'Best for most small businesses', items:['Everything in Essential','Security monitoring','Up to 30 mins edits','Core updates','Priority support'], featured:true},
  {name:'Growth Support', price:'£79/mo', kicker:'For active websites', items:['Everything in Care Plan','1 hour content edits','Monthly SEO health check','Speed review','Quarterly strategy call']}
]

const services = [
  ['Website design', Globe2, 'Modern, colourful, mobile-first websites that make a small business look trustworthy from the first click.'],
  ['Hosting', Server, 'Reliable hosting with SSL, backups and performance checks — without the technical faff.'],
  ['Monthly maintenance', Wrench, 'Website edits, updates, monitoring and support on a predictable monthly plan.'],
  ['SEO foundations', Search, 'Local search structure, metadata, headings and content guidance for Somerset and UK searches.'],
  ['Content & copy', PenTool, 'Clear English copy that explains your service, builds confidence and encourages enquiries.'],
  ['Analytics', BarChart3, 'Simple tracking so you know what visitors click, which pages work and where enquiries come from.']
]

const examples = [
  ['Local trades website', 'A fast brochure site for plumbers, electricians, landscapers and builders with clear service pages and enquiry forms.'],
  ['Care & support provider', 'Accessible pages, reassuring copy and simple contact journeys for care-related services.'],
  ['Cafe or hospitality site', 'Colourful menus, opening times, Google Maps links and mobile-first calls to action.'],
  ['Consultant website', 'Professional profile, trust sections, pricing blocks and a quote request flow.']
]

function Header(){
  const [open,setOpen]=useState(false)
  return <header className="header">
    <a href="#home" className="brand"><Logo /></a>
    <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X size={22}/>:<Menu size={22}/>}</button>
    <nav className={open?'open':''}>{nav.map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
    <a className="navCta" href="#quote">Free quote</a>
  </header>
}

function Hero(){return <section id="home" className="hero section">
  <div className="orb orb1"/><div className="orb orb2"/><div className="orb orb3"/>
  <div className="heroText">
    <p className="eyebrow"><Sparkles size={16}/> Somerset web design • hosting • monthly care</p>
    <h1>Colourful, fast websites for small businesses that need more enquiries.</h1>
    <p className="lead">Web4U Media Ltd builds professional websites for local businesses across Somerset and the UK — with clear prices, modern design, reliable hosting and optional monthly support.</p>
    <div className="actions"><a className="btn primary" href="#quote">Get my free quote <ArrowRight size={19}/></a><a className="btn ghost" href="#pricing">View prices</a></div>
    <div className="trust"><span><Check/> No jargon</span><span><Check/> Mobile-first</span><span><Check/> Vercel-ready</span><span><Check/> You own your site</span></div>
  </div>
  <div className="heroShowcase">
    <div className="logoPanel"><Logo compact /><div className="pulse"></div></div>
    <div className="heroStats">
      <div><Rocket/><strong>Launch from £349</strong><span>One-off website builds</span></div>
      <div><LifeBuoy/><strong>Care from £19/mo</strong><span>Hosting & support</span></div>
      <div><MousePointerClick/><strong>Built to convert</strong><span>Clear calls to action</span></div>
    </div>
  </div>
</section>}

function Services(){return <section id="services" className="section services"><div className="sectionHead"><p className="eyebrow"><Layers3 size={16}/> Services</p><h2>Everything a small business website needs — designed, launched and looked after.</h2><p>From a first website to a full refresh, Web4U Media keeps things simple: good design, clear content, strong performance and support after launch.</p></div><div className="cards">{services.map(([t,Icon,d])=><div className="card" key={t}><div className="iconWrap"><Icon className="icon"/></div><h3>{t}</h3><p>{d}</p></div>)}</div></section>}

function Pricing(){return <section id="pricing" className="section pricing"><div className="sectionHead"><p className="eyebrow"><BadgePoundSterling size={16}/> Somerset-friendly pricing</p><h2>Professional websites without the heavy agency bill.</h2><p>Prices are intentionally positioned for small Somerset businesses that need to look credible online without paying premium agency rates.</p></div><div className="priceGrid">{packages.map(p=><PriceCard key={p.name} p={p}/>)}</div><div className="compare"><strong>Simple promise:</strong> no confusing bundles, no forced long-term contract, and no surprise charges. You get a clear written quote before work starts.</div></section>}
function PriceCard({p}){return <div className={p.featured?'price featured':'price'}>{p.featured&&<span className="badge">Best value</span>}<h3>{p.name}</h3><p>{p.text}</p><div className="amount"><strong>{p.price}</strong><span>{p.note}</span></div><ul>{p.items.map(i=><li key={i}><Check/> {i}</li>)}</ul><a className="btn full" href="#quote">Ask about this</a></div>}

function Hosting(){return <section id="hosting" className="section hosting"><div className="split"><div className="stickyText"><p className="eyebrow"><Server size={16}/> Hosting & monthly care</p><h2>Keep the site fast, secure and up to date.</h2><p>Build cost and monthly support are kept separate, so you can start lean and add care when you need it.</p><div className="featureList"><span><LockKeyhole/> SSL included</span><span><Gauge/> Performance checks</span><span><Clock/> Monthly monitoring</span><span><MessageCircle/> Friendly support</span></div></div><div className="careGrid">{care.map(p=><div className={p.featured?'care featured':'care'} key={p.name}><span className="kicker">{p.kicker}</span><h3>{p.name}</h3><div className="carePrice">{p.price}</div><ul>{p.items.map(i=><li key={i}><Check/> {i}</li>)}</ul></div>)}</div></div></section>}

function SEO(){return <section id="seo" className="section seo"><div className="sectionHead"><p className="eyebrow"><Search size={16}/> SEO</p><h2>Built for search engines, written for real customers.</h2><p>SEO should not feel mysterious. Every site starts with the basics that help Google understand your business and help customers trust you.</p></div><div className="seoBox"><div><h3>Included SEO foundations</h3><p>Page titles, meta descriptions, headings, alt text guidance, internal links and clean page structure.</p></div><div><h3>Local Somerset targeting</h3><p>Service pages can target Taunton, Bridgwater, Yeovil, Minehead, Weston-super-Mare and surrounding towns.</p></div><div><h3>Monthly SEO support</h3><p>Optional content updates, search reports, improvement recommendations and local landing pages.</p></div></div></section>}

function Work(){return <section id="work" className="section work"><div className="sectionHead"><p className="eyebrow"><Star size={16}/> References</p><h2>Example website styles ready for real clients.</h2><p>Replace these with live case studies after your first Web4U Media projects go online.</p></div><div className="refs">{examples.map(([r,t],i)=><div className="ref" key={r}><div className="mock"><span>{String(i+1).padStart(2,'0')}</span></div><div className="stars">{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor" size={15}/>)}</div><h3>{r}</h3><p>{t}</p></div>)}</div></section>}

function Quote(){return <section id="quote" className="section quote"><div className="quoteIntro"><p className="eyebrow"><Mail size={16}/> Online quote request</p><h2>Tell me what you need and I’ll price it clearly.</h2><p>This form opens your email app with the project details already filled in. Replace the email address in the code with your preferred Web4U Media inbox before launch.</p><div className="contact"><span><Mail/> hello@web4umedia.co.uk</span><span><MapPin/> Somerset & UK-wide</span><span><Phone/> Add your phone number</span></div></div><form className="form" onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const body=[...f.entries()].map(([k,v])=>`${k}: ${v}`).join('%0D%0A'); window.location.href=`mailto:hello@web4umedia.co.uk?subject=Website quote request&body=${body}`}}>
  <label>Name<input name="Name" required placeholder="Your name"/></label>
  <label>Business<input name="Business" placeholder="Business name"/></label>
  <label>Email<input name="Email" type="email" required placeholder="you@example.com"/></label>
  <label>Location<input name="Location" placeholder="Taunton, Bridgwater, Yeovil..."/></label>
  <label>Service<select name="Service"><option>New website</option><option>Website redesign</option><option>Hosting only</option><option>Monthly maintenance</option><option>SEO support</option></select></label>
  <label>Budget<select name="Budget"><option>Under £500</option><option>£500 - £1,000</option><option>£1,000 - £2,000</option><option>Monthly plan preferred</option></select></label>
  <label className="wide">Project details<textarea name="Details" rows="5" placeholder="What do you need the website to do?"></textarea></label>
  <button className="btn primary wide" type="submit">Send quote request <ArrowRight size={18}/></button></form></section>}

function Footer(){return <footer><div><Logo/><p>Affordable websites, hosting and care plans for Somerset small businesses.</p></div><div className="footerLinks"><a href="#pricing">Pricing</a><a href="#hosting">Hosting</a><a href="#quote">Quote</a></div><p className="tiny">© {new Date().getFullYear()} Web4U Media Ltd. Replace placeholder contact details before launch.</p></footer>}
function App(){return <><Header/><main><Hero/><Services/><Pricing/><Hosting/><SEO/><Work/><Quote/></main><Footer/></>}

createRoot(document.getElementById('root')).render(<App />)
