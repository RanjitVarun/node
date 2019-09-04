var logger=require("./logger.js");
logger.info('node has started');
logger.error('error at line 2');
var add=require('./exports');
add.add(5,6);
add.sub(6,5);