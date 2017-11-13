import { Config } from './model/config';

export class NeuralNetwork{
  config: Config;
  layer: any;
  learning: number;
  epochs: number;
  batch: number;

  constructor(config: Config) {
    this.config = config || {
      'learning': 0.5,
      'epochs': 10000,
      'batch': 1,
    };
    this.layer = [];
    this.learning = this.config.learning;
    this.epochs = this.config.epochs;
    this.batch = this.config.batch
  };

  initialise() {
    console.log('initialise');
    console.log(this.config);
  };

  loadJSON() {
    console.log('loadJSON');
  };

  loadCSV() {
    console.log('loadCSV');
  };

  updateCfg() {
    console.log('updateCfg');
  };

  train() {
    console.log('train');
  };

  predict() {
    console.log('predict');
  };

  snapshot() {
    console.log('snapchsot');
  };

  showCfg() {
    console.log('showCfg');
    console.log(this.config);
    console.log(this.layer);
  }

};
