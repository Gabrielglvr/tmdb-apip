const axios = require('axios')
const key = '1f54bd990f1cdfb230adb312546d765d'
const uri = 'https://api.themoviedb.org/3/search/movie?api_key={0}&language={1}&query={2}&page={3}'

function movie(req, res) {
    try {
        let title = req.query.title ? req.query.title : '';
        let page = req.query.page ? parseInt(req.query.page) : 1
        let language = req.query.language ?  req.query.language : 'en-US'

        let url = uri.format(key, language, title, page)
        console.log(url)

        axios.get(url).then(result => {

            if(result.errors) {
                return res.status(400).send('Cannot get data')
            }

            return res.json(result.data)

        }).catch(err => {
            console.log(err)
            return res.status(500).send('Error when processing request')
        })
        
    } catch (error) {
        return res.status(500).send('Error when processing request')
    }
}

module.exports = movie