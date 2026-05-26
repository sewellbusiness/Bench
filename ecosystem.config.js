module.exports = {
  apps: [{ name:"bench", script:"node_modules/.bin/next", args:"start", cwd:"/var/www/bench.sewelllabs.com", env:{ NODE_ENV:"production", PORT:3001 } }],
};
