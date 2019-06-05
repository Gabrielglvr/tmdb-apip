const axios = require('axios')
const key = '1f54bd990f1cdfb230adb312546d765d'
const uri = 'https://api.themoviedb.org/3/movie/{0}?api_key={1}&language={2}'

function getMovieById(req, res) {
    try {
        if (!req.params.id) {
            return res.status(401).json('Id param is required')
        }
        
        let id = req.params.id
        let language = req.query.language ?  req.query.language : 'en-US'
        let url = uri.format(id, key, language)

        axios.get(url).then(result => {
           
            if(result.errors) {
                return res.status(400).send('Cannot get data')
            }

            return res.json(result.data)

        }).catch(err => {
            console.log(err)
            return res.status(500).send('Error when processing request')
        })
    }
    catch (error) {
        return res.status(500).send('Error when processing request')
    }
}


module.exports = getMovieById