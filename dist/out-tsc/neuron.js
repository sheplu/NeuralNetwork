"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Neuron = /** @class */ (function () {
    function Neuron() {
        this.weight = null;
        this.bias = null;
        this.output = null;
    }
    ;
    Neuron.prototype.setBias = function (arg) {
        this.bias = arg || Math.random();
    };
    ;
    return Neuron;
}());
exports.Neuron = Neuron;
//# sourceMappingURL=neuron.js.map