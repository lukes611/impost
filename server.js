
let e = require('express');

let app = e();

app.use(e.static(__dirname + '/public'));

app.get('/', (rq, rs) => {
	rs.send(`
<!DOCTYPE html>
<html>
	<head>
		<meta property="og:image" content="https://images.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" />
		<meta property="og:image:width" content="128"/>
		<meta property="og:image:height" content="128"/>
	</head>
	<body>
		hello-
	</body>
</html>	
`);
});


app.get('/sv', (rq, rs) => {
	rs.send(`
<!DOCTYPE html>
<html>
	<head>
		<meta property="og:image" content="/ducky.svg" />
		<meta property="og:image:width" content="600"/>
		<meta property="og:image:height" content="600"/>
	</head>
	<body>
		<img src="/ducky.svg"
	</body>
</html>	
`);
});


app.listen(80);