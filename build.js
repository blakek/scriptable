const esbuild = require('esbuild');

const shouldWatch = process.argv.includes('--watch');

function onRebuild(error, result) {
  if (error) console.error('build failed');
  else console.log('built');
}

esbuild.build({
  entryPoints: {
    getVideoDetails: 'src/get-video-details/index.ts',
    playInVLC: 'src/play-in-vlc/index.ts',
    downloadWithVLC: 'src/download-with-vlc/index.ts'
  },
  bundle: true,
  legalComments: 'inline',
  mainFields: ['module', 'main'],
  outdir: 'dist',
  platform: 'node',
  watch: shouldWatch ? { onRebuild } : undefined,
  write: true
});
