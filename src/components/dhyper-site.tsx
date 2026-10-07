import { useEffect, useRef, useState } from 'react';
import { Clapperboard, FileUp, Menu, MessageCircle, NotebookPen, Play, Scissors, Send, TrendingUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PortfolioPlayer } from '@/components/portfolio-player';
import { clips, heroDesktop, heroMobile, whatsappUrl } from '@/lib/portfolio';

const links = [{ id: 'portfolio', label: 'Portfólio' }, { id: 'processo', label: 'Processo' }, { id: 'sobre', label: 'Sobre' }];
const words = ['EDITING', 'COLOR GRADING', 'SOUND DESIGN', 'REELS', 'ANÚNCIOS', 'YOUTUBE', 'MOTION DESIGN', 'LEGENDAS DINÂMICAS'];
const steps = [
  { icon: FileUp, en: 'THE INTAKE', title: 'ENTREGA DO MATERIAL', desc: 'Você envia os arquivos brutos — vídeos, áudios, logos e referências — por link, do jeito mais simples para você.' },
  { icon: NotebookPen, en: 'VISION SYNC', title: 'BRIEFING', desc: 'Alinhamos objetivo, público, ritmo, estilo e plataforma. Cada detalhe definido antes do primeiro corte.' },
  { icon: Scissors, en: 'THE SYNTHESIS', title: 'EDIÇÃO', desc: 'Cortes, ritmo, legendas dinâmicas, motion, trilha, efeitos sonoros e cor. É aqui que o bruto vira resultado.' },
  { icon: Send, en: 'FINAL CUT', title: 'ENTREGA', desc: 'Você recebe o vídeo pronto para postar, no formato certo para cada rede, com espaço para ajustes.' },
];
const features = [
  { icon: Scissors, title: 'EDIÇÃO PROFISSIONAL', desc: 'Cortes precisos, cor calibrada e acabamento de estúdio.' },
  { icon: Clapperboard, title: 'VÍDEOS CRIATIVOS', desc: 'Narrativa, ritmo e motion que dão vida à sua ideia.' },
  { icon: TrendingUp, title: 'MAIS RESULTADOS', desc: 'Cada segundo pensado para reter atenção e converter.' },
];
function WhatsAppLink({ variant = 'studio', children = 'Começar a edição', className = '' }: { variant?: 'studio' | 'studioLight' | 'whatsapp' | 'whatsappOutline'; children?: React.ReactNode; className?: string }) {
  return <Button asChild variant={variant} size="cta" className={className}><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{children}</a></Button>;
}
function Label({ n, children }: { n: string; children: React.ReactNode }) { return <p className="section-label"><span>{n}</span>{children}</p>; }

export function DhyperSite() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const timecode = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update(); window.addEventListener('scroll', update, { passive: true });
    let timer: ReturnType<typeof setInterval> | undefined;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let frame = 0;
      timer = setInterval(() => { frame++; if (timecode.current) timecode.current.textContent = `00:00:${String(Math.floor(frame / 24) % 60).padStart(2, '0')}:${String(frame % 24).padStart(2, '0')}`; }, 1000 / 24);
    }
    return () => { window.removeEventListener('scroll', update); if (timer) clearInterval(timer); };
  }, []);

  return <>
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${menu ? 'menu-open' : ''}`}>
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label="Dhyper — voltar ao topo">Dhyper.</a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map(link => <a className="nav-link" href={`#${link.id}`} key={link.id}>{link.label}</a>)}
          <WhatsAppLink className="h-10 normal-case" />
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button>
      </div>
      {menu && <nav className="mobile-nav site-container md:hidden" aria-label="Navegação móvel">
        {links.map(link => <a className="nav-link" href={`#${link.id}`} key={link.id} onClick={() => setMenu(false)}>{link.label}</a>)}
        <WhatsAppLink />
      </nav>}
    </header>
    <main>
      <section className="hero" id="top" aria-label="Dhyper Media Studio">
        <h1 className="sr-only">Dhyper Media Studio — edição de vídeos que transformam ideias em resultados</h1>
        <picture><source media="(max-width: 767px)" srcSet={heroMobile} /><img className="hero-image" src={heroDesktop} alt="Dhyper Media Studio — edição profissional, vídeos criativos e mais resultados. Editor em seu estúdio." fetchPriority="high" /></picture>
        <div className="hero-shade" />
        <div className="hero-bottom site-container">
          <div className="hero-actions">
            <p className="hero-note">Reels · Anúncios · YouTube — edição com foco total em retenção.</p>
            <div className="hero-buttons flex gap-3">
              <Button variant="studio" size="cta" asChild><a href="#portfolio"><Play className="fill-current" /> Ver portfólio</a></Button>
              <WhatsAppLink variant="studioLight" />
            </div>
          </div>
          <div className="hero-timeline"><span ref={timecode} className="text-accent">00:00:00:00</span><div className="timeline-track" /><a href="#portfolio" className="text-muted-foreground">ROLE PARA VER ↓</a></div>
        </div>
      </section>
      <div className="marquee"><div className="marquee-track">{[0, 1].map(n => <div className="marquee-set" key={n} aria-hidden={n === 1}>{words.map(word => <span className="marquee-word" key={word}>{word}</span>)}</div>)}</div></div>
      <section className="section" id="portfolio">
        <div className="site-container">
          <Label n="01">PORTFÓLIO</Label>
          <div className="portfolio-heading"><h2 className="section-heading">CADA CORTE<br />TEM UM <span className="accent">MOTIVO.</span></h2><p className="section-intro">Uma seleção de edições para criadores e marcas. Toque em qualquer vídeo para assistir em tela cheia.</p></div>
          <div className="portfolio-grid">{clips.map((clip, i) => <Button variant="clip" size="content" key={clip.id} aria-label={`Assistir ${clip.label}`} onClick={() => setSelected(i)}>
            <img src={clip.poster} alt={`Capa do ${clip.label}`} loading="lazy" width="360" height="640" />
            <span className="clip-shade" /><span className="clip-play"><Play className="fill-current" /></span><span className="clip-meta"><span>{clip.label}</span><span>{clip.duration}</span></span>
          </Button>)}</div>
        </div>
      </section>
      <section className="section process-section" id="processo"><div className="site-container">
        <Label n="02">PROCESSO</Label><h2 className="section-heading">DO BRUTO AO <span className="accent">CORTE<br />FINAL.</span></h2>
        <p className="section-intro mt-6 max-w-md">Um fluxo claro, em quatro etapas, para você saber exatamente o que acontece com o seu material.</p>
        <div className="process-grid">{steps.map((item, i) => <Button key={item.en} variant="process" size="content" className={i <= step ? 'active' : ''} onClick={() => setStep(i)} aria-pressed={i === step}>
          <span className="step-icon"><item.icon /></span><span className="step-number">0{i + 1} — {item.en}</span><span className="step-title">{item.title}</span><span className="step-desc">{item.desc}</span>
        </Button>)}</div>
      </div></section>
      <section className="section" id="sobre"><div className="site-container about-grid">
        <div className="about-photo"><img src={heroMobile} alt="Editor Dhyper em seu estúdio" loading="lazy" /><span>DHYPER MEDIA STUDIO</span></div>
        <div><Label n="03">SOBRE</Label><h2 className="section-heading about-heading">EDIÇÃO QUE PRENDE<br />DO <span className="accent">INÍCIO AO FIM.</span></h2>
          <p className="about-copy">Por trás da Dhyper está um editor obcecado por detalhe — ritmo, enquadramento, som e cor trabalhando juntos para o seu vídeo cumprir um objetivo: prender a atenção do primeiro segundo e transformar visualização em resultado.</p>
          {features.map(item => <div key={item.title} className="about-feature"><span className="feature-icon"><item.icon size={18} /></span><div><h3>{item.title}</h3><p>{item.desc}</p></div></div>)}
          <WhatsAppLink variant="studioLight"><MessageCircle /> Falar com o editor</WhatsAppLink>
        </div>
      </div></section>
      <section className="section contact-section" id="contato"><div className="site-container">
        <Label n="04">CONTATO</Label><h2 className="section-heading contact-heading">VAMOS TRANSFORMAR<br />SEU PROJETO EM<br /><span className="accent">ALGO ÉPICO?</span></h2>
        <p className="section-intro">Envie seu material e receba um vídeo pronto para postar — direto com o editor, sem formulários e sem enrolação.</p>
        <WhatsAppLink variant="whatsapp" className="h-16 px-10"><MessageCircle /> Começar a edição</WhatsAppLink><p className="contact-note">Atendimento direto · Orçamento rápido</p>
      </div></section>
    </main>
    <footer className="site-footer"><div className="site-container"><div className="footer-top"><div><a className="brand" href="#top">Dhyper.</a><p className="footer-description">Media Studio — edição de vídeos que transformam ideias em resultados.</p></div><nav className="flex flex-wrap gap-8" aria-label="Navegação do rodapé">{links.map(link => <a className="nav-link" href={`#${link.id}`} key={link.id}>{link.label}</a>)}</nav><WhatsAppLink variant="whatsappOutline" className="h-11"><MessageCircle /> WhatsApp</WhatsAppLink></div><p className="copyright">© 2026 DHYPER MEDIA STUDIO</p></div><div className="footer-word" aria-hidden="true">DHYPER</div></footer>
    {scrolled && <Button asChild variant="whatsapp" size="icon" className="fixed bottom-5 right-5 z-40 h-14 w-14" aria-label="Falar no WhatsApp"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-6" /></a></Button>}
    <PortfolioPlayer index={selected} onClose={() => setSelected(null)} onChange={setSelected} />
  </>;
}