//Koa does not include a router
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if(ctx.path=='/'){
    ctx.body="<h1>Home Page</h1>";
  }else if(ctx.path=='/about'){
    ctx.body="<h1>About Us Page</h1>";
  }else if(ctx.path=='/contact'){
    ctx.body="<h1>Contact Page</h1>";
  }else{
    ctx.body="<h1>404 Not Found</h1>"
  }
});

app.listen(3000);
