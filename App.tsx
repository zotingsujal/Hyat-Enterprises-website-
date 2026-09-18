
import { useState, useEffect } from 'react'

const heroImg = "/modern_indian_living_room.webp"
const kitchenImg = "/luxury_modular_kitchen.webp"
const bedroomImg = "/mumbai_bedroom_evening.webp"
const showroomImg = "/bespoke_showroom_daylight.webp"
const livingImg = "/mumbai_living_room.webp"
const bathImg = "/travertine_spa_bathroom.webp"
const officeImg = "/warm_minimal_office.webp"
const fabImg = "/modern_metalwork_showroom.webp"
const furnImg = "/image.webp"
const logoImg = "/logo.jpeg"

type ProjectType = "All" | "Residential" | "Commercial" | "Furniture" | "Fabrication" | "Renovation"

export default function App(){
  const [filter, setFilter] = useState<ProjectType>("All")
  const [showFormSuccess, setShowFormSuccess] = useState(false)
  const [serviceModal, setServiceModal] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(()=>{
    document.documentElement.style.scrollBehavior='smooth'
  },[])

  const projects = [
    { id:1, title:"Bandra Japandi Home", cat:"Residential" as ProjectType, img: livingImg },
    { id:2, title:"Modular Kitchen - Vakola", cat:"Residential" as ProjectType, img: kitchenImg },
    { id:3, title:"Spa Bathroom - Santacruz", cat:"Renovation" as ProjectType, img: bathImg },
    { id:4, title:"Commercial Office - BKC", cat:"Commercial" as ProjectType, img: officeImg },
    { id:5, title:"Custom Wardrobe - Juhu", cat:"Furniture" as ProjectType, img: bedroomImg },
    { id:6, title:"Grill & Railing - Fabrication", cat:"Fabrication" as ProjectType, img: fabImg },
  ]

  const filtered = filter==="All" ? projects : projects.filter(p=>p.cat===filter)

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#111] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#FAF7F3]/90 border-b border-[#EDE5DB]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImg} className="w-10 h-10 object-contain rounded-lg bg-white p-1" alt="logo"/>
            <div><p className="font-bold tracking-widest text-[13px]">HYAT ENTERPRISES</p><p className="text-[10px] tracking-[0.2em] opacity-60">Design. Engineer. Build.</p></div>
          </div>
          <nav className="hidden md:flex gap-6 text-[13px] font-medium opacity-80">
            <a href="#about" className="hover:opacity-100">About</a>
            <a href="#services" className="hover:opacity-100">Services</a>
            <a href="#projects" className="hover:opacity-100">Projects</a>
            <a href="#process" className="hover:opacity-100">Process</a>
            <a href="#testimonials" className="hover:opacity-100">Testimonials</a>
            <a href="#contact" className="hover:opacity-100">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-[#111] text-white px-5 py-2.5 rounded-full text-[13px]">Get Free Consultation</a>
          <a href="tel:+919920836746" className="md:hidden bg-[#111] text-white px-4 py-2 rounded-full text-xs">Call</a>
        </div>
      </header>

      {/* HERO - MEDIUM BRIGHT */}
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Bright Luxury Living Room" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div className="text-white">
            <h1 className="text-[32px] md:text-[56px] leading-[0.95] font-bold" style={{fontFamily:'Playfair Display, serif', textShadow:'0 2px 20px rgba(0,0,0,0.25)'}}>
              Transforming Spaces With Design, Craftsmanship & Precision
            </h1>
            <p className="mt-5 text-white/90 text-[15px] md:text-[16px] max-w-xl leading-relaxed" style={{textShadow:'0 1px 10px rgba(0,0,0,0.3)'}}>
              Complete interior design, contracting, structural design and custom fabrication solutions for residential and commercial spaces in Mumbai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:bg-black transition">Get a Free Consultation</a>
              <a href="tel:+919920836746" className="bg-white/95 backdrop-blur text-black px-6 py-3 rounded-full text-sm font-medium border border-white/30">Call +91 99208 36746</a>
              <a href="https://wa.me/919920836746" className="bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">WhatsApp Us</a>
            </div>
            <p className="mt-6 text-[11px] tracking-[0.2em] text-white/80">Residential • Commercial • Interior Contracting • Fabrication</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[30px] md:text-[38px] leading-tight">Built on Engineering. Defined by Craftsmanship.</h2>
          <p className="mt-6 text-[#555] text-[14.5px] leading-relaxed">
            At Hyat Enterprises, we are experts in delivering comprehensive solutions in structural design, grill fabrication, and interior contracting. Our team combines engineering excellence, innovative craftsmanship, and creative interior design to transform ideas into reality.<br/><br/>
            Our structural design services are dedicated to ensuring the strength, stability, and safety of every project we undertake. We provide detailed structural analysis and design for residential, commercial, and industrial buildings, employing modern technology and industry standards.<br/><br/>
            Whether it's a new build, renovation, or expansion, our team works closely with clients to develop tailored solutions that meet their specific project requirements.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              {t:"Engineering Excellence", d:"Strength & safety"},
              {t:"Skilled Craftsmanship", d:"Detail focused"},
              {t:"Complete Solutions", d:"End-to-end"}
            ].map(c=>(
              <div key={c.t} className="bg-[#EDE5DB] p-4 rounded-2xl"><p className="font-semibold text-sm">{c.t}</p><p className="text-[11px] opacity-60 mt-1">{c.d}</p></div>
            ))}
          </div>
        </div>
        <img src={livingImg} alt="Living" className="rounded-[24px] w-full h-[520px] object-cover" />
      </section>

      {/* SERVICES - UNIQUE IMAGES */}
      <section id="services" className="bg-[#111] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end"><h2 className="text-[30px] md:text-[38px]">Our Services</h2><p className="hidden md:block text-white/50 text-sm max-w-md">Grouped into 4 core expertise — each image unique, fabrication and furniture have different images as requested.</p></div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {title:"Interior Design", img:showroomImg, list:"Residential, Commercial, Kitchen & Bedroom, Living & Dining, Bathroom, Wardrobes, Lighting, Space Planning", key:"interior"},
              {title:"Interior Contracting & Renovation", img:bedroomImg, list:"Complete Contracting, Renovation & Refurbishment, Painting, Flooring, Doors & Windows", key:"contracting"},
              {title:"Structural & Fabrication", img:fabImg, list:"Structural Design, Grill Fabrication, Iron Fabrication & Welding, Aluminium Sliding, Custom Fabrication", key:"fabrication"},
              {title:"Custom Furniture", img:furnImg, list:"Custom Furniture, Office Furniture, Wardrobes, Cabinets, Bespoke Solutions — image different from fabrication", key:"furniture"},
            ].map(s=>(
              <div key={s.key} className="bg-[#1E1E1E] rounded-[24px] overflow-hidden group cursor-pointer" onClick={()=>setServiceModal(s.key)}>
                <img src={s.img} alt={s.title} className="h-52 w-full object-cover group-hover:scale-[1.02] transition duration-700"/>
                <div className="p-6"><h3 className="text-[18px] font-semibold">{s.title}</h3><p className="text-[13px] text-white/60 mt-2 leading-relaxed">{s.list}</p><span className="mt-4 inline-block text-[#C8A27A] text-sm">Discuss Your Project →</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[26px] md:text-[32px]">Why Clients Choose Hyat Enterprises</h2>
        <div className="mt-8 grid md:grid-cols-5 gap-4">
          {[
            {t:"End-to-End Solutions", d:"From design and planning to execution and finishing."},
            {t:"Attention to Detail", d:"Thoughtful design and careful workmanship throughout."},
            {t:"Engineering Expertise", d:"Structural solutions focused on strength, stability and safety."},
            {t:"Custom Craftsmanship", d:"Furniture, fabrication and interior elements tailored to the space."},
            {t:"Responsive Service", d:"Professional communication and prompt follow-up throughout."},
          ].map(f=>(
            <div key={f.t} className="bg-white border border-[#EDE5DB] p-5 rounded-2xl"><p className="font-semibold text-sm">✓ {f.t}</p><p className="text-xs opacity-60 mt-2">{f.d}</p></div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center flex-wrap gap-4"><h2 className="text-[26px] md:text-[32px]">Spaces We've Helped Bring to Life</h2>
          <div className="flex gap-2 flex-wrap">
            {(["All","Residential","Commercial","Furniture","Fabrication","Renovation"] as ProjectType[]).map(c=>(
              <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-1.5 rounded-full text-xs border ${filter===c ? "bg-[#111] text-white border-[#111]" : "bg-white border-[#EDE5DB]"}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {filtered.map(p=>(
            <div key={p.id} className="rounded-2xl overflow-hidden bg-white border border-[#EDE5DB]"><img src={p.img} alt={p.title} className="h-60 w-full object-cover"/><div className="p-4 flex justify-between"><p className="text-sm font-medium">{p.title}</p><span className="text-[11px] opacity-50">{p.cat}</span></div></div>
          ))}
        </div>
        <p className="text-[11px] opacity-50 mt-4">Placeholder images shown for design reference — replace with actual Hyat Enterprises project photographs. Each image unique.</p>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#EDE5DB]/60 py-16"><div className="max-w-7xl mx-auto px-6"><h2 className="text-[26px] md:text-[32px]">From Your Idea to a Finished Space</h2>
        <div className="mt-10 grid md:grid-cols-5 gap-6 relative">
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-px bg-[#C8A27A]/30"></div>
          {[
            {n:"01", t:"Consultation", d:"Tell us about your space, requirements and budget."},
            {n:"02", t:"Site Assessment", d:"Understand the space, measurements and requirements."},
            {n:"03", t:"Design & Planning", d:"Develop the design and execution plan."},
            {n:"04", t:"Execution", d:"Our team handles interior, contracting and fabrication work."},
            {n:"05", t:"Final Handover", d:"Complete finishing touches and deliver the finished space."},
          ].map(s=>(
            <div key={s.n} className="relative bg-white p-5 rounded-2xl border border-[#EDE5DB]"><p className="text-[#C8A27A] font-bold text-xs">{s.n}</p><p className="font-semibold mt-2 text-sm">{s.t}</p><p className="text-xs opacity-60 mt-2">{s.d}</p></div>
          ))}
        </div></div></section>

      {/* TESTIMONIALS - AUTO SCROLL ONLY 4 REAL */}
      <section id="testimonials" className="py-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6"><h2 className="text-[26px] md:text-[32px]">What Our Clients Say</h2></div>
        <div className="mt-8 relative">
          <div className="flex animate-scroll w-max gap-6 px-6">
            <div className="flex gap-6">
              {[
                {name:"Mansi Rane", text:"We are absolutely thrilled with the furniture made by Hyat Enterprises for our office! The quality of work is exceptional, and the finishing is impeccable. Mr Gafoor's attention to detail and commitment to excellence is evident in every piece. Highly recommend Hyat Enterprises for anyone looking for amazing furniture work that exceeds expectations!"},
                {name:"Joseph Dias", text:"The Contractor delivered beyond my expectations. I had requested for a basic quotation to paint my flat with some minor repairs. As the work progressed, the Contractor being an interior designer gave some creative advice for my main and safety door, living room and bedroom. A wall wardrobe was also suggested in the bedroom, which I accepted. Mr. Gafour delivered what he promised. Relatives and friends have marvelled at the final product. He was prompt to follow up on anything that was out of place, which was brought to his notice. He is knowledgeable in this field, therefore highly recommend his service."},
                {name:"Narender Chandiramani", text:"I recently purchased an iron-fabricated teapoy stand from Hyat Enterprises, and I am very impressed with the quality and craftsmanship. The stand is sturdy, well-designed, and has a sleek finish. It adds a stylish touch to my space while being highly functional. The team was professional, and the delivery was on time. Highly recommended for anyone looking for durable and well-crafted iron furniture!"},
                {name:"Venkatraman P", text:"We got a range of interior work done. The service and quality was very good. The response was also prompt. Would not hesitate to repeat."},
              ].map(r=>(
                <div key={r.name} className="w-[360px] shrink-0 bg-[#FAF7F3] border border-[#EDE5DB] p-6 rounded-2xl"><p className="text-[13px] leading-relaxed">“{r.text}”</p><p className="mt-4 font-semibold text-sm">— {r.name}</p></div>
              ))}
            </div>
            <div className="flex gap-6" aria-hidden>
              {[
                {name:"Mansi Rane", text:"We are absolutely thrilled with the furniture made by Hyat Enterprises for our office! The quality of work is exceptional, and the finishing is impeccable. Mr Gafoor's attention to detail and commitment to excellence is evident in every piece. Highly recommend Hyat Enterprises for anyone looking for amazing furniture work that exceeds expectations!"},
                {name:"Joseph Dias", text:"The Contractor delivered beyond my expectations. I had requested for a basic quotation to paint my flat with some minor repairs. As the work progressed, the Contractor being an interior designer gave some creative advice for my main and safety door, living room and bedroom. A wall wardrobe was also suggested in the bedroom, which I accepted. Mr. Gafour delivered what he promised. Relatives and friends have marvelled at the final product. He was prompt to follow up on anything that was out of place, which was brought to his notice. He is knowledgeable in this field, therefore highly recommend his service."},
                {name:"Narender Chandiramani", text:"I recently purchased an iron-fabricated teapoy stand from Hyat Enterprises, and I am very impressed with the quality and craftsmanship. The stand is sturdy, well-designed, and has a sleek finish. It adds a stylish touch to my space while being highly functional. The team was professional, and the delivery was on time. Highly recommended for anyone looking for durable and well-crafted iron furniture!"},
                {name:"Venkatraman P", text:"We got a range of interior work done. The service and quality was very good. The response was also prompt. Would not hesitate to repeat."},
              ].map(r=>(
                <div key={r.name+"2"} className="w-[360px] shrink-0 bg-[#FAF7F3] border border-[#EDE5DB] p-6 rounded-2xl"><p className="text-[13px] leading-relaxed">“{r.text}”</p><p className="mt-4 font-semibold text-sm">— {r.name}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEAD BANNER */}
      <section className="bg-[#111] text-white py-14"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"><div><h2 className="text-[28px]">Planning Your Next Project?</h2><p className="text-white/60 text-sm mt-2 max-w-xl">Whether you're designing a new home, renovating an existing space, setting up an office, or looking for custom fabrication, let's discuss your requirements.</p></div><div className="flex gap-3"><a href="tel:+919920836746" className="bg-white text-black px-5 py-2.5 rounded-full text-sm">Call Now</a><a href="https://wa.me/919920836746" className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm">WhatsApp Us</a><a href="#contact" className="border border-white/20 px-5 py-2.5 rounded-full text-sm">Request Consultation</a></div></div></section>

      {/* CONTACT - NO MAP */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[30px]">Tell Us About Your Project</h2>
          <div className="mt-6 text-sm leading-relaxed opacity-80">
            <p className="font-semibold">Hyat Enterprises</p>
            <p>2/15, Amir Bi House, Krishna Tower, St Anthony Rd,<br/>Sahajeevan Society, Hind Nagar, Vakola,<br/>Santacruz East, Mumbai, Maharashtra 400055</p>
            <p className="mt-4 font-semibold"><a href="tel:+919920836746">+91 99208 36746</a></p>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="tel:+919920836746" className="bg-[#111] text-white px-5 py-2.5 rounded-full text-[13px]">Call Now</a>
            <a href="https://wa.me/919920836746" className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-[13px]">WhatsApp Us</a>
          </div>
        </div>
        <form onSubmit={(e)=>{e.preventDefault(); setShowFormSuccess(true)}} className="bg-white p-6 rounded-[20px] border border-[#EDE5DB] grid gap-4 shadow-sm">
          {!showFormSuccess ? <>
            <input required placeholder="Full Name" className="border border-[#EDE5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A27A]/30"/>
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="Phone Number" className="border border-[#EDE5DB] rounded-xl px-4 py-3 text-sm"/>
              <input placeholder="WhatsApp Number" className="border border-[#EDE5DB] rounded-xl px-4 py-3 text-sm"/>
            </div>
            <select className="border border-[#EDE5DB] rounded-xl px-4 py-3 text-sm"><option>Project Type</option><option>Home Interior</option><option>Office Interior</option><option>Commercial Interior</option><option>Renovation</option><option>Structural Design</option><option>Custom Furniture</option><option>Fabrication</option><option>Painting</option><option>Flooring</option><option>Other</option></select>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Location" className="border border-[#EDE5DB] rounded-xl px-4 py-3 text-sm"/>
              <input placeholder="Approximate Budget" className="border border-[#EDE5DB] rounded-xl px-4 py-3 text-sm"/>
            </div>
            <textarea placeholder="Project Requirements" rows={3} className="border border-[#EDE5DB] rounded-xl px-4 py-3 text-sm"></textarea>
            <button className="bg-[#111] text-white py-3 rounded-full text-sm font-medium hover:bg-black transition">Request a Consultation</button>
          </> : <div className="py-12 text-center"><p className="text-lg font-medium">Thank you. Our team will contact you shortly.</p><button onClick={()=>setShowFormSuccess(false)} className="mt-4 text-sm text-[#C8A27A]">Submit another</button></div>}
        </form>
      </section>

      <footer className="bg-[#111] text-white/60 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-[12px]">
          <p>© {new Date().getFullYear()} HYAT ENTERPRISES — Design. Engineer. Build. — Serving Mumbai and surrounding areas.</p>
          <p>Interior Designer in Vakola • Santacruz East • Mumbai</p>
        </div>
      </footer>

      {/* Mobile sticky - MEDIUM SIZE */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-2.5 md:hidden pointer-events-none">
        <div className="pointer-events-auto bg-[#111] rounded-full flex justify-center items-center gap-2 py-2 px-2.5 shadow-2xl mx-auto w-fit">
          <a href="tel:+919920836746" className="text-white text-[13px] px-4 py-1.5 rounded-full hover:bg-white/10">Call Now</a>
          <a href="https://wa.me/919920836746" className="bg-[#25D366] text-white px-4 py-1.5 rounded-full text-[13px] font-medium">WhatsApp</a>
          <a href="#contact" className="bg-white text-black px-4 py-1.5 rounded-full text-[13px] font-medium">Get Quote</a>
        </div>
      </div>

      {/* Desktop floating pill - MEDIUM SIZE */}
      <div className="hidden md:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur rounded-full shadow-2xl border border-black/10 p-1.5 gap-1.5">
        <a href="https://wa.me/919920836746" className="bg-[#25D366] text-white px-4 py-1.5 rounded-full text-[13px] font-medium">WhatsApp</a>
        <a href="tel:+919920836746" className="bg-[#111] text-white px-4 py-1.5 rounded-full text-[13px]">Call Now</a>
        <button onClick={()=>setChatOpen(v=>!v)} className="bg-[#EDE5DB] text-black px-4 py-1.5 rounded-full text-[13px]">Ask AI Designer</button>
      </div>

      {chatOpen && (
        <div className="fixed bottom-20 right-6 md:right-10 z-50 w-[320px] bg-white rounded-2xl shadow-2xl border border-[#EDE5DB] overflow-hidden">
          <div className="bg-[#111] text-white p-4 flex justify-between items-center"><p className="text-sm font-medium">AI Designer</p><button onClick={()=>setChatOpen(false)} className="text-xs opacity-70">✕</button></div>
          <div className="p-4 text-[13px] space-y-3"><p>Hi! Tell me your space size and budget, I'll suggest the right service.</p><div className="flex flex-wrap gap-2">{["Interior cost in Vakola?","Custom furniture?","Renovation timeline?","2BHK Package?"].map(q=><button key={q} onClick={()=>window.open('https://wa.me/919920836746','_blank')} className="bg-[#FAF7F3] border border-[#EDE5DB] px-3 py-1.5 rounded-full text-xs">{q}</button>)}</div><a href="https://wa.me/919920836746" className="block bg-[#25D366] text-white text-center py-2.5 rounded-full text-sm mt-2">Chat on WhatsApp</a></div>
        </div>
      )}

      {serviceModal && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4" onClick={()=>setServiceModal(null)}>
          <div className="bg-[#FAF7F3] max-w-lg w-full rounded-[20px] p-6" onClick={e=>e.stopPropagation()}>
            <h3 className="text-xl font-semibold capitalize">{serviceModal}</h3>
            <p className="text-sm opacity-70 mt-3">Detailed info about {serviceModal}: materials, timeline, ideal for Mumbai homes, Vaastu compliance, monsoon-proof finishes. Contact us for a site visit in Vakola / Santacruz East.</p>
            <div className="mt-6 flex gap-2"><a href="https://wa.me/919920836746" className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm">WhatsApp</a><button onClick={()=>setServiceModal(null)} className="border border-[#EDE5DB] px-4 py-2 rounded-full text-sm">Close</button></div>
          </div>
        </div>
      )}

      <div className="h-16 md:h-0"></div>
    </div>
  )
}
