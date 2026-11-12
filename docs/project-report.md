# Tactile Room: project report (relatório de projeto)

Working record of the whole process: research, decisions, versions, tests and ideas. It gathers the material; the final report text is yours. Every project gets one with the same headings. Last updated 12 Nov 2026 (v1.7).

## 1. Summary
- A real shell, scanned in 3D, that people can explore without sight on an ordinary phone or computer. Sound and vibration follow its surface, and spoken hints say where you are.
- In English, German and Portuguese.
- First piece of the "Where did this come from?" series (ideas/where-did-this-come-from.md). Sample project for the OceanX Immersive Media application (deadline 13 Nov 2026).
- Current version: 1.13 (13 Nov 2026): your scanned shell, three landmarks, its spoken description, vibration levels, gamepad zoom, and a feedback form (in a pop-up) for people you can't meet.
- **Public page: https://tactileroom.chicomorais.com** (GitHub Pages; repository chicoonline/tactile-room; you set it up yourself in VS Code on 11 Nov).
- Claude copy (private): https://claude.ai/artifact/GnGn7AJvYDvBfsyKX7oSQ3. First stage, frozen: https://claude.ai/artifact/QqJCYbJ4kwvoKFm2H3HPdc

## 2. Origins
- 2012, PUC-Rio: your first final-project idea was a way for museum visitors to experience artworks by touch, using 3D scanning and haptic technology. You changed direction when you found similar projects (portfolio-editorial-spec.md, Pele Bruta "Where it began").
- 2014: Pele Bruta (the body, perception, exhibition design).
- Nov 2026: the Tactile Room brings the 2012 idea back, with a shell from your own travels.
- The darkness dive in Abismo Anhumas is a possible personal origin (stories/diving-and-ocean.md). Frame it as the question it raised for you, not as knowing what blindness is like (see 3.3).

## 3. Research
### 3.1 Prior work (checked 9–10 Nov 2026)
| Work | What | People | Real objects? | Outcome | Limits |
|---|---|---|---|---|---|
| ShapeSonic (Huang et al., SIGGRAPH Asia 2023) | Sound when fingertips touch 3D shapes, in a VR headset | 15 sighted, 6 blind or visually impaired | No: geometric shapes | Users touched points "quickly and relatively accurately" | Lab tasks; VR headset; no results published separately for the blind participants |
| Coughlan & Miele (Smith-Kettlewell, ASSETS 2017) | Spoken labels when a finger touches a hotspot on a physical model | 3 blind participants; focus group of 5 blind adults | Yes: 3D-printed airplane and Chrysler Building, an audio mixer | Enthusiasm; "natural", "responsive" | Very small and qualitative. Participants asked for a cue when leaving a hotspot and better position feedback |
| Giudice et al. (University of Maine, ASSETS 2012) | Vibration plus audio on a touchscreen | Study participants (count in the paper) | No: bar graphs, letters, shapes | Error performance similar to printed tactile graphics | 2D only |
| Wong et al. (Lancaster, 2018) | Online shopping with a haptic device (Novint Falcon), voice cart and payment | Not stated in the abstract | Products, through a special device | Usable to "haptically evaluate online products" | Needs special hardware |
| **Tokida et al. (CHI 2026, extended abstract)** | **Shopping: a 3D product model in phone AR. Vibration grows stronger as the phone nears the object; material and parts are spoken. Native iOS app (Core Haptics)** | 7 blind or low-vision people interviewed; 4 in the pilot | Product models: bag, microwave, chest of drawers, hoodie | Vibration plus speech scored best for understanding. Vibration conveys shape and size, but not material. "Being able to touch the product was moving" | 4 participants, "directional"; materials written by hand |
| ImageExplorer (University of Michigan, 2022–23) | Touch exploration of photos with AI-generated descriptions | Visually impaired users | Photos | Users could better judge whether AI captions were accurate | Photos, not 3D; AI simplifies |
| Be My Eyes + InnoSearch (May 2025) | AI-assisted accessible shopping inside the Be My Eyes app | Real users (US, CA, UK, AU) | No touch or 3D | Real product, in use | Search and descriptions only |
| NASA "A Universe of Sound" (Arcand et al., 2024) | Space images turned into sound | 3,184 people, sighted, blind and low-vision | No (listening only) | Learning gains, positive responses | No touch |

### 3.2 Is there a gap?
- **ShapeSonic:** you were right. It tested geometric shapes in a lab, not real objects in real use.
- **The closest work is now the 2026 CHI shopping prototype.** Phone vibration plus speech on 3D models of real products, with blind users, is not new.
- **What remains (POTENTIAL).** I found no study of a scanned real *natural* object, explored in a plain browser (no app) with sound as well as vibration, with AI questions about the spot you touch, and tested in real use. Check Google Scholar and the ACM Digital Library before claiming it, and say "I found no study of…", never "first".
- All the evidence is small (4–15 people), in short sessions, with no long-term use. Your two tests won't prove usefulness either; they show whether it's worth continuing.

### 3.3 Sound, vibration and ethics
- The v1.0 sounds were Claude's starting choices from common practice, not researched with blind people. That's your observation (9 Nov) and it's correct.
- Blind and sighted listeners mostly agree on which way pitch should go, "with some notable exceptions" (Walker et al.).
- Natural sounds ("auditory icons") are learned faster, but can get irritating when repeated (Amer & Johnson, 2018).
- No study found on sounds blind people already find familiar (GAP). Ask testers.
- **Background sound (your question, 10 Nov).** The 2017 participants asked for a cue *when leaving* a spot: an event, which the falling blip already gives. The 2026 prototype used vibration that grows stronger *as you approach*. Neither tested a continuous background sound, so the evidence doesn't decide it. Decision for now: water off by default, and compare on and off in the tests.
- Vibration on the web:
  - Android Chrome: on/off timing only.
  - Gamepads: strength, in some browsers.
  - iPhone: none from a web page. The 2026 prototype used a native app with Core Haptics.
- Your observation (9 Nov): in videos of blind people using iPhones, vibration is essential.
- Ethics: blindfold "simulations" made people judge blind people as less capable (Silverman et al., 2015). Design with blind people, not as a simulation for sighted people.

### 3.4 Uses beyond the museum (your idea, 10 Nov)
- **Online shopping** (a blind person exploring a sneaker before buying). It's been prototyped (Wong 2018; Tokida 2026) but isn't in shops yet. The 2026 finding fits your AI idea: vibration gives shape, not material, so a spoken answer about the texture under the finger fills exactly that gap.
- Others to consider later: museum collections online, teaching (biology, geography), Tactile Earth.

### 3.5 Visual design (v1.4, 11 Nov)
- Your direction: "Deep-Sea Sonar Studio & Acoustic Lab". References: Ableton / Max/MSP, the NASA sonification portal, bioluminescent deep sea, Dark Matter Berlin / WHITEvoid. Inspiration: two Gemini mockups (desktop and phone) in the inspo folder.
- Your rule: nothing that makes it worse to use for the look, above all for blind users.
- What was taken: the dark background with sonar rings, the open stage with a halo, glass panels, cyan / coral / amber, the glowing trace, Space Grotesk and JetBrains Mono.
- What was left out, and why:
  - Invented readouts in the mockups (depth, pressure, "system online") and decorative sliders. A screen reader reads them aloud as if real.
  - Text floating over the 3D image. Its contrast would change as the shell turns.
  - Blur over the 3D image. It's redrawn every frame, which is slow on cheap phones.
- What stayed for access: Atkinson Hyperlegible Next for reading text; the same page order; contrast 4.5:1 or more for text in both looks (most dark text above 8:1); 3:1 for control borders; 44 px targets; solid panels and no glow when the system asks for less transparency or more contrast.
- Dark is the default for everyone; a visible switch gives a light background. Some low-vision people read better on dark, others on light. Ask testers (5.5).
- **Your verdict on 1.4 (11 Nov): it still looked like generic Claude UI** (same fonts, everything in boxes, About not aligned). Why: the restyle kept the old layout and only changed colours and fonts; the mockups' look came mostly from invented readouts; mood words give colours, not composition. Lesson: design the screens yourself (Figma, with real data) and have them built in one round. Decision: keep 1.4's colours, change the fonts now, redesign after OceanX.
- **1.5 fonts:** Syne for headings and buttons (made for Synesthésie, an art centre in Saint-Denis, near Paris: synaesthesia fits a room where you hear a shape); Inclusive Sans for reading text (designed for accessibility); Martian Mono for data. Kept on the site, not loaded from Google (GDPR).

## 4. Versions and decisions
| Date | Version | Decision or change | Who decided | Reason |
|---|---|---|---|---|
| 4–5 Nov | — | Tactile Room as the OceanX Immersive sample | Chico, with Claude's plan | One small ocean piece showing design for access |
| 5 Nov | 1.0 | First build: stand-in shell, sound from the surface, water, coin-like landmark chime, keyboard, spoken hints, studio, test log, EN/PT | Code by Claude from the dossier plan | — |
| 6 Nov | 1.1 | Vibration (Android, gamepad) and gamepad control | Built by Claude on its own initiative after you said vibration is essential | Touch back into the Tactile Room |
| 9 Nov | — | Scan the large shell (likely *Rapana venosa*); worn one for the test run; black background; turntable needs no cover | Chico | Detail and intact relief; contrast |
| 10 Nov | 1.2 | Soft low knock replaces the chime; five-note scale on; water off by default; version recorded in the studio and test logs | Chico | Coin sound annoying and covered the spoken hints; more harmonic; water distracting |
| 10 Nov | 1.3 | German (EN / PT / DE); test logs save themselves in the browser | Chico | A tester may speak only German; the friend test lost its data |
| 10 Nov | — | For OceanX: test on Android, state the iPhone limit plainly, propose a native iPhone version for the fellowship year | Chico | No time for a native app before 13 Nov |
| 11 Nov | 1.4 | New look from your "Deep-Sea Sonar Studio" direction, dark by default with a light switch; access kept (see 3.5) | Chico (direction); Claude (build, and what to leave out for access) | The tools looked like generic AI-made pages |
| 11 Nov | — | Published on GitHub Pages with your own domain (tactileroom.chicomorais.com), set up by you in VS Code | Chico | Testers and OceanX need a public link |
| 11 Nov | 1.5 | New fonts (kept on the site); a two-finger trackpad swipe turns the shell; cues for the touch area (ping, edge ticks, first-touch spoken hint, lit edge); About aligned | Chico (requests); Claude (choices and build) | 1.4 still looked generic; trackpad users expected to turn the shell; a blind visitor can't tell why the page won't scroll |
| 12 Nov | 1.6 | Your scan is the only shell; the generated one removed from the code, text and comments; Dark \| Light pair; language from all the device's languages; Describe hidden until a description exists | Chico (requests); Claude (build, 2K textures, landmark placement) | "It should be my shell"; the old button didn't show which look was on; a tester doesn't speak English |
| 12 Nov | 1.7 | Landmark names spoken more slowly, and the shell's sound drops while any hint is spoken; "Tip" renamed "Spiral tip"; new "Back tip" at the far end; size 7 cm on the label | Chico ("Tip" was barely audible; the back tip said nothing); Claude (fix, names, placement) | Hints were drowned by the tone |
| 12 Nov | — | Earlier versions stay public in `versions/` | Chico | They show the development, for the report and the website |
| 12 Nov | — | Framing: the Tactile Room makes objects explorable through sound and vibration; the shell is the first object, not the subject. No session length in the invitation | Chico | "Only a shell" diminishes it; the method can work for any object, and is what a master's or fellowship would develop |
| 12 Nov | 1.8 | Intro about objects, the shell as the first; vibration Off \| Light \| Strong with a test buzz, Strong by default | Chico (framing; no vibration felt on an LG K9); Claude (cause and fix) | Short taps (5–15 ms) are likely below what older phones' motors can produce (INFERENCE; check on the K9) |
| 12 Nov | — | Testers open the room for the first time during the session; the link only on request | Chico (question), Claude (recommendation) | First contact is data you only get once |
| 12 Nov | 1.9 | Feedback form at the end of the page (EN/PT/DE), answers to a Google Sheet; device details in the test log | Chico (in case no blind testers can meet before the deadline); Claude (build) | Remote people can try it and answer; the log shows the device without asking |
| 12 Nov | 1.9 | First form question: "How do you describe yourself?" (blind, partially sighted, sighted, prefer not to say), not how much someone sees | Chico | "How much do you see" can feel offensive; self-description is optional and respectful |
| 12 Nov | 1.10 | Form in a pop-up; credits as one line at the bottom, no About box; fonts and three.js no longer named on the page | Chico (keep the page clean; that information isn't important to visitors) | Font licences stay with the font files, which is what they require |
| 12 Nov | 1.10 | The shell's description, spoken by Describe: shape with the landmark names, then the species' journey and where you found it | Chico (asked for it back once the species was confirmed); Claude (draft from checked facts) | **Check against the real shell:** the orange inside, the knobs on the shoulder, the short channel at the back tip |
| 12 Nov | 1.11 | Gamepad: L2 zooms out, R2 zooms in (small steps now from a gentle push or the d-pad); voices: prefer the natural-sounding ones, never the robotic or joke voices | Chico (8BitDo Pro 2 on a Mac: vibration works, no zoom; "voices super robotic") | Some systems list robotic voices first, and 1.10 took the first one |
| 12 Nov | 1.11 | Description corrected from the photos: cream with rows of brown dashes outside; inside smooth and glossy, salmon orange at the inner edge, darker brown bands deeper in | Chico (Qwen description); Claude (checked it against the photos) | Qwen got the size and the inside colour wrong (below, AI log) |
| 12 Nov | 1.12 | Description rewritten from your own check of the Qwen description: 7 × 6 cm, a point at each end, six turns, the net of ribs, hundreds of fine brown lines that fade into the cream, turn dotted, then strong, and run deep inside; inside pinkish white to salmon with brown at the inner lip. Label size: 7 cm long, 6 cm wide | Chico (measured and checked against the shell) | Your eyes on the object beat both AIs |
| 12 Nov | 1.12 | Description and keys moved under the shell; the description keeps its paragraphs | Chico (an open description left a big empty gap) | The side panel stays short; the text fills the shell's column |
| 13 Nov | 1.13 | Screen-reader switch as the first thing on the page; spoken hints remembered; `?hints=off` for links to screen-reader users | Chico (hints should start off for screen-reader users) | A browser can't detect a screen reader, so the switch has to come first instead |
| 12 Nov | — | Species on the label: *Rapana venosa*, Black Sea coast, Romania, 2025 | Chico (agreed with the iNaturalist community) | Research Grade, 3 of 3 identifications |
| 12 Nov | — | Ask the associations: ABSV (Berlin) to visit and forward; DBSV (national) to forward. Say openly: non-commercial, no fee possible, results may support a fellowship or master's | Chico (who to ask; that it's done out of love, not for money); Claude (drafts; the fellowship line) | Honest about where the results go, so nothing looks hidden later |

- Every version is kept in the package (`versions/`, CHANGELOG.md).

### 4.1 The scan (11–12 Nov)
- **Set-up** (your photos `IMG_7934`, `IMG_7935`): Nikon D610 on a tripod, Foldio3 with the black backdrop, Halo Bars, the Kiuiom turntable, the shell on a grey stand.
- **Photos** (`shell scan`, FACT from the files): 164 photos, Nikon D610, 50 mm, f/13, 1/8 s, ISO 100, taken 12 Nov 2026 between 00:20 and 01:20.
- **Processing** (your screenshot): Reality Composer Pro (Apple Object Capture), Full Quality, "Isolate Object from Environment"; then Blender 3.6.1 to make the GLB.
- **Your files** (`photogrammetry shell`): a medium-detail test (USDZ, 26 MB), the full-detail scan (USDZ, 58 MB), a GLB with 4K textures (37 MB) and a GLB with 4K JPEG textures (4.4 MB).
- **On the site:** the 4.4 MB file with 2K textures (3.2 MB), so cheaper phones don't run out of graphics memory. 96,566 triangles; geometry unchanged.
- **Size:** about 7 cm long, measured by you with a set square (`shell measurement 7cm.JPG`).
- **Species: veined rapa whelk, *Rapana venosa*** (FACT, iNaturalist, 12 Nov 2026): **Research Grade**, 3 of 3 identifications agree, observed 8 Sep 2025 on the Romanian Black Sea coast; iNaturalist marks it as introduced there. Observation: https://www.inaturalist.org/observations/414290045 (all photos now in this one; you deleted the duplicate observations on request). Screenshots of every observation before deletion: `process/screencapture-inaturalist-…pdf`.
- **On the label since 12 Nov:** *Rapana venosa*; found on the Black Sea coast, Romania; 2025. The exact place stays private.
- Google's AI had said mutable conch; size and place spoke against it. Evidence: ideas/where-did-this-come-from.md.
- Your verdict (12 Nov): "the shell was beautifully scanned".

### 4.2 Process images (for the website's development section and OceanX)
| File | What it shows | Use |
|---|---|---|
| `process/IMG_3221 shell possible origin.jpeg` | The beach, 8 Sep 2025 (Romanian Black Sea coast, from its GPS) | Origin story; shown without its location |
| `photogrammetry shell/IMG_7934.jpeg`, `process/IMG_7935.jpeg` | The capture set-up: light tent, Halo Bars, turntable, Nikon | Website "how it was made"; OceanX sample project |
| `shell scan/` (164 photos) | The capture itself | A contact sheet or a 3-second flip-through |
| `process/Screenshot … 01.53.24 (2).png` | Reality Composer Pro "Model Created" beside the grey mesh in Blender | Process: from photos to 3D |
| `photogrammetry shell/shell measurement 7cm.JPG` | The shell on a set square | Size, and evidence against the AI's species |
| `process/screencapture-tactileroom-…png` | The live room, 12 Nov | Before/after with the next version |
| `process/screencapture-google-search-….pdf` | Google's AI identification | The AI-error example (keep it as evidence) |
| `versions/` in the repo | Every version, 1.0 to 1.6 | The development section: how it changed and why (decision 12 Nov: keep them public) |
- **Privacy before publishing:** photos taken at home (`IMG_7933`–`IMG_7935`) carry your home's GPS position. Export them without location (Photos: Export, "Include location" off) or strip it (`exiftool -gps:all= file.jpg`). The beach photo's location is the point, so keep it there only once you've decided to name the beach.

## 5. User research
### 5.1 What happened so far
- The friend test produced no data. The log stayed in the browser until copied, and it only records movements, not opinions. Fixed in v1.3: logs save themselves, and "Copy all saved logs" exports every session with its date and version.
- Opinions still have to come from observation, thinking aloud and questions after the session.

### 5.2 Possible testers
- Two people, through a personal contact; invitation in German (12 Nov). Their details stay private.
### 5.3 Format (recommendation)
- A moderated session: in person or by video call, 45 minutes, on their own device with their own screen-reader settings. You watch, ask and take notes.
- Ask first which phone and screen reader they use. On an iPhone, the page can't vibrate; note it as a finding.
- **First contact together.** Don't send the link before the session; open it with them. If someone asks for it earlier, send it and note "had seen it before". On Android, have them choose Strong vibration and check the test buzz first.

### 5.4 First message (structure; the words are yours)
1. Who you are, in one line, and who passed on their contact.
2. What the Tactile Room is, in two plain lines.
3. The ask: 45 minutes, in person in Berlin or by video call, on their own device.
4. What happens: they explore and say what they notice, then a few questions. It's an early prototype, so their criticism is the point. They can stop at any time.
5. What you record (notes, and audio only if they agree), how you use it (anonymous unless they want credit), and deletion on request.
6. What you offer for their time.
7. How to reply, and that they can ask anything first.
- Plain text, no images or attachments, links with a short description.

### 5.5 Session plan (45 min)
| Min | Part | What to collect |
|---|---|---|
| 5 | Welcome, consent read aloud | Consent for notes and audio |
| 5 | Background | Device, screen reader, how they explore objects and images, vibration, AI tools, online shopping |
| 10 | Free exploration, thinking aloud | What they notice, where they get lost |
| 10 | Tasks: find the tip; find the roughest area; describe the shape in their own words | Found or not, time (log), their words |
| 5 | Comparisons: vibration on/off; water on/off; the knock; the touch-area ping; for anyone with some sight, dark or light background | Preferences and why |
| 10 | Closing: what helped, what annoyed, what was missing, where they'd use it; the AI-question idea | Quotes |

- Keep per session: your notes (what they did, what they said, and your interpretation kept separate), the saved test log, and audio transcribed locally (MacWhisper).
- Data protection (INFERENCE, not legal advice): a disability is health data under GDPR. Get explicit consent, collect only what you need, store it locally, and name participants P1 and P2.
- **Session guide in German** (12 Nov): projects/tactile-room-session-guide.md. Same nine questions as the online form, so the two can be compared.

### 5.5b Where it's been tried (correction, 12 Nov)
- You test each version yourself on a computer, an iPhone and Android phones (an earlier note in the build guide said "not yet tried on a real phone": wrong, now fixed).
- The automated checks run in Chrome on a server with simulated phones. They prove the page *asks* for vibration, not that a motor moves.

### 5.5c Android vibration not felt (12 Nov): what's known
- Felt nothing: your LG K9 and three friends' Android phones (Chico, 12 Nov).
- **Not the iPhone problem (FACT):** Chrome for Android and Samsung Internet support web vibration; Firefox for Android and every iPhone browser don't ([caniuse](https://caniuse.com/vibration)).
- **Chrome blocks vibration until the page has been tapped (FACT):** since Chrome 60, "calls to navigator.vibrate will immediately return 'false' if the user has yet to tap on the frame" ([Chromium, 2017](https://groups.google.com/a/chromium.org/g/blink-dev/c/QGcpjisxtik/m/reSqe_HgCgAJ)). Whether a drag counts as a tap isn't documented there (POTENTIAL: a first drag may stay silent).
- **The phone can refuse even when the browser asks (INFERENCE):** silent mode, Do Not Disturb, battery saver, or vibration set to zero in the phone's settings.
- **The check:** `vibration-check.html` on the site shows, on the phone itself, whether the browser has vibration, whether the page counts as tapped, and whether each request was accepted or refused; "Copy results" gives a text to send. Accepted but not felt = the phone's settings or motor; refused = the browser's rules; no vibration at all = the browser.
- Decision: fix nothing until the check results are in.

### 5.6 Online feedback (v1.9, 12 Nov)
- A form at the end of the page, in the visitor's language. Nine short questions, all optional except the agreement; a second box (unticked) adds anonymous visit details: device, system, browser, minutes, how they explored, landmarks found, settings.
- Answers go to a Google Sheet in your account through `docs/feedback-receiver.gs` (setup: build guide, "Feedback form"). The form stays hidden until room.json has the script's address.
- **Connected 12 Nov:** Claude made the sheet "Tactile Room feedback" in your Google Drive; you added the script and deployed it; its address is in room.json. Still to do: one test answer from the live page, and a public contact address for the privacy note.
- What a page can't know (FACT): whether a screen reader is on, or how much someone sees. Those stay questions.
- With few answers, quote people; don't turn two answers into percentages.

### 5.7 Associations (12 Nov)
- **ABSV**, Allgemeiner Blinden- und Sehbehindertenverein Berlin (Berlin's local association): Auerbachstraße 7, 14193 Berlin; 030 895 88-0; info@absv.de. Open Mon–Thu 9:30–12:30 and 13:00–15:00 (Wed until 17:00), Fri 9:30–12:30. Its site lists "Digitale Barrierefreiheit" as an area. Ask: visit a group, or forward the link.
- **DBSV**, Deutscher Blinden- und Sehbehindertenverband (national federation, also in Berlin): Rungestraße 19, 10179 Berlin; 030 285387-0; info@dbsv.org. Ask: forward a call (newsletter or regional associations), or present it in person.
- Evidence that associations pass study calls on (FACT): the Lower Saxony association's newsletter (#42/2026) shared a University of Zurich interview study, with a 25 CHF voucher as thanks. So payment is common; your email says openly that you can't pay.
- Status: two Gmail drafts (12 Nov), not sent. Send after the form is live. A phone call to the ABSV gets a faster answer than an email (INFERENCE).

## 6. Ideas backlog (not built)
- **Asking AI about the spot you touched** (yours, 10 Nov): "In this area I felt a rough texture the description didn't mention. Can you describe it?" The room knows the finger's spot, so it could send a close-up from the scan photos plus the question to a vision model. Mark the answer as AI and possibly wrong; a local model keeps it private. Supported by the 2026 finding that vibration gives shape but not material.
- **Visitor sound settings** (yours, 10 Nov): water on/off and volume, and the volume of each sound, for visitors, not just in the studio. Not built; decide after the tests.
- **A cue that grows as you approach the shell** instead of water (from the 2026 prototype). Tells distance and direction rather than just "off".
- **Sounds from the real shell:** your finger on the ridges; "the sea in a shell" at the opening only (your poetic water idea, made real).
- **iPhone vibration:** a native app with Core Haptics, in the fellowship year (GAP: Swift and Xcode).
- **"How we know"** provenance section; the three-shell growth series.
- **Visual design:** the tools looked like generic AI-made pages (your observation, 10 Nov). The Tactile Room got your sonar look in v1.4. Still open: your own Figma pass, and whether the other two tools (Archive check, the design system) should follow.

## 7. AI use log
| Date | Tool | What it did | What it got wrong or missed | What you changed |
|---|---|---|---|---|
| 5 Nov | Claude | Wrote v1.0's code from the dossier plan | Sounds chosen without research; coin-like chime | v1.2 |
| 6 Nov | Claude | Added vibration and gamepad; researched web vibration | Built without being asked | — |
| 9–10 Nov | Claude | Research summaries (prior work, sound studies, haptics, shopping) | Check the sources yourself before citing | — |
| 10 Nov | Claude | v1.2 and v1.3 code; German translation (draft) | German not yet checked by a native speaker | [to fill] |
| 11 Nov | Gemini | Inspiration mockups for the new look | Invented readouts and sliders that don't exist in the room | Left out of v1.4 |
| 11 Nov | Claude | v1.4 restyle from your direction; contrast checks and accessibility audit | Kept the old layout; same fonts; About misaligned. Looked generic | Fonts changed in 1.5; layout redesign planned in Figma after OceanX |
| 11 Nov | Claude | v1.5: fonts, trackpad turning, touch-area cues, layout fixes | [to fill after you've tried it] | [to fill] |
| 12 Nov | Google (AI search) | Identified the shell as a mutable conch, about 35–40 mm | Wrong size (your ruler: 7 cm) and wrong species: the iNaturalist community confirmed *Rapana venosa* (Research Grade, 3 of 3) the same day | You checked WoRMS (name superseded); Claude checked size and range; people identified it |
| 12 Nov | Claude | v1.6: removed the generated shell, set up your scan, placed two landmarks, Dark \| Light, device language | Didn't send a zip of 1.5 (its files went straight into your folder) | [to fill] |
| 12 Nov | Claude | v1.7–1.9: clearer names, vibration levels, feedback form and receiver script; session guide; tester and association emails | [to fill after testing] | [to fill] |
| 12 Nov | Qwen 3.5 9B (local, LM Studio; your four photos, one with the set square) | Described the shell for someone who can't see it | **Your check, point by point (your doc "LLM shell description against my checkings"):** size invented against the ruler in its own picture ("4–6 cm", "10–15 cm wide"; you measured 7 cm long, 6 cm wide); missed the second point at the back, "very visible" in the photos; "pearly white" inside (pinkish white to salmon, brown at the inner lip); "brown spots" (you see hundreds of fine brown lines that fade, dot and strengthen, and run deep inside). Right: six turns (you counted six), the shouldered knobs, the net of ribs | Description rewritten from your checks (1.12). Claude's own first pass had also got the inside wrong ("deep orange"). The third example of checking AI against evidence, and the best one: you checked it yourself, against the object |

## 8. Open questions
- Does silence off the shell make it harder to find the shell again?
- Is the knock right, or should the landmark sound come from the real shell?
- **Protection (12 Nov, your question):** copyright protects your concrete work automatically (scan, photos, texts, your checked description), not the idea or the mechanism. A European patent is ruled out for what you've already published (no grace period for your own disclosure), and patents cost thousands to get and enforce. Your dated public repository already works as a defensive publication. Open: which licence to put on the repository (after OceanX).
- Which phones do the testers use? (Since 1.9 the log and the form's visit box record it.)
- Is the "gap" real after a proper literature search?
- Are Spiral tip, Back tip and Opening where you'd put them? Other spots worth naming (the shoulder knobs)?
- ~~Which species is it?~~ *Rapana venosa*, confirmed 12 Nov.
- Dark or light: which do low-vision testers prefer?
- Does the touch-area ping help people find the shell, or is it noise?
- Do screen-reader users manage with VoiceOver's pass-through gesture, or switch it off?

## 9. Sources
- [ShapeSonic](https://cragl.cs.gmu.edu/shapesonic/)
- [Coughlan & Miele 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5714613)
- [Giudice et al. 2012](https://umaine.edu/vemi/?p=1088)
- [Wong et al. 2018 (Lancaster)](https://eprints.lancs.ac.uk/id/eprint/154713)
- [Tokida et al., CHI 2026 (review page)](https://a11y-paradise.onrender.com/reviews/69ebba690394fa4e0a9b4a8d)
- [ImageExplorer](https://news.umich.edu/?p=175211)
- [Be My Eyes + InnoSearch](https://www.bemyeyes.com/?p=21193302)
- [NASA sonification study](https://frontiersin.org/news/2024/03/25/communication-nasa-scientists-space-data-sounds)
- [Walker et al.](https://wirelessrerc.gatech.edu/node/341.html)
- [Amer & Johnson 2018](https://ideas.repec.org/a/igg/jthi00/v14y2018i4p95-109.html)
- [Silverman et al. 2015](https://www.sciencedaily.com/releases/2015/01/150114140554.htm)
