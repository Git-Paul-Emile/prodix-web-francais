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

## Website architecture
- Keep company content in dedicated TanStack content routes and shared site chrome in `src/components/site.tsx` so navigation and contact details remain consistent.
- Keep service descriptions and page metadata helpers in the browser-safe `src/lib/prodix.ts` module to avoid duplicated service information.
- Contact actions use email and telephone links rather than an unconnected submission form so visitors can reach the company without a simulated delivery claim.
- Store uploaded brand assets and brochure as asset pointers; generated illustration remains a bundled image, keeping uploaded binaries out of the repository.
