const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("./router");

const app = new Koa();

app.use(koaBody());
app.use(router.routes());

app.listen(2025, () =>{
    console.log("listeneing at localhost:2025");
});