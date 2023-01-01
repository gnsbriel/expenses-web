const express = require('express');
const app = express();

const { readFile } = require('fs').promises;

app.use(express.static('public'))

app.get('/', async (request, response) => {
    response.send (await readFile('./pages/landing/index.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Sorry, out of order.')
        }
    }));
});

app.get('/home', async (request, response) => {
    response.send (await readFile('./pages/home/index.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Internal Server Error')
        }
    }));
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
