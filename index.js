var Koa = require('koa')
var router = require('koa-router')()

var app = new Koa();

router.get("/",async (ctx,next) => {
	ctx.body = "hello,world11";
	})
	
app.use(router.routes());
app.listen(8888);
