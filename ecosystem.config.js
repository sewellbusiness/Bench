module.exports = {
  apps: [{ name:"bench", script:"node_modules/.bin/next", args:"start", cwd:"/home/bench/app", env:{ NODE_ENV:"production", PORT:3001 } }],
};
