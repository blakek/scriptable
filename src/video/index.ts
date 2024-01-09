export interface VideoData {
  filename: string;
  url: string;
}

export function getVlcCallbackUri(video: VideoData, shouldSave: boolean) {
  const action = shouldSave ? "download" : "stream";
  const encodedURL = encodeURIComponent(video.url);
  const encodedFilename = encodeURIComponent(video.filename);

  return `vlc-x-callback://x-callback-url/${action}?url=${encodedURL}&filename=${encodedFilename}`;
}

export async function fetchVideoData(url: string): Promise<VideoData[]> {
  let webView = new WebView();
  await webView.loadURL(url);

  return webView.evaluateJavaScript(
    `
		let elements = [
			...document.querySelectorAll('video[src]:not([src=""])'),
			...document.querySelectorAll("video source"),
		];

		let filename = document.title;

		const response = elements.map((el) => {
			return { filename, url: el.src };
		});

		completion(response);
		`,
    true
  );
}
