### Development

1. Use mode `development` and to turn on source maps use `devtools: 'inline-source-map`.
2. Use `webpack-dev-server`, although we have other options.
3. Dev server serves it's contents from `http://<host>:<port>/<output.publicPath>/<output.filename>`.
   1. Why does it work even if I don't put the entire path to `index.html`? Why does putting `http://localhost:8080` work?
