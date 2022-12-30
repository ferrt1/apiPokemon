const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //req == request, peticion
    //res == response, repuesta
    console.log(req);
    res.status(200).send('Hello World');
});

app.post('/team/pokemons', () => {
    res.status(200).send('Hello World');
});

app.get( '/team', () => {
    res.status(200).send('Hello World');
});


app.delete('/team/pokemons/:pokeid', () => {
    res.status(200).send('Hello World');
});


app.put('/team', () => {
    res.status(200).send('Hello World');
});

app.listen(port, () => {
    console.log('Server started at port 3000');
});

