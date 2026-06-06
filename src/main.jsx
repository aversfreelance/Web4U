import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Check, Globe2, Server, ShieldCheck, Search, PenTool, Mail, Phone, MapPin, Star, Zap, Clock, Wrench, BarChart3 } from 'lucide-react'
import './styles.css'

const nav = [
  ['Home','home'], ['Services','services'], ['Pricing','pricing'], ['Hosting','hosting'], ['SEO','seo'], ['Work','work'], ['Quote','quote']
]

function Logo({compact=false}){
  return <div className={compact?'logo compact':'logo'} aria-label="Web4U Media logo">
    <div className="mark"><span className="w">W</span><span className="four">4</span><span className="u">U</span></div>
    {!compact && <div className="word"><strong>WEB4U</strong><small>MEDIA LTD</small></div>}
  </div>
}

const packages = [
  {name:'Starter Site', price:'£395', note:'one-off', text:'A clean 1–3 page website for sole traders, local services and start-ups.', items:['Mobile-first design','Contact form','Basic on-page SEO','Google-ready structure','1 month free care']},
  {name:'Business Site', price:'£695', note:'one-off', text:'A polished 5–7 page website for established small businesses.', items:['Custom layout','Services pages','Speed optimisation','Local SEO basics','Blog/news option'], featured:true},
  {name:'Growth Site', price:'£995+', note:'one-off', text:'For businesses that need stronger content, conversion and search visibility.', items:['Up to 10 pages','Copywriting support','Advanced contact forms','Analytics setup','Launch support']}
]

const care = [
  {name:'Essential Care', price:'£29/mo', items:['Managed hosting','SSL certificate','Monthly backups','Security monitoring','Small text updates']},
  {name:'Business Care', price:'£49/mo', items:['Everything in Essential','Up to 30 mins updates','Performance checks','Plugin/core updates','Priority email support'], featured:true},
  {name:'Growth Care', price:'£89/mo', items:['Everything in Business','1 hour updates','Monthly SEO checks','Content upload support','Quarterly review call']}
]

function Header(){
  const [open,setOpen]=useState(false)
  return <header className="header">
    <a href="#home"><Logo /></a>
    <button className="menu" onClick={()=>setOpen(!open)}>Menu</button>
    <nav className={open?'open':''}>{nav.map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
    <a className="navCta" href="#quote">Get a quote</a>
  </header>
}

function Hero(){return <section id="home" className="hero section">
  <div className="heroText">
    <p className="eyebrow">Somerset web design • hosting • website care</p>
    <h1>Websites that look sharp, load fast and help local businesses win more enquiries.</h1>
    <p className="lead">Web4U Media Ltd builds affordable, professional websites for small businesses across Somerset and the UK — with clear pricing, reliable hosting and optional monthly support.</p>
    <div className="actions"><a className="btn primary" href="#quote">Request a quote <ArrowRight size={18}/></a><a className="btn" href="#pricing">View packages</a></div>
    <div className="trust"><span><Check/> No agency jargon</span><span><Check/> Mobile friendly</span><span><Check/> You own your site</span></div>
  </div>
  <div className="heroCard">
    <Logo compact />
    <h2>Launch from £395</h2>
    <p>Designed for trades, cafés, care providers, consultants, local shops and community businesses.</p>
    <div className="miniGrid"><div><strong>Fast</strong><span>Vercel-ready</span></div><div><strong>Secure</strong><span>SSL + backups</span></div><div><strong>Local</strong><span>Somerset focus</span></div><div><strong>Flexible</strong><span>Care plans</span></div></div>
  </div>
</section>}

function Services(){const s=[['Website design',Globe2,'Modern responsive websites, landing pages and brochure sites that make your business look credible.'],['Hosting',Server,'Fast, secure hosting with SSL, backups and performance checks, without technical headaches.'],['Monthly maintenance',Wrench,'Updates, edits, monitoring and support on a simple monthly plan.'],['SEO foundations',Search,'Local search structure, page titles, metadata and content guidance for Somerset businesses.'],['Content & copy',PenTool,'Clear, natural English content that explains what you do and encourages enquiries.'],['Analytics',BarChart3,'Basic traffic tracking so you can see what is working after launch.']]
return <section id="services" className="section"><div className="sectionHead"><p className="eyebrow">What we do</p><h2>A complete web presence without the big-agency price tag.</h2></div><div className="cards">{s.map(([t,Icon,d])=><div className="card" key={t}><Icon className="icon"/><h3>{t}</h3><p>{d}</p></div>)}</div></section>}

function Pricing(){return <section id="pricing" className="section alt"><div className="sectionHead"><p className="eyebrow">Somerset-friendly pricing</p><h2>Clear prices, pitched below many local agency packages.</h2><p>Starter pricing is intentionally competitive for small businesses that need a professional site without a large upfront bill.</p></div><div className="priceGrid">{packages.map(p=><PriceCard key={p.name} p={p}/>)}</div><p className="smallNote">Prices are guide prices. Final quotes depend on pages, content, forms, integrations and whether ecommerce is required.</p></section>}
function PriceCard({p}){return <div className={p.featured?'price featured':'price'}>{p.featured&&<span className="badge">Most popular</span>}<h3>{p.name}</h3><p>{p.text}</p><div className="amount"><strong>{p.price}</strong><span>{p.note}</span></div><ul>{p.items.map(i=><li key={i}><Check/> {i}</li>)}</ul><a className="btn full" href="#quote">Ask about this</a></div>}

function Hosting(){return <section id="hosting" className="section"><div className="split"><div><p className="eyebrow">Hosting & monthly care</p><h2>Keep your website online, updated and looked after.</h2><p>Hosting and maintenance are separate from the build cost, so you can choose the level of support you need. No confusing bundles. No hidden extras.</p><div className="featureList"><span><ShieldCheck/> SSL and security basics</span><span><Clock/> Monthly checks</span><span><Zap/> Performance-minded setup</span></div></div><div className="careGrid">{care.map(p=><div className={p.featured?'care featured':'care'} key={p.name}><h3>{p.name}</h3><div className="carePrice">{p.price}</div><ul>{p.items.map(i=><li key={i}><Check/> {i}</li>)}</ul></div>)}</div></div></section>}

function SEO(){return <section id="seo" className="section alt"><div className="sectionHead"><p className="eyebrow">Local SEO</p><h2>Built for Google, written for real customers.</h2></div><div className="seoBox"><div><h3>Included SEO foundations</h3><p>Every website is structured with local search in mind: page titles, meta descriptions, headings, speed-conscious design, internal links and clear service pages.</p></div><div><h3>Optional monthly SEO</h3><p>For businesses that want to grow, monthly SEO support can include blog posts, local landing pages, search reports and improvement recommendations.</p></div><div><h3>Somerset targeting</h3><p>Target Taunton, Bridgwater, Yeovil, Minehead, Weston-super-Mare and surrounding areas with pages that match how customers search.</p></div></div></section>}

function Work(){const refs=['Somerset trades website','Care service information site','Local café landing page','Consultant brochure website'];return <section id="work" className="section"><div className="sectionHead"><p className="eyebrow">References</p><h2>Example projects we can build for local businesses.</h2><p>Use this section for real case studies once your first projects are live.</p></div><div className="refs">{refs.map((r,i)=><div className="ref" key={r}><div className="stars">{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor" size={16}/>)}</div><h3>{r}</h3><p>{['Fast one-page site with enquiry form and Google Business Profile links.','Accessible service pages, simple updates and secure hosting.','Colourful mobile-first design with menu, opening hours and calls to action.','Professional profile, service breakdown and quote request form.'][i]}</p></div>)}</div></section>}

function Quote(){return <section id="quote" className="section quote"><div className="quoteIntro"><p className="eyebrow">Online quote request</p><h2>Tell us what you need.</h2><p>This form opens an email with your project details. Replace the email address in the code with your preferred business inbox.</p><div className="contact"><span><Mail/> hello@web4umedia.co.uk</span><span><MapPin/> Somerset & UK-wide</span><span><Phone/> Add your phone number</span></div></div><form className="form" onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const body=[...f.entries()].map(([k,v])=>`${k}: ${v}`).join('%0D%0A'); window.location.href=`mailto:hello@web4umedia.co.uk?subject=Website quote request&body=${body}`}}>
  <label>Name<input name="Name" required placeholder="Your name"/></label><label>Business<input name="Business" placeholder="Business name"/></label><label>Email<input name="Email" type="email" required placeholder="you@example.com"/></label><label>Service<select name="Service"><option>New website</option><option>Website redesign</option><option>Hosting only</option><option>Monthly maintenance</option><option>SEO support</option></select></label><label>Budget<select name="Budget"><option>Under £500</option><option>£500 - £1,000</option><option>£1,000 - £2,000</option><option>Monthly plan preferred</option></select></label><label className="wide">Project details<textarea name="Details" rows="5" placeholder="What do you need the website to do?"></textarea></label><button className="btn primary wide" type="submit">Send quote request <ArrowRight size={18}/></button></form></section>}

function Footer(){return <footer><Logo/><p>Affordable websites, hosting and care plans for Somerset small businesses.</p><p className="tiny">© {new Date().getFullYear()} Web4U Media Ltd. Replace placeholder contact details before launch.</p></footer>}
function App(){return <><Header/><main><Hero/><Services/><Pricing/><Hosting/><SEO/><Work/><Quote/></main><Footer/></>}

createRoot(document.getElementById('root')).render(<App />)
