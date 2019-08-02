#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const koaStatic = require("koa-static");
var app = new koa();
app.use(koaStatic(process.cwd() + '/public', {
    extensions: ['html'],
    dotfiles: 'ignore'
}));
app.use(koaStatic(process.cwd() + '/public/view', {
    extensions: ['html'],
    dotfiles: 'ignore'
}));
app.use(koaStatic(process.cwd() + '/public/html', {
    extensions: ['html'],
    dotfiles: 'ignore'
}));
app.use(async (ctx, next) => {
    try {
        await next();
    }
    catch (err) {
        console.error(err);
        ctx.status = err.status || 400;
        ctx.body = {
            status: 'FAIL',
            message: typeof err == 'string' ? err : err.message || 'Something Broke!'
        };
    }
});
app.on('error', (err, ctx) => {
    console.error(err);
    ctx.status = err.status ? err.status : 400;
    let msg = '';
    if (err.message)
        msg = err.message;
    else if (err)
        msg = err;
    else
        msg = "Something Broke!";
    ctx.body = msg;
});
var instanceId = Number.parseInt(process.env.NODE_APP_INSTANCE) || 0;
var server = app.listen(2000 + instanceId, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.info("Server listening at http://%s:%s", host, port);
});
