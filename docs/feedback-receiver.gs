/**
 * Tactile Room: feedback receiver (Google Apps Script)
 *
 * Receives the answers from the feedback form at the end of the Tactile Room
 * and adds one row per answer to the first sheet of this spreadsheet.
 *
 * Setup (about 5 minutes; full steps in README.md, "Feedback form"):
 *   1. Make a new Google Sheet, for example "Tactile Room feedback".
 *   2. In the sheet: Extensions → Apps Script. Delete what is there and paste this file.
 *   3. Deploy → New deployment → type: Web app.
 *      Execute as: Me. Who has access: Anyone. → Deploy, and allow access.
 *   4. Copy the Web app URL (it ends in /exec) into room.json → "feedback" → "endpoint".
 *
 * What it keeps: only the fields listed below. Text is cut to 2,000 characters.
 * What it can't see: the visitor's name (never asked) or IP address (Apps Script doesn't receive it).
 */

const FIELDS = [
  'version', 'lang', 'who', 'aids', 'aidsWhich', 'noticed', 'sounds', 'soundsConfusing',
  'vibration', 'hints', 'change', 'objects', 'quote', 'contact'
];
const VISIT_FIELDS = [
  'device', 'os', 'browser', 'inApp', 'screen', 'touch', 'canVibrate', 'vibration', 'look',
  'reducedMotion', 'moreContrast', 'forcedColors', 'language', 'deviceLanguage',
  'minutes', 'inputs', 'shellEntries', 'landmarks', 'turns', 'spots', 'description'
];

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return reply_('not JSON'); }
  if (!d || typeof d !== 'object') return reply_('empty');
  if (d.website) return reply_('ok');            // a hidden field only robots fill in
  const v = (d.visit && typeof d.visit === 'object') ? d.visit : {};
  const row = [new Date()]
    .concat(FIELDS.map(function (k) { return clean_(d[k]); }))
    .concat(VISIT_FIELDS.map(function (k) { return clean_(v[k]); }));
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['received'].concat(FIELDS, VISIT_FIELDS.map(function (k) { return 'visit_' + k; })));
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
  return reply_('ok');
}

// Opening the URL in a browser shows that the receiver is running.
function doGet() { return reply_('Tactile Room feedback receiver is running.'); }

function clean_(x) {
  if (x === undefined || x === null) return '';
  if (typeof x === 'boolean' || typeof x === 'number') return x;
  let s = String(x).slice(0, 2000);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;      // so a spreadsheet never runs text as a formula
  return s;
}

function reply_(text) { return ContentService.createTextOutput(text); }
