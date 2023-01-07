// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {

//   if (req.url === '/'){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   }
//   if (req.url === '/contacts'){
//     res.write(JSON.stringify([1,2,3]));
//     res.end();
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//$env:PORT = '5000'

// app.get('/',(req,res) => {
//   res.send('Hello World')
// });
// app.get('/contacts',(req,res) => {
//   res.send('Luisa Quispe')
// });
// app.get('/api/courses',(req,res) => {
//   res.send(courses)
// });
// app.get('/api/courses/:id', (req,res) => {
//   let course = courses.find(c => (c.id === parseInt(req.params.id)));
//   if (!course) res.status(404).send("The course wasn't found")
//   else res.send(course.name)
// });

// app.get('/api/posts/:year/:month', (req,res) =>{
//   res.send(req.params.id)
//   //res.send(req.query) - /api/posts/2018/1?sortBy=name
// });
//app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

const express = require('express')

app = express();


app.use('/', require('./routes'));


app.listen(port, () => console.log(`listening on port ${port}`));


// app.get()
// app.post()
// app.put()
// app.delete()