
const config = require('./config');

module.exports = () => ({
  config: {
    default: ({ env }) => ({ optionA: true }),
    validator: (config) => { 
      if (typeof config.optionA !== 'boolean') {
        throw new Error('optionA has to be a boolean');
      }
    },
  },
});
