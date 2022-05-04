const register = require("@babel/register");

register({
    presets:['stage-3']
});
const index =require('./index');

console.log(index);