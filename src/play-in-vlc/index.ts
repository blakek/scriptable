// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: play; share-sheet-inputs: url;

import { fetchVideoData, getVlcCallbackUri } from 'src/video';

let urls =
  args.urls.length > 0
    ? args.urls
    : ['https://rumble.com/vgq4g1-kendrick-lamar-dna.html'];

const url = urls[0];

fetchVideoData(url)
  .then(videoData => videoData[0])
  .then(videoData => getVlcCallbackUri(videoData, false))
  .then(uri => Safari.open(uri))
  .then(() => Script.complete());
