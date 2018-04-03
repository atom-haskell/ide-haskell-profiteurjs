import { IdeHaskellProfiteurjsView } from './ide-haskell-profiteurjs-view'
import { CompositeDisposable } from 'atom'

let subscriptions: CompositeDisposable | undefined
export { config } from './config'

export function activate(_state: never) {
  subscriptions = new CompositeDisposable()
  subscriptions.add(
    atom.workspace.addOpener((uri) => {
      if (uri.endsWith('.prof')) {
        return new IdeHaskellProfiteurjsView(uri)
      } else {
        return undefined
      }
    }),
  )
}

export function deactivate() {
  subscriptions && subscriptions.dispose()
}
