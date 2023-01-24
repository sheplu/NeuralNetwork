"use strict";
exports.__esModule = true;
var NeuralNetwork = /** @class */ (function () {
    function NeuralNetwork(config) {
        this.config = config || {
            'learning': 0.5,
            'epochs': 10000,
            'batch': 1
        };
        this.layer = [];
        this.learning = this.config.learning;
        this.epochs = this.config.epochs;
        this.batch = this.config.batch;
    }
    ;
    NeuralNetwork.prototype.initialise = function () {
        console.log('initialise');
        console.log(this.config);
    };
    ;
    NeuralNetwork.prototype.loadJSON = function () {
        console.log('loadJSON');
    };
    ;
    NeuralNetwork.prototype.loadCSV = function () {
        console.log('loadCSV');
    };
    ;
    NeuralNetwork.prototype.updateCfg = function () {
        console.log('updateCfg');
    };
    ;
    NeuralNetwork.prototype.train = function () {
        console.log('train');
    };
    ;
    NeuralNetwork.prototype.predict = function () {
        console.log('predict');
    };
    ;
    NeuralNetwork.prototype.snapshot = function () {
        console.log('snapshot');
    };
    ;
    NeuralNetwork.prototype.showCfg = function () {
        console.log('showCfg');
        console.log(this.config);
        console.log(this.layer);
    };
    return NeuralNetwork;
}());

exports.NeuralNetwork = NeuralNetwork;
