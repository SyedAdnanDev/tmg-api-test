const express = require('express');
const stackRoutes = require('./routes/stackRoutes');
const keyValueStoreRoutes = require('./routes/keyValueStoreRoutes');const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/stack', stackRoutes);
app.use('/kvs',keyValueStoreRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
