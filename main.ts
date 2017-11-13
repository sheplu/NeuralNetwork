
import { NeuralNetwork } from './lib/neuralNetwork';
const repl: any = require('repl');

const server = repl.start({
  prompt: 'NN > '
});

server.context.neuralNetwork = NeuralNetwork;
