"use strict";
exports.__esModule = true;
var neuralNetwork_1 = require("./lib/neuralNetwork");
var repl = require('repl');
var server = repl.start({
    prompt: 'NN > '
});
server.context.neuralNetwork = neuralNetwork_1.NeuralNetwork;
