const minimist = require('minimist');
// with pm2 command, argv_index=4
const argv = minimist([minimist(process.argv.slice(4))['node-args'] || '']);
const datadir = argv['datadir'] || '/data/wires-plat/';
const port = argv['port'] || '1414';
const memory = argv['memory'] || '150';

module.exports = {
  apps: [{
    cwd: __dirname,
    name: 'rubix-plat',
    script: 'app.js',
    args: `--datadir ${datadir} --port ${port}`,
    instances: 1, // number process of application. must be `1`
    exec_mode: 'fork_mode', // must be fork_mode due to pub/sub like `transmitter` cannot work in cluster mode
    autorestart: true, //auto restart if app crashes
    max_memory_restart: `${memory}M`,
    env: {NODE_ENV: 'production'},
    watch: false,
  }],
};
