import { createFileRoute } from "@tanstack/react-router";
import { DhyperSite } from '@/components/dhyper-site';
import { heroDesktop } from '@/lib/portfolio';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Dhyper Media Studio — Edição de vídeos e portfólio' },
    { name: 'description', content: 'Edição profissional de Reels, anúncios e YouTube com foco em retenção. Conheça os trabalhos da Dhyper e comece sua edição pelo WhatsApp.' },
    { property: 'og:title', content: 'Dhyper Media Studio — Cada corte tem um motivo' },
    { property: 'og:description', content: 'Vídeos criativos, edição profissional e mais resultados. Assista ao portfólio e fale diretamente com o editor.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: heroDesktop },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: heroDesktop },
  ] }),
  component: DhyperSite,
});
