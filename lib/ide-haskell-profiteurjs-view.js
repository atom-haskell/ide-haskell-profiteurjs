'use babel';

export default class IdeHaskellProfiteurjsView {

  constructor(uri, html) {
    this.uri = uri
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('ide-haskell-profiteurjs');

    // Create message element
    const report = document.createElement('webview');
    report.src = "data:text/html;base64," + btoa(html)
    report.style.width = '100%';
    report.style.height = '100%';
    this.element.appendChild(report);
  }

  getURI() {
    return this.uri;
  }

  getTitle() {
    return `Profiteur: ${this.uri}`;
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

}
