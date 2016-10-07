'use babel';

import IdeHaskellProfiteurjsView from './ide-haskell-profiteurjs-view';
import { CompositeDisposable } from 'atom';
import { runProfiteur } from '../hs/hs.min.js'

export default {

  ideHaskellProfiteurjsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.workspace.addOpener( (uri) => {
      if(uri.endsWith('.prof')) {
        return new Promise((resolve) => {
          runProfiteur(uri, (html) => {
            resolve (new IdeHaskellProfiteurjsView(uri, html));
          });
        });
      }
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

};
