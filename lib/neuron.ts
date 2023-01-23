export class Neuron {
  weight = null;
  bias = null;
  output = null;

  constructor() {

  };

  setBias(arg) {
    this.bias = arg || Math.random();
  };
};
