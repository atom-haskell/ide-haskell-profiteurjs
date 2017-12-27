import { IdeHaskellProfiteurjsView } from './ide-haskell-profiteurjs-view'
import { CompositeDisposable } from 'atom'

let subscriptions: CompositeDisposable | undefined
export const config = {
  profiteurPath: {
    type: 'string',
    default: 'profiteur.js',
    description: `Path to profiteur executable; if set to 'profiteur.js'
(default) will use bundled ghcjs-powered implementation`,
  },
}

export function activate(_state: never) {
  subscriptions = new CompositeDisposable()
  subscriptions.add(atom.workspace.addOpener(
    (uri) => {
      if (uri.endsWith('.prof')) {
        return new IdeHaskellProfiteurjsView(uri)
      } else {
        return undefined
      }
    },
  ))
}

export function deactivate() {
  subscriptions && subscriptions.dispose()
}
