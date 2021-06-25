var express = require('express');
var router = express.Router();
const movies = require('../movies.json')
const fs = require('fs')


router.get('/', (req, res, next) => {
    let queryTitle = req.query.title
    if (queryTitle) {
        let queryResults = movies.filter(movie => movie.title.toLowerCase().includes(queryTitle))
        if (queryResults) {
            res.send(queryResults)
        } else {
            res.status(404).send('No matching movies')
        }
    } else {
        res.send(movies)
    }
}) //working

router.get('/:id', (req, res, next) => {
    let id = req.params.id
    let filteredMovies = movies.filter(movie => movie.id == id)
    res.send(filteredMovies)
}) //working

router.post('/', (req, res, next) => {
    let newMovie = { 'id': movies.length + 1, ...req.body }
    movies.push(newMovie)
    fs.writeFile('movies.json', JSON.stringify(movies), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})

router.delete('/:id', (req, res) => {
    let movieID = Number(req.params.id)
    let moviesArray = movies.filter(movie => movie.id !== movieID) //i think thats what we need
    if (moviesArray) {
        fs.writeFile('movies.json', JSON.stringify(moviesArray), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
        res.status(200).send(`Deleting movie with ID ${movieID}`)
    } else {
        res.status(404).send('No movies found')
    }
})//working

module.exports = router;