//Node finds this index.js file and runs it. It loads jquery so mathquill doesn't freak out. Then it loads mathquill
//and its style. 
window.jQuery = require('jquery');
require('./mathquill.js');
require('./mathquill.css');

module.exports = window.MathQuill;
