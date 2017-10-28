var LCS = require('./LCS');
var fs = require('fs');

LCS = new LCS();
let X = "GTTCCTAATA";
let X = "CAGTAATTGAGA";
let Result = LCS.findLCS(X,Y);
console.log(Result);