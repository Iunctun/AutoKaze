# Hero video assets

The hero sections in `c/auto_kaze_home_desktop`, `c/auto_kaze_home_desktop_pt`,
`c/auto_kaze_home_mobile` and `c/auto_kaze_home_mobile_pt` reference video
files that must be placed in this folder:

- `hero-desktop.mp4` — landscape cut, used on desktop/tablet (>=768px).
- `hero-mobile.mp4` — vertical/adapted cut, used on mobile (<768px) and as
  the mobile-page hero background.

## Spec for the footage

- 8–15s, seamless/perfect loop (no visible cut on restart).
- No on-screen text, no manufacturer badges/logos, no Japanese flag, no
  anime styling.
- Deep black tones, metallic reflections, cinematic night lighting, yellow
  (#FFC400) accents, JDM street-culture mood, sense of speed.
- H.264 MP4, muted (no audio track needed since the `<video>` is `muted`),
  optimized/compressed for web (target a few MB, not tens of MB) so it
  doesn't hurt page load.

Until real footage is added here, every hero gracefully falls back to the
existing poster image (the `<video poster>` attribute, mirrored in the
`.hero-fallback` layer), so the page keeps working and looking correct with
no broken video icon — see the inline `<script>` at the end of each hero
section, which flips to the fallback layer on a video `error`/`stalled`
event, pauses playback for `prefers-reduced-motion`, and pauses/resumes via
`IntersectionObserver` when the hero scrolls in/out of view.
