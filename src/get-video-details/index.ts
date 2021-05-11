// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: link; share-sheet-inputs: url;

import { fetchVideoData } from 'src/video';

async function main() {
  let tasks = args.urls.map(fetchVideoData);

  let data = await Promise.all(tasks);
  Pasteboard.copyString(data[0][0].url);
}

main().then(() => Script.complete());
