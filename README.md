# ide-haskell-profiteurjs package ![](https://david-dm.org/atom-haskell/ide-haskell-profiteurjs.svg)

Shows [Profiteur](https://github.com/jaspervdj/profiteur/) output in Atom.

![image](https://cloud.githubusercontent.com/assets/7275622/19200931/367c14ae-8cd4-11e6-9485-8c9c59681a18.png)

## Configuration

Profiteur is bundled with the package and bundled version is used by default. It runs on top of nodejs (via the magic of ghcjs), so a "real" binary will likely be faster.

If speed is an issue, you can build `profiteur`, and set full path to `profiteur` binary in package settings. For example, if you installed profiteur into `$HOME/.cabal/` (default cabal location), use `/path/to/home/dir/.cabal/bin/profiteur`. Specifics *will* depend on platform.
