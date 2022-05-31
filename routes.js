let route = (c) = {
let basedir = ""
method: c.method.toUpperCase(), path: path.join(basedir, c.path), handler: c.handler, config: c.config

}
let connect = (request) => { method: "post", handler: bot.services.connect, config: {} }

const routes = {
  connect
}
