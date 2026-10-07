<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio at the index route, with presentation components separate from the media manifest, so content and layout can change independently.
- Store video and image binaries in Lovable Assets and resolve pointer paths against a configurable absolute media origin, so GitHub exports remain lightweight and independently hosted sites can load media.
- Play portfolio videos through native HTML video in an accessible dialog, never through social embeds, to avoid third-party branding and profile information.
