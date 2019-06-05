const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');
const cors = require('cors');
require('./util');

app.options('*', cors())
app.use(cors())
app.use(morgan('dev'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', routes.movie)

app.listen(port, () => console.log(`App listening on port ${port}!`))