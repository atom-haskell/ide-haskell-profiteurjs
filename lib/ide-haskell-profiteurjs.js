'use babel';

import IdeHaskellProfiteurjsView from './ide-haskell-profiteurjs-view';
import { CompositeDisposable } from 'atom';
import { runProfiteur } from '../hs/hs.min.js'
import fs from 'fs'

export default {

  ideHaskellProfiteurjsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.workspace.addOpener( (uri) => {
      if(uri.endsWith('.prof')) {
        return new Promise((resolve, reject) => {
          fs.readFile(uri, {encoding: 'utf-8'}, (err, data) => {
            if(err) reject(err);
            runProfiteur(uri, data, (html) => {
              resolve (new IdeHaskellProfiteurjsView(uri, html));
            });
          });
        }).catch((err) => { throw err; });
      }
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

};
