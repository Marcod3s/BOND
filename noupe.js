// const jfAgentCacheName = 'dynamic-agent-v1';

// const sanitizeVariables = (url, width, height) => {
//   try {
//     const sanitizedUrl = new URL(url);
//     const url = sanitizedUrl.toString();
//     const width = parseInt(width);
//     const height = parseInt(height);
//     return { url, width, height };
//   } catch (e) {
//     console.error('Error sanitizing variables', e);
//     return { url: '', width: 0, height: 0 };
//   }
// };

// const handlePictureInPictureRequest = async event => {
//   if (event.data.type !== 'jf-request-pip-window') {
//     return;
//   }
//   const { _url, _width, _height } = event.data;
//   const { url, width, height } = sanitizeVariables(_url, _width, _height);
//   if (url === '' || width === 0 || height === 0) {
//     return;
//   }
//   if ('documentPictureInPicture' in window) {
//     // return if already in picture in picture mode
//     if (window.documentPictureInPicture.window) {
//       return;
//     }
//     const pipWindow = await window.documentPictureInPicture.requestWindow({
//       width,
//       height,
//       disallowReturnToOpener: true
//     });
//     // copy styles from main window to pip window
//     [...document.styleSheets].forEach(styleSheet => {
//       try {
//         const cssRules = [...styleSheet.cssRules]
//           .map(rule => rule.cssText)
//           .join('');
//         const style = document.createElement('style');
//         style.textContent = cssRules;
//         pipWindow.document.head.appendChild(style);
//       } catch (e) {
//         const link = document.createElement('link');
//         link.rel = 'stylesheet';
//         link.type = styleSheet.type;
//         link.media = styleSheet.media;
//         link.href = styleSheet.href;
//         pipWindow.document.head.appendChild(link);
//       }
//     });
//     pipWindow.document.body.innerHTML = `<iframe src="${url}" style="width: ${width}px; height: ${height}px;" allow="microphone *; display-capture *;"></iframe>`;
//     return { success: true, isActive: false };
//   }
// };

// window.addEventListener('message', handlePictureInPictureRequest);

// (async () => {
//   const src = "https://www.noupe.com/s/umd/eafae908b65/for-embedded-agent.js";
//   const script = document.createElement('script');
//   script.src = src;
//   script.async = true;
//   script.onload = function() {
//     window.AgentInitializer.init({
//       agentRenderURL: "https://www.noupe.com/agent/0198971f3f76773f97952e648604ffa97148",
//       rootId: "JotformAgent-0198971f3f76773f97952e648604ffa97148",
//       formID: "0198971f3f76773f97952e648604ffa97148",
//       contextID: "0198972c833b721ca329c6cee87319e7acdc",
//       initialContext: "",
//       queryParams: ["skipWelcome=1","maximizable=1","skipWelcome=1","maximizable=1","isNoupeAgent=1"],
//       domain: "https://www.noupe.com",
//       isDraggable: false,
//       background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
//       buttonBackgroundColor: "#0066C3",
//       buttonIconColor: "#FFFFFF",
//       inputTextColor: "#01105C",
//       variant: false,
//       customizations: null,
//       isVoice: false,
//       isVoiceWebCallEnabled: false
//     });
//   };
//   document.head.appendChild(script);
// })();