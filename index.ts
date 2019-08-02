#! /usr/bin/env node

import * as koa from 'koa';
import * as koaStatic from 'koa-static';

// import * as webpack from 'webpack';
// import * as webpackMiddleware from 'webpack-dev-middleware';
// import * as webpackHotMiddleware from 'webpack-hot-middleware';
// const webpackConfig = await import('./webpack.config.js');

// async function checkPath(p: string): Promise<boolean> {
//   return await new Promise<boolean>((res) => {
//     p = p.endsWith('.html') ? p : p + '.html';
//     fs.exists(p, (data) => {
//       res(data);
//     });
//   });
// }

// var viewCache = new Cache<string, string>({
//   valueFunction: async (key) => {
//     try {
//       let loc = "";
//       let paths = [
//         path.join(viewPath, key),
//         path.join(viewPath, key, '/index'),
//         path.join(viewPath, key, '/home/index')
//       ];
//       for (let i = 0; i < paths.length; i++) {
//         let p = paths[i];
//         if (await checkPath(p)) {
//           loc = p;
//           break;
//         }
//       }
//       let data = nunjucks.render(loc.replace(viewPath, '') + ".html");
//       return data;
//     } catch (e) {
//       return null;
//     }
//   }
// });

var app = new koa();

// app.set('view engine', 'html');
// app.set('views', __dirname + '/views');
// nunjucks.configure('views', {
//   watch: true,
//   noCache: true,
//   autoescape: true,
//   express: app
// });

// var viewPath = process.cwd() + '/view/'

// app.use('/admin', Filters.authenticationFilter);

// Webpack config
// const compiler = webpack(webpackConfig);
// const middleware = webpackMiddleware(compiler, {
//   publicPath: webpackConfig.output.publicPath,
//   contentBase: 'src',
//   stats: {
//     colors: true,
//     hash: false,
//     timings: true,
//     chunks: false,
//     chunkModules: false,
//     modules: false
//   }
// });
// app.use(middleware);
// if (process.env.NODE_ENV === 'development') {
//   app.use(webpackHotMiddleware(compiler));
// }

// Static files
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

// Error Handler
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.error(err);
		ctx.status = err.status || 400;
		ctx.body = {
			status: 'FAIL',
			message: typeof err == 'string' ? err : err.message || 'Something Broke!'
		};
	}
});

app.on('error', (err, ctx: koa.Context) => {
	console.error(err);
	ctx.status = err.status ? err.status : 400;
	let msg = '';
	if (err.message) msg = err.message;
	else if (err) msg = err;
	else msg = "Something Broke!";
	ctx.body = msg;
});

// Routes

// Start Server
var instanceId = Number.parseInt(process.env.NODE_APP_INSTANCE) || 0;
var server = app.listen(2000 + instanceId, function () {
	var host = server.address().address
	var port = server.address().port
	console.info("Server listening at http://%s:%s", host, port);
});
