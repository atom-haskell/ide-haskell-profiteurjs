{-# OPTIONS_GHC -Wall #-}

{-# LANGUAGE OverloadedStrings, ViewPatterns, TupleSections #-}
module Main (main) where

-- base
import Data.Coerce

-- ghcjs
import GHCJS.Foreign.Callback
import GHCJS.Foreign.Callback.Internal
import qualified Data.ByteString.Lazy as BL
import Data.Text.Lazy
import Data.Text.Lazy.Encoding

import Foreign
import Profiteur

import GHCJS.Marshal
import GHCJS.Marshal.Pure
import GHCJS.Foreign.Callback
import GHCJS.Types
import GHCJS.Buffer
import JavaScript.TypedArray

main :: IO ()
main = do
  setExport "runProfiteur" =<< asyncCallback3 (mkAsync3 runProfiteur)

runProfiteur :: JSVal -> JSVal -> IO JSVal
runProfiteur (pFromJSVal -> fn) (pFromJSVal -> fsrc) = do
  let src = parseProfFile . BL.toStrict . encodeUtf8 . pack $ fsrc
  case src of
    Right p -> toJSVal . unpack . decodeUtf8 $ htmlReportPure fn p
    Left err -> toJSVal $ "<div class='error'>" ++ err ++ "</div>"
