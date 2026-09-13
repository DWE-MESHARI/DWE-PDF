/* ══════════════════════════════════════════════
   DWE PDF — app.js
   Vanilla JS · Client-side · Arabic RTL
   ══════════════════════════════════════════════ */
'use strict';

/* ══════════════════════════════════════════════
   LANGUAGE / i18n
   ══════════════════════════════════════════════ */

const LANG_KEY = 'ui-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'ar';

const T = {
  ar: {
    'brand.title':'DWE','brand.sub':'PDF',
    'nav.home':'الرئيسية','cat.organize':'تنظيم','cat.edit':'تحرير','cat.convert':'تحويل',
    'nav.merge':'دمج PDF','nav.split':'تقسيم PDF','nav.rotate':'تدوير PDF',
    'nav.delete':'حذف صفحات','nav.extract':'استخراج صفحات','nav.reorder':'إعادة الترتيب',
    'nav.pagenum':'ترقيم الصفحات','nav.edit':'تحرير PDF','nav.watermark':'علامة مائية',
    'nav.protect':'حماية PDF','nav.unlock':'فك الحماية','nav.compress':'ضغط PDF',
    'nav.crop':'قص PDF','nav.convert':'PDF إلى صور','nav.img2pdf':'صور إلى PDF','nav.word2pdf':'Word إلى PDF',
    'upload.drag':'اسحب ملف PDF هنا','upload.or':'أو اضغط للاختيار',
    'upload.multi':'أو اضغط للاختيار — يمكن اختيار أكثر من ملف',
    'btn.anotherFile':'ملف آخر','btn.merge':'دمج الملفات','btn.split':'تقسيم الملف',
    'btn.applyRotate':'تطبيق التدوير وتنزيل PDF',
    'btn.deletePages':'حذف الصفحات','btn.extractPages':'استخراج الصفحات',
    'btn.reorder':'حفظ الترتيب الجديد','btn.pagenum':'إضافة الترقيم',
    'btn.watermark':'إضافة العلامة المائية','btn.protect':'تشفير الملف',
    'btn.unlock':'فك الحماية','btn.compress':'ضغط الملف وتنزيله','btn.clearAll':'مسح الكل',
    'btn.exportPdf':'تنزيل PDF','btn.applySign':'إضافة التوقيع','btn.clearSign':'مسح اللوحة',
    'btn.applyCrop':'تطبيق القص','btn.convert':'تحويل إلى صور وتنزيل',
    'btn.addImg':'إضافة صور','btn.makeImg2Pdf':'إنشاء PDF من الصور',
    'btn.convertWord':'تحويل إلى PDF','btn.addWatermark':'إضافة العلامة المائية',
    'lbl.splitMode':'طريقة التقسيم','lbl.splitRange':'النطاقات','lbl.splitEvery':'كل كم صفحة',
    'lbl.pnPos':'الموضع','lbl.pnPrefix':'بادئة',
    'lbl.wmText':'نص العلامة','lbl.wmOpacity':'الشفافية','lbl.wmAngle':'الزاوية',
    'lbl.wmSize':'حجم الخط','lbl.wmMode':'الأسلوب',
    'lbl.protPass':'كلمة مرور الفتح','lbl.protOwner':'كلمة مرور المالك (اختياري)',
    'lbl.unlockPass':'كلمة المرور','lbl.compLevel':'مستوى الضغط','lbl.rotAngle':'زاوية الدوران',
    'lbl.delPages':'أرقام الصفحات للحذف','lbl.extPages':'أرقام الصفحات للاستخراج',
    'lbl.cropLeft':'هامش يسار (%)','lbl.cropRight':'هامش يمين (%)','lbl.cropTop':'هامش أعلى (%)','lbl.cropBottom':'هامش أسفل (%)',
    'lbl.imgQuality':'الجودة','lbl.imgFormat':'الصيغة',
    'opt.split.all':'كل صفحة في ملف منفصل','opt.split.range':'نطاقات محددة (مثال: 1-3, 4-6)','opt.split.every':'كل N صفحات',
    'opt.comp.light':'خفيف — تقليص بسيط، جودة كاملة','opt.comp.medium':'متوسط — ضغط جيد','opt.comp.heavy':'قوي — تقليص كبير (يحوّل لصور)',
    'opt.pn.bc':'أسفل — وسط','opt.pn.br':'أسفل — يمين','opt.pn.bl':'أسفل — يسار','opt.pn.tc':'أعلى — وسط',
    'opt.wm.center':'وسط الصفحة','opt.wm.tile':'متكرر في كل الصفحة',
    'merge.title':'دمج ملفات PDF','merge.desc':'ادمج عدة ملفات PDF في ملف واحد بالترتيب الذي تريده',
    'split.title':'تقسيم PDF','split.desc':'قسّم ملف PDF إلى أجزاء منفصلة بطرق متعددة',
    'rotate.title':'تدوير صفحات PDF','rotate.desc':'دوّر جميع الصفحات أو صفحات محددة',
    'delete.title':'حذف صفحات','delete.desc':'احذف صفحات محددة من ملف PDF',
    'extract.title':'استخراج صفحات','extract.desc':'استخرج صفحات محددة كملف PDF جديد',
    'reorder.title':'إعادة ترتيب الصفحات','reorder.desc':'رتّب صفحات PDF بالسحب والإفلات',
    'pn.title':'ترقيم الصفحات','pn.desc':'أضف أرقام صفحات تلقائية لملف PDF',
    'edit.title':'تحرير PDF','edit.desc':'أضف نصوصاً وتوقيعاً وتظليلاً ورسوماً على الملف',
    'wm.title':'علامة مائية','wm.desc':'أضف علامة مائية نصية على كل صفحات PDF',
    'protect.title':'حماية PDF بكلمة مرور','protect.desc':'شفّر ملف PDF لمنع الفتح أو التعديل',
    'unlock.title':'فك الحماية','unlock.desc':'احذف كلمة مرور من ملف PDF محمي',
    'compress.title':'ضغط PDF','compress.desc':'قلّل حجم ملف PDF مع الحفاظ على الجودة',
    'crop.title':'قص PDF','crop.desc':'حدّد هوامش القص لتقليص كل صفحات الملف',
    'convert.title':'PDF إلى صور','convert.desc':'حوّل صفحات PDF إلى صور PNG بجودة عالية',
    'img2pdf.title':'صور إلى PDF','img2pdf.desc':'حوّل صور متعددة إلى ملف PDF واحد',
    'word2pdf.title':'Word إلى PDF','word2pdf.desc':'حوّل ملف Word (docx) إلى PDF',
    'reorder.hint':'اسحب البطاقات لتغيير الترتيب — تظهر جميع صفحات الملف أدناه',
    'del.hint':'اضغط على الصفحة لتحديدها للحذف (تتلوّن باللون الأحمر)',
    'ext.hint':'اضغط على الصفحة لتحديدها للاستخراج (تتلوّن باللون الأزرق)',
    'sign.draw':'رسم التوقيع','sign.upload':'رفع صورة توقيع','sign.hint':'ارسم توقيعك في المساحة أدناه',
    'sign.uploadHint':'اضغط لرفع صورة التوقيع (PNG شفاف أفضل)',
    'save.label':'اسم الملف','save.btn':'حفظ وتنزيل','save.cancel':'إلغاء','save.title':'حفظ الملف',
    'lang.btn':'EN',
    'home.title':'DWE PDF','home.sub':'جميع أدوات PDF التي تحتاجها — تعمل مباشرة في متصفحك بدون إنترنت',
    'home.drop':'اسحب وأسقط ملف PDF للتحرير المباشر','home.dropOr':'أو اضغط لاختيار ملف من جهازك',
    'home.dropBtn':'اختيار ملف PDF','home.dropHint':'نص · توقيع · تظليل · رسم · وأكثر',
    'tc.merge':'دمج PDF','tc.split':'تقسيم PDF','tc.compress':'ضغط PDF','tc.rotate':'تدوير PDF',
    'tc.watermark':'علامة مائية','tc.protect':'حماية PDF','tc.convert':'PDF إلى صور',
    'tc.crop':'قص PDF','tc.img2pdf':'صور إلى PDF',
    'del.pages.lbl':'أرقام الصفحات للحذف','ext.pages.lbl':'أرقام الصفحات للاستخراج',
    'btn.applyRotate2':'تطبيق التدوير وتنزيل PDF','lbl.rotAngle2':'زاوية الدوران',
    'editor.delete':'حذف المحدد','editor.export':'تنزيل PDF',
  },
  en: {
    'brand.title':'DWE','brand.sub':'PDF',
    'nav.home':'Home','cat.organize':'Organize','cat.edit':'Edit','cat.convert':'Convert',
    'nav.merge':'Merge PDF','nav.split':'Split PDF','nav.rotate':'Rotate PDF',
    'nav.delete':'Delete Pages','nav.extract':'Extract Pages','nav.reorder':'Reorder Pages',
    'nav.pagenum':'Page Numbers','nav.edit':'Edit PDF','nav.watermark':'Watermark',
    'nav.protect':'Protect PDF','nav.unlock':'Unlock PDF','nav.compress':'Compress PDF',
    'nav.crop':'Crop PDF','nav.convert':'PDF to Images','nav.img2pdf':'Images to PDF','nav.word2pdf':'Word to PDF',
    'upload.drag':'Drag a PDF file here','upload.or':'or click to choose',
    'upload.multi':'or click to choose — multiple files supported',
    'btn.anotherFile':'Another File','btn.merge':'Merge Files','btn.split':'Split File',
    'btn.applyRotate':'Apply Rotation & Download PDF',
    'btn.deletePages':'Delete Pages','btn.extractPages':'Extract Pages',
    'btn.reorder':'Save New Order','btn.pagenum':'Add Numbers',
    'btn.watermark':'Add Watermark','btn.protect':'Encrypt File',
    'btn.unlock':'Unlock PDF','btn.compress':'Compress & Download','btn.clearAll':'Clear All',
    'btn.exportPdf':'Download PDF','btn.applySign':'Add Signature','btn.clearSign':'Clear Canvas',
    'btn.applyCrop':'Apply Crop','btn.convert':'Convert to Images & Download',
    'btn.addImg':'Add Images','btn.makeImg2Pdf':'Create PDF from Images',
    'btn.convertWord':'Convert to PDF','btn.addWatermark':'Add Watermark',
    'lbl.splitMode':'Split Method','lbl.splitRange':'Ranges','lbl.splitEvery':'Every N pages',
    'lbl.pnPos':'Position','lbl.pnPrefix':'Prefix',
    'lbl.wmText':'Watermark Text','lbl.wmOpacity':'Opacity','lbl.wmAngle':'Angle',
    'lbl.wmSize':'Font Size','lbl.wmMode':'Style',
    'lbl.protPass':'Open Password','lbl.protOwner':'Owner Password (optional)',
    'lbl.unlockPass':'Password','lbl.compLevel':'Compression Level','lbl.rotAngle':'Rotation Angle',
    'lbl.delPages':'Pages to Delete','lbl.extPages':'Pages to Extract',
    'lbl.cropLeft':'Left margin (%)','lbl.cropRight':'Right margin (%)','lbl.cropTop':'Top margin (%)','lbl.cropBottom':'Bottom margin (%)',
    'lbl.imgQuality':'Quality','lbl.imgFormat':'Format',
    'opt.split.all':'Each page as separate file','opt.split.range':'Custom ranges (e.g. 1-3, 4-6)','opt.split.every':'Every N pages',
    'opt.comp.light':'Light — minimal reduction, full quality','opt.comp.medium':'Medium — good compression','opt.comp.heavy':'Heavy — maximum reduction (converts to images)',
    'opt.pn.bc':'Bottom — Center','opt.pn.br':'Bottom — Right','opt.pn.bl':'Bottom — Left','opt.pn.tc':'Top — Center',
    'opt.wm.center':'Center of page','opt.wm.tile':'Tiled across page',
    'merge.title':'Merge PDF Files','merge.desc':'Combine multiple PDF files into one in the order you choose',
    'split.title':'Split PDF','split.desc':'Split a PDF into separate parts using multiple methods',
    'rotate.title':'Rotate PDF Pages','rotate.desc':'Rotate all pages or specific pages',
    'delete.title':'Delete Pages','delete.desc':'Remove specific pages from a PDF file',
    'extract.title':'Extract Pages','extract.desc':'Extract specific pages as a new PDF file',
    'reorder.title':'Reorder Pages','reorder.desc':'Drag and drop to rearrange PDF pages',
    'pn.title':'Add Page Numbers','pn.desc':'Automatically number the pages of your PDF',
    'edit.title':'Edit PDF','edit.desc':'Add text, signatures, highlights and drawings to your PDF',
    'wm.title':'Watermark','wm.desc':'Add a text watermark to all PDF pages',
    'protect.title':'Password Protect PDF','protect.desc':'Encrypt a PDF to prevent opening or editing',
    'unlock.title':'Unlock PDF','unlock.desc':'Remove password from a protected PDF file',
    'compress.title':'Compress PDF','compress.desc':'Reduce PDF file size while preserving quality',
    'crop.title':'Crop PDF','crop.desc':'Set crop margins to trim all pages of the file',
    'convert.title':'PDF to Images','convert.desc':'Convert PDF pages to high-quality PNG images',
    'img2pdf.title':'Images to PDF','img2pdf.desc':'Combine multiple images into a single PDF file',
    'word2pdf.title':'Word to PDF','word2pdf.desc':'Convert a Word document (docx) to PDF',
    'reorder.hint':'Drag cards to change order — all pages are shown below',
    'del.hint':'Click a page to mark it for deletion (turns red)',
    'ext.hint':'Click a page to select it for extraction (turns blue)',
    'sign.draw':'Draw Signature','sign.upload':'Upload Signature Image','sign.hint':'Draw your signature in the space below',
    'sign.uploadHint':'Click to upload a signature image (transparent PNG preferred)',
    'save.label':'File name','save.btn':'Save & Download','save.cancel':'Cancel','save.title':'Save File',
    'lang.btn':'AR',
    'home.title':'DWE PDF','home.sub':'All the PDF tools you need — running directly in your browser, no internet required',
    'home.drop':'Drag & drop a PDF file for direct editing','home.dropOr':'or click to choose from your device',
    'home.dropBtn':'Choose PDF File','home.dropHint':'Text · Signature · Highlight · Draw · and more',
    'tc.merge':'Merge PDF','tc.split':'Split PDF','tc.compress':'Compress PDF','tc.rotate':'Rotate PDF',
    'tc.watermark':'Watermark','tc.protect':'Protect PDF','tc.convert':'PDF to Images',
    'tc.crop':'Crop PDF','tc.img2pdf':'Images to PDF',
    'del.pages.lbl':'Pages to delete','ext.pages.lbl':'Pages to extract',
    'btn.applyRotate2':'Apply Rotation & Download PDF','lbl.rotAngle2':'Rotation angle',
    'editor.delete':'Delete Selected','editor.export':'Download PDF',
  }
};

function t(key) { return (T[currentLang] && T[currentLang][key]) || (T.ar[key]) || key; }

function applyLang() {
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir  = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n; if (T[currentLang][k]) el.textContent = T[currentLang][k];
  });
  /* update save-dialog texts */
  const sdLabel = document.querySelector('#save-dialog label');
  if (sdLabel) sdLabel.textContent = t('save.label');
  const sdBtn = document.querySelector('#save-dialog .btn-primary span');
  if (sdBtn) sdBtn.textContent = t('save.btn');
  /* update lang toggle button text */
  const lb = document.getElementById('lang-label'); if (lb) lb.textContent = t('lang.btn');
  /* re-run navigate to update page title */
  navigate();
}

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem(LANG_KEY, currentLang);
  applyLang();
}

/* ══════════════════════════════════════════════
   DARK MODE
   ══════════════════════════════════════════════ */

const DARK_KEY = 'dm-pref';

function _applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const icon  = document.getElementById('dark-icon');
  const label = document.getElementById('dark-label');
  if (!icon || !label) return;
  if (dark) {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    label.textContent = 'فاتح';
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    label.textContent = 'مظلم';
  }
}

function toggleDarkMode() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next   = !isDark;
  localStorage.setItem(DARK_KEY, next ? '1' : '0');
  _applyTheme(next);
}

/* Auto-detect system preference on first visit */
(function initTheme() {
  const saved = localStorage.getItem(DARK_KEY);
  let dark;
  if (saved !== null) {
    dark = saved === '1';
  } else {
    dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  _applyTheme(dark);
  if (saved === null && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem(DARK_KEY) === null) _applyTheme(e.matches);
    });
  }
})();

/* Apply saved language on load (runs after DOM ready) */
document.addEventListener('DOMContentLoaded', () => applyLang());

/* ══════════════════════════════════════════════
   DEVICE DETECTION — adapts the editor's shape/controls
   automatically when opened from a touch/mobile device.
   ══════════════════════════════════════════════ */
let isMobileDevice = false;

function detectDevice() {
  const isTouch  = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  const isNarrow = window.matchMedia('(max-width: 860px)').matches;
  isMobileDevice = isTouch && isNarrow;
  document.documentElement.classList.toggle('is-mobile-editor', isMobileDevice);
  return isMobileDevice;
}
detectDevice();
window.addEventListener('resize', detectDevice);
window.addEventListener('orientationchange', detectDevice);

/* ══════════════════════════════════════════════
   SECURITY UTILITIES
   ══════════════════════════════════════════════ */

/* Escape HTML special chars to prevent XSS via innerHTML */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;');
}

/* Mammoth intentionally returns HTML. It is useful for the print preview,
   but it must never be inserted into the document as-is because a crafted
   DOCX can contain HTML attributes or elements that are unsafe in a preview
   window. Keep only the formatting elements used by the Word converter. */
function sanitizeDocumentHtml(html) {
  const allowedTags = new Set([
    'p','div','span','br','strong','b','em','i','u','s',
    'h1','h2','h3','h4','h5','h6','ul','ol','li',
    'table','thead','tbody','tfoot','tr','td','th',
    'blockquote','pre','code','img','a'
  ]);
  const dangerousTags = new Set([
    'script','style','iframe','frame','frameset','object','embed',
    'link','meta','base','form','input','button','textarea','select',
    'option','video','audio','source','svg','math'
  ]);
  const allowedAttrs = new Set([
    'class','alt','title','width','height','colspan','rowspan'
  ]);
  const template = document.createElement('template');
  template.innerHTML = String(html || '');

  const clean = parent => {
    for (const node of [...parent.childNodes]) {
      if (node.nodeType === Node.COMMENT_NODE) {
        node.remove();
        continue;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) continue;

      const tag = node.tagName.toLowerCase();
      if (dangerousTags.has(tag)) {
        node.remove();
        continue;
      }
      if (!allowedTags.has(tag)) {
        const text = document.createTextNode(node.textContent || '');
        node.replaceWith(text);
        continue;
      }

      for (const attr of [...node.attributes]) {
        const name = attr.name.toLowerCase();
        if (name.startsWith('on') || !allowedAttrs.has(name)) {
          node.removeAttribute(attr.name);
          continue;
        }
        if (name === 'class') {
          node.setAttribute('class', attr.value.replace(/[^a-zA-Z0-9 _-]/g, '').slice(0, 80));
        } else if (name === 'width' || name === 'height' ||
                   name === 'colspan' || name === 'rowspan') {
          const n = Number.parseInt(attr.value, 10);
          if (!Number.isFinite(n) || n < 1 || n > 10000) node.removeAttribute(attr.name);
          else node.setAttribute(attr.name, String(n));
        }
      }

      if (tag === 'a') {
        /* Links are deliberately rendered as non-clickable text. This keeps
           the Word preview local and prevents navigation to an external URL. */
        node.removeAttribute('href');
        node.removeAttribute('target');
        node.removeAttribute('rel');
      }
      if (tag === 'img') {
        const src = node.getAttribute('src') || '';
        if (!/^data:image\/(?:png|jpeg|gif|webp);base64,/i.test(src)) {
          node.remove();
          continue;
        }
      }
      clean(node);
    }
  };
  clean(template.content);
  return template.innerHTML;
}

/* Sanitize a user-supplied filename: strip path separators & control chars */
function sanitizeFilename(raw) {
  return String(raw)
    .replace(/[/\\:*?"<>|]/g, '_')   // illegal filename chars
    .replace(/[\x00-\x1f\x7f]/g, '') // control characters
    .trim()
    .substring(0, 200);
}

const MAX_PDF_SIZE_BYTES = 20 * 1024 * 1024;          // 20 MB
const MAX_DOCX_SIZE_BYTES = 20 * 1024 * 1024;         // 20 MB
const MAX_IMAGE_SIZE_BYTES = 20 * 1024 * 1024;        // 20 MB
const PDF_MAGIC          = [0x25, 0x50, 0x44, 0x46];  // %PDF

/**
 * Validate a File object as a genuine PDF.
 * Checks: (1) size ≤ 20 MB  (2) magic bytes %PDF
 * Returns true if valid, false and shows toast if not.
 */
async function validatePdf(file) {
  /* 1 — size */
  if (file.size > MAX_PDF_SIZE_BYTES) {
    toast(`الملف كبير جداً — الحد الأقصى ${MAX_PDF_SIZE_BYTES / 1024 / 1024} MB`, 'error');
    return false;
  }
  /* 2 — magic bytes (%PDF) */
  try {
    const head = await file.slice(0, 4).arrayBuffer();
    const hb   = new Uint8Array(head);
    if (!PDF_MAGIC.every((b, i) => hb[i] === b)) {
      toast('الملف ليس PDF صالحاً — فشل التحقق من البنية (magic bytes)', 'error');
      return false;
    }
  } catch {
    toast('تعذّر قراءة الملف', 'error');
    return false;
  }
  return true;
}

/* PDF.js — local worker + CMaps only (no CDN; matches CSP script-src 'self'). */
const IS_FILE_PROTOCOL = location.protocol === 'file:';
const PDFJS_BASE = document.baseURI || location.href;
const PDFJS_CMAP_URL = new URL('libs/pdfjs/cmaps/', PDFJS_BASE).href;
const PDFJS_STANDARD_FONT_URL = new URL('libs/pdfjs/standard_fonts/', PDFJS_BASE).href;

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'libs/pdf.worker.min.js?v=3.11.174',
  PDFJS_BASE
).href;

function pdfGetDocument(opts) {
  const o = { ...opts };
  if (o.data instanceof Uint8Array) o.data = o.data.slice();
  const docOpts = {
    ...o,
    cMapUrl: PDFJS_CMAP_URL,
    cMapPacked: true,
    standardFontDataUrl: PDFJS_STANDARD_FONT_URL,
  };
  /* Browsers block file:// workers; run PDF.js in-page instead of loading a worker script. */
  if (IS_FILE_PROTOCOL) docOpts.disableWorker = true;
  return pdfjsLib.getDocument(docOpts);
}

/* ── Route map ──────────────────────────────── */
const ROUTES = {
  '/':             { sid: 'tool-home',         ar:'الرئيسية',       en:'Home' },
  '/merge':        { sid: 'tool-merge',         ar:'دمج PDF',        en:'Merge PDF' },
  '/split':        { sid: 'tool-split',         ar:'تقسيم PDF',      en:'Split PDF' },
  '/rotate':       { sid: 'tool-rotate',        ar:'تدوير PDF',      en:'Rotate PDF' },
  '/delete-pages': { sid: 'tool-delete-pages',  ar:'حذف صفحات',     en:'Delete Pages' },
  '/extract-pages':{ sid: 'tool-extract-pages', ar:'استخراج صفحات', en:'Extract Pages' },
  '/reorder-pages':{ sid: 'tool-reorder-pages', ar:'إعادة الترتيب', en:'Reorder Pages' },
  '/page-numbers': { sid: 'tool-page-numbers',  ar:'ترقيم الصفحات', en:'Page Numbers' },
  '/edit':         { sid: 'tool-edit',          ar:'تحرير PDF',      en:'Edit PDF' },
  '/watermark':    { sid: 'tool-watermark',     ar:'علامة مائية',   en:'Watermark' },
  '/protect':      { sid: 'tool-protect',       ar:'حماية PDF',      en:'Protect PDF' },
  '/unlock':       { sid: 'tool-unlock',        ar:'فك الحماية',    en:'Unlock PDF' },
  '/compress':     { sid: 'tool-compress',      ar:'ضغط PDF',        en:'Compress PDF' },
  '/crop':         { sid: 'tool-crop',          ar:'قص PDF',         en:'Crop PDF' },
  '/convert':      { sid: 'tool-convert',       ar:'PDF إلى صور',   en:'PDF to Images' },
  '/images-to-pdf':{ sid: 'tool-images-to-pdf', ar:'صور إلى PDF',   en:'Images to PDF' },
  '/word-to-pdf':  { sid: 'tool-word-to-pdf',   ar:'Word إلى PDF',  en:'Word to PDF' },
};

/* ── Router ─────────────────────────────────── */
function navigate() {
  const hash = location.hash.replace('#','') || '/';
  const route = ROUTES[hash] || ROUTES['/'];
  document.querySelectorAll('.tool-section').forEach(s => s.classList.add('hidden'));
  document.getElementById(route.sid).classList.remove('hidden');
  document.getElementById('page-title').textContent = route[currentLang] || route.ar;
  const toolKey = hash.replace('/','') || 'home';
  document.querySelectorAll('.nav-item').forEach(a =>
    a.classList.toggle('active', a.dataset.tool === toolKey));
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

/* ── Sidebar & nav ──────────────────────────── */
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }
function toggleCat(btn) {
  const items = btn.nextElementSibling;
  items.classList.toggle('collapsed');
  btn.querySelector('.cat-arrow').textContent = items.classList.contains('collapsed') ? '▸' : '▾';
}

/* ── Keyboard shortcuts ─────────────────────── */
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); editUndo(); }
  if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key === 'z'))) { e.preventDefault(); editRedo(); }
});

/* ── Toast ──────────────────────────────────── */
function toast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast' + (type ? ' ' + type : '');
  el.classList.remove('hidden');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.add('hidden'), 3500);
}

/* ── Utilities ──────────────────────────────── */
function fmtBytes(b) {
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (b/1024).toFixed(1) + ' KB';
  return (b/1048576).toFixed(2) + ' MB';
}

function readFileBytes(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = e => res(new Uint8Array(e.target.result));
    r.onerror = rej;
    r.readAsArrayBuffer(file);
  });
}

function download(bytes, name, mime = 'application/pdf') {
  const url = URL.createObjectURL(new Blob([bytes], { type: mime }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1200);
}

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1200);
}

function parsePageRanges(str, total) {
  const pages = new Set();
  str.split(',').forEach(p => {
    p = p.trim();
    if (!p) return;
    if (p.includes('-')) {
      const [a,b] = p.split('-').map(Number);
      for (let i = a; i <= Math.min(b, total); i++) pages.add(i);
    } else {
      const n = Number(p);
      if (n >= 1 && n <= total) pages.add(n);
    }
  });
  return [...pages].sort((a,b) => a-b);
}

function dropFile(inputId, e) {
  e.preventDefault(); e.currentTarget.classList.remove('dragover');
  const f = e.dataTransfer.files[0]; if (!f) return;
  const input = document.getElementById(inputId);
  const dt = new DataTransfer(); dt.items.add(f);
  input.files = dt.files;
  input.dispatchEvent(new Event('change'));
}

function dropFiles(inputId, e) {
  e.preventDefault(); e.currentTarget.classList.remove('dragover');
  const files = e.dataTransfer.files; if (!files.length) return;
  const input = document.getElementById(inputId);
  const dt = new DataTransfer();
  if (input.files) for (const f of input.files) dt.items.add(f);
  for (const f of files) dt.items.add(f);
  input.files = dt.files;
  input.dispatchEvent(new Event('change'));
}

function resetTool(tool) {
  const sec = document.getElementById('tool-' + tool);
  sec.querySelectorAll('input[type=file]').forEach(i => { i.value = ''; });
  sec.querySelectorAll('.tool-form').forEach(el => el.classList.add('hidden'));
  sec.querySelectorAll('.upload-area').forEach(el => el.style.display = '');
}

function clearList(listId, actionsId, inputId) {
  document.getElementById(listId).innerHTML = '';
  document.getElementById(actionsId).style.display = 'none';
  const inp = document.getElementById(inputId); if (inp) inp.value = '';
}
function i2pClear() { i2pFiles = []; renderI2pList(); }

function showProgress(id, pct, label) {
  const wrap = document.getElementById(id); if (!wrap) return;
  wrap.classList.remove('hidden');
  wrap.querySelector('.progress-fill').style.width = pct + '%';
  const lbl = wrap.querySelector('.progress-label'); if (lbl && label) lbl.textContent = label;
}

/* ── PDF preview panel (base img + live-overlay canvas) ──── */
async function renderPreview(bytes, containerId, fileName, pageCount, fileSize) {
  const container = document.getElementById(containerId); if (!container) return;
  try {
    const pdfDoc = await pdfGetDocument({ data: bytes }).promise;
    const page   = await pdfDoc.getPage(1);
    const scale  = Math.min(110 / page.getViewport({ scale: 1 }).width, 1.8);
    const vp     = page.getViewport({ scale });
    const c      = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
    const ctx    = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0,0,c.width,c.height);
    try {
      await page.render({ canvas: c, canvasContext: ctx, viewport: vp }).promise;
    } catch (e) {
      console.error('PDF.js render (preview)', e);
      toast('فشل رسم المعاينة: ' + (e && e.message ? e.message : String(e)), 'error');
      return;
    }
    const pages = pageCount || pdfDoc.numPages;
    container.innerHTML = '';

    /* wrapper: base img + transparent overlay canvas */
    const wrap = document.createElement('div');
    wrap.setAttribute('dir', 'ltr');
    wrap.style.cssText = 'position:relative;display:inline-block;line-height:0;';

    const img = document.createElement('img');
    img.id  = containerId + '-base';
    img.src = c.toDataURL();
    img.style.cssText = 'display:block;max-width:110px;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.12);transition:transform .35s ease;';
    wrap.appendChild(img);

    const ov = document.createElement('canvas');
    ov.id  = containerId + '-ov';
    ov.width  = c.width; ov.height = c.height;
    ov.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border-radius:4px;';
    wrap.appendChild(ov);

    container.appendChild(wrap);
    const info = document.createElement('div'); info.className = 'preview-info';
    info.innerHTML = `
      <div class="pi-name" title="${escHtml(fileName || '')}">${escHtml(fileName || 'الملف')}</div>
      <div class="pi-pages">${pages} صفحة</div>
      ${fileSize ? `<div class="pi-size">${fmtBytes(fileSize)}</div>` : ''}`;
    container.appendChild(info);
  } catch {}
}

/* ══════════════════════════════════════════════
   LIVE PREVIEW FUNCTIONS
   ══════════════════════════════════════════════ */

/* Watermark — redraw overlay on every setting change */
function wmUpdatePreview() {
  const ov = document.getElementById('wm-preview-ov'); if (!ov) return;
  const ctx = ov.getContext('2d');
  ctx.clearRect(0, 0, ov.width, ov.height);
  const text    = document.getElementById('wm-text')?.value || 'WATERMARK';
  const opacity = parseFloat(document.getElementById('wm-opacity')?.value || 20) / 100;
  const angle   = parseInt(document.getElementById('wm-angle')?.value  || 45);
  const fSize   = Math.max(5, parseInt(document.getElementById('wm-size')?.value || 60) * ov.width / 595);
  const mode    = document.getElementById('wm-mode')?.value || 'center';
  const rad     = (-angle * Math.PI) / 180;
  ctx.font = `bold ${fSize}px 'Segoe UI', Tahoma, Arial, sans-serif`;
  ctx.fillStyle = '#444';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = opacity;
  const tw = ctx.measureText(text).width;
  if (mode === 'center') {
    ctx.save();
    ctx.translate(ov.width / 2, ov.height / 2);
    ctx.rotate(rad);
    ctx.fillText(text, -tw / 2, 0);
    ctx.restore();
  } else {
    /* tile to match actual PDF output — same step logic */
    const xStep = Math.max(tw * 1.4, 80  * ov.width  / 595);
    const yStep = Math.max(fSize * 3, 60  * ov.height / 842);
    for (let x = -ov.width; x < ov.width * 2; x += xStep) {
      for (let y = -ov.height; y < ov.height * 2; y += yStep) {
        ctx.save();
        ctx.translate(x + tw / 2, y);
        ctx.rotate(rad);
        ctx.fillText(text, -tw / 2, 0);
        ctx.restore();
      }
    }
  }
  ctx.globalAlpha = 1;
}

/* Page Numbers — draw label at chosen position */
function pnUpdatePreview() {
  const ov = document.getElementById('pn-preview-ov'); if (!ov) return;
  const ctx = ov.getContext('2d');
  ctx.clearRect(0, 0, ov.width, ov.height);
  const prefix = document.getElementById('pn-prefix')?.value || '';
  const pos    = document.getElementById('pn-pos')?.value || 'bottom-center';
  const label  = prefix + '1';
  const fSize     = Math.max(6, 11 * ov.width / 595);
  ctx.font = `bold ${fSize}px 'Segoe UI', Tahoma, Arial, sans-serif`;
  ctx.textBaseline = 'alphabetic';
  const tw  = ctx.measureText(label).width;
  const pad = Math.max(4, 8 * ov.width / 595);
  let x, y;
  if      (pos === 'bottom-center') { x = ov.width / 2 - tw / 2; y = ov.height - pad; }
  else if (pos === 'bottom-right')  { x = ov.width - tw - pad;    y = ov.height - pad; }
  else if (pos === 'bottom-left')   { x = pad;                     y = ov.height - pad; }
  else /* top-center */             { x = ov.width / 2 - tw / 2;  y = fSize + pad; }
  /* white pill background */
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.fillRect(x - 3, y - fSize - 1, tw + 6, fSize + 4);
  ctx.fillStyle = '#333';
  ctx.fillText(label, x, y);
}

/* Rotate — accumulate angle, show CSS preview; rotatePdf() on confirm */
let _rotateAccumulated = 0;
function rotateSetAngle(delta) {
  _rotateAccumulated = (_rotateAccumulated + delta + 360) % 360;
  const base = document.getElementById('rotate-preview-base');
  if (base) {
    base.style.transform  = `rotate(${_rotateAccumulated}deg)`;
    base.style.transition = 'transform .35s ease';
  }
  const applyBtn = document.getElementById('rotate-apply-btn');
  if (applyBtn) applyBtn.disabled = (_rotateAccumulated === 0);
}
function rotateApply() {
  if (!_rotateAccumulated) return toast('اختر زاوية الدوران أولاً', 'error');
  rotatePdf(_rotateAccumulated);
  _rotateAccumulated = 0;
  const base = document.getElementById('rotate-preview-base');
  if (base) { base.style.transform = 'rotate(0deg)'; }
  const btn = document.getElementById('rotate-apply-btn');
  if (btn) btn.disabled = true;
}

/* ── Save dialog (Promise-based) ────────────── */
let _saveRes, _saveRej;
function showSaveDialog(defaultName, ext = '.pdf') {
  return new Promise((resolve, reject) => {
    _saveRes = resolve; _saveRej = reject;
    const base = defaultName.replace(/\.pdf$/i,'').replace(/\.zip$/i,'');
    document.getElementById('save-filename').value = base;
    document.getElementById('save-ext').textContent = ext;
    document.getElementById('save-dialog').classList.remove('hidden');
    setTimeout(() => {
      const inp = document.getElementById('save-filename');
      inp.focus(); inp.select();
    }, 50);
  });
}
function confirmSave() {
  const raw  = document.getElementById('save-filename').value.trim();
  const name = sanitizeFilename(raw);
  const ext  = document.getElementById('save-ext').textContent;
  document.getElementById('save-dialog').classList.add('hidden');
  _saveRes(name ? name + ext : 'ملف' + ext);
}
function cancelSave() {
  document.getElementById('save-dialog').classList.add('hidden');
  _saveRej(new Error('cancelled'));
}

/* ══════════════════════════════════════════════
   HOME
   ══════════════════════════════════════════════ */
async function homeDrop(e) {
  e.preventDefault();
  document.getElementById('home-dropzone').classList.remove('dragover');
  const f = e.dataTransfer.files[0];
  if (!f) return;
  if (!await validatePdf(f)) return;
  location.hash = '#/edit';
  requestAnimationFrame(() => requestAnimationFrame(() => editLoadFile(f)));
}
async function homeFilePick(input) {
  const f = input.files[0];
  if (!f) return;
  if (!await validatePdf(f)) return;
  location.hash = '#/edit';
  requestAnimationFrame(() => requestAnimationFrame(() => editLoadFile(f)));
}

/* ══════════════════════════════════════════════
   MERGE
   ══════════════════════════════════════════════ */
let mergeFiles = [];

async function mergeAddFiles(input) {
  for (const f of input.files) {
    if (await validatePdf(f)) mergeFiles.push(f);
  }
  renderMergeList();
}
function renderMergeList() {
  const list = document.getElementById('merge-list');
  list.innerHTML = '';
  mergeFiles.forEach((f, i) => {
    const card = document.createElement('div'); card.className = 'file-card';
    card.innerHTML = `
      <button class="remove-btn" onclick="mergeRemove(${i})">✕</button>
      <div class="file-card-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
          <path d="M10 13h4M10 17h4M8 9h1"/>
        </svg>
      </div>
      <div class="file-card-name" title="${escHtml(f.name)}">${escHtml(f.name)}</div>
      <div class="file-card-size">${fmtBytes(f.size)}</div>
      <div class="file-order">ملف ${i+1}</div>`;
    list.appendChild(card);
  });
  document.getElementById('merge-actions').style.display = mergeFiles.length >= 2 ? 'flex' : 'none';
}
function mergeRemove(i) { mergeFiles.splice(i, 1); renderMergeList(); }

async function mergePdfs() {
  if (mergeFiles.length < 2) return toast('يرجى اختيار ملفين على الأقل', 'error');
  let fileName;
  try { fileName = await showSaveDialog('ملف-مدموج', '.pdf'); } catch { return; }
  try {
    showProgress('merge-progress', 5, 'جاري الدمج...');
    const { PDFDocument } = PDFLib;
    const merged = await PDFDocument.create();
    for (let idx = 0; idx < mergeFiles.length; idx++) {
      const bytes = await readFileBytes(mergeFiles[idx]);
      const doc = await PDFDocument.load(bytes);
      const pages = await merged.copyPages(doc, doc.getPageIndices());
      pages.forEach(p => merged.addPage(p));
      showProgress('merge-progress', Math.round(5 + ((idx+1)/mergeFiles.length)*88), `دُمج ${idx+1} من ${mergeFiles.length}`);
    }
    const out = await merged.save();
    showProgress('merge-progress', 100, 'تم!');
    download(out, fileName);
    toast('تم دمج الملفات بنجاح ✓', 'success');
    setTimeout(() => document.getElementById('merge-progress').classList.add('hidden'), 2500);
  } catch (e) { toast('خطأ في الدمج: ' + e.message, 'error'); }
}

/* ══════════════════════════════════════════════
   SPLIT
   ══════════════════════════════════════════════ */
let splitFileData = null;

async function splitLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  splitFileData = f;
  const bytes = await readFileBytes(f);
  const { PDFDocument } = PDFLib;
  const doc = await PDFDocument.load(bytes);
  document.getElementById('split-ui').classList.remove('hidden');
  await renderPreview(bytes, 'split-preview', f.name, doc.getPageCount(), f.size);
  toast(`تم التحميل — ${doc.getPageCount()} صفحة`);
}
function splitModeChange() {
  const mode = document.getElementById('split-mode').value;
  document.getElementById('split-range-row').classList.toggle('hidden', mode !== 'range');
  document.getElementById('split-every-row').classList.toggle('hidden', mode !== 'every');
}
async function splitPdf() {
  if (!splitFileData) return;
  const mode = document.getElementById('split-mode').value;
  const { PDFDocument } = PDFLib;
  const bytes = await readFileBytes(splitFileData);
  const src = await PDFDocument.load(bytes);
  const total = src.getPageCount();

  /* ── Range mode: selected pages + remaining pages ── */
  if (mode === 'range') {
    const selectedSet = new Set();
    document.getElementById('split-range').value.split(',').forEach(part => {
      part = part.trim();
      if (part.includes('-')) {
        const [a,b] = part.split('-').map(n => parseInt(n)-1);
        for (let i=a; i<=b && i<total; i++) if (i>=0) selectedSet.add(i);
      } else { const n=parseInt(part)-1; if (n>=0&&n<total) selectedSet.add(n); }
    });
    if (!selectedSet.size) return toast(currentLang==='ar'?'لا توجد صفحات للتقسيم':'No pages to split','error');
    const selIdxs = [...selectedSet].sort((a,b)=>a-b);
    const remIdxs = Array.from({length:total},(_,i)=>i).filter(i=>!selectedSet.has(i));
    let fileName;
    try { fileName = await showSaveDialog('ملف-مقسوم', remIdxs.length ? '.zip' : '.pdf'); } catch { return; }
    try {
      const part1 = await PDFDocument.create();
      const pages1 = await part1.copyPages(src, selIdxs);
      pages1.forEach(p => part1.addPage(p));
      if (!remIdxs.length) {
        download(await part1.save(), fileName);
      } else {
        const zip = new JSZip();
        zip.file('part-1-selected.pdf', await part1.save());
        const part2 = await PDFDocument.create();
        const pages2 = await part2.copyPages(src, remIdxs);
        pages2.forEach(p => part2.addPage(p));
        zip.file('part-2-remaining.pdf', await part2.save());
        downloadBlob(await zip.generateAsync({type:'blob'}), fileName);
      }
      toast(currentLang==='ar'
        ? `تم الحفظ — جزء 1 (${selIdxs.length} ص) + جزء 2 (${remIdxs.length} ص) ✓`
        : `Saved — Part 1 (${selIdxs.length} p) + Part 2 (${remIdxs.length} p) ✓`, 'success');
    } catch(e) { toast('خطأ: '+e.message,'error'); }
    return;
  }

  /* ── All / Every-N modes ── */
  let groups = [];
  if (mode === 'all') {
    groups = Array.from({ length: total }, (_, i) => [i]);
  } else {
    const n = parseInt(document.getElementById('split-every-n').value)||2;
    for (let i=0; i<total; i+=n) groups.push(Array.from({length:Math.min(n,total-i)},(_,j)=>i+j));
  }
  if (!groups.length) return toast(currentLang==='ar'?'لا توجد صفحات للتقسيم':'No pages to split','error');
  const ext = groups.length === 1 ? '.pdf' : '.zip';
  let fileName;
  try { fileName = await showSaveDialog('ملف-مقسوم', ext); } catch { return; }
  try {
    if (groups.length === 1) {
      const part = await PDFDocument.create();
      const pages = await part.copyPages(src, groups[0]);
      pages.forEach(p => part.addPage(p));
      download(await part.save(), fileName);
    } else {
      const zip = new JSZip();
      for (let i=0; i<groups.length; i++) {
        const part = await PDFDocument.create();
        const pages = await part.copyPages(src, groups[i]);
        pages.forEach(p => part.addPage(p));
        zip.file(`part-${i+1}.pdf`, await part.save());
      }
      downloadBlob(await zip.generateAsync({type:'blob'}), fileName);
    }
    toast(currentLang==='ar'?`تم تقسيم الملف إلى ${groups.length} جزء ✓`:`Split into ${groups.length} parts ✓`,'success');
  } catch (e) { toast('خطأ: ' + e.message, 'error'); }
}

/* ══════════════════════════════════════════════
   ROTATE
   ══════════════════════════════════════════════ */
let rotateFileData = null;

async function rotateLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  rotateFileData = f; _rotateAccumulated = 0;
  const bytes = await readFileBytes(f);
  document.getElementById('rotate-ui').classList.remove('hidden');
  await renderPreview(bytes, 'rotate-preview', f.name, null, f.size);
  const btn = document.getElementById('rotate-apply-btn');
  if (btn) btn.disabled = true;
  toast('تم التحميل — انقر زاوية الدوران وشاهد المعاينة قبل التطبيق');
}
async function rotatePdf(angle) {
  if (!rotateFileData) return;
  const { PDFDocument, degrees } = PDFLib;
  const bytes = await readFileBytes(rotateFileData);
  const doc = await PDFDocument.load(bytes);
  const scope = document.getElementById('rotate-scope').value;
  doc.getPages().forEach((p,i) => {
    if (scope==='all'||(scope==='odd'&&i%2===0)||(scope==='even'&&i%2===1))
      p.setRotation(degrees((p.getRotation().angle+angle)%360));
  });
  let fileName;
  try { fileName = await showSaveDialog('ملف-مدور', '.pdf'); } catch { return; }
  download(await doc.save(), fileName);
  toast('تم التدوير وتنزيل الملف ✓', 'success');
}

/* ══════════════════════════════════════════════
   DELETE PAGES
   ══════════════════════════════════════════════ */
let delFileData = null, delTotal = 0;

async function delLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  delFileData = f; delSelectedPages.clear();

  /* Read two independent copies — PDFLib and pdfjsLib each consume the buffer */
  const bytesA = await readFileBytes(f);
  const bytesB = await readFileBytes(f);

  const doc = await PDFLib.PDFDocument.load(bytesA);
  delTotal = doc.getPageCount();
  document.getElementById('del-total').textContent = `إجمالي الصفحات: ${delTotal}`;
  document.getElementById('del-pages').value = '';
  document.getElementById('del-ui').classList.remove('hidden');
  await renderPreview(bytesA.slice(), 'del-preview', f.name, delTotal, f.size);

  /* Render ALL pages as clickable thumbnails */
  const grid   = document.getElementById('del-thumbs');
  grid.innerHTML = '';
  const hint = document.createElement('p');
  hint.style.cssText = 'font-size:12px;color:#64748b;margin-bottom:8px;width:100%';
  hint.textContent   = 'اضغط على الصفحة لتحديدها للحذف (تتلوّن باللون الأحمر)';
  grid.appendChild(hint);

  const pdfDoc = await pdfGetDocument({ data: bytesB }).promise;
  for (let i = 1; i <= delTotal; i++) {
    const page = await pdfDoc.getPage(i);
    const vp   = page.getViewport({ scale: 0.22 });
    const c    = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
    const ctx  = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0,0,c.width,c.height);
    await page.render({ canvas: c, canvasContext: ctx, viewport: vp }).promise;
    const label = document.createElement('div'); label.className='thumb-num'; label.textContent=`صفحة ${i}`;
    const card  = document.createElement('div');
    card.className = 'thumb-card'; card.dataset.page = i; card.style.cursor = 'pointer';
    card.appendChild(c); card.appendChild(label);
    card.addEventListener('click', () => {
      if (delSelectedPages.has(i)) {
        delSelectedPages.delete(i);
        card.style.outline = ''; card.style.boxShadow = ''; card.style.opacity = '';
      } else {
        delSelectedPages.add(i);
        card.style.outline = '2px solid #ef4444';
        card.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.25)';
        card.style.opacity = '0.65';
      }
      document.getElementById('del-pages').value = [...delSelectedPages].sort((a,b)=>a-b).join(', ');
    });
    grid.appendChild(card);
  }
}
async function deletePages() {
  if (!delFileData) return;
  const { PDFDocument } = PDFLib;
  const bytes = await readFileBytes(delFileData);
  const doc = await PDFDocument.load(bytes);
  const toDelete = parsePageRanges(document.getElementById('del-pages').value, delTotal);
  if (!toDelete.length) return toast('أدخل أرقام الصفحات للحذف', 'error');
  const keep = Array.from({length:delTotal},(_,i)=>i+1).filter(n=>!toDelete.includes(n));
  if (!keep.length) return toast('لا يمكن حذف جميع الصفحات', 'error');
  const out = await PDFDocument.create();
  const pages = await out.copyPages(doc, keep.map(n=>n-1));
  pages.forEach(p => out.addPage(p));
  let fileName;
  try { fileName = await showSaveDialog('ملف-محذوف-صفحات', '.pdf'); } catch { return; }
  download(await out.save(), fileName);
  toast(`تم حذف ${toDelete.length} صفحة ✓`, 'success');
}

/* ══════════════════════════════════════════════
   EXTRACT PAGES
   ══════════════════════════════════════════════ */
let extFileData = null, extTotal = 0;

async function extLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  extFileData = f;

  const bytesA = await readFileBytes(f);
  const bytesB = await readFileBytes(f);

  const doc = await PDFLib.PDFDocument.load(bytesA);
  extTotal = doc.getPageCount();
  document.getElementById('ext-total').textContent = `إجمالي الصفحات: ${extTotal}`;
  document.getElementById('ext-ui').classList.remove('hidden');
  await renderPreview(bytesA.slice(), 'ext-preview', f.name, extTotal, f.size);

  /* Render ALL pages as clickable thumbnails */
  const extSelPages = window._extSelPages = new Set();
  const grid = document.getElementById('ext-thumbs');
  if (!grid) return;
  grid.innerHTML = '';
  const hint = document.createElement('p');
  hint.style.cssText = 'font-size:12px;color:#64748b;margin-bottom:8px;width:100%';
  hint.textContent   = 'اضغط على الصفحة لتحديدها للاستخراج (تتلوّن باللون الأزرق)';
  grid.appendChild(hint);

  const pdfDoc = await pdfGetDocument({ data: bytesB }).promise;
  for (let i = 1; i <= extTotal; i++) {
    const page = await pdfDoc.getPage(i);
    const vp   = page.getViewport({ scale: 0.22 });
    const c    = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
    const ctx  = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0,0,c.width,c.height);
    await page.render({ canvas: c, canvasContext: ctx, viewport: vp }).promise;
    const label = document.createElement('div'); label.className='thumb-num'; label.textContent=`صفحة ${i}`;
    const card  = document.createElement('div');
    card.className = 'thumb-card'; card.dataset.page = i; card.style.cursor = 'pointer';
    card.appendChild(c); card.appendChild(label);
    card.addEventListener('click', () => {
      if (extSelPages.has(i)) {
        extSelPages.delete(i);
        card.style.outline = ''; card.style.boxShadow = ''; card.style.opacity = '';
      } else {
        extSelPages.add(i);
        card.style.outline = '2px solid #1a56db';
        card.style.boxShadow = '0 0 0 3px rgba(26,86,219,0.25)';
        card.style.opacity = '0.75';
      }
      document.getElementById('ext-pages').value = [...extSelPages].sort((a,b)=>a-b).join(', ');
    });
    grid.appendChild(card);
  }
}
async function extractPages() {
  if (!extFileData) return;
  const { PDFDocument } = PDFLib;
  const bytes = await readFileBytes(extFileData);
  const doc = await PDFDocument.load(bytes);
  const toExtract = parsePageRanges(document.getElementById('ext-pages').value, extTotal);
  if (!toExtract.length) return toast('أدخل أرقام الصفحات للاستخراج', 'error');
  const out = await PDFDocument.create();
  const pages = await out.copyPages(doc, toExtract.map(n=>n-1));
  pages.forEach(p => out.addPage(p));
  let fileName;
  try { fileName = await showSaveDialog('صفحات-مستخرجة', '.pdf'); } catch { return; }
  download(await out.save(), fileName);
  toast(`تم استخراج ${toExtract.length} صفحة ✓`, 'success');
}

/* ══════════════════════════════════════════════
   REORDER PAGES
   ══════════════════════════════════════════════ */
let reorderFileData = null;

async function reorderLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  reorderFileData = f;
  const bytesA = await readFileBytes(f);
  const bytesB = await readFileBytes(f);
  const pdfDoc = await pdfGetDocument({ data: bytesA }).promise;
  await renderPreview(bytesB, 'reorder-preview', f.name, pdfDoc.numPages, f.size);
  const grid = document.getElementById('reorder-thumbs');
  grid.innerHTML = '';
  for (let i=1; i<=pdfDoc.numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const vp = page.getViewport({ scale: 0.28 });
    const c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
    const rctx = c.getContext('2d'); rctx.fillStyle = '#fff'; rctx.fillRect(0,0,c.width,c.height);
    await page.render({ canvas: c, canvasContext: rctx, viewport: vp }).promise;
    const label = document.createElement('div'); label.className='thumb-num'; label.textContent=`صفحة ${i}`;
    const card = document.createElement('div');
    card.className = 'thumb-card'; card.draggable = true; card.dataset.idx = i-1;
    card.appendChild(c); card.appendChild(label);
    card.dataset.orig = i-1; /* original 0-based page index — never changes */
    card.addEventListener('dragstart', e => {
      const fromPos = [...grid.children].indexOf(card);
      e.dataTransfer.setData('text/plain', fromPos); card.style.opacity='.5';
    });
    card.addEventListener('dragend', () => card.style.opacity='1');
    card.addEventListener('dragover', e => { e.preventDefault(); card.style.boxShadow='0 0 0 2px #4d7c0f'; });
    card.addEventListener('dragleave', () => card.style.boxShadow='');
    card.addEventListener('drop', e => {
      e.preventDefault(); card.style.boxShadow='';
      const from = parseInt(e.dataTransfer.getData('text/plain'));
      const to   = [...grid.children].indexOf(card);
      if (from===to) return;
      const cards = [...grid.children];
      if (from<to) grid.insertBefore(cards[from], cards[to].nextSibling);
      else         grid.insertBefore(cards[from], cards[to]);
    });
    grid.appendChild(card);
  }
  document.getElementById('reorder-ui').classList.remove('hidden');
  toast(`تم التحميل — ${pdfDoc.numPages} صفحة. اسحب لإعادة الترتيب`);
}
async function reorderSave() {
  if (!reorderFileData) return;
  const { PDFDocument } = PDFLib;
  const bytes = await readFileBytes(reorderFileData);
  const src = await PDFDocument.load(bytes);
  const grid = document.getElementById('reorder-thumbs');
  const finalOrder = [...grid.children].map(c => parseInt(c.dataset.orig));
  const out = await PDFDocument.create();
  const pages = await out.copyPages(src, finalOrder);
  pages.forEach(p => out.addPage(p));
  let fileName;
  try { fileName = await showSaveDialog('ملف-مرتب', '.pdf'); } catch { return; }
  download(await out.save(), fileName);
  toast('تم حفظ الترتيب الجديد ✓', 'success');
}

/* ══════════════════════════════════════════════
   PAGE NUMBERS
   ══════════════════════════════════════════════ */
let pnFileData = null;

async function pnLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  pnFileData = f;
  const bytes = await readFileBytes(f);
  document.getElementById('pn-ui').classList.remove('hidden');
  await renderPreview(bytes, 'pn-preview', f.name, null, f.size);
  pnUpdatePreview();
  toast('تم التحميل');
}
async function addPageNumbers() {
  if (!pnFileData) return;
  const { PDFDocument, rgb, StandardFonts } = PDFLib;
  const bytes = await readFileBytes(pnFileData);
  const doc = await PDFDocument.load(bytes);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const prefix = document.getElementById('pn-prefix').value;
  const pos = document.getElementById('pn-pos').value;
  const size = 11;
  doc.getPages().forEach((page,i) => {
    const { width, height } = page.getSize();
    const label = prefix + (i + 1);
    const tw = font.widthOfTextAtSize(label, size);
    let x, y;
    if (pos==='bottom-center')      { x=width/2-tw/2; y=22; }
    else if (pos==='bottom-right')  { x=width-tw-22;  y=22; }
    else if (pos==='bottom-left')   { x=22;            y=22; }
    else                             { x=width/2-tw/2; y=height-28; }
    page.drawText(label, { x, y, size, font, color: rgb(.25,.25,.25) });
  });
  let fileName;
  try { fileName = await showSaveDialog('ملف-مرقم', '.pdf'); } catch { return; }
  download(await doc.save(), fileName);
  toast('تم إضافة الترقيم ✓', 'success');
}

/* ══════════════════════════════════════════════
   WATERMARK
   ══════════════════════════════════════════════ */
let wmFileData = null;

async function wmLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  wmFileData = f;
  const bytes = await readFileBytes(f);
  document.getElementById('wm-ui').classList.remove('hidden');
  await renderPreview(bytes, 'wm-preview', f.name, null, f.size);
  wmUpdatePreview();
  toast('تم التحميل');
}
/* Rasterise the watermark text onto a canvas and return PNG bytes.
   Using canvas avoids WinAnsi font encoding errors with Arabic/Unicode text. */
async function _wmRasterize(text, opacity, angleDeg, fSize, mode, pageW, pageH) {
  const sc  = 2; /* 2× for sharpness */
  const W   = Math.round(pageW * sc), H = Math.round(pageH * sc);
  const tc  = document.createElement('canvas'); tc.width = W; tc.height = H;
  const ctx = tc.getContext('2d');
  const fs  = fSize * sc;
  ctx.font        = `bold ${fs}px 'Segoe UI', Tahoma, Arial, sans-serif`;
  ctx.fillStyle   = '#808080';
  ctx.globalAlpha = opacity;
  ctx.textBaseline = 'middle';
  const tw = ctx.measureText(text).width;
  const rad = (-angleDeg * Math.PI) / 180;
  if (mode === 'center') {
    ctx.save(); ctx.translate(W/2, H/2); ctx.rotate(rad);
    ctx.fillText(text, -tw/2, 0); ctx.restore();
  } else {
    const xStep = Math.max(tw * 1.4, 80  * sc);
    const yStep = Math.max(fs  * 3,  60  * sc);
    for (let x = -W; x < W*2; x += xStep)
      for (let y = -H; y < H*2; y += yStep) {
        ctx.save(); ctx.translate(x + tw/2, y); ctx.rotate(rad);
        ctx.fillText(text, -tw/2, 0); ctx.restore();
      }
  }
  return new Promise(res => tc.toBlob(b => b.arrayBuffer().then(ab => res(new Uint8Array(ab))), 'image/png'));
}

async function applyWatermark() {
  if (!wmFileData) return toast('اختر ملف PDF أولاً', 'error');
  let fileName;
  try { fileName = await showSaveDialog('ملف-بعلامة-مائية', '.pdf'); } catch { return; }
  try {
    const { PDFDocument } = PDFLib;
    const bytes   = await readFileBytes(wmFileData);
    const doc     = await PDFDocument.load(bytes);
    const text    = document.getElementById('wm-text').value || 'WATERMARK';
    const opacity = parseInt(document.getElementById('wm-opacity').value) / 100;
    const angle   = parseInt(document.getElementById('wm-angle').value);
    const fSize   = parseInt(document.getElementById('wm-size').value);
    const mode    = document.getElementById('wm-mode').value;

    /* Rasterize once per unique page size */
    const imgCache = new Map();
    for (const page of doc.getPages()) {
      const { width, height } = page.getSize();
      const key = `${Math.round(width)}x${Math.round(height)}`;
      if (!imgCache.has(key)) {
        const pngBytes = await _wmRasterize(text, opacity, angle, fSize, mode, width, height);
        imgCache.set(key, await doc.embedPng(pngBytes));
      }
      page.drawImage(imgCache.get(key), { x:0, y:0, width, height });
    }
    download(await doc.save(), fileName);
    toast('تمت إضافة العلامة المائية ✓', 'success');
  } catch(e) { toast('فشلت العملية: ' + e.message, 'error'); }
}

/* ══════════════════════════════════════════════
   PROTECT
   ══════════════════════════════════════════════ */
let protFileData = null;

async function protLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  protFileData = f;
  const bytes = await readFileBytes(f);
  document.getElementById('prot-ui').classList.remove('hidden');
  await renderPreview(bytes, 'prot-preview', f.name, null, f.size);
  toast('تم التحميل');
}
async function protectPdf() {
  if (!protFileData) return;
  const pass = document.getElementById('prot-pass').value;
  if (!pass) return toast('أدخل كلمة مرور', 'error');
  const owner = document.getElementById('prot-owner').value || pass + '_owner';
  if (typeof PdfEncryptLite === 'undefined' || typeof PdfEncryptLite.encryptPDF !== 'function') {
    return toast('مكتبة التشفير غير متوفرة', 'error');
  }
  const bytes = await readFileBytes(protFileData);
  let fileName;
  try { fileName = await showSaveDialog('ملف-محمي', '.pdf'); } catch { return; }
  try {
    /* pdf-lib ignores userPassword on save; use pdf-encrypt-lite for real RC4-128 protection */
    const out = await PdfEncryptLite.encryptPDF(bytes, pass, owner);
    download(out, fileName);
    toast('تم تشفير الملف ✓', 'success');
  } catch (e) {
    console.error('protectPdf', e);
    toast('فشل تشفير الملف: ' + (e && e.message ? e.message : String(e)), 'error');
  }
}

/* ══════════════════════════════════════════════
   UNLOCK
   ══════════════════════════════════════════════ */
let unlockFileData = null;

async function unlockLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  unlockFileData = f;
  const bytes = await readFileBytes(f);
  document.getElementById('unlock-ui').classList.remove('hidden');
  await renderPreview(bytes, 'unlock-preview', f.name, null, f.size);
  toast('تم التحميل — أدخل كلمة المرور لفك الحماية');
}
async function unlockPdf() {
  if (!unlockFileData) return;
  const pass = document.getElementById('unlock-pass').value;
  if (!pass) return toast('أدخل كلمة المرور', 'error');
  const bytes = await readFileBytes(unlockFileData);
  let out;
  try {
    if (typeof PdfDecryptLite !== 'undefined' && typeof PdfDecryptLite.decryptPDF === 'function') {
      out = await PdfDecryptLite.decryptPDF(bytes, pass);
    } else {
      const doc = await PDFLib.PDFDocument.load(bytes, { password: pass });
      out = await doc.save();
    }
  } catch (e1) {
    try {
      const doc = await PDFLib.PDFDocument.load(bytes, { password: pass });
      out = await doc.save();
    } catch {
      console.error('unlockPdf', e1);
      return toast('كلمة المرور غير صحيحة أو الملف غير محمي', 'error');
    }
  }
  let fileName;
  try { fileName = await showSaveDialog('ملف-غير-محمي', '.pdf'); } catch { return; }
  download(out, fileName);
  toast('تم فك الحماية ✓', 'success');
}

/* ══════════════════════════════════════════════
   COMPRESS
   ══════════════════════════════════════════════ */
let compFileData = null;

async function compLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  compFileData = f;
  const bytes = await readFileBytes(f);
  document.getElementById('comp-info').textContent = `الحجم الأصلي: ${fmtBytes(f.size)}`;
  document.getElementById('comp-ui').classList.remove('hidden');
  await renderPreview(bytes, 'comp-preview', f.name, null, f.size);
  toast(`تم التحميل — ${fmtBytes(f.size)}`);
}
async function compressPdf() {
  if (!compFileData) return;
  const level = document.getElementById('comp-level').value;
  const { PDFDocument } = PDFLib;

  /* ── Heavy: rasterise each page to JPEG ── */
  if (level === 'heavy') {
    const bytesA = await readFileBytes(compFileData);
    const pdfjs  = await pdfGetDocument({ data: bytesA }).promise;
    const out    = await PDFDocument.create();
    const scale  = 1.0;
    for (let i = 1; i <= pdfjs.numPages; i++) {
      const page = await pdfjs.getPage(i);
      const vp   = page.getViewport({ scale });
      const c    = document.createElement('canvas');
      c.width = vp.width; c.height = vp.height;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
      await page.render({ canvas: c, canvasContext: ctx, viewport: vp }).promise;
      const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', 0.60));
      const arr  = new Uint8Array(await blob.arrayBuffer());
      const img  = await out.embedJpg(arr);
      const pdfW = vp.width  / scale;
      const pdfH = vp.height / scale;
      const pg   = out.addPage([pdfW, pdfH]);
      pg.drawImage(img, { x: 0, y: 0, width: pdfW, height: pdfH });
    }
    const outBytes = await out.save({ useObjectStreams: true });
    const origSize = compFileData.size;
    const reduction = Math.max(0, Math.round((1 - outBytes.length / origSize) * 100));
    let fileName;
    try { fileName = await showSaveDialog('ملف-مضغوط', '.pdf'); } catch { return; }
    download(outBytes, fileName);
    document.getElementById('comp-info').innerHTML =
      `${currentLang==='ar'?'الحجم الأصلي':'Original'}: <strong>${fmtBytes(origSize)}</strong> &larr; ${currentLang==='ar'?'بعد الضغط':'After'}: <strong>${fmtBytes(outBytes.length)}</strong>&ensp;(${reduction}%)`;
    toast(currentLang==='ar'?`تم الضغط — تقليص ${reduction}% ✓`:`Compressed — ${reduction}% reduction ✓`, 'success');
    return;
  }

  /* ── Light / Medium ── */
  const bytes = await readFileBytes(compFileData);
  const doc = await PDFDocument.load(bytes);
  doc.setTitle(''); doc.setAuthor(''); doc.setSubject('');
  doc.setKeywords([]); doc.setProducer(''); doc.setCreator('');
  const saveOpts = level === 'medium' ? { useObjectStreams: true } : {};
  const out = await doc.save(saveOpts);
  const reduction = Math.max(0, Math.round((1 - out.length / bytes.length) * 100));
  let fileName;
  try { fileName = await showSaveDialog('ملف-مضغوط', '.pdf'); } catch { return; }
  download(out, fileName);
  document.getElementById('comp-info').innerHTML =
    `${currentLang==='ar'?'الحجم الأصلي':'Original'}: <strong>${fmtBytes(bytes.length)}</strong> &larr; ${currentLang==='ar'?'بعد الضغط':'After'}: <strong>${fmtBytes(out.length)}</strong>&ensp;(${reduction}%)`;
  toast(currentLang==='ar'?`تم الضغط — تقليص ${reduction}% ✓`:`Compressed — ${reduction}% reduction ✓`, 'success');
}

/* ══════════════════════════════════════════════
   CONVERT (PDF → Images)
   ══════════════════════════════════════════════ */
let convFileData = null;

async function convLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  convFileData = f;
  const bytes = await readFileBytes(f);
  document.getElementById('conv-ui').classList.remove('hidden');
  await renderPreview(bytes, 'conv-preview', f.name, null, f.size);
  toast('تم التحميل');
}
async function convertToImages() {
  if (!convFileData) return;
  const scale = parseInt(document.getElementById('conv-dpi').value)||2;
  let zipName;
  try { zipName = await showSaveDialog('صور-PDF', '.zip'); } catch { return; }
  const bytes = await readFileBytes(convFileData);
  const pdfDoc = await pdfGetDocument({ data: bytes }).promise;
  const zip = new JSZip();
  const thumbs = document.getElementById('conv-thumbs'); thumbs.innerHTML = '';
  for (let i=1; i<=pdfDoc.numPages; i++) {
    toast(`تحويل صفحة ${i} من ${pdfDoc.numPages}...`);
    const page = await pdfDoc.getPage(i);
    const vp = page.getViewport({ scale });
    const c = document.createElement('canvas'); c.width=vp.width; c.height=vp.height;
    await page.render({ canvas:c, canvasContext:c.getContext('2d'), viewport:vp }).promise;
    const blob = await new Promise(res => c.toBlob(res,'image/png'));
    zip.file(`page-${i}.png`, await blob.arrayBuffer());
    // thumbnail
    const tv = page.getViewport({ scale: 0.22 });
    const tc = document.createElement('canvas'); tc.width=tv.width; tc.height=tv.height;
    await page.render({ canvas:tc, canvasContext:tc.getContext('2d'), viewport:tv }).promise;
    const card = document.createElement('div'); card.className='thumb-card';
    card.appendChild(tc); card.innerHTML+=`<div class="thumb-num">صفحة ${i}</div>`;
    thumbs.appendChild(card);
  }
  downloadBlob(await zip.generateAsync({type:'blob'}), zipName);
  toast('تم تحويل جميع الصفحات إلى صور ✓', 'success');
}

/* ══════════════════════════════════════════════
   IMAGES → PDF
   ══════════════════════════════════════════════ */
let i2pFiles = [];
let i2pObjectUrls = [];

function i2pAdd(input) {
  const allowed = new Set(['image/png', 'image/jpeg', 'image/webp']);
  for (const f of input.files) {
    if (f.size > MAX_IMAGE_SIZE_BYTES) {
      toast(`الصورة كبيرة جداً — الحد الأقصى ${MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB`, 'error');
      continue;
    }
    if (!allowed.has(f.type)) {
      toast('نوع الصورة غير مسموح — استخدم PNG أو JPEG أو WebP', 'error');
      continue;
    }
    i2pFiles.push(f);
  }
  renderI2pList();
}
function renderI2pList() {
  i2pObjectUrls.forEach(url => URL.revokeObjectURL(url));
  i2pObjectUrls = [];
  const grid = document.getElementById('i2p-list'); grid.innerHTML='';
  i2pFiles.forEach((f,i) => {
    const card = document.createElement('div'); card.className='thumb-card';
    card.style.position='relative';
    const img = document.createElement('img');
    const objectUrl = URL.createObjectURL(f);
    i2pObjectUrls.push(objectUrl);
    img.src = objectUrl;
    img.style.cssText = 'height:100px;object-fit:cover;width:100%';
    card.appendChild(img);
    card.innerHTML+=`<div class="thumb-num">${escHtml(f.name.length>14?f.name.substring(0,13)+'…':f.name)}</div>`;
    const rm = document.createElement('button');
    rm.style.cssText='position:absolute;top:4px;right:4px;background:#fee2e2;border:none;border-radius:50%;width:20px;height:20px;cursor:pointer;color:#ef4444;font-size:11px;display:flex;align-items:center;justify-content:center';
    rm.textContent='✕';
    rm.onclick=()=>{ i2pFiles.splice(i,1); renderI2pList(); };
    card.appendChild(rm);
    grid.appendChild(card);
  });
  document.getElementById('i2p-actions').style.display = i2pFiles.length>0?'flex':'none';
}
async function i2pConvert() {
  if (!i2pFiles.length) return;
  let fileName;
  try { fileName = await showSaveDialog('صور-PDF', '.pdf'); } catch { return; }
  const { PDFDocument } = PDFLib;
  const doc = await PDFDocument.create();
  for (const file of i2pFiles) {
    const bytes = await readFileBytes(file);
    let img;
    if (file.type==='image/png') img = await doc.embedPng(bytes);
    else if (file.type==='image/jpeg') img = await doc.embedJpg(bytes);
    else {
      /* pdf-lib does not embed WebP directly. Decode it locally through the
         browser and convert it to PNG without any upload or external service. */
      const source = await imageFromBytes(bytes, file.type);
      const canvas = document.createElement('canvas');
      canvas.width = source.naturalWidth || source.width;
      canvas.height = source.naturalHeight || source.height;
      canvas.getContext('2d').drawImage(source, 0, 0);
      img = await doc.embedPng(await canvasPngBytes(canvas));
    }
    const page = doc.addPage([img.width, img.height]);
    page.drawImage(img, { x:0, y:0, width:img.width, height:img.height });
  }
  download(await doc.save(), fileName);
  toast('تم تحويل الصور إلى PDF ✓', 'success');
}

/* ══════════════════════════════════════════════
   WORD → PDF
   ══════════════════════════════════════════════ */
let w2pHtml = '';

async function w2pLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (f.size > MAX_DOCX_SIZE_BYTES) {
    toast(`ملف Word كبير جداً — الحد الأقصى ${MAX_DOCX_SIZE_BYTES / 1024 / 1024} MB`, 'error');
    return;
  }
  if (!/\.docx$/i.test(f.name)) {
    toast('اختر ملف Word بصيغة DOCX فقط', 'error');
    return;
  }
  const bytes = await readFileBytes(f);
  try {
    const result = await mammoth.convertToHtml({ arrayBuffer: bytes.buffer });
    w2pHtml = sanitizeDocumentHtml(result.value);
    document.getElementById('w2p-preview').innerHTML = w2pHtml;
    document.getElementById('w2p-ui').classList.remove('hidden');
    toast('تم تحميل الملف — راجع المحتوى وهيئه للطباعة');
  } catch (e) { toast('تعذر قراءة الملف: ' + e.message, 'error'); }
}
function w2pConvert() {
  const win = window.open('', '_blank');
  if (!win) {
    toast('تعذر فتح نافذة الطباعة — اسمح بالنوافذ المنبثقة لهذا الموقع', 'error');
    return;
  }
  /* The new window contains only sanitized local HTML. Detach it from this
     page before writing the preview so it cannot navigate the opener back. */
  try { win.opener = null; } catch {}
  win.document.write(`<!DOCTYPE html><html dir="rtl"><head><meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:;">
    <style>body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;padding:48px;direction:rtl;line-height:1.8;font-size:13px}
    @media print{body{padding:24px}}</style></head>
    <body>${w2pHtml}</body></html>`);
  win.document.close(); win.focus();
  setTimeout(()=>win.print(), 700);
}

/* ══════════════════════════════════════════════
   EDITOR
   ══════════════════════════════════════════════ */
let delSelectedPages = new Set(); /* pages marked for deletion via thumbnail clicks */
let editFile = null, editPdfDoc = null, editCurrentPage = 1;
let editTool = 'select', editColor = '#1a56db', editFontSize = 18;
let editFontFamily = "'Segoe UI',Tahoma,Arial,sans-serif"; /* current font family */
let editAnnotations = [], editHistory = [[]], editHistoryIdx = 0;
let editIsDrawing = false, editCurrentPts = [];
let editDragging = null, editDragOffset = {x:0,y:0}, editDragHappened = false;
let editSignDataUrl = null;
let editSelectedId = null;
/* resize handle state — tracks corner-drag for text/signature resizing */
let editResizing = null; /* { id, startX, startY, origW, origH, origFontSize } */
/* custom loaded fonts: name → dataUrl */
const _customFonts = {};

const getMainCanvas = () => document.getElementById('edit-main-canvas');
const getAnnCanvas  = () => document.getElementById('edit-ann-canvas');
const getOverlays   = () => document.getElementById('edit-overlays');

let _editResizeTimer = 0, _editResizeLastW = -1, _editResizeObserver = null;
let _pageNaturalDims = {}; /* pageNum -> {w,h} in PDF points (scale:1) — constant per page */

/* ── Scale-independent coordinate helpers ─────────────────────────
   Every annotation's position/size (x, y, w, h, rect, points) is stored
   as a FRACTION (0..1) of the page's natural size, NOT as canvas pixels.
   A fraction never needs "rescaling" when the canvas is re-rendered at a
   different zoom/resolution (window resize, mobile rotation, sidebar
   width change, etc.) — multiplying it by whatever the CURRENT canvas
   size happens to be always gives the right pixel position. This is
   what previously caused text/signatures/redactions to drift: their
   position was stored in pixels *at one particular resolution* and had
   to be manually rescaled every time that resolution changed.
   font size is the one exception: it is stored directly in PDF points
   (also scale-independent — a 14pt font is 14pt regardless of zoom). */
function fracToCanvasPx(frac, canvasDim) { return frac * canvasDim; }
function canvasPxToFrac(px, canvasDim)   { return canvasDim > 0 ? px / canvasDim : 0; }

async function waitEditorCanvasReady(maxMs = 2500) {
  const area = document.getElementById('edit-canvas-area');
  const t0 = Date.now();
  while (Date.now() - t0 < maxMs) {
    if (area && area.clientWidth >= 48) return;
    await new Promise(r => requestAnimationFrame(r));
  }
}

function mountEditResizeObserver() {
  const el = document.getElementById('edit-canvas-area');
  if (!el || typeof ResizeObserver === 'undefined') return;
  if (_editResizeObserver) { _editResizeObserver.disconnect(); _editResizeObserver = null; }
  _editResizeLastW = -1;
  _editResizeObserver = new ResizeObserver(entries => {
    if (!editPdfDoc) return;
    const w = entries[0] && entries[0].contentRect ? entries[0].contentRect.width : el.clientWidth;
    if (w < 48) return;
    if (_editResizeLastW >= 0 && Math.abs(w - _editResizeLastW) < 16) return;
    _editResizeLastW = w;
    clearTimeout(_editResizeTimer);
    _editResizeTimer = setTimeout(() => { renderPage(editCurrentPage).catch(() => {}); }, 160);
  });
  _editResizeObserver.observe(el);
}

/* ── Layers panel — lists every text/signature/highlight/redact/drawing
   across the whole document so the user can find, select, move or
   change any element even after adding several of them. ── */
function renderLayersPanel() {
  const list = document.getElementById('edit-layers-list');
  if (!list) return;
  if (!editAnnotations.length) {
    list.innerHTML = '<div class="edit-layers-empty">لا توجد عناصر مضافة بعد</div>';
    return;
  }
  const byPage = {};
  editAnnotations.forEach(a => { (byPage[a.pageNum] = byPage[a.pageNum] || []).push(a); });
  const pages = Object.keys(byPage).map(Number).sort((a,b)=>a-b);
  const iconFor = t => ({
    text:'ico-text', signature:'ico-pen-nib', draw:'ico-pencil',
    highlight:'ico-highlight', redact:'ico-redact'
  }[t] || 'ico-layers');
  const labelFor = a => {
    if (a.type==='text')      return a.text ? `نص: ${a.text.slice(0,16)}${a.text.length>16?'…':''}` : 'نص';
    if (a.type==='signature') return 'توقيع';
    if (a.type==='highlight') return 'تظليل';
    if (a.type==='redact')    return 'طمس/حذف محتوى';
    if (a.type==='draw')      return 'رسم حر';
    return a.type;
  };
  list.innerHTML = '';
  pages.forEach(pn => {
    const hdr = document.createElement('div');
    hdr.className = 'layer-page-hdr';
    hdr.textContent = `صفحة ${pn}`;
    list.appendChild(hdr);
    byPage[pn].forEach(ann => {
      const row = document.createElement('div');
      row.className = 'layer-item' + (ann.id===editSelectedId ? ' active' : '');
      row.innerHTML =
        `<svg class="layer-icon"><use href="#${iconFor(ann.type)}"/></svg>`+
        `<span class="layer-label">${escHtml(labelFor(ann))}</span>`+
        `<svg class="layer-del" title="حذف"><use href="#ico-trash"/></svg>`;
      row.addEventListener('click', e => {
        if (e.target.closest('.layer-del')) {
          editAnnotations = editAnnotations.filter(x=>x.id!==ann.id);
          if (editSelectedId===ann.id) editSelectedId=null;
          redrawStrokes(); pushHistory(); renderOverlays(); renderLayersPanel();
          return;
        }
        editSelectedId = ann.id;
        if (editCurrentPage !== ann.pageNum) {
          editCurrentPage = ann.pageNum;
          document.querySelectorAll('#edit-thumbs .thumb-card')
            .forEach(x => x.classList.toggle('active', x.dataset.page == ann.pageNum));
          renderPage(ann.pageNum).then(() => { renderOverlays(); renderLayersPanel(); });
        } else {
          renderOverlays(); renderLayersPanel();
        }
      });
      list.appendChild(row);
    });
  });
}

async function editLoad(input) {
  const f = input.files[0]; if (!f) return;
  await editLoadFile(f);
}
async function editLoadFile(f) {
  if (!await validatePdf(f)) return;
  editFile = f; editAnnotations = []; editHistory = [[]]; editHistoryIdx = 0; editCurrentPage = 1;
  const bytes = await readFileBytes(f);
  editPdfDoc = await pdfGetDocument({ data: bytes }).promise;
  document.getElementById('edit-drop-area').style.display = 'none';
  document.getElementById('edit-ui').classList.remove('hidden');
  mountEditResizeObserver();
  await buildThumbs();
  await waitEditorCanvasReady();
  await renderPage(1);
  toast(`تم فتح الملف — ${editPdfDoc.numPages} صفحة`);
}

async function buildThumbs() {
  const tc = document.getElementById('edit-thumbs'); tc.innerHTML='';
  for (let i=1; i<=editPdfDoc.numPages; i++) {
    const page = await editPdfDoc.getPage(i);
    /* The editor uses the PDF's unrotated user-space coordinates.  The
       rotation flag remains part of the original PDF and is applied by the
       viewer after export, so the annotation coordinate system is identical
       while editing and while saving. */
    const vp = page.getViewport({scale:0.16, rotation:0});
    const c = document.createElement('canvas'); c.width=vp.width; c.height=vp.height;
    await page.render({canvas:c,canvasContext:c.getContext('2d'),viewport:vp}).promise;
    const card = document.createElement('div');
    card.className='thumb-card'+(i===1?' active':'');
    card.dataset.page=i; card.appendChild(c);
    const num = document.createElement('div');
    num.className = 'thumb-num';
    num.textContent = String(i);
    card.appendChild(num);
    card.onclick=()=>{
      editCurrentPage=i; renderPage(i);
      tc.querySelectorAll('.thumb-card').forEach(x=>x.classList.toggle('active',x.dataset.page==i));
    };
    tc.appendChild(card);
  }
}

async function renderPage(pageNum) {
  const page = await editPdfDoc.getPage(pageNum);
  const area = document.getElementById('edit-canvas-area');
  /* Wait for layout so clientWidth is not 0 (otherwise scale → 0 → broken glyphs). */
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  /* Always render the editor in unrotated PDF user space.  Rendering with
     PDF.js' default page rotation while exporting against pdf-lib's
     unrotated page dimensions is a common source of position drift. */
  const natVp = page.getViewport({ scale: 1, rotation: 0 });
  const natW = natVp.width;
  const natH = natVp.height;
  const avail = Math.max((area && area.clientWidth) ? area.clientWidth : 0, 280) - 36;
  let rawScale = avail / natW;
  if (isMobileDevice) {
    /* On touch/mobile, also fit the available height so the whole page is
       visible without needing to scroll while drawing/dragging (the canvas
       has touch-action:none, so scrolling over it is otherwise blocked). */
    const availH = Math.max((area && area.clientHeight) ? area.clientHeight : 0, 280) - 24;
    rawScale = Math.min(rawScale, availH / natH);
  }
  const scale = Math.max(0.12, Math.min(rawScale, 2.2, 1400 / natW));
  const vp = page.getViewport({ scale, rotation: 0 });
  const mc = getMainCanvas(), ac = getAnnCanvas();

  mc.width=ac.width=vp.width; mc.height=ac.height=vp.height;
  const stack = document.getElementById('edit-page-stack');
  if (stack) {
    stack.style.width = vp.width + 'px';
    stack.style.height = vp.height + 'px';
  }
  _pageNaturalDims[pageNum] = { w: natW, h: natH };
  const ctx = mc.getContext('2d'); ctx.fillStyle='#fff'; ctx.fillRect(0,0,vp.width,vp.height);
  try {
    await page.render({canvas:mc, canvasContext:ctx, viewport:vp}).promise;
  } catch (e) {
    console.error('PDF.js render (editor)', e);
    toast('فشل رسم الصفحة: ' + (e && e.message ? e.message : String(e)), 'error');
    return;
  }
  getOverlays().style.width=vp.width+'px'; getOverlays().style.height=vp.height+'px';
  redrawStrokes(); renderOverlays(); renderLayersPanel(); setupCanvasEvents();
}

function redrawStrokes() {
  const ac = getAnnCanvas(); if (!ac) return;
  const ctx = ac.getContext('2d'); ctx.clearRect(0,0,ac.width,ac.height);
  editAnnotations.filter(a=>(a.type==='draw'||a.type==='highlight'||a.type==='redact')&&a.pageNum===editCurrentPage)
    .forEach(ann=>{
      ctx.save();
      if (ann.type==='redact' && ann.rect) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = ann.color;
        ctx.fillRect(ann.rect.x*ac.width, ann.rect.y*ac.height, ann.rect.w*ac.width, ann.rect.h*ac.height);
      } else if (ann.type==='highlight') {
        ctx.globalAlpha = 0.35;
        if (ann.rect) {
          /* rectangle highlight */
          ctx.fillStyle = ann.color;
          ctx.fillRect(ann.rect.x*ac.width, ann.rect.y*ac.height, ann.rect.w*ac.width, ann.rect.h*ac.height);
        } else if (ann.points?.length >= 2) {
          /* legacy freehand highlight */
          ctx.lineCap='round'; ctx.lineJoin='round'; ctx.lineWidth=20;
          ctx.strokeStyle=ann.color; ctx.beginPath();
          ctx.moveTo(ann.points[0].x*ac.width,ann.points[0].y*ac.height);
          ann.points.slice(1).forEach(p=>ctx.lineTo(p.x*ac.width,p.y*ac.height));
          ctx.stroke();
        }
      } else if (ann.points?.length >= 2) {
        ctx.lineCap='round'; ctx.lineJoin='round'; ctx.lineWidth=2.5;
        ctx.strokeStyle=ann.color; ctx.beginPath();
        ctx.moveTo(ann.points[0].x*ac.width,ann.points[0].y*ac.height);
        ann.points.slice(1).forEach(p=>ctx.lineTo(p.x*ac.width,p.y*ac.height));
        ctx.stroke();
      }
      ctx.restore();
    });
}

/* Resize handle (bottom-right corner) for a highlight/redact rectangle —
   lets the user fine-tune coverage after drawing it, instead of having
   to delete and redraw the whole box to fix an imprecise size. */
function makeRectResizeHandle(ann) {
  const rh = document.createElement('div');
  rh.style.cssText=
    'position:absolute;bottom:-6px;right:-6px;width:14px;height:14px;'+
    'background:#1a56db;border:2px solid #fff;border-radius:3px;cursor:se-resize;'+
    'z-index:30;box-shadow:0 1px 4px rgba(0,0,0,.3);touch-action:none;';
  rh.title='اسحب لتغيير الحجم';
  rh.addEventListener('pointerdown', e => {
    e.stopPropagation(); e.preventDefault();
    editResizing = {
      id: ann.id,
      startX: e.clientX,
      startY: e.clientY,
      origW: ann.rect.w,
      origH: ann.rect.h,
      type: 'rect'
    };
  });
  return rh;
}

function renderOverlays() {
  const ov = getOverlays(); if (!ov) return; ov.innerHTML='';
  const ac = getAnnCanvas(); if (!ac) return;
  const r = ac.getBoundingClientRect();
  const sx=r.width/ac.width, sy=r.height/ac.height;
  /* scale = canvas pixels per PDF point, at the CURRENT zoom level for this page */
  const nat = _pageNaturalDims[editCurrentPage];
  const pageScale = nat && nat.w > 0 ? ac.width / nat.w : 1;

  /* click on blank canvas area → deselect */
  ov.onclick = e => { if (e.target===ov){ editSelectedId=null; renderOverlays(); } };

  editAnnotations
    .filter(a=>a.pageNum===editCurrentPage &&
      (a.type==='text'||a.type==='signature'||((a.type==='highlight'||a.type==='redact')&&a.rect)))
    .forEach(ann=>{
      const sel = ann.id===editSelectedId;
      const el  = document.createElement('div');
      const ff  = ann.fontFamily || "'Segoe UI',Tahoma,Arial,sans-serif";
      /* fraction (0..1) → canvas px → CSS px, for this annotation's box */
      const left   = ann.x!=null ? ann.x*ac.width*sx : 0;
      const top    = ann.y!=null ? ann.y*ac.height*sy : 0;

      if (ann.type==='highlight' && ann.rect) {
        el.style.cssText=
          `position:absolute;pointer-events:auto;box-sizing:border-box;`+
          `left:${ann.rect.x*ac.width*sx}px;top:${ann.rect.y*ac.height*sy}px;`+
          `width:${ann.rect.w*ac.width*sx}px;height:${ann.rect.h*ac.height*sy}px;`+
          `background:${ann.color};opacity:0.38;border-radius:2px;`+
          `cursor:${editTool==='select'?'move':'default'};`+
          `outline:${sel?'2px solid #1a56db':'none'};`;
        if (sel) el.appendChild(makeRectResizeHandle(ann));

      } else if (ann.type==='redact' && ann.rect) {
        el.style.cssText=
          `position:absolute;pointer-events:auto;box-sizing:border-box;`+
          `left:${ann.rect.x*ac.width*sx}px;top:${ann.rect.y*ac.height*sy}px;`+
          `width:${ann.rect.w*ac.width*sx}px;height:${ann.rect.h*ac.height*sy}px;`+
          `background:${ann.color};opacity:1;border-radius:2px;`+
          `cursor:${editTool==='select'?'move':'default'};`+
          `outline:${sel?'2px solid #1a56db':'2px dashed rgba(0,0,0,.3)'};`;
        if (sel) el.appendChild(makeRectResizeHandle(ann));

      } else if (ann.type==='text') {
        /* fontSize is stored in PDF points → canvas px (× pageScale) → CSS px (× sx) */
        const cssFontPx = ann.fontSize * pageScale * sx;
        el.style.cssText=
          `position:absolute;pointer-events:auto;`+
          `left:${left}px;top:${top}px;`+
          `color:${ann.color};font-size:${cssFontPx}px;`+
          `font-family:${ff};line-height:1;`+
          `cursor:${editTool==='select'?'move':'default'};`+
          `user-select:none;white-space:nowrap;font-weight:600;padding:0;`+
          `outline:${sel?'2px solid #1a56db':'none'};border-radius:3px;`;
        el.textContent=ann.text;

        /* Mouse-wheel → resize text (legacy kept). fontSize is in PDF points. */
        if (sel) {
          el.addEventListener('wheel', e => {
            e.preventDefault(); e.stopPropagation();
            ann.fontSize = Math.max(6, Math.min(200, ann.fontSize + (e.deltaY < 0 ? 1 : -1)));
            document.getElementById('edit-font-size').value = Math.round(ann.fontSize);
            pushHistory(); renderOverlays();
          }, { passive: false });

          /* ── resize handle (bottom-right corner) for text ── */
          const rh = document.createElement('div');
          rh.style.cssText=
            'position:absolute;bottom:-6px;right:-6px;width:14px;height:14px;'+
            'background:#1a56db;border:2px solid #fff;border-radius:3px;cursor:se-resize;'+
            'z-index:30;box-shadow:0 1px 4px rgba(0,0,0,.3);touch-action:none;';
          rh.title='اسحب لتغيير الحجم';
          rh.addEventListener('pointerdown', e => {
            e.stopPropagation(); e.preventDefault();
            editResizing = {
              id: ann.id,
              startX: e.clientX,
              startY: e.clientY,
              origFontSize: ann.fontSize,
              type: 'text'
            };
          });
          el.style.position='absolute'; /* ensure relative context */
          el.appendChild(rh);

          /* ── edit-content button (top-left corner) for text ──
             A dedicated button is far more reliable than detecting a
             double-click here (this element gets rebuilt on every
             pointerdown, which makes native dblclick detection unstable). */
          const eb = document.createElement('div');
          eb.style.cssText=
            'position:absolute;top:-13px;left:-13px;width:22px;height:22px;'+
            'background:#1a56db;border:2px solid #fff;border-radius:50%;cursor:pointer;'+
            'z-index:41;box-shadow:0 1px 4px rgba(0,0,0,.3);'+
            'display:flex;align-items:center;justify-content:center;touch-action:none;';
          eb.title='تعديل النص';
          eb.innerHTML='<svg width="12" height="12" style="stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;pointer-events:none"><use href="#ico-pencil"/></svg>';
          eb.addEventListener('pointerdown', e => { e.stopPropagation(); e.preventDefault(); });
          eb.addEventListener('click', e => {
            e.stopPropagation(); e.preventDefault();
            const target = editAnnotations.find(a=>a.id===ann.id);
            if (target) editAskText(null, target);
          });
          el.appendChild(eb);
        }

      } else if (ann.type==='signature') {
        el.style.cssText=
          `position:absolute;pointer-events:auto;`+
          `left:${left}px;top:${top}px;`+
          `cursor:${editTool==='select'?'move':'default'};`+
          `outline:${sel?'2px solid #1a56db':'none'};`;
        const img=document.createElement('img'); img.src=ann.dataUrl;
        img.style.cssText=`width:${ann.w*ac.width*sx}px;height:${ann.h*ac.height*sy}px;display:block;pointer-events:none;image-rendering:high-quality;`;
        el.appendChild(img);

        /* ── resize handle (bottom-right corner) for signature ── */
        if (sel) {
          const rh = document.createElement('div');
          rh.style.cssText=
            'position:absolute;bottom:-6px;right:-6px;width:14px;height:14px;'+
            'background:#1a56db;border:2px solid #fff;border-radius:3px;cursor:se-resize;'+
            'z-index:30;box-shadow:0 1px 4px rgba(0,0,0,.3);touch-action:none;';
          rh.title='اسحب لتغيير الحجم';
          rh.addEventListener('pointerdown', e => {
            e.stopPropagation(); e.preventDefault();
            editResizing = {
              id: ann.id,
              startX: e.clientX,
              startY: e.clientY,
              origW: ann.w,
              origH: ann.h,
              type: 'signature'
            };
          });
          el.appendChild(rh);
        }
      }

      /* Click → select (always stop propagation to prevent canvas click) */
      el.addEventListener('click', e=>{
        e.stopPropagation();
        editSelectedId=ann.id;
        renderOverlays();
      });

      /* Mousedown → always stop propagation, then handle drag in select mode */
      el.style.touchAction = 'none';
      el.addEventListener('pointerdown', e=>{
        e.stopPropagation(); /* prevent canvas events from firing */
        if (editTool!=='select') return;
        /* ignore if it's the resize handle itself */
        if (e.target && e.target.style && e.target.style.cursor==='se-resize') return;
        e.preventDefault();
        editSelectedId=ann.id; editDragging=ann.id;
        const ac2=getAnnCanvas(), r2=ac2.getBoundingClientRect();
        const cx=(e.clientX-r2.left)*(ac2.width/r2.width);
        const cy=(e.clientY-r2.top)*(ac2.height/r2.height);
        if ((ann.type==='highlight'||ann.type==='redact')&&ann.rect)
          editDragOffset={ x:cx-ann.rect.x*ac2.width, y:cy-ann.rect.y*ac2.height };
        else
          editDragOffset={ x:cx-ann.x*ac2.width, y:cy-ann.y*ac2.height };
        renderOverlays();
      });

      /* Text elements: hint that a double-click edits the content
         (actual detection happens in the click handler above). */
      if (ann.type==='text') el.title = 'انقر نقرتين لتعديل النص';
      ov.appendChild(el);
    });
}

window.addEventListener('pointermove', e=>{
  /* ── resize handle drag ── */
  if (editResizing) {
    const ann = editAnnotations.find(a=>a.id===editResizing.id);
    if (!ann) { editResizing=null; return; }
    const dx = e.clientX - editResizing.startX;
    const dy = e.clientY - editResizing.startY;
    const ac=getAnnCanvas(), r=ac.getBoundingClientRect();
    if (editResizing.type==='text') {
      /* dx is in CSS px → convert to PDF points via the page's current
         canvas-px-per-point scale, so the result stays a scale-independent
         point size (no rescaling ever needed again). */
      const nat = _pageNaturalDims[editCurrentPage];
      const pageScale = nat && nat.w > 0 ? ac.width / nat.w : 1;
      const scaleX = ac.width / r.width; /* canvas px per CSS px */
      const deltaPoints = (dx * scaleX) / pageScale;
      ann.fontSize = Math.max(6, Math.min(400, editResizing.origFontSize + deltaPoints * 0.5));
      document.getElementById('edit-font-size').value = Math.round(ann.fontSize);
    } else if (editResizing.type==='signature') {
      const scaleX = ac.width / r.width;
      const origWpx = editResizing.origW * ac.width, origHpx = editResizing.origH * ac.height;
      const newWpx = Math.max(20, origWpx + dx * scaleX);
      /* maintain aspect ratio */
      const ratio = origHpx / origWpx;
      ann.w = canvasPxToFrac(newWpx, ac.width);
      ann.h = canvasPxToFrac(newWpx * ratio, ac.height);
    } else if (editResizing.type==='rect') {
      /* highlight/redact box — free resize (width & height independently),
         no aspect-ratio lock, so it can be fine-tuned to exactly cover
         whatever content it needs to hide. */
      const scaleX = ac.width / r.width, scaleY = ac.height / r.height;
      const origWpx = editResizing.origW * ac.width, origHpx = editResizing.origH * ac.height;
      const newWpx = Math.max(8, origWpx + dx * scaleX);
      const newHpx = Math.max(8, origHpx + dy * scaleY);
      ann.rect.w = canvasPxToFrac(newWpx, ac.width);
      ann.rect.h = canvasPxToFrac(newHpx, ac.height);
      redrawStrokes();
    }
    renderOverlays();
    return;
  }
  /* ── drag (move) ── */
  if (!editDragging||!getAnnCanvas()) return;
  editDragHappened = true;
  const ac=getAnnCanvas(), r=ac.getBoundingClientRect();
  const sX=ac.width/r.width, sY=ac.height/r.height;
  const ann=editAnnotations.find(a=>a.id===editDragging);
  if (!ann) return;
  const nx=(e.clientX-r.left)*sX-editDragOffset.x; /* canvas px */
  const ny=(e.clientY-r.top)*sY-editDragOffset.y;  /* canvas px */
  if ((ann.type==='highlight'||ann.type==='redact')&&ann.rect) {
    ann.rect.x=canvasPxToFrac(nx,ac.width); ann.rect.y=canvasPxToFrac(ny,ac.height);
    redrawStrokes();
  } else {
    ann.x=canvasPxToFrac(nx,ac.width); ann.y=canvasPxToFrac(ny,ac.height);
  }
  renderOverlays();
});
window.addEventListener('pointerup', ()=>{
  if (editResizing) { editResizing=null; pushHistory(); renderOverlays(); return; }
  if (editDragging){ editDragging=null; pushHistory(); }
});

function getPos(e) {
  const ac=getAnnCanvas(); const r=ac.getBoundingClientRect();
  return { x:(e.clientX-r.left)*(ac.width/r.width), y:(e.clientY-r.top)*(ac.height/r.height) };
}

function setupCanvasEvents() {
  const ac=getAnnCanvas(); if (!ac) return;
  ac.onclick = e => {
    if (editDragHappened) { editDragHappened = false; return; }
    if (editTool==='text') editAskText(getPos(e));
  };
  ac.onpointerdown = e => {
    if (['text','signature','select'].includes(editTool)) return;
    e.preventDefault();
    try { ac.setPointerCapture(e.pointerId); } catch {}
    editIsDrawing=true; editCurrentPts=[getPos(e)];
  };
  ac.onpointermove = e => {
    if (!editIsDrawing) return;
    const pos=getPos(e); editCurrentPts.push(pos);
    if (editTool==='highlight' || editTool==='redact') {
      /* live rectangle preview — redraw saved strokes then overlay temp rect */
      redrawStrokes();
      const start=editCurrentPts[0];
      const lx=Math.min(start.x,pos.x), ly=Math.min(start.y,pos.y);
      const rw=Math.abs(pos.x-start.x),  rh=Math.abs(pos.y-start.y);
      const ctx=ac.getContext('2d'); ctx.save();
      ctx.globalAlpha = editTool==='redact' ? 1 : 0.35; ctx.fillStyle=editColor;
      ctx.fillRect(lx,ly,rw,rh); ctx.restore();
    } else {
      if (editCurrentPts.length<2) return;
      const [p1,p2]=editCurrentPts.slice(-2);
      const ctx=ac.getContext('2d'); ctx.save();
      if (editTool==='draw'){ ctx.strokeStyle=editColor; ctx.lineWidth=2.5; }
      else { ctx.globalCompositeOperation='destination-out'; ctx.lineWidth=24; }
      ctx.lineCap='round'; ctx.lineJoin='round';
      ctx.beginPath(); ctx.moveTo(p1.x,p1.y); ctx.lineTo(p2.x,p2.y); ctx.stroke(); ctx.restore();
    }
  };
  ac.onpointerup = e => {
    if (!editIsDrawing) return; editIsDrawing=false;
    try { ac.releasePointerCapture(e.pointerId); } catch {}
    if ((editTool==='highlight'||editTool==='redact') && editCurrentPts.length>=2) {
      const start=editCurrentPts[0], end=editCurrentPts[editCurrentPts.length-1];
      const lx=Math.min(start.x,end.x), ly=Math.min(start.y,end.y);
      const rw=Math.abs(end.x-start.x),  rh=Math.abs(end.y-start.y);
      if (rw>4&&rh>4) pushAnnotation({id:uid(),type:editTool==='redact'?'redact':'highlight',pageNum:editCurrentPage,color:editColor,
        rect:{ x:canvasPxToFrac(lx,ac.width), y:canvasPxToFrac(ly,ac.height), w:canvasPxToFrac(rw,ac.width), h:canvasPxToFrac(rh,ac.height) }});
      redrawStrokes(); renderOverlays(); renderLayersPanel();
    } else if (editTool!=='eraser'&&editTool!=='redact'&&editCurrentPts.length>=2) {
      pushAnnotation({id:uid(),type:editTool,pageNum:editCurrentPage,color:editColor,
        points:editCurrentPts.map(p=>({ x:canvasPxToFrac(p.x,ac.width), y:canvasPxToFrac(p.y,ac.height) }))});
      renderLayersPanel();
    }
    editCurrentPts=[];
  };
  ac.onpointerleave=()=>{ if (editIsDrawing){ editIsDrawing=false; editCurrentPts=[]; redrawStrokes(); } };
  ac.onpointercancel=()=>{ if (editIsDrawing){ editIsDrawing=false; editCurrentPts=[]; redrawStrokes(); } };
}

/* Inline text input — no prompt().
   `pos` (canvas-px, from getPos()) is required only when creating NEW text.
   When editing an EXISTING annotation's content, pass `pos=null` — its
   on-screen position is derived from the annotation's own stored fraction. */
function editAskText(pos, existingAnn) {
  const ov = getOverlays(); const ac = getAnnCanvas();
  const r  = ac.getBoundingClientRect();
  const sx = r.width/ac.width, sy = r.height/ac.height;
  const nat = _pageNaturalDims[editCurrentPage];
  const pageScale = nat && nat.w > 0 ? ac.width / nat.w : 1; /* canvas px per PDF point */

  const inp = document.createElement('input');
  inp.type='text'; inp.placeholder='اكتب النص هنا...'; inp.dir='auto';
  const fontSize   = existingAnn ? existingAnn.fontSize   : editFontSize;   /* PDF points */
  const fontFamily = existingAnn ? existingAnn.fontFamily : editFontFamily;
  const color      = existingAnn ? existingAnn.color      : editColor;
  if (existingAnn) inp.value = existingAnn.text || '';

  /* CSS position: existing text uses its stored fraction; new text uses
     the raw click position (canvas px) passed in. */
  const cssLeft = existingAnn ? existingAnn.x*ac.width*sx : pos.x*sx;
  const cssTop  = existingAnn ? existingAnn.y*ac.height*sy : pos.y*sy;
  const cssFontPx = fontSize * pageScale * sx;

  inp.style.cssText=
    `position:absolute;left:${cssLeft}px;top:${cssTop}px;`+
    `font-size:${cssFontPx}px;font-family:${fontFamily};line-height:1;`+
    `color:${color};background:rgba(255,255,255,.92);`+
    `border:2px dashed ${color};border-radius:6px;`+
    `padding:0;outline:none;min-width:140px;`+
    `pointer-events:auto;z-index:40;direction:rtl;`+
    `box-shadow:0 2px 8px rgba(0,0,0,.15);`;
  ov.style.pointerEvents='auto'; ov.appendChild(inp); inp.focus();
  if (existingAnn) inp.select();
  let committed = false;
  const commit = ()=>{
    if (committed) return; /* inp.remove() below triggers a synchronous 'blur',
                               which would otherwise call commit() a second time */
    committed = true;
    const txt=inp.value.trim();
    if (existingAnn) {
      /* Editing an existing text element's content in place */
      if (txt) { existingAnn.text = txt; pushHistory(); }
      else {
        /* Cleared to empty on purpose → remove the element entirely */
        editAnnotations = editAnnotations.filter(a=>a.id!==existingAnn.id);
        if (editSelectedId===existingAnn.id) editSelectedId=null;
        pushHistory();
      }
    } else if (txt) {
      pushAnnotation({id:uid(),type:'text',pageNum:editCurrentPage,
        x:canvasPxToFrac(pos.x,ac.width), y:canvasPxToFrac(pos.y,ac.height),
        text:txt,color:editColor,fontSize:editFontSize,fontFamily:editFontFamily});
    }
    inp.remove(); ov.style.pointerEvents='none'; redrawStrokes(); renderOverlays(); renderLayersPanel();
  };
  inp.onblur=commit;
  inp.onkeydown=e=>{ if(e.key==='Enter'){e.preventDefault();commit();} if(e.key==='Escape'){committed=true;inp.remove();ov.style.pointerEvents='none';} };
}

function uid() { return Math.random().toString(36).slice(2,10); }
let editDiagLog = [];
function pushAnnotation(ann) {
  editAnnotations.push(ann);
  pushHistory();
  try {
    const ac = getAnnCanvas();
    const mc2 = document.querySelector('.main-content');
    editDiagLog.push({
      t: new Date().toISOString(),
      type: ann.type, page: ann.pageNum,
      x: ann.x ?? null, y: ann.y ?? null,
      w: ann.w ?? null, h: ann.h ?? null,
      rect: ann.rect ? { x: ann.rect.x, y: ann.rect.y, w: ann.rect.w, h: ann.rect.h } : null,
      text: ann.type === 'text' ? ann.text : undefined,
      fontSize: ann.fontSize ?? null,
      canvasResW: ac?.width, canvasResH: ac?.height,
      canvasCssW: ac?.getBoundingClientRect ? ac.getBoundingClientRect().width : null,
      canvasCssH: ac?.getBoundingClientRect ? ac.getBoundingClientRect().height : null,
      mainContentScrollTop: mc2?.scrollTop,
      viewportW: window.innerWidth, viewportH: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      isMobileEditor: document.documentElement.classList.contains('is-mobile-editor'),
      userAgent: navigator.userAgent
    });
    if (editDiagLog.length > 200) editDiagLog.shift();
  } catch {}
}
function downloadEditDiagLog() {
  if (!editDiagLog.length) { toast('لا يوجد سجل تشخيص بعد — أضف عنصراً واحداً على الأقل ثم حاول مجدداً', 'error'); return; }
  const blob = new Blob([JSON.stringify(editDiagLog, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'edit-diagnostic-log.json'; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function pushHistory() {
  editHistory=editHistory.slice(0,editHistoryIdx+1);
  editHistory.push(JSON.parse(JSON.stringify(editAnnotations)));
  editHistoryIdx=editHistory.length-1;
}
function editUndo() {
  if (editHistoryIdx<=0) return;
  editHistoryIdx--;
  editAnnotations=JSON.parse(JSON.stringify(editHistory[editHistoryIdx]));
  redrawStrokes(); renderOverlays(); renderLayersPanel();
}
function editRedo() {
  if (editHistoryIdx>=editHistory.length-1) return;
  editHistoryIdx++;
  editAnnotations=JSON.parse(JSON.stringify(editHistory[editHistoryIdx]));
  redrawStrokes(); renderOverlays(); renderLayersPanel();
}

/* ── Font family helpers ─────────────────────── */

/* Apply current font family to the selected text annotation */
function applyFontToSelected() {
  const sel = document.getElementById('edit-font-family');
  if (!sel) return;
  /* Custom font upload triggered */
  if (sel.value === '__custom__') {
    document.getElementById('edit-font-upload').click();
    /* Reset selector to previous value to avoid showing __custom__ */
    sel.value = editFontFamily;
    return;
  }
  editFontFamily = sel.value;
  if (editSelectedId) {
    const ann = editAnnotations.find(a=>a.id===editSelectedId && a.type==='text');
    if (ann) { ann.fontFamily = editFontFamily; pushHistory(); renderOverlays(); }
  }
}

/* Load a custom font file and register it via FontFace API */
function loadCustomFont(input) {
  const f = input.files && input.files[0]; if (!f) return;
  const fontName = f.name.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]/g,'_');
  const reader = new FileReader();
  reader.onload = async e => {
    try {
      const ff = new FontFace(fontName, e.target.result);
      await ff.load();
      document.fonts.add(ff);
      _customFonts[fontName] = e.target.result; /* store ArrayBuffer for PDF export */
      /* Add option to the selector */
      const sel = document.getElementById('edit-font-family');
      /* Remove duplicate if already added */
      const existing = [...sel.options].find(o=>o.value===`'${fontName}',sans-serif`);
      if (!existing) {
        const opt = document.createElement('option');
        opt.value = `'${fontName}',sans-serif`;
        opt.textContent = `✓ ${fontName} (مخصص)`;
        /* Insert before the __custom__ option */
        sel.insertBefore(opt, sel.querySelector('option[value="__custom__"]'));
      }
      sel.value = `'${fontName}',sans-serif`;
      editFontFamily = sel.value;
      toast(`تم تحميل الخط: ${fontName} ✓`, 'success');
      /* Apply to selected annotation if any */
      if (editSelectedId) {
        const ann = editAnnotations.find(a=>a.id===editSelectedId && a.type==='text');
        if (ann) { ann.fontFamily = editFontFamily; pushHistory(); renderOverlays(); }
      }
    } catch(err) {
      toast('فشل تحميل الخط: ' + (err.message||'تنسيق غير مدعوم'), 'error');
      console.error('loadCustomFont', err);
    }
    input.value = '';
  };
  reader.readAsArrayBuffer(f);
}

function setEditTool(t) {
  editTool=t; editSelectedId=null;
  document.querySelectorAll('.tool-btn[id^="btn-"]').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('btn-'+t); if (btn) btn.classList.add('active');
  renderOverlays();
}
function editDeleteSelected() {
  if (!editSelectedId) return toast('اختر عنصراً أولاً بالنقر عليه في وضع التحديد ↖', 'error');
  editAnnotations=editAnnotations.filter(a=>a.id!==editSelectedId);
  editSelectedId=null;
  redrawStrokes(); renderOverlays(); renderLayersPanel(); pushHistory();
  toast('تم حذف العنصر المحدد');
}
function editClearPage() {
  editAnnotations=editAnnotations.filter(a=>a.pageNum!==editCurrentPage);
  redrawStrokes(); renderOverlays(); renderLayersPanel(); pushHistory();
  toast('تم مسح الصفحة الحالية');
}

/* Signature modal */
function openSignModal()  { document.getElementById('sign-modal').classList.remove('hidden'); }
function closeSignModal() { document.getElementById('sign-modal').classList.add('hidden'); editSignDataUrl=null; }
function setSignTab(tab,btn) {
  document.querySelectorAll('.tab-bar .tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sign-draw-area').classList.toggle('hidden',tab!=='draw');
  document.getElementById('sign-upload-area').classList.toggle('hidden',tab!=='upload');
}
function clearSignCanvas() {
  const c=document.getElementById('sign-canvas');
  c.getContext('2d').clearRect(0,0,c.width,c.height);
  editSignDataUrl=null;
}
function signUploadImg(input) {
  const f=input.files[0]; if (!f) return;
  const reader=new FileReader();
  reader.onload=e=>{ editSignDataUrl=e.target.result;
    const p=document.getElementById('sign-preview-img');
    p.src=editSignDataUrl; p.classList.remove('hidden'); };
  reader.readAsDataURL(f);
}
function confirmSignature() {
  const sc=document.getElementById('sign-canvas');
  const dataUrl = editSignDataUrl || sc.toDataURL('image/png');
  const ac=getAnnCanvas(); if (!ac) { closeSignModal(); return; }
  const w=ac.width*0.38, h=w*0.28; /* canvas px, only used to compute the initial fraction below */
  pushAnnotation({id:uid(),type:'signature',pageNum:editCurrentPage,
    x:canvasPxToFrac(ac.width/2-w/2, ac.width), y:canvasPxToFrac(ac.height/2-h/2, ac.height),
    w:canvasPxToFrac(w, ac.width), h:canvasPxToFrac(h, ac.height), dataUrl});
  renderOverlays(); renderLayersPanel(); closeSignModal();
  toast('اسحب التوقيع لضبط موضعه في الصفحة');
}

/* Signature drawing with smooth strokes */
(function(){
  let drawing=false, lastX=0, lastY=0;
  window.addEventListener('load',()=>{
    const sc=document.getElementById('sign-canvas'); if (!sc) return;
    const ctx=sc.getContext('2d');
    ctx.strokeStyle='#1a1a2e'; ctx.lineWidth=4.4; ctx.lineCap='round'; ctx.lineJoin='round';
    const getCoords=(e)=>{
      const r=sc.getBoundingClientRect();
      const t=e.touches?e.touches[0]:e;
      return [(t.clientX-r.left)*(sc.width/r.width),(t.clientY-r.top)*(sc.height/r.height)];
    };
    const start=e=>{ e.preventDefault(); drawing=true; [lastX,lastY]=getCoords(e); ctx.beginPath(); ctx.moveTo(lastX,lastY); };
    const draw=e=>{ e.preventDefault(); if (!drawing) return; const [x,y]=getCoords(e);
      ctx.lineTo(x,y); ctx.stroke(); lastX=x; lastY=y; };
    const stop=()=>{ drawing=false; editSignDataUrl=null; };
    sc.addEventListener('mousedown',start); sc.addEventListener('mousemove',draw);
    sc.addEventListener('mouseup',stop); sc.addEventListener('mouseleave',stop);
    sc.addEventListener('touchstart',start,{passive:false});
    sc.addEventListener('touchmove',draw,{passive:false});
    sc.addEventListener('touchend',stop);
  });
})();

/* Export editor annotations into PDF (text+signature as vectors; draw+highlight as PNG overlay) */
/* Renders a text annotation to a high-resolution transparent PNG using the
   BROWSER's own font engine (which already renders Arabic/any script
   correctly on screen). Used as an automatic fallback when the exported
   PDF's standard font can't encode the text (e.g. Arabic, which the
   Helvetica/WinAnsi standard font used for export cannot represent at
   all — this was the reason saving silently failed whenever the typed
   text wasn't Latin). Returns PNG bytes plus its size in PDF points. */
async function rasterizeTextAnnotation(ann) {
  const scale = 4; /* raster px per PDF point, for crisp output */
  const fontPx = Math.max(1, ann.fontSize * scale);
  const family = ann.fontFamily || "'Segoe UI',Tahoma,Arial,sans-serif";
  const probe = document.createElement('canvas').getContext('2d');
  probe.font = `600 ${fontPx}px ${family}`;
  const text = ann.text || '';
  const metrics = probe.measureText(text);
  const ascent  = metrics.actualBoundingBoxAscent  || fontPx * 0.85;
  const descent = metrics.actualBoundingBoxDescent || fontPx * 0.2;
  const w = Math.max(1, Math.ceil(metrics.width) + 6);
  const h = Math.max(1, Math.ceil(ascent + descent) + 4);

  const tc = document.createElement('canvas');
  tc.width = w; tc.height = h;
  const ctx = tc.getContext('2d');
  ctx.font = `600 ${fontPx}px ${family}`;
  ctx.direction = 'rtl';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = ann.color;
  ctx.fillText(text, w - 3, ascent + 2);

  const blob  = await new Promise(res => tc.toBlob(res, 'image/png'));
  const bytes = new Uint8Array(await blob.arrayBuffer());
  return { bytes, widthPt: w / scale, heightPt: h / scale };
}

/* The editor is rendered in the PDF's unrotated user space.  Use the
   visible CropBox when exporting, because it is the same box PDF.js uses
   for the editor viewport.  Falling back to MediaBox keeps unusual PDFs
   working as well. */
function getVisiblePdfBox(pdfPage) {
  try {
    const crop = pdfPage.getCropBox();
    if (crop && crop.width > 0 && crop.height > 0) return crop;
  } catch {}
  try {
    const media = pdfPage.getMediaBox();
    if (media && media.width > 0 && media.height > 0) return media;
  } catch {}
  const size = pdfPage.getSize();
  return { x: 0, y: 0, width: size.width, height: size.height };
}

function imageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('تعذر قراءة صورة التوقيع'));
    img.src = dataUrl;
  });
}

function imageFromBytes(bytes, mime = 'image/png') {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([bytes], { type: mime }));
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('تعذر قراءة الطبقة المصدّرة'));
    };
    img.src = url;
  });
}

function canvasPngBytes(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(async blob => {
      if (!blob) return reject(new Error('تعذر إنشاء صورة عالية الجودة'));
      try { resolve(new Uint8Array(await blob.arrayBuffer())); }
      catch (e) { reject(e); }
    }, 'image/png');
  });
}

/* Render every annotation for a page into one high-resolution overlay.
   Keeping text, signatures and drawings in this single coordinate system
   prevents the top-left Canvas coordinates from drifting when pdf-lib
   writes them using bottom-left PDF coordinates. */
async function rasterizePageAnnotations(anns, pageW, pageH, forcedScale = 0) {
  /* 4× is crisp for ordinary A4/Letter pages. Large pages are capped to
     avoid exhausting browser memory while retaining at least 2× quality. */
  const scale = forcedScale ||
    Math.max(2, Math.min(4, 3200 / Math.max(pageW, pageH)));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(pageW * scale));
  canvas.height = Math.max(1, Math.round(pageH * scale));
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  for (const ann of anns) {
    ctx.save();
    try {
      if ((ann.type === 'redact' || ann.type === 'highlight') && ann.rect) {
        ctx.globalAlpha = ann.type === 'redact' ? 1 : 0.35;
        ctx.fillStyle = ann.color || '#1a56db';
        ctx.fillRect(
          ann.rect.x * canvas.width, ann.rect.y * canvas.height,
          ann.rect.w * canvas.width, ann.rect.h * canvas.height
        );
      } else if (ann.type === 'draw' && ann.points?.length >= 2) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 2.5 * scale;
        ctx.strokeStyle = ann.color || '#1a56db';
        ctx.beginPath();
        ctx.moveTo(ann.points[0].x * canvas.width, ann.points[0].y * canvas.height);
        ann.points.slice(1).forEach(p =>
          ctx.lineTo(p.x * canvas.width, p.y * canvas.height));
        ctx.stroke();
      } else if (ann.type === 'highlight' && ann.points?.length >= 2) {
        ctx.globalAlpha = 0.35;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 20 * scale;
        ctx.strokeStyle = ann.color || '#facc15';
        ctx.beginPath();
        ctx.moveTo(ann.points[0].x * canvas.width, ann.points[0].y * canvas.height);
        ann.points.slice(1).forEach(p =>
          ctx.lineTo(p.x * canvas.width, p.y * canvas.height));
        ctx.stroke();
      } else if (ann.type === 'text') {
        const fontSize = Math.max(6, Number(ann.fontSize) || 18) * scale;
        const family = ann.fontFamily || "'Segoe UI',Tahoma,Arial,sans-serif";
        const text = ann.text || '';
        ctx.font = `600 ${fontSize}px ${family}`;
        ctx.direction = 'rtl';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        const metrics = ctx.measureText(text);
        const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.82;
        ctx.fillStyle = ann.color || '#1a56db';
        ctx.fillText(text, ann.x * canvas.width, ann.y * canvas.height + ascent);
      } else if (ann.type === 'signature' && ann.dataUrl) {
        const img = await imageFromDataUrl(ann.dataUrl);
        ctx.drawImage(
          img,
          ann.x * canvas.width, ann.y * canvas.height,
          ann.w * canvas.width, ann.h * canvas.height
        );
      }
    } catch (err) {
      /* One invalid element must not prevent the remaining elements from
         being saved. */
      console.warn('تخطي عنصر لم يتم تصديره:', ann.type, err);
    } finally {
      ctx.restore();
    }
  }
  return canvasPngBytes(canvas);
}

/* Render the original page and its annotations together.  Edited pages use
   the same PDF.js render that the user sees in the editor, so the original
   text and a redaction/signature can no longer drift apart during export. */
async function renderEditedPagePng(pageNum, pageBox, anns) {
  if (!editPdfDoc) throw new Error('ملف التحرير غير جاهز');
  const page = await editPdfDoc.getPage(pageNum);
  const scale = Math.max(2, Math.min(4, 3200 /
    Math.max(pageBox.width, pageBox.height)));
  const viewport = page.getViewport({ scale, rotation: 0 });
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(viewport.width));
  canvas.height = Math.max(1, Math.round(viewport.height));
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  await page.render({ canvas, canvasContext: ctx, viewport }).promise;

  const overlayBytes = await rasterizePageAnnotations(
    anns, pageBox.width, pageBox.height, scale
  );
  const overlay = await imageFromBytes(overlayBytes);
  ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
  return canvasPngBytes(canvas);
}

async function editExport() {
  if (!editFile) return;
  let fileName;
  try { fileName = await showSaveDialog('ملف-محرر', '.pdf'); } catch { return; }

  /* Edited pages are rebuilt from the same PDF.js pixels used by the
     editor. Untouched pages remain original vector PDF pages. */
  try {
    const { PDFDocument } = PDFLib;
    const bytes = await readFileBytes(editFile);
    const sourceDoc = await PDFDocument.load(bytes);
    const outputDoc = await PDFDocument.create();
    const sourcePages = sourceDoc.getPages();
    const byPage = {};
    for (const ann of editAnnotations) {
      (byPage[ann.pageNum] = byPage[ann.pageNum] || []).push(ann);
    }

    for (let pageIndex = 0; pageIndex < sourcePages.length; pageIndex++) {
      const pageNum = pageIndex + 1;
      const anns = byPage[pageNum] || [];
      const sourcePage = sourcePages[pageIndex];
      if (!anns.length) {
        const [copied] = await outputDoc.copyPages(sourceDoc, [pageIndex]);
        outputDoc.addPage(copied);
        continue;
      }

      const visibleBox = getVisiblePdfBox(sourcePage);
      const pagePng = await renderEditedPagePng(
        pageNum, visibleBox, anns
      );
      const pageImage = await outputDoc.embedPng(pagePng);
      const outputPage = outputDoc.addPage([
        visibleBox.width, visibleBox.height
      ]);
      outputPage.drawImage(pageImage, {
        x: 0, y: 0, width: visibleBox.width, height: visibleBox.height
      });
    }

    download(await outputDoc.save(), fileName);
    toast('تم تصدير الملف المحرر بجودة عالية ✓', 'success');
    return;
  } catch (e) {
    console.error('التصدير المركب للصفحة', e);
    toast('فشل حفظ الملف: ' + (e?.message || e), 'error');
    return;
  }

  if (false) {
    /* Legacy overlay export retained as historical reference only. The
       page-by-page export above always returns before this code can execute. */
  const { PDFDocument } = PDFLib;
  const bytes = await readFileBytes(editFile);
  const doc   = await PDFDocument.load(bytes);
  const pdfPages = doc.getPages();

  /* Group annotations by page */
  const byPage = {};
  for (const ann of editAnnotations) {
    (byPage[ann.pageNum] = byPage[ann.pageNum] || []).push(ann);
  }

  for (const [pnStr, anns] of Object.entries(byPage)) {
    const pn  = parseInt(pnStr);
    const pdfPage = pdfPages[pn - 1]; if (!pdfPage) continue;
    try {
    /* New export path: composite all elements using the exact same
       top-left fractional coordinates used by the editor, then place the
       result over the visible page box. */
    const visibleBox = getVisiblePdfBox(pdfPage);
    const compositeBytes = await rasterizePageAnnotations(
      anns, visibleBox.width, visibleBox.height
    );
    const compositeImage = await doc.embedPng(compositeBytes);
    pdfPage.drawImage(compositeImage, {
      x: visibleBox.x, y: visibleBox.y,
      width: visibleBox.width, height: visibleBox.height
    });
    continue;

    const { width: pW, height: pH } = pdfPage.getSize();
    /* Real-world PDFs (especially ones generated by corporate/office systems)
       often have a MediaBox that does NOT start at (0,0) — e.g. [12 12 600 800].
       pdf-lib's drawText/drawImage use ABSOLUTE page coordinates, so every
       position we compute (which is relative to the *visible* page area, as
       seen in the editor) must be offset by the MediaBox's own origin, or
       everything lands off by a constant amount — this was the remaining
       cause of text/signatures/redactions landing in the wrong spot on
       real documents even though it was fine on simple, origin-at-zero PDFs. */
    let mbX = 0, mbY = 0;
    try { const mb = pdfPage.getMediaBox(); mbX = mb.x || 0; mbY = mb.y || 0; } catch {}

    /* ① Rasterise draw/highlight/redact → transparent PNG → embed as overlay.
       Every annotation is stored as a FRACTION (0..1) of the page, so we
       rasterise straight against the PDF's own point size (pW×pH) at a
       fixed quality multiplier — independent of whatever zoom/window size
       was last shown on screen, and with no scale/dims lookup needed. */
    const strokes = anns.filter(a => a.type === 'draw' || a.type === 'highlight' || a.type === 'redact');
    if (strokes.length) {
      const scale = 3; /* raster px per PDF point, for crisp high-quality output */
      const tc  = document.createElement('canvas');
      tc.width  = Math.max(1, Math.round(pW * scale));
      tc.height = Math.max(1, Math.round(pH * scale));
      const ctx = tc.getContext('2d');
      strokes.forEach(ann => {
        ctx.save();
        if (ann.type === 'redact' && ann.rect) {
          /* Solid opaque fill — permanently covers/removes the underlying
             content in the exported file (irreversible once flattened). */
          ctx.globalAlpha = 1;
          ctx.fillStyle = ann.color;
          ctx.fillRect(ann.rect.x*tc.width, ann.rect.y*tc.height, ann.rect.w*tc.width, ann.rect.h*tc.height);
        } else if (ann.type === 'highlight') {
          ctx.globalAlpha = 0.35;
          if (ann.rect) {
            /* rectangle highlight */
            ctx.fillStyle = ann.color;
            ctx.fillRect(ann.rect.x*tc.width, ann.rect.y*tc.height, ann.rect.w*tc.width, ann.rect.h*tc.height);
          } else if (ann.points?.length >= 2) {
            /* legacy freehand */
            ctx.lineCap='round'; ctx.lineJoin='round'; ctx.lineWidth=20*scale;
            ctx.strokeStyle=ann.color; ctx.beginPath();
            ctx.moveTo(ann.points[0].x*tc.width,ann.points[0].y*tc.height);
            ann.points.slice(1).forEach(p=>ctx.lineTo(p.x*tc.width,p.y*tc.height));
            ctx.stroke();
          }
        } else if (ann.points?.length >= 2) {
          ctx.lineCap='round'; ctx.lineJoin='round'; ctx.lineWidth=2.5*scale;
          ctx.strokeStyle=ann.color; ctx.beginPath();
          ctx.moveTo(ann.points[0].x*tc.width,ann.points[0].y*tc.height);
          ann.points.slice(1).forEach(p=>ctx.lineTo(p.x*tc.width,p.y*tc.height));
          ctx.stroke();
        }
        ctx.restore();
      });
      const blob     = await new Promise(res => tc.toBlob(res, 'image/png'));
      const imgBytes = new Uint8Array(await blob.arrayBuffer());
      const img      = await doc.embedPng(imgBytes);
      pdfPage.drawImage(img, { x: mbX, y: mbY, width: pW, height: pH });
    }

    /* Each annotation is wrapped individually so that ONE bad/unexpected
       item (a corrupt signature image, an unusual font, etc.) can never
       silently abort the whole export — every other change still saves. */
    for (const ann of anns) {
      try {
        if (ann.type === 'text') {
          const annFF = ann.fontFamily || '';
          const customName = Object.keys(_customFonts).find(n => annFF.includes(n));
          let font;
          if (customName && _customFonts[customName]) {
            try { font = await doc.embedFont(new Uint8Array(_customFonts[customName])); }
            catch { font = await doc.embedFont(PDFLib.StandardFonts.Helvetica); }
          } else {
            font = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
          }
          /* fontSize is already stored in PDF points — scale-independent, no conversion needed */
          const fs = Math.max(6, ann.fontSize);
          let ascent;
          try { ascent = font.heightAtSize(fs, { descender: false }); } catch { ascent = fs * 0.8; }

          try {
            /* Fast path: the standard font can encode this text (Latin/European) */
            pdfPage.drawText(ann.text || '', { x: mbX + ann.x*pW, y: mbY + pH - ann.y*pH - ascent, size: fs, font });
          } catch {
            /* The standard font can't encode this text — most commonly Arabic,
               since Helvetica/WinAnsi has no Arabic glyphs at all. Render it
               with the browser's own font engine instead (same one used for
               on-screen display) and embed it as an image at the exact same
               position/size. This is what previously made saving fail
               completely and silently whenever the typed text was Arabic. */
            const raster = await rasterizeTextAnnotation(ann);
            const img = await doc.embedPng(raster.bytes);
            pdfPage.drawImage(img, { x: mbX + ann.x*pW, y: mbY + pH - ann.y*pH - raster.heightPt, width: raster.widthPt, height: raster.heightPt });
          }
        } else if (ann.type === 'signature') {
          const imgBytes = Uint8Array.from(atob(ann.dataUrl.split(',')[1]), c => c.charCodeAt(0));
          const img = ann.dataUrl.includes('image/png') ? await doc.embedPng(imgBytes) : await doc.embedJpg(imgBytes);
          pdfPage.drawImage(img, { x: mbX + ann.x*pW, y: mbY + pH-(ann.y+ann.h)*pH, width: ann.w*pW, height: ann.h*pH });
        }
      } catch (err) {
        console.warn('تخطي عنصر لم يتم تصديره:', ann.type, err);
      }
    }
    } catch (pageErr) {
      console.warn('فشل تصدير تعليقات الصفحة', pn, pageErr);
      toast('تعذّر تصدير بعض عناصر صفحة ' + pn + '، تابع الحفظ لباقي المحتوى', 'error');
    }
  }
  download(await doc.save(), fileName);
  toast('تم تصدير الملف المحرر ✓', 'success');
  }
}

/* ══════════════════════════════════════════════
   CROP — full-page canvas with mouse/touch drag
   ══════════════════════════════════════════════ */
let cropFileData = null, cropPdfBytes = null;
let cropPageW = 1, cropPageH = 1;     /* PDF page size in points */
let cropCanvasW = 1, cropCanvasH = 1; /* rendered canvas px dimensions */
let cropRect = null;                  /* { x1,y1,x2,y2 } in canvas px */
let cropDrawing = false;

async function cropLoad(input) {
  const f = input.files[0]; if (!f) return;
  if (!await validatePdf(f)) return;
  cropFileData = f;
  cropPdfBytes = await readFileBytes(f);
  cropRect = null; cropDrawing = false;
  document.getElementById('crop-ui').classList.remove('hidden');

  /* Render page 1 full-width into the main canvas */
  const wrap   = document.getElementById('crop-canvas-wrap');
  const mc     = document.getElementById('crop-main-canvas');
  const sc     = document.getElementById('crop-select-canvas');
  /* Pass copies — pdfjsLib and PDFDocument.load both consume/detach the buffer */
  const pdfDoc = await pdfGetDocument({ data: cropPdfBytes.slice() }).promise;
  const page   = await pdfDoc.getPage(1);
  const natVp  = page.getViewport({ scale: 1 });
  const maxW   = Math.max(wrap.clientWidth || 600, 300);
  const scale  = maxW / natVp.width;
  const vp     = page.getViewport({ scale });

  mc.width  = sc.width  = vp.width;
  mc.height = sc.height = vp.height;
  cropCanvasW = vp.width; cropCanvasH = vp.height;

  const ctx = mc.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, mc.width, mc.height);
  await page.render({ canvas: mc, canvasContext: ctx, viewport: vp }).promise;

  /* Store PDF page dimensions (points) for coordinate conversion — copy again */
  try {
    const { PDFDocument } = PDFLib;
    const doc  = await PDFDocument.load(cropPdfBytes.slice());
    const pp   = doc.getPages()[0];
    cropPageW  = pp.getSize().width;
    cropPageH  = pp.getSize().height;
  } catch { cropPageW = natVp.width; cropPageH = natVp.height; }

  drawCropRect();
  document.getElementById('crop-info').textContent = 'ارسم مستطيلاً لتحديد منطقة القص';
  toast('تم التحميل — ارسم مستطيل القص على الصفحة');
}

function _cropXY(e) {
  const sc  = document.getElementById('crop-select-canvas');
  const r   = sc.getBoundingClientRect();
  const src = e.touches ? e.touches[0] : e;
  return {
    x: Math.max(0, Math.min(cropCanvasW, (src.clientX - r.left) * (sc.width  / r.width))),
    y: Math.max(0, Math.min(cropCanvasH, (src.clientY - r.top)  * (sc.height / r.height)))
  };
}
function cropMouseDown(e) {
  const p = _cropXY(e);
  cropDrawing = true;
  cropRect = { x1: p.x, y1: p.y, x2: p.x, y2: p.y };
  e.preventDefault();
}
function cropMouseMove(e) {
  if (!cropDrawing) return;
  const p = _cropXY(e);
  cropRect.x2 = p.x; cropRect.y2 = p.y;
  drawCropRect(); e.preventDefault();
}
function cropMouseUp(e) {
  if (!cropDrawing) return;
  cropDrawing = false;
  const p = _cropXY(e);
  cropRect.x2 = p.x; cropRect.y2 = p.y;
  drawCropRect(); _cropInfoUpdate();
}
function drawCropRect() {
  const sc = document.getElementById('crop-select-canvas'); if (!sc) return;
  const ctx = sc.getContext('2d');
  ctx.clearRect(0, 0, sc.width, sc.height);
  if (!cropRect) return;
  const lx = Math.min(cropRect.x1, cropRect.x2), ly = Math.min(cropRect.y1, cropRect.y2);
  const rw = Math.abs(cropRect.x2 - cropRect.x1), rh = Math.abs(cropRect.y2 - cropRect.y1);
  /* dim the cropped-away area */
  ctx.fillStyle = 'rgba(0,0,0,0.48)';
  ctx.fillRect(0, 0, sc.width, sc.height);
  ctx.clearRect(lx, ly, rw, rh);
  /* green selection border */
  ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2;
  ctx.strokeRect(lx, ly, rw, rh);
  /* corner handles */
  const hs = 8; ctx.fillStyle = '#22c55e';
  [[lx,ly],[lx+rw,ly],[lx,ly+rh],[lx+rw,ly+rh]].forEach(([hx,hy]) =>
    ctx.fillRect(hx - hs/2, hy - hs/2, hs, hs));
}
function _cropInfoUpdate() {
  if (!cropRect) return;
  const lx = Math.min(cropRect.x1, cropRect.x2), ly = Math.min(cropRect.y1, cropRect.y2);
  const rw = Math.abs(cropRect.x2 - cropRect.x1), rh = Math.abs(cropRect.y2 - cropRect.y1);
  const mmW = (rw / cropCanvasW * cropPageW / 2.835).toFixed(1);
  const mmH = (rh / cropCanvasH * cropPageH / 2.835).toFixed(1);
  const el = document.getElementById('crop-info');
  if (el) el.textContent = `منطقة القص: ${mmW} × ${mmH} مم — اضغط "تطبيق القص" للتنزيل`;
}
async function cropPdf() {
  if (!cropFileData) return toast('اختر ملف PDF أولاً', 'error');
  if (!cropRect)     return toast('ارسم مستطيل القص على الصفحة أولاً', 'error');
  const lx = Math.min(cropRect.x1, cropRect.x2), ly = Math.min(cropRect.y1, cropRect.y2);
  const rw = Math.abs(cropRect.x2 - cropRect.x1), rh = Math.abs(cropRect.y2 - cropRect.y1);
  if (rw < 10 || rh < 10) return toast('منطقة القص صغيرة جداً — ارسم مستطيلاً أكبر', 'error');
  let fileName;
  try { fileName = await showSaveDialog('ملف-مقصوص', '.pdf'); } catch { return; }
  try {
    const { PDFDocument } = PDFLib;
    const doc = await PDFDocument.load(cropPdfBytes);
    doc.getPages().forEach(page => {
      const { width, height } = page.getSize();
      const pdfX = (lx / cropCanvasW) * width;
      const pdfY = (1 - (ly + rh) / cropCanvasH) * height;
      const pdfW = (rw / cropCanvasW) * width;
      const pdfH = (rh / cropCanvasH) * height;
      page.setCropBox(pdfX, pdfY, pdfW, pdfH);
    });
    download(await doc.save(), fileName);
    toast('تم قص الملف ✓', 'success');
  } catch(e) { toast('فشلت عملية القص: ' + e.message, 'error'); }
}
function cropReset() {
  cropFileData = null; cropPdfBytes = null; cropRect = null; cropDrawing = false;
  resetTool('crop');
}
