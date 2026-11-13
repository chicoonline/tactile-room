# Tactile Room: changelog

Each version is kept as it was, so the development can be compared. Reasons for each change are in the project report (`projects/tactile-room-project-report.md` in the Project).

## 1.15 · 13 Nov 2026
- **The shell plays as it turns** (Chico: spinning it fast while holding a finger still felt like a musical instrument, but the sound got stuck). The room used to read the surface only when the listening finger moved, so a still finger kept the last note while the shell turned under it. Now it keeps reading the surface whenever the shell turns: by trackpad, wheel, another finger, the turn buttons or a gamepad. The faster it spins, the more it sounds.
- **One finger listens while another turns** (touch screens). A finger that has been on the shell for a moment keeps listening when another finger lands; the new finger turns the shell, and two more fingers pinch to zoom. Two fingers that land together still turn and pinch as before.
- The help under the shell says so, in EN, PT and DE.
- Tests: new v1.15 suite (a still mouse while the trackpad turns, listening and turning with two fingers, three fingers, two fingers together, the help text).
- 1.14.1 saved in `versions/v1.14.1-2026-11-13/`.

## 1.14.1 · 13 Nov 2026
- **The text under the shell lines up** (Chico's screenshot: the description, the keys and the vibration note each had a different width). Everything in the two panels now shares one measure, about 80 characters of the description, so the left and right edges match in all three languages.
- Tests: the v1.14 suite checks the edges at 1540 and 1200 pixels, in EN, PT and DE.
- 1.14 saved in `versions/v1.14-2026-11-13/`.

## 1.14 · 13 Nov 2026
- **The shell starts larger** (Chico: start at a larger scale, without spilling over the edges; a friend found the vibration more precise zoomed in). The frame now fits the shell itself instead of the corners of its bounding box: about 1.3× larger, and every part stays inside the frame however it's turned.
- **Vibration tip** (from a friend's phone, 13 Nov: no vibration until she turned on Haptic feedback): "Feel nothing? Choose Strong, and turn on Haptic feedback in your phone's settings (search for "vibration"). Zoom in for finer detail." Same tip on the vibration check page. EN, PT, DE.
- Tests: new v1.14 suite (the frame fits the shell, about 1.3× larger, six turns on desktop and phone without leaving the frame, the tip in three languages).
- 1.13 saved in `versions/v1.13-2026-11-13/`.

## 1.13 · 13 Nov 2026
- **Screen-reader switch first on the page** (Chico: spoken hints should start off for screen-reader users). A browser can't tell whether a screen reader is running, so the first thing on the page is a button, hidden until it gets focus like a skip link: "Using a screen reader? Switch off this page's own voice, so your screen reader reads the hints instead." It works both ways and says what it did.
- **Spoken hints are remembered** in the browser, from the switch or the side-panel button.
- **`?hints=off` in a link** starts with spoken hints off (and remembers it), for links sent to screen-reader users; `?hints=on` switches them back on.
- Tests: new v1.13 suite (first in the page and in the tab order, hidden until focused, switches and announces, remembered after a reload, both buttons in step, `?hints=off` and `?hints=on`, German and Portuguese, axe).
- 1.12 saved in `versions/v1.12-2026-11-12/`.

## 1.12 · 12 Nov 2026
- **The description, from Chico's own check** of a local AI's description (Qwen 3.5 9B, given his four photos): about 7 cm long and 6 cm wide, oval with a point at each end, six turns, knobs on the shoulder, a fine net where low ribs cross the spiral ridges, hundreds of thin brown lines that fade into the cream near the top, turn dotted, then strong, and run on deep inside the opening, which is pinkish white to salmon with brown at the inner lip. Label size updated to 7 × 6 cm.
- **No more empty gap** (Chico): the description and the keys now sit under the shell instead of in the side panel, so opening them fills the shell's column. The description keeps its paragraphs.
- Tests: description content, layout with the description open, line length. The zoom checks now compare the camera's target, which doesn't depend on the test machine's frame rate.
- 1.11 saved in `versions/v1.11-2026-11-12/`.

## 1.11 · 12 Nov 2026
- **Gamepad zoom** (Chico, on an 8BitDo Pro 2 in Chrome on a Mac, where the vibration works): L2 zooms out, R2 zooms in; the harder you press, the faster. Small steps now come from a gentle push on the stick (it's analog) or the d-pad, since L2 used to be the small-steps button.
- **More natural voices** (Chico: "super robotic"): the room now prefers Premium, Enhanced, Natural, Siri and Google voices and never picks the joke voices or the old robotic ones, which some systems list first.
- **Description corrected from the photos:** cream with rows of brown dashes outside; the opening smooth and glossy, salmon orange at the inner edge, with darker brown bands deeper in. Checked against Chico's four photos after a local AI (Qwen 3.5 9B) described the shell with an invented size and a white inside.
- **Public copy of the report:** `docs/project-report.md` now leaves out testers' details, the benefits mention and the exact place of the find. The full report stays private. (Earlier versions remain in the Git history.)
- Tests: new v1.11 suite (trigger zoom in and out, a lightly resting trigger does nothing, the zoom limit, voice choice in three languages, the description). The state hook also reports the camera's zoom target.
- 1.10 saved in `versions/v1.10-2026-11-12/`.

## 1.10 · 12 Nov 2026
- **The form opens in a pop-up** (Chico: keep the page clean). "Tell me how it went" in the side panel and at the bottom of the page opens it; Close or Esc closes it, and what was typed stays until it's sent. A link ending in `#feedback` opens it straight away, for emails.
- **The shell's description is back** (Chico: the species is confirmed, so the description was missing). Describe (or D) reads it aloud in the page's language: the shape, walked through with the landmark names, then where the species comes from and where Chico found it. Draft by Claude from checked facts (size, landmarks, iNaturalist, MarLIN); Chico to check the shape details against the real shell.
- **No About box; credits are one line at the bottom** (Chico): "Concept and scan: Chico Morais. Code written with AI assistance (Claude)." The fonts and three.js are no longer named on the page; the fonts' licences stay in `fonts/` next to the font files, as their licence asks.
- Tests: the form suite now checks the pop-up (opens with focus on its title, the page behind can't be used, Esc and Close, focus back to the button, answers kept, `#feedback` link, fits a phone, title stays at the top while scrolling, axe in both looks and on a phone).
- 1.9 saved in `versions/v1.9-2026-11-12/` (with its own room.json, without the form's address).

## 1.9, later the same day (12 Nov 2026): content and a check page, no code change
- **Label:** *Rapana venosa* (veined rapa whelk), found on the Black Sea coast, Romania, 2025. The iNaturalist community confirmed the species (Research Grade, 3 of 3 identifications); Chico agreed.
- **`vibration-check.html`:** a one-minute page that shows, on the phone itself, whether the browser can vibrate, whether the page counts as tapped, and whether each vibration request was accepted. For finding out why Android phones felt nothing, before changing any code.
- Build guide: corrected "not yet tried on a real phone". Chico tests on a computer, an iPhone and Android phones.
- **Feedback form switched on:** room.json now points to the script behind the "Tactile Room feedback" sheet in Chico's Google Drive.

## 1.9 · 12 Nov 2026
- **Feedback form at the end of the page** (Chico, 12 Nov: in case no blind testers can meet before the OceanX deadline, people should be able to try it online and answer). Nine short questions in the visitor's language, all optional except the agreement; large targets, a label on every field, no grids or sliders. A "Tell me how it went" link in the side panel leads to it.
- **The first question asks how people describe themselves** (blind, partially sighted, sighted, prefer not to say), not how much they see (Chico: that can feel offensive).
- **Consent:** nothing is sent without ticking the agreement; a second box, unticked by default, adds anonymous details about the visit (device, system, browser, how long, how they explored, landmarks found, settings). No names asked; the privacy note says where answers go.
- Answers go to a Google Sheet in Chico's account through a small Google Apps Script (`docs/feedback-receiver.gs`). The form stays hidden until `room.json` has the script's address (`feedback.endpoint`).
- **Test log:** each test now starts with a device row (phone or computer, system, browser, whether it can vibrate, settings) and records changes to the vibration level. A browser can't tell whether a screen reader is on, so that stays a question.
- Tests: new v1.9 suite (form hidden without an endpoint, consent, what is sent with and without the visit box, failure message, EN/PT/DE, 44 px targets on a phone, axe in both looks, device row). The receiver script is tested against mock Google services.
- 1.8 saved in `versions/v1.8-2026-11-12/`.
- **Saved versions open properly again:** 1.6, 1.7 and 1.8 each get the `room.json` they had (pointing to the scan in `assets/`), and 1.5–1.8 load the fonts from the site's `fonts/` folder. Only these paths changed; the code is as it was. Before, they showed "The shell couldn't load" when opened from `versions/`.

## 1.8 · 12 Nov 2026
- **The intro is about objects, with the shell as the first one** (Chico, 12 Nov: the project is a way to explore objects through sound and vibration, not only a shell). EN: "Explore objects through sound and vibration, with or without seeing them. The first is a sea snail shell: press and drag across it, or select it and use the arrow keys." Same in PT and DE; the page description for search engines too.
- **Vibration: Off | Light | Strong** (Chico, 12 Nov: nothing felt on an LG K9). The short taps of 1.1–1.7 (about 5–15 ms) are likely too short for the cheaper vibration motors in older phones. Strong, now the default, makes every pulse 2.5 times longer and at least 30 ms (20 ms inside the fine rhythm on sharp ridges). Light keeps the short taps. Choosing Light or Strong gives a test buzz at once (60 or 160 ms), so you know straight away whether the phone vibrates at all. The choice is remembered in that browser.
- Tests: Strong pulses at least 20 ms, Light under 20 ms, the test buzzes, the new intro in three languages.
- 1.7 saved in `versions/v1.7-2026-11-12/`.

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
