const spawn = require('child_process').spawn;

const javascript = spawn('node', ['./scripts/javascript.js']);
const stylesheets = spawn('postcss', [
  // '--use autoprefixer',
  // '-c options.json',
  '-w',
  '-o', 'dist/foo.css',
  'assets/stylesheets/foo.css'
]);

function logger(data) {
  console.log(data.toString());
}

javascript.stdout.on('data', logger);
javascript.stderr.on('data', logger);
stylesheets.stdout.on('data', logger);
stylesheets.stderr.on('data', logger);
