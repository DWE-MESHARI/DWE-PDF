/* Browser shim: pdf-encrypt-lite expects pdf-lib; we use global PDFLib from libs/pdf-lib.min.js */
module.exports = globalThis.PDFLib;
