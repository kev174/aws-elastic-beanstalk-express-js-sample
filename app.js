const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Kevin AWS Code-Build Pipeline: Re-Deployed Hahaha'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
