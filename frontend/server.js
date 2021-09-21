const express = require('express');
const helmet = require('helmet')
const app = express();
const port = process.env.PORT || 3000;

const sixtyDaysInSeconds = 5184000
app.use(helmet.hsts({
   maxAge: sixtyDaysInSeconds
}))

//Serve up all of our static assets 
app.use( express.static('client/build') );

//Make all incoming GET requests return the index.html in order to take advantage of the client side router
app.get('/*', function(req, res) {
res.sendFile(__dirname + '/client/build/index.html', function(err) {
    if (err) {
        res.status(500).send(err);
    }
   })
})

app.listen(port, () => console.log(`App listening on port ${port}!`));