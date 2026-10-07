import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { clips } from '@/lib/portfolio';

export function PortfolioPlayer({ index, onClose, onChange }: { index: number | null; onClose: () => void; onChange: (index: number) => void }) {
  const [error, setError] = useState(false);
  useEffect(() => { setError(false); }, [index]);
  const navigate = (delta: number) => { if (index !== null) onChange((index + delta + clips.length) % clips.length); };
  const clip = index !== null ? clips[index] : undefined;
  return <Dialog.Root open={!!clip} onOpenChange={open => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay backdrop-blur-md" />
      <Dialog.Content aria-describedby={undefined} className="video-dialog fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-md outline-none" onKeyDown={event => { if (event.key === 'ArrowRight') navigate(1); if (event.key === 'ArrowLeft') navigate(-1); }}>
        <div className="video-toolbar">
          <Dialog.Title className="font-mono text-xs">{clip?.label}</Dialog.Title>
          <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Fechar vídeo" title="Fechar vídeo"><X /></Button></Dialog.Close>
        </div>
        {clip && <video key={clip.id} className="video-player" poster={clip.poster} autoPlay playsInline controls controlsList="nodownload" onLoadedData={() => setError(false)} onError={event => { if (event.currentTarget.error) setError(true); }}><source src={clip.src} type="video/mp4" /><source src={clip.webm} type="video/webm" /></video>}
        {error && <p role="alert" className="video-error">Não foi possível carregar o vídeo. Verifique sua conexão e tente novamente.</p>}
        <div className="video-toolbar">
          <Button variant="ghost" size="icon" aria-label="Vídeo anterior" title="Vídeo anterior" onClick={() => navigate(-1)}><ChevronLeft /></Button>
          <span className="font-mono text-xs text-muted-foreground">{String((index ?? 0) + 1).padStart(2, '0')} / 12</span>
          <Button variant="ghost" size="icon" aria-label="Próximo vídeo" title="Próximo vídeo" onClick={() => navigate(1)}><ChevronRight /></Button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}