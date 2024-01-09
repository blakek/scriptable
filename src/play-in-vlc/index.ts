// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: play; share-sheet-inputs: url;

import { fetchVideoData, getVlcCallbackUri } from "src/video";

const url = args.urls[0];

fetchVideoData(url)
  .then((videoData) => videoData[0])
  .then((videoData) => getVlcCallbackUri(videoData, false))
  .then((uri) => Safari.open(uri))
  .then(() => Script.complete());
