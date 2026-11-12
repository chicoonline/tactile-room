# Tactile Room: changelog

Each version is kept as it was, so the development can be compared. Reasons for each change are in the project report (`projects/tactile-room-project-report.md` in the Project).

## 1.7 · 12 Nov 2026
- **Spoken names are clearer** (Chico, 12 Nov: "Tip" could barely be heard over the other sound): landmark names are spoken more slowly (rate 0.85; other hints 1.0) at full volume, and the shell's tone and crackle drop to about a fifth while any hint is spoken, then come back.
- **Landmarks:** "Tip" is now "Spiral tip" (PT "Ponta da espiral", DE "Spitze der Spirale"), a longer name that's easier to catch. New "Back tip" (PT "Ponta de trás", DE "Hintere Spitze") at the far end of the shell, where touching said nothing before; it's placed at the scan's point farthest from the spiral tip. "Opening" unchanged.
- **Size on the label:** "About 7 cm long", from Chico's measurement with a set square.
- No species, place or year on the label yet: the species is still being checked (see the project report).
- Tests: each landmark is touched from a view where it can be seen and must be spoken slowly while the shell's sound drops.
- 1.6 saved in `versions/v1.6-2026-11-12/`.

## 1.6 · 12 Nov 2026
- **Chico's scanned shell is the only shell** (his scan, 11–12 Nov): `assets/shell.glb` is his `shelljpg.glb` with the three textures reduced from 4096 to 2048 pixels for phones (about 270 MB of graphics memory down to about 67 MB; file 3.2 MB). Geometry unchanged: 96,566 triangles.
- The generated stand-in shell is gone from the page: its code, its text, its label and badge, and every comment about it (Chico, 12 Nov: "it should be my shell"). If the scan can't load, visitors see a plain message in their language ("The shell couldn't load. Check your connection, then reload the page."); the studio says why.
- New `room.json` with only what is known: name "Sea snail shell" (PT, DE), method "Photogrammetry: photographed and built by Chico Morais", credits. Species, place, year and size are left empty until checked. Two landmarks placed on the scan: Tip (point of the spire) and Opening (inside the mouth).
- No description written yet, so the Describe button is hidden until there is one, instead of doing nothing.
- **Dark | Light** (Chico, 12 Nov: the single "Light background" button didn't show which one was on): two buttons side by side, the one in use filled, like EN | PT | DE. Labelled "Background" for screen readers; in PT and DE too.
- **Language from the device** (Chico, 12 Nov): the page now checks all of the visitor's device languages in order and opens in the first one it speaks (before, only the first device language counted). A language picked on the page is remembered; `?lang=` in a link wins over both.
- Tests: new v1.6 suite (no generated shell anywhere, the scan, device languages, Dark | Light, messages); the others now run on the real scan and restore `room.json` after themselves.
- 1.5 saved in `versions/v1.5-2026-11-11/`. Earlier versions in `versions/` still show the generated shell: they are the record of how the room was made.

## 1.5 · 11 Nov 2026
- Published on GitHub Pages at https://tactileroom.chicomorais.com (11 Nov).
- Studio note no longer says "Only you see this": anyone who adds `#studio` to the address can open it, but changes made there stay in their own browser.
- New `docs/` folder for the project report, so the record lives with the code. `.DS_Store` removed and ignored.
- Fonts (Chico, 11 Nov: the old ones looked like generic AI-made pages): Syne for headings and buttons (made for Synesthésie, an art centre in Saint-Denis, near Paris); Inclusive Sans for reading text (designed for accessibility); Martian Mono, narrowed, for notes, numbers and labels. They are kept in `fonts/` on this site, so visitors' browsers never contact Google (in Germany, loading Google Fonts from Google's servers was ruled a GDPR breach: LG München, 2022). All three are under the SIL Open Font License; the licences are in `fonts/`.
- Turning (Chico, 11 Nov): over the shell's area, a two-finger swipe on a trackpad turns it (sideways) and tilts it (up and down); the mouse wheel does the same. Pinch on a trackpad, or Ctrl + wheel, zooms. Safari's own trackpad pinch and twist work too. Elsewhere on the page, scrolling works as before.
- The touch area (Chico, 11 Nov: the page doesn't scroll while a finger is on the shell's area, which could confuse blind visitors):
  - touching the area but not the shell: one soft sonar ping and a short vibration;
  - the first touch explains, spoken: "Touch area. The shell is to the left. To scroll the page, swipe outside this area." (in EN, PT and DE);
  - sliding off the area: two low ticks, a double vibration and "Edge of the touch area.";
  - for sighted visitors, the area's edge lights up while it is touched;
  - the help text under the shell says how to turn, zoom and scroll.
- Layout: "About this room" now lines up with the shell's column; the control panel grows with its content instead of scrolling inside the page; the sound chip and the stand-in label no longer wrap on phones.
- Tests: new v1.5 suite (fonts, trackpad, touch area, translations). 24 + 62 + 28 + 17 automated checks pass; axe finds no problems in either look, on desktop, tablet and phone, or in the studio.
- 1.4 saved in `versions/v1.4-2026-11-11/`.

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
