import { BufferedProcess, BufferedNodeProcess } from 'atom'
import { sep } from 'path'

async function runProfiteur(uri: string): Promise<string> {
  let cmd = atom.config.get('ide-haskell-profiteurjs.profiteurPath')
  if (!cmd) throw new Error('No profiteur path set!')
  let BP: typeof BufferedProcess
  if (cmd === 'profiteur.js') {
    cmd = `${__dirname}${sep}..${sep}bin${sep}profiteur.js`
    BP = BufferedNodeProcess
  } else {
    BP = BufferedProcess
  }
  const args = [uri, '-']
  const ccmd = cmd
  return new Promise<string>((resolve, reject) => {
    const buf: string[] = []
    const err: string[] = []
    return new BP({
      command: ccmd,
      args: args,
      stdout: (data: string) => {
        buf.push(data)
      },
      stderr: (data: string) => {
        err.push(data)
      },
      exit: (code: number) => {
        if (code === 0) resolve(buf.join('\n'))
        else reject(err.join('\n'))
      },
    })
  })
}

export class IdeHaskellProfiteurjsView {
  private element: HTMLDivElement
  private uri: string

  constructor(uri: string) {
    this.uri = uri
    // Create root element
    this.element = document.createElement('div')
    this.element.classList.add('ide-haskell-profiteurjs')

    // Create message element
    const report = document.createElement('webview') as any
    report.style.width = '100%'
    report.style.height = '100%'
    this.element.appendChild(report)
    runProfiteur(uri)
    .then(html => report.src = 'data:text/html;base64,' + btoa(html))
    .catch(err => atom.notifications.addError(err.toString()))
  }

  public getURI() {
    return this.uri
  }

  public getTitle() {
    return `Profiteur: ${this.uri}`
  }

  public destroy() {
    this.element.remove()
  }

}
