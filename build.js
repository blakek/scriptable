const esbuild = require("esbuild");

function onRebuild(error, result) {
  if (error) console.error("build failed");
  else console.log("built");
}

async function main() {
  const context = await esbuild.context({
    entryPoints: {
      getVideoDetails: "src/get-video-details/index.ts",
      playInVLC: "src/play-in-vlc/index.ts",
      downloadWithVLC: "src/download-with-vlc/index.ts",
    },
    bundle: true,
    legalComments: "inline",
    mainFields: ["module", "main"],
    outdir: "dist",
    platform: "node",
    write: true,
  });

  const shouldWatch = process.argv.includes("--watch");

  if (shouldWatch) {
    await context.watch();
  } else {
    await context.rebuild();
  }

  await context.dispose();
}

main();
