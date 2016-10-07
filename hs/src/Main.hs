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

main :: IO ()
main = do
  setExport "runProfiteur" =<< asyncCallback2 (mkAsync2 runProfiteur)

runProfiteur :: JSVal -> IO JSVal
runProfiteur (pFromJSVal -> fn) = do
  src <- readProfFile fn
  case src of
    Right p -> toJSVal . unpack . decodeUtf8 $ htmlReportPure fn p
    Left err -> toJSVal $ "<div class='error'>" ++ err ++ "</div>"
