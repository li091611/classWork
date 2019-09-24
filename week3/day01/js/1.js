var reg = /d/;
var reg = new RegExp('\d')
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abcddd123456')) // true
var reg = /\d/;
var reg = new RegExp('\\d')
console.log(reg.test('qwert123456')) //true
console.log(reg.test('abcddd123456')) // true

var reg = /\\d/;
console.log(reg)
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abc\\ddd123456')) // true

var reg = /\W/
console.log(reg.test('wreqwerafad1231___'))

var reg = /\d+/
console.log(reg.test('qerq523452fadfwrew234342345'))

var reg = /\d?/
console.log(reg.test('dasdasdasdsadaas111'));

var reg = /\d{5}/
console.log(reg.test('dasdasdasds2343'));

var reg = /^a/
console.log(reg.test('dasdasdasds2343'));

var reg = /^\w/
console.log(reg.test('dasdasdasds2343'));