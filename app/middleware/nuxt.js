const re = /^\/api/
module.exports = options => {
  return async function (ctx, next) {
    if (re.test(ctx.url)) {
      return await next()
    }
    ctx.status = 200
    await ctx.app.nuxt.render(ctx.req, ctx.res)
    return Promise.reject()
  }
}
