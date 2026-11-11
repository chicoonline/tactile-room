# Tactile Room: changelog

Each version is kept as it was, so the development can be compared. Reasons for each change are in the project report (`projects/tactile-room-project-report.md` in the Project).

## Unreleased
- Published on GitHub Pages at https://tactileroom.chicomorais.com (11 Nov).
- Studio note no longer says "Only you see this": anyone who adds `#studio` to the address can open it, but changes made there stay in their own browser.
- New `docs/` folder for the project report, so the record lives with the code. `.DS_Store` removed and ignored.

## 1.4 · 11 Nov 2026
- New look, "deep-sea sonar studio" (Chico's direction, 11 Nov): dark background (#050B14) with faint sonar rings; the shell sits in an open, borderless stage with a still cyan-and-coral halo and a faint cyan pool of light under it; controls in one floating glass panel beside the shell (below it on phones); the sound trace glows. Headings in Space Grotesk, numbers and labels in JetBrains Mono.
- Colours on the shell: ridges cyan (#00F2FE), grooves coral (#FF5A5F), landmarks amber (#F59E0B). The ripples under your finger take the colour of what is under it.
- A visible "Light background" switch, remembered in that browser. Dark is the default for everyone.
- Kept on purpose, for blind and low-vision visitors: body text stays Atkinson Hyperlegible Next; text contrast 4.5:1 or more in both looks (most dark text above 8:1); control borders 3:1; 44 px targets; same page order for screen readers; no text over the moving 3D image. People whose system asks for less transparency or more contrast get solid panels and no glow. No blur over the 3D image (it would be redrawn every frame on slow phones).
- Left out of the inspiration mockups on purpose: invented readouts (depth, pressure, "system online") and decorative sliders. A screen reader would read them aloud as if they were real.
- Fixed: the help text under the shell still mentioned the water sound before the page script replaced it.
- Tests: two vibration checks made independent of how fast the test computer draws frames. 62 + 28 + 17 automated checks pass; axe finds no problems in either look, on desktop, tablet and phone, or in the studio.
- 1.3 saved in `versions/v1.3-2026-11-10/`.

## 1.3 · 10 Nov 2026
- German: EN / PT / DE switch, German spoken hints with a German voice, `?lang=de`, opens in German for German browsers; German note names (H for B). Draft: check it. Reason: one tester speaks only German (Chico, 10 Nov).
- Test logs save themselves in the browser while a test runs; a reload no longer loses them. "Copy all saved logs (CSV)" adds session, date and version to every row; "Delete saved logs" asks twice. Reason: the friend test produced no data (Chico, 10 Nov).
- 58 + 28 + 17 automated checks pass.

## 1.2 · 10 Nov 2026
- Landmark sound: a soft, low wooden knock (about 0.2 s, around 150–240 Hz) replaces the bright three-note chime (C6–G6–C7, about 1.2 s). Reason: the chime sounded like a game coin, became annoying, and covered the spoken hints (Chico, 10 Nov).
- Five-note scale on by default: more harmonic (Chico, 10 Nov).
- Water sound off by default (volume 0; the studio slider can bring it back). The gamepad's water swell follows it. Reason: no longer needed and distracting (Chico, 10 Nov). Trade-off: off the shell is now silent, so the falling blip, the spoken "Off the shell" and the vibration tap are the only cues that you left the shell.
- The studio shows the version, and every test log's first row records the version and the date.
- 58 + 28 automated checks pass.

## 1.1 · 6 Nov 2026
- Vibration that follows the surface: Android phones (pulse at ridges, rhythm on sharp ridges, taps at the edge and landmarks) and gamepads (two motors with strength). Visitor on/off switch; strength slider in the studio.
- Gamepad control: left stick explores, right stick turns, A describes the spot, B plays the description.
- Saved in `versions/v1.1-2026-11-06/`.

## 1.0 · 5 Nov 2026
- First build: stand-in shell, sound from the surface (pitch, ridge clicks, water, blips, landmark chime), keyboard fingertip, spoken position and direction, studio for the real scan, test mode with CSV log, EN/PT.
- Saved in `versions/v1.0-2026-11-05/`.
