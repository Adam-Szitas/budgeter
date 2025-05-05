
export default {
  basePath: 'https://adam-szitas.github.io/budgeter/global/browser',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
