'use strict';

class ConfigCommand extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48, config) {
    super(AKP48);
    this._data = require('./plugin.json');
    this._config = config;
  }

  handleCommand(message, context, resolve) {
    // TODO: Something here.
  }
}

module.exports = ConfigCommand;
module.exports.type = 'MessageHandler';
module.exports.pluginName = 'config-command';
