
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://adam-szitas.github.io/budgeter/global/browser/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/skeleton/pages/home/home.routes.ts": [
    {
      "path": "chunk-DD72ZBMI.js",
      "dynamicImport": false
    }
  ],
  "src/app/skeleton/pages/register/register.routes.ts": [
    {
      "path": "chunk-ZVQ6XVJQ.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 48043, hash: '94325bd6b935f8f4ff022bbdd1bd3ab635c831ed28253521a2ff8679d8366acf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1216, hash: '5f3ed2ea0af3b4480f6026cf8905319e5c4c022ad32bf0d4f07283d9cecc374b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CRX2TAIO.css': {size: 88547, hash: 'HQAkYyAk92U', text: () => import('./assets-chunks/styles-CRX2TAIO_css.mjs').then(m => m.default)}
  },
};
