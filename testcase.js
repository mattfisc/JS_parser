var api = require('./api');
// load a plugin
api.use('pluginName');
// create an item in the container
api.$di.set('someItem', 'value of the item');
// ...