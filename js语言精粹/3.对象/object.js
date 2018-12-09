let emptyKeyBoj = { '': '1223' }
console.log(emptyKeyBoj[''])

var nullObj = Object.create(Object.prototype)
// 上面的创建方式就等于
var nullObj = {}

// 如何创建一个不继承任何原型的对象
let noExtendProto = Object.create(null)
