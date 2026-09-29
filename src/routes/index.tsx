import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, Clock3, Instagram, MapPin, Menu, MessageCircle, Music2, Sparkles, Star, Utensils, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const instagramUrl = "https://www.instagram.com/escritoriogastrobar/";
const whatsappUrl = "https://wa.me/5542999763615?text=Ol%C3%A1!%20Quero%20conhecer%20o%20Escrit%C3%B3rio%20Gastrobar.";

const highlights = [
  { title: "Gastronomia", text: "Pratos, porções e sabores para transformar qualquer encontro em uma boa história.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85" },
  { title: "Drinks & brindes", text: "Um cardápio pensado para acompanhar a conversa, o jantar e a noite.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85" },
  { title: "Experiência", text: "Ambiente climatizado, música e aquele clima que faz você querer ficar mais um pouco.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85" },
];

function Index() {
  const [open, setOpen] = useState(false);
  return <main className="site-shell">
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={() => setOpen(false)}><span className="brand-mark">E</span><span><strong>ESCRITÓRIO</strong><small>GASTROBAR</small></span></a>
      <nav className={open ? "nav nav-open" : "nav"}>
        <a href="#experiencia" onClick={() => setOpen(false)}>Experiência</a><a href="#sabores" onClick={() => setOpen(false)}>Sabores</a><a href="#ambiente" onClick={() => setOpen(false)}>Ambiente</a><a href="#contato" onClick={() => setOpen(false)}>Contato</a><a className="nav-cta" href={whatsappUrl}>Reservar mesa <ArrowRight size={16}/></a>
      </nav>
      <button className="menu-button" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>

    <section id="inicio" className="hero"><div className="hero-image"/><div className="hero-overlay"/><div className="hero-content">
      <div className="eyebrow"><span/> PRUDENTÓPOLIS • PARANÁ</div><h1>Seu lugar para<br/><em>comer, brindar</em><br/>e viver.</h1>
      <p>Gastronomia, drinks, música e bons encontros em um só endereço.</p>
      <div className="hero-actions"><a className="button button-gold" href={whatsappUrl}>Reservar mesa <ArrowRight size={18}/></a><a className="button button-ghost" href="#sabores">Conhecer a casa <ChevronDown size={18}/></a></div>
    </div><div className="hero-bottom"><span><Clock3 size={16}/> Uma noite começa aqui</span><span className="scroll-note">SCROLL ↓</span></div></section>

    <section id="experiencia" className="intro section"><div className="section-kicker">MAIS QUE UM GASTROBAR</div><div className="intro-grid"><h2>A mesa é só<br/><em>o começo.</em></h2><div><p className="lead">Tem lugar que você vai para comer. Tem lugar que você escolhe para viver a noite.</p><p>No Escritório Gastrobar, cada detalhe foi pensado para juntar boa gastronomia, bebidas, música e pessoas. Chegue para um jantar, fique pela experiência.</p><a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Siga a casa no Instagram <ArrowRight size={17}/></a></div></div></section>

    <section id="sabores" className="section dark-section"><div className="section-head"><div><div className="section-kicker">PARA CADA MOMENTO</div><h2>Sabores que<br/><em>fazem ficar.</em></h2></div><p>Uma experiência completa, do primeiro pedido ao último brinde.</p></div><div className="cards">{highlights.map((item,index)=><article className="experience-card" key={item.title}><img src={item.image} alt={item.title} loading={index===0?"eager":"lazy"}/><div className="card-shade"/><div className="card-content"><span>0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>

    <section id="ambiente" className="split-section"><div className="split-image"/><div className="split-copy"><div className="section-kicker">O CLIMA CERTO</div><h2>O melhor plano é aquele que vira <em>memória.</em></h2><p>Um ambiente feito para encontros: jantar a dois, mesa com amigos, comemoração ou aquela saída sem hora para acabar.</p><div className="feature-list"><div><Music2/><span><strong>Música</strong><small>Para acompanhar a noite</small></span></div><div><Utensils/><span><strong>Gastronomia</strong><small>Para todos os momentos</small></span></div><div><Sparkles/><span><strong>Experiência</strong><small>Do seu jeito</small></span></div></div></div></section>

    <section className="quote-section"><Star className="quote-star" size={20} fill="currentColor"/><p>“A melhor parte da noite começa quando você decide sair.”</p><span>ESCRITÓRIO GASTROBAR</span></section>

    <section id="contato" className="contact-section"><div className="contact-content"><div className="section-kicker">VAMOS MARCAR?</div><h2>Seu próximo<br/><em>encontro começa aqui.</em></h2><p>Chame no WhatsApp, acompanhe as novidades no Instagram ou venha conhecer a casa.</p><div className="contact-actions"><a className="button button-gold" href={whatsappUrl}><MessageCircle size={18}/> Falar no WhatsApp</a><a className="button button-outline" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18}/> @escritoriogastrobar</a></div></div></section>

    <footer><div className="footer-brand"><span className="brand-mark">E</span><div><strong>ESCRITÓRIO</strong><small>GASTROBAR</small></div></div><div className="footer-info"><MapPin size={17}/><span>Rua Cel. João Pedro Martins, 1110<br/>Centro • Prudentópolis — PR</span></div><div className="footer-info"><MessageCircle size={17}/><a href={whatsappUrl}>(42) 99976-3615</a></div><a className="footer-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={20}/></a><small className="copyright">© {new Date().getFullYear()} Escritório Gastrobar</small></footer>
    <a className="floating-whatsapp" href={whatsappUrl} aria-label="Falar no WhatsApp"><MessageCircle/></a>
  </main>;
}