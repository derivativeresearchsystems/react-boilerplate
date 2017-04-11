'use strict';

const createConfig = require('./createConfig');

module.exports = [
    createConfig({
        name: 'client',
        // optimize: true,
        revision: true,
        extractCss: true,
        stats: true,
        vendorChunk: true
    }),
    createConfig({
        name: 'server',
        node: true,
        // optimize: true,
        codeSplitting: false,
        stats: true
    })
];
