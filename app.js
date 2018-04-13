var flatiron = require('flatiron'),
    path = require('path'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);

app.router.get('/', function () {
  this.res.json({ 'hello': 'world' })
});

app.router.get('/example', function () {
	this.res.end('hello world')
});

app.router.get('/also', function () {
	this.req.on('data', (chunk) => {
		console.log(chunk);
	})
});

app.start(3000);
