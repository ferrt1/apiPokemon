const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../auth')(passport);


router.route('/')
    .get( passport.authenticate('jwt', {session: false}), 
            (req, res, next) => {
            res.status(200).send('Hello World!');
        })
    .put(() =>{
        res.status(200).send('Hello World!');
    });


// app.post('/team/pokemons', () => {
//     res.status(200).send('Hello World!')
// })


// app.delete('/team/pokemons/:pokeid', () => {
//     res.status(200).send('Hello World!')
// })



exports.router = router;