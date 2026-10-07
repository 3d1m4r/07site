import desktop from '@/assets/dhyper-desktop.asset.json';
import mobile from '@/assets/dhyper-mobile.asset.json';

type AssetPointer = { url: string };
const videos = import.meta.glob<AssetPointer>('../assets/videos/*.asset.json', { eager: true, import: 'default' });
const webm = import.meta.glob<AssetPointer>('../assets/webm/*.asset.json', { eager: true, import: 'default' });
const posters = import.meta.glob<AssetPointer>('../assets/posters/*.asset.json', { eager: true, import: 'default' });
// Asset paths remain public without a preview login. An absolute origin also
// lets exported code load media when hosted outside Lovable.
const mediaOrigin = import.meta.env['VITE_MEDIA_ORIGIN'] || 'https://id-preview--2fb9c8be-b86d-4540-b977-766c97207729.lovable.app';
export const assetUrl = (path: string) => new URL(path, mediaOrigin).href;
export const heroDesktop = assetUrl(desktop.url);
export const heroMobile = assetUrl(mobile.url);
export const whatsappUrl = 'https://wa.me/message/SAFGEJCQOHUOM1';
const durations = ['0:48','1:15','0:59','2:26','0:41','0:37','1:31','1:53','1:43','1:24','0:59','1:25'];
export const clips = Array.from({ length: 12 }, (_, index) => {
  const id = `clip-${String(index + 1).padStart(2, '0')}`;
  const video = videos[`../assets/videos/${id}.asset.json`];
  const poster = posters[`../assets/posters/${id}.asset.json`];
  const alternative = webm[`../assets/webm/${id}.asset.json`];
  return { id, label: `CLIP ${String(index + 1).padStart(2, '0')}`, src: video ? assetUrl(video.url) : '', webm: alternative ? assetUrl(alternative.url) : '', poster: poster ? assetUrl(poster.url) : '', duration: durations[index] };
});
