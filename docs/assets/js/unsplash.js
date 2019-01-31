import Unsplash from 'unsplash-js';

const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    applicationId: "ce03c9075f8dcecaa332f82f9945862b386293a03293c5583cc8245df3baeceb",
    secret: "8212c80f55efb783077fb5378bf58bc034585a5840f1e84317b5ad969878add2",
    callbackUrl: "https://api.unsplash.com/"
});

unsplash.
    .then(Unsplash.toJson)
    .then(function (json) {
        console.log(json);
    });
