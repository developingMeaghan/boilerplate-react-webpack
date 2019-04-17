import request from 'superagent'

const animeUrl = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'

export function getAnime(callback) {
  request
    .get(animeUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}