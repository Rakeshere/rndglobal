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

- Imported Muftlo site code lives in src/muftlo (pages in src/muftlo/pages, thin route files in src/routes); src/muftlo/next/* shims replace next/link, next/image, next/navigation so ported components stay close to the original.
- Keep lucide-react pinned at 0.542.0: newer versions removed brand icons (Facebook, Instagram, etc.) the footer uses.
