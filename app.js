const Koa = require('koa')
var bodyParser = require('koa-bodyparser');
const app = new Koa()
const router = require('./api/test')
app.use(bodyParser());
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(ctx.method, ctx.url, ms);
})
app.use(router.routes())
app.listen(4000, () => {
  console.log('服务器已经在4000端口运行了');
})


