
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://adam-szitas.github.io/budgeter/global/browser/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/skeleton/pages/home/home.routes.ts": [
    {
      "path": "chunk-F6SVCPX5.js",
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
    'index.csr.html': {size: 48043, hash: '2bfd01858e8ecc46ca5ddaf6653c30efffc0bbf5f031ea7f6095e149447a9a79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1216, hash: 'ad1f8eb1c43f42a50e17cf939017e4c50644589d1b1dd2a5fb2bc7563482ed96', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CRX2TAIO.css': {size: 88547, hash: 'HQAkYyAk92U', text: () => import('./assets-chunks/styles-CRX2TAIO_css.mjs').then(m => m.default)}
  },
};
