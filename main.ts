import { NeuralNetwork } from './lib/neuralNetwork';
import * as repl from 'repl';


const server = repl.start({
  prompt: 'NN > '
});

server.context.neuralNetwork = NeuralNetwork;
