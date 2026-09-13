# Merge checklist — university PDF tools

This document tracks merging **local libraries** and **client-only** behavior into `DWE PDF`, based on the developer’s latest folder plus our improvements.

**Status:** Applied on merge date (see git history or file timestamps).

---

## Goals

- Keep all features from `DWE PDF` (sidebar UI, 16 PDF tools).
- Serve libraries from local `libs/` (no CDN).
- Remove audit logging and login/portal user hooks.
- Do **not** add features that were only in the old PDF Studio app (OCR, AI, repair, etc.).

---

## Phase 0 — Prep

- [x] Use `DWE PDF` as the production base
- [x] Keep the local `libs/` bundle with the application
- [ ] Add `assets/images/logo.png` if missing (referenced by `index.html`)
- [x] Create `old-version/` at repo root for archived standalone apps (optional)

---

## Phase 1 — Local libraries

- [x] `libs/pdf-lib.min.js`
- [x] `libs/pdf.min.js`
- [x] `libs/pdf.worker.min.js`
- [x] `libs/jszip.min.js`
- [x] `libs/mammoth.browser.min.js`
- [x] `libs/pdfjs/cmaps/` and `libs/pdfjs/standard_fonts/` (when present in source)
- [x] `index.html` — script tags point to `libs/`
- [x] `js/app.js` — `pdfjsLib.GlobalWorkerOptions.workerSrc = 'libs/pdf.worker.min.js'`

---

## Phase 2 — Remove logging & login

- [x] Delete `log-event.php`
- [x] Delete `logs/` directory
- [x] Remove `LOG_ENDPOINT`, `logEvent()`, `_portalUser()`, `_currentTool()` from `js/app.js`
- [x] Remove all `logEvent(...)` calls
- [x] No UI or docs for `PDF_TOOLS_USER` / `?uid=`

---

## Phase 3 — Content-Security-Policy (local-only scripts)

- [x] `script-src`: `'self' 'unsafe-inline'` (no unpkg/cdnjs)
- [x] `connect-src`: `'self'`
- [x] `worker-src`: `'self' blob:`
- [x] Google Fonts still allowed in `style-src` / `font-src` (optional: self-host later)

---

## Phase 4 — Runtime / IIS

- [ ] Deploy as static site on **IIS** (or IIS Express for dev)
- [ ] Do not rely on `file://` for production
- [ ] Smoke-test: home dropzone → edit flow
- [ ] Smoke-test: each tool upload → preview → save dialog
- [x] Keep `validatePdf()` (magic bytes + `%%EOF`)

---

## Phase 5 — Fonts & assets (optional)

- [ ] Self-host Noto Sans Arabic (copy `fonts.css` from Production_Ready) **or** keep Google Fonts
- [ ] Verify logo displays in sidebar and hero

---

## Phase 6 — Do not add (not in final — never merge)

- [ ] OCR / Tesseract
- [ ] AI assistant
- [ ] Repair PDF
- [ ] Standalone viewer-only page
- [ ] Extract-text-only tool
- [ ] Old combined “organize pages” UI (final uses delete / extract / reorder separately)
- [ ] Logging, login, `config.json` for audit

---

## Phase 7 — Keep from final (regression check)

| Area | Verify |
|------|--------|
| Sidebar + hash routes | `#/merge` … `#/word-to-pdf` |
| i18n | AR ↔ EN, RTL/LTR |
| Dark mode | Toggle works |
| Security | `validatePdf()`, `escHtml()` |
| Edit PDF | Text, signature, highlight, draw |
| Split | All / every N / ranges + ZIP |

---

## Phase 8 — Testing before handoff

- [ ] Merge, split (all modes), rotate, delete, extract, reorder, page numbers
- [ ] Edit, watermark, protect, unlock, compress, crop
- [ ] PDF → images, images → PDF, Word → PDF
- [ ] Language + dark mode
- [ ] Invalid non-PDF rejected
- [ ] Offline after first load (no CDN)
- [ ] Edge + Chrome on IIS
- [ ] No CSP / 404 errors in console

---

## Phase 9 — Documentation

- [x] This file (`MERGE-CHECKLIST.md`)
- [x] `README.md` updated for local libs, no logging, IIS deploy

---

## Files changed in merge

| File | Change |
|------|--------|
| `libs/*` | Added (from Production_Ready) |
| `index.html` | Local scripts, tightened CSP |
| `js/app.js` | Local worker, logging removed |
| `log-event.php` | Removed |
| `logs/` | Removed |
| `README.md` | Updated |
| `MERGE-CHECKLIST.md` | Created (this file) |

---

## IIS deployment (summary)

1. Copy the entire `DWE PDF` folder to the IIS site physical path.
2. Set default document to `index.html`.
3. Enable HTTPS.
4. Ensure app pool identity can read all files (no write permission required for static-only).
5. Open the site URL in a browser — not `file://`.

All PDF processing runs in the browser; no server-side PDF processing is required.
