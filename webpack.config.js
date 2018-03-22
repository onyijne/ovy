const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'web')
};

module.exports = {
    output: {
        path: PATHS.build,
        filename: 'app.js'
    }
};
