const Router = require('koa-router')
const router = new Router()
router.get('/api', (ctx, next) => {
  ctx.body = "Hello World"
}).get('/api/test', (ctx, next) => {
  ctx.body = {
    msg: 'here is test',
    query: ctx.query,
    querystr: ctx.querystring
  }
}).post('/api/users', (ctx, next) => {
  ctx.body = "here is users"
}).all('/api/users/:id', (ctx, next) => {

}).post('/login', async (ctx) => {
  let loginUser = ctx.request.body,
    userName = loginUser.userName,
    password = loginUser.password
  if (userName == 'zhanglei' && password == 123) {
    ctx.body = {
      code: 200,
      data: {
        displayName: '张磊',
        token: 'asfdg'
      }
    }
  } else {
    ctx.body = {
      code: 500,
      message: false
    }
  }
})

module.exports = router