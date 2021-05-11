// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: link; share-sheet-inputs: url;

import { fetchVideoData } from 'src/video';

async function main() {
  let urls =
    args.urls.length > 0
      ? args.urls
      : ['https://rumble.com/vgq4g1-kendrick-lamar-dna.html'];

  let tasks = urls.map(fetchVideoData);

  let data = await Promise.all(tasks);
  Pasteboard.copyString(data[0][0].url);
}

main().then(() => Script.complete());
