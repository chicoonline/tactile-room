# Tactile Room: build guide

**Version 1.10 (12 Nov 2026).** Live at https://tactileroom.chicomorais.com. Earlier versions are kept in `versions/`. See CHANGELOG.md.

**Look.** Dark by default (the deep-sea look). Visitors switch with **Dark | Light** at the top (the one in use is filled); the choice is remembered in their browser. Both looks meet the same contrast rules.

**Type (since 1.5).** Syne for headings and buttons, Inclusive Sans for reading text, Martian Mono for notes and numbers. The font files are in `fonts/` on the site itself, so visitors' browsers never contact Google.

**Vibration (Android phones, gamepads).** Off | Light | Strong in the side panel; Strong is the default. Choosing Light or Strong buzzes once, as a test. If even Strong's test buzz isn't felt: open the page in Chrome itself (not inside WhatsApp, Instagram or another app's browser); take the phone off silent and Do Not Disturb; check that vibration is on in the phone's sound settings. Browsers only allow vibration after the first tap on the page, so the very first stroke may be silent. iPhones can't vibrate from a web page at all.

**Turning.** Two fingers on a touchscreen or a trackpad, right-drag with a mouse, the mouse wheel, Q and E on a keyboard, or the turn buttons. Pinch, Ctrl + wheel, or + and − zoom.

Built 5 Nov 2026 for the OceanX Immersive Media application (cutoff 18 Nov, 05:59 Berlin).
Since 1.6 the page shows only your scanned shell (12 Nov). What's left is yours: the description, the facts on the label (species once checked, where and when you found it, its size), the sound tuning, more landmarks if you want them, and the test with people.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The whole page. You shouldn't need to edit it. |
| `room.json` | Your shell's settings: label, description, landmarks, sound. Edit it in VS Code, or let the studio write it. |
| `room.example.json` | Shows every setting, with notes. |
| `assets/shell.glb` | Your scan (2K textures, 3.2 MB). `description.mp3` goes here too if you record your voice. |
| `fonts/` | The three fonts and their licences (SIL Open Font License). |
| `versions/` | Every earlier version, exactly as it was. |
| `CHANGELOG.md` | What changed in each version, and why. |
| `docs/` | The project report, this guide, and `feedback-receiver.gs` (the script that puts form answers in your Google Sheet). |
| `CNAME` | Tells GitHub Pages to answer at tactileroom.chicomorais.com. Don't delete it. |

This build guide lives in the Claude Project (`projects/tactile-room-build-guide.md`).

**Your scan on the site (12 Nov).** `assets/shell.glb` is your `shelljpg.glb` with its three textures reduced from 4096 to 2048 pixels: three 4K textures need about 270 MB of graphics memory, which can crash cheaper phones; 2K needs about 67 MB and still looks sharp. The geometry, which makes the sound, is unchanged. Your 4K files stay in `photogrammetry shell`.

If the shell can't load, visitors see a plain message in their language; the studio (`#studio`) says why. There is no generated shell any more.

**What `room.json` says today, and what's left for you:**
- Name: "Sea snail shell" (EN), "Concha de caramujo marinho" (PT), "Gehäuse einer Meeresschnecke" (DE). Change it when the species is checked (iNaturalist, then WoRMS), and fill `scientific` then.
- `size`: "About 7 cm long" (your measurement, 12 Nov). `place` and `year`: empty until you've confirmed the beach (and whether shells may be taken there).
- `method`: "Photogrammetry: photographed and built by Chico Morais". Add the camera and software if you like.
- `description`: empty, so the Describe button stays hidden. Write it in all three languages and it appears.
- `about`: empty. `credits`: concept and scan by you, code with AI assistance, three.js, the fonts.
- Three landmarks, placed on your scan: **Spiral tip** (the point of the spire), **Back tip** (the far end) and **Opening** (inside the mouth). Check them in the studio (orange dots) and add others there: touch the spot, type a name, press Add. Names of two or three words are easier to catch than one short word.
- Landmark names are spoken more slowly than other hints, and the shell's sound drops while anything is spoken.

**Language.** The page opens in the first of the visitor's device languages that it speaks (English, Portuguese, German); otherwise English. A language the visitor picks is remembered, and `?lang=de` in a link wins over both.

## Capturing the shell (photogrammetry)

**Which camera.** Both work; the computer does the 3D part either way (Object Capture on your Mac).
- **Nikon D610 + 50 mm (first choice, 11 Nov).** Every photo comes out the same, with more detail.
  - Stand about 60 cm away and use f/11, so the whole shell is sharp front to back. At 45 cm and f/8 only about 4 cm of it is.
  - ISO 100, M mode, shutter set by the histogram.
  - Turn on exposure delay mode (or mirror-up) and the 2-second timer.
  - JPEG Fine with fixed daylight white balance and the Neutral Picture Control: no RAW conversion needed.
  - Focus manually once per turn, using magnified Live View.
- **iPhone 15 Pro (backup, if time runs out).** Put it on the tripod with a phone clamp and use the main camera at 25–40 cm.
  - Turn off Macro Control (Settings › Camera), or it switches lenses when you get close.
  - Long-press to lock focus and exposure before each turn.
  - Note that the iPhone processes each photo slightly differently, which is less consistent for photogrammetry.
- **Don't use** the 70–200 mm (it can't focus closer than about 1.4 m, so the shell would be tiny), the 14–24 or the 24 mm (too wide, distortion), or the DX lenses on the D610 (they crop the image).

**The set.** Foldio3 with the black backdrop, the turntable (it doesn't need covering), the top light on, and the Halo Bars on both sides at shell height, angled slightly towards the front. Dim them if the glossy orange opening shows hard highlights. Keep the light exactly the same for the whole capture. Take one photo of the empty set first.

**Angles.** Keep the camera still and turn the shell.
| Turn | Camera height | Photos |
|---|---|---|
| 1 | Low, about 10–15° above the table | 24–36 (a small turn each time) |
| 2 | Middle, about 35–45° | 24–36 |
| 3 | High, about 60–70° | 24–36 |
| 4–5 | Shell flipped (opening up, putty underneath): low and middle | 24–36 each |

That's about 120–180 photos, overlapping by more than half between neighbours. Keep the zoom, focus and exposure the same within a turn. Do a quick test with the worn shell first (one turn), then process it: if that works, shoot the big one.

**Processing.** On the Mac, create the model from the photos with Object Capture (Reality Composer Pro, or another Object Capture app). Export USDZ or OBJ, import it into Blender, clean off the turntable, and export GLB as described below.

**Tutorials.** Apple, ["Meet Object Capture for iOS" (WWDC23)](https://developer.apple.com/videos/play/wwdc2023/10191); Culture Digital Skills, [photogrammetry setup](https://culturedigitalskills.github.io/2024-digitisation-3d-photogrammetry/photogrammetry-setup.html); KIRI Engine, [iPhone LiDAR object capture guide](https://www.kiriengine.app/blog/iphone-lidar-object-capture-guide).

## Friday: from scan to working page (about 1 hour)

The dossier gave Friday 4–5 hours for building the room. That part is done, so Friday is now tuning.

**1. Export the scan from Blender**
- File › Export › glTF 2.0.
- Format: **glTF Binary (.glb)**.
- Include: Selected Objects (select only the shell, not the turntable or backdrop).
- Data › Mesh: tick **Apply Modifiers** (so the Decimate step is kept).
- Data › Compression: **off**.
- Aim for under 100,000 faces and under about 15 MB. The studio warns you above 150,000 faces.

**2. Open the studio**
- Open the preview link (or your published page) with `#studio` at the end of the address.
- Drop the `.glb` onto the shell, or use "choose one". The file stays in your browser; nothing is uploaded.

**3. Fix the orientation.** Use Turn X / Turn Y / Turn Z until the shell sits the way you'd hold it, tip up if it has one.

**4. Tune the sound, with headphones on.** Start with the defaults and change one thing at a time.

| Setting | What it changes | Start at |
|---|---|---|
| Pitch follows | "How far the surface sticks out", or "Height in the room" (up = higher note) | Sticks out |
| Lowest / highest note | The pitch range | C3 to A5 |
| Five-note scale | Snaps pitch to a pentatonic scale: more musical, less exact | On (since v1.2) |
| Ridge sensitivity | How easily crossing a ridge makes a click | 55% |
| Tone / click / water volume | Balance between the three sounds. Water is off since v1.2; raise it only if testers lose the shell | 70 / 55 / 0% |
| Scan smoothing | Removes scan noise before ridges are measured. Raise it if the whole shell crackles; lower it if real ridges disappear. Press "Re-analyse surface" after changing it | 2 |
| Swap ridges and grooves | Use only if ridges sound dull and grooves sound bright | Off |
| Vibration strength | How strongly the shell vibrates under the finger (Android phones and gamepads). 0% turns it off for everyone | 70% |

Turn on "Show the sound map" while tuning: cyan is a ridge, coral is a groove, lighter is a higher note.

**5. Add 2–3 landmarks.** Touch a spot, type a name, press "Add at the last touched spot". Good ones: the tip, the opening.
Don't mark the roughest area. Sunday's test asks testers to find it on their own.

**6. Fill in the label and the description.**
- Label: name, scientific name (only if you checked it on WoRMS or iNaturalist), where and when you found it, real size, how you made the model.
- Description: paste your checked text. If you record your own voice, put the file in `assets/` and type its path (for example `assets/description.mp3`).
- About and credits: these appear under the room. Your words.

**7. Save.** Press "Copy room.json", paste it into a new file called `room.json` next to `index.html`.
The studio also remembers your settings in that browser, so a reload doesn't lose them. "Reset to the published file" clears that memory.

## Trying it on your Mac first (optional)

The page reads `room.json` only when it's served by a web server, not when you double-click `index.html`. In Terminal:

```
cd path/to/tactile-room
python3 -m http.server 8000
```

Then open http://localhost:8000/ (or http://localhost:8000/#studio). Stop the server with Ctrl+C.

## Updating the live site (VS Code)

The site is the `tactile-room` folder on your Mac (repository chicoonline/tactile-room). Whatever is committed there goes live.

1. Changed files arrive in that folder: from Claude, or your own edits.
2. In VS Code, open **Source Control** (the branch icon, or Ctrl+Shift+G). Click each changed file to see what changed: red is removed, green is added. Don't commit what you don't understand; ask first.
3. Write a short message saying what and why, for example "1.5: own fonts, trackpad turning, touch-area cues".
4. **Commit**, then **Sync Changes**. GitHub Pages republishes in a minute or two.
5. Check https://tactileroom.chicomorais.com on your phone over mobile data, in a private tab, so nothing old is cached. Check: sound starts on the first tap, dragging works, the description plays.
6. If something breaks, every earlier version is in `versions/` and in the Git history.

When the scan is ready, `room.json` goes next to `index.html` and `shell.glb` into `assets/`, then the same steps.

The studio opens for anyone who adds `#studio` to the address, but changes made there stay in that person's browser. Visitors only see what's in `room.json`.

## Saturday: the description (about 2 hours)

The description is the part reviewers can check most easily, so every claim in it must be one you've confirmed.

**1. Photos for the model.** Choose 3–4 of your own photos of the real shell: top, opening, side, and one next to a ruler. Use JPEG.

**2. A first draft from a local model (optional).** With [Ollama](https://ollama.com) on your Mac:
- `ollama pull qwen3-vl:8b` (about 6 GB, fits a 16 GB Mac; `qwen2.5vl:7b` is the alternative, according to [InsiderLLM's guide](https://insiderllm.com/guides/vision-models-locally/), July 2026).
- Run it with the photo path inside the prompt, for example: `ollama run qwen3-vl:8b "<prompt below> ./top.jpg"`.
- Prompt to adapt: *Describe only what you can see in this photo of a seashell, for someone who cannot see it. Cover the overall shape, how many turns the spiral has, the opening, the surface texture (ridges, bumps, smooth areas) and the colours. Give sizes only relative to the ruler. Do not name the species or where it was found. Mark anything you are unsure of with "(unsure)".*
- Vision models miscount and invent details, so treat the output as a list of claims to check, not as text.

**3. Check every claim.**

| Claim from the draft | Checked against | Keep, change or cut |
|---|---|---|
| e.g. "about seven turns" | Count on the shell itself | |
| e.g. "ridges run along the spiral" | Run a finger along it | |
| Species or genus | iNaturalist (upload a photo; wait for community IDs), then the accepted name on WoRMS (marinespecies.org) | If unsure, use the genus or "a sea snail's shell" |
| Where and when you found it | Your trip photos (date and place in the files) | |

**4. Write it yourself.** 60–90 seconds spoken, which is roughly 150–220 words. Shape first, then touch and texture, then where it came from. Then the Portuguese version, your own or DeepL plus your edit.

**5. Record.** Your own voice is better than text-to-speech. Save as `assets/description-en.mp3` and `assets/descricao-pt.mp3`, and set them in room.json (see "English and Portuguese"). The written text stays on the page as captions.

**6. AI-use log.** One table, kept as you go. It's the evidence for the fellowship's "document AI use" ask.

| Date | Tool | What it did | What it got wrong | What I changed |
|---|---|---|---|---|
| 5 Nov 2026 | Claude | Wrote the room's code from my build plan | | |
| [7 Nov] | [model] | Drafted a description from 4 photos | | |

## Feedback form (since 1.9)

At the end of the page, a short form asks, in the visitor's language:
- how they describe themselves (blind, partially sighted, sighted, or prefer not to say);
- whether they used a screen reader or magnification, and which;
- what they noticed first;
- whether the sounds, the vibration and the spoken hints helped;
- what to change first, and which other objects they'd like to explore this way;
- whether you may quote them (without their name), and, if they like, a contact for the next version.

Everything is optional except the agreement. A second box, unticked by default, adds anonymous details about the visit: device, system and browser, how long they stayed, how they explored (touch, mouse, keyboard, gamepad), the landmarks they found and their settings. Nothing leaves the page until they press Send. Since 1.10 the form opens in a pop-up from "Tell me how it went" (in the side panel and at the bottom of the page). **For emails:** a link ending in `#feedback` (for example `https://tactileroom.chicomorais.com/?lang=de#feedback`) opens the form straight away; send it only to people who have already tried the room.

**The form stays hidden until `room.json` has an endpoint.** To switch it on (about 5 minutes, once):
1. In Google Drive, make a new Google Sheet, for example "Tactile Room feedback".
2. In the sheet: **Extensions → Apps Script**. Delete what's there, paste all of `docs/feedback-receiver.gs`, and save.
3. **Deploy → New deployment**, click the cog, choose **Web app**. Execute as: **Me**. Who has access: **Anyone**. Deploy.
4. Google asks you to authorise it. Choose your account. If it says "Google hasn't verified this app", choose **Advanced → Go to … (unsafe)**: that's normal for a script you wrote yourself.
5. Copy the **Web app URL** (it ends in `/exec`). Open it in a browser once: it should say "Tactile Room feedback receiver is running."
6. In VS Code, put it in `room.json`: `"feedback": { "endpoint": "https://script.google.com/macros/s/…/exec", "contact": "an email you're happy to show" }`. Commit and sync.
7. Test it: open the live page, answer one question, tick the agreement, press Send. A row appears in the sheet within seconds.

- `contact` is shown in the privacy note as the address for deletion requests, so use one you're happy to make public.
- If you change the script later: **Deploy → Manage deployments → edit → Version: New version**. The URL stays the same.
- The page can't confirm that the row arrived (Google answers from another address, which the browser hides from the page). It says "Thank you" once the answers have left the browser, and shows an error if the connection failed. Check the sheet.
- Asking how someone describes their sight is health data under the GDPR. That's why there's an agreement box and no name field (POTENTIAL: this isn't legal advice; if an association asks about data protection, show them the privacy note).

## Sunday: the test with two people

The studio has a test mode, so the test produces numbers you can quote in your essays.

1. Open your published page on your laptop with `#studio`. Headphones or a good speaker.
2. Press **Start test**, then **Hide screen** (the stage goes black; touch still works).
3. Give the task from the dossier: "Find the tip of the shell. Where is it roughest?"
4. When the tester says they found the tip, press **M** (or "Mark found"). Type short notes as you watch ("stalled near the opening").
5. Press **End test**, then **Copy log (CSV)**, and paste it into a sheet. Each row has the time, what happened (entered or left the shell, landmark, key step, found, note) and where.
   Since v1.3 every test also saves itself in that browser while it runs, so a reload doesn't lose it. **Copy all saved logs (CSV)** copies every saved test, each with its session, date and version. Copy them before clearing the browser's data. **Delete saved logs** needs a second press.
   The log records movements, not opinions: take notes and, with consent, record audio (see the project report's session plan).
   Since 1.9 each log starts with a **device row** (phone or computer, system, browser, whether it can vibrate, settings) and records changes to the vibration level. Whether a screen reader is on can't be detected: ask.
6. Fix the two biggest problems only.

Before the test:
- If the tester uses a screen reader, turn **Spoken hints** off. Their screen reader reads the hints instead.
- Bring an Android phone. On an iPhone testers get sound only; on Android, sound and vibration. Note whether vibration helped them find the ridges: that's evidence for the Tactile Earth idea.
- iPhone VoiceOver takes over touch gestures, so the drag doesn't reach the page. Ask the tester to try touch with VoiceOver off, or use the laptop and the arrow keys. Note what they prefer; that's a finding in itself.
- Possible next experiment (not before the deadline): one tester with "sticks out", one with "height in the room". Two people won't prove anything, but it's a good question for the interview.

## How it works (so you can explain every part)

1. **The model.** Photogrammetry turns your photos into a mesh: about 100,000 small triangles.
2. **Reading the surface.** When the page opens, it measures every point of the mesh twice:
   - how far it sticks out from the shell's centre;
   - how sharply the surface bends compared with the area around it. Bending outwards is a ridge, inwards a groove. Light smoothing first removes scan noise, so pores in the scan don't count as ridges.
3. **Finding your finger.** A ray goes from the camera through your fingertip into the scene. Where it meets the shell, the page blends the values from that triangle's three corners.
4. **Making the sound** (Web Audio, built into every browser; no sound files):
   - pitch = how far the point sticks out;
   - brightness of the tone = ridge or groove;
   - crossing ridges triggers short clicks, so moving faster gives more clicks, like running a fingernail over a real shell's ribs;
   - off the shell: silence since v1.2 (the water sound is off by default; the studio can turn it back on);
   - a short rising blip when you reach the shell, a falling one when you leave it, a soft low knock at a landmark (since v1.2; it was a bright three-note chime that sounded like a game coin and covered the spoken hints);
   - left and right: the sound pans with where your finger is on the screen;
   - finger still = silence.
5. **Keyboard.** The arrow keys move a fingertip across the picture, using the same ray as touch. Q and E turn the shell under it. Enter speaks what's under the fingertip ("on a ridge, near the tip").
6. **Vibration** (Android phones and gamepads; iPhones can't vibrate from a web page):
   - phone: a short pulse each time you cross a ridge, a fine rhythm on sharp ridges, a tap when you reach the shell, a double tap at a landmark. Phones can only switch vibration on and off, so texture comes from rhythm, not strength;
   - gamepad: two motors with strength. The fast motor follows ridges (strong) and grooves (almost nothing), the slow one follows how far the surface sticks out, so it reads like the pitch. Off the shell, a slow soft swell for the water;
   - finger still = no vibration, like the sound. Visitors can switch it off; the choice is remembered in their browser.
7. **Gamepad.** Left stick moves the same fingertip as the arrow keys (hold the left trigger for small steps), right stick turns the shell, A describes the spot, B plays the description, Y goes back to the middle, LB and RB turn it in steps. The page announces the gamepad when it connects. Sound still needs one key press or tap first: browsers don't count a gamepad button as permission to play sound.
8. **Access.** The room works without sight (sound, spoken hints, screen-reader support), without hearing (the "What you hear" trace and the sound map show the sound), with reduced motion settings (no auto-rotation, no ripples) and on any phone without an app.

Prior art to name on the project page: [ShapeSonic](https://cragl.cs.gmu.edu/shapesonic/) (SIGGRAPH Asia 2023) uses the same idea of sound for touching 3D shapes, in a VR headset with abstract shapes. Your difference: a real ocean object from your own travels, in a plain browser, with a checked description, tested with people.

## Known limits

- **Where it has been tried.** You test every version yourself on a computer, an iPhone and Android phones. On top of that, 199 automated checks run in Chrome on a server, with simulated phones (they prove the page *asks* for vibration, not that a phone motor moves). Not yet tried with a gamepad, or by a blind person with a screen reader. (GAP)
- **Android vibration not felt yet** (12 Nov: your LG K9 and three friends' Android phones). Being checked with `vibration-check.html`; see the project report.
- **Vibration:** Android Chrome and gamepads in Chrome or Edge only. Not on iPhones (no browser there can vibrate) and not in Firefox. How it feels depends on the phone's motor: tune the strength on your own Android phone if you have one.
- **iPhone silent switch.** The page asks iOS to play sound anyway; on older iOS versions it may stay silent. Tell testers to flip the switch.
- **Old browsers.** The page needs iOS 16.4 or newer (Safari 16.4+). Older devices show a message instead of the shell.
- **Inside the opening.** Touch can reach what the camera sees. Turn the shell to explore the inside.
- **Voices differ by device.** Without a recording, the description uses the device's own voice. Record your own for a consistent result.
- **Draco-compressed files** don't load in the Claude preview. Export without compression.

## AI use (facts for your AI-use log)

- The page's code was written by Claude (AI) on 5 Nov 2026, from the build plan in your Tactile Room dossier, and tested with automated browser checks.
- Yours: the concept and its lineage (the PUC-Rio museum-touch idea, Pele Bruta), choosing and scanning the shell, the orientation, the sound tuning, the landmarks, the checked description, the test with people and the decisions after it.
- A credit line that states this plainly: "Code written with AI assistance (Claude)."
- Read "How it works" above until you can explain each step in your own words. An interviewer may ask.

## room.json reference

See `room.example.json`. Landmark positions are in the model's own space, so they stay put if you change the orientation. Use the studio rather than editing positions by hand.

**English, Portuguese and German.** The page has an EN / PT / DE switch at the top. It opens in Portuguese or German for visitors whose browser is set to that language, or with `?lang=pt` or `?lang=de` at the end of the address, and it remembers the choice.
- German (added in v1.3) is a draft too: check it, especially the name "Tastraum". "Muschel" is the everyday word for any shell; strictly, a sea snail's shell is a "Schneckenhaus".
- Your own German texts: switch to DE in the studio and type them. In room.json they sit beside the others, for example `"name": { "en": "Shell", "pt": "Concha", "de": "Muschel" }`.
- Spoken hints use a German voice when one is installed (most phones and Macs have one).
- Interface and spoken hints are already translated (Brazilian Portuguese). **The Portuguese is a draft: read it and correct it before publishing**, especially the name "Sala Tátil".
- Your own texts (label, description, about, credits, landmark names) can be in both languages: in the studio, switch to PT and type the Portuguese version. The English stays as it was.
- In room.json a bilingual field looks like `"name": { "en": "Cowrie", "pt": "Búzio" }`. A plain text (`"name": "Cowrie"`) shows in both languages.
- A recorded description can be per language too: `"audio": { "en": "assets/description-en.mp3", "pt": "assets/descricao-pt.mp3" }`.
- Spoken hints use a Portuguese voice when one is installed on the device (most phones and Macs have one).
