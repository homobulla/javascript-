var count = 20
function addTen(num) {
    return (num += 10)
}
var ret = addTen(count)
console.log(count, ret)

function setName(obj) {
    obj.homo = 'bulla'
    obj = {}
    obj.name = 'ddd'
}
var obj = {}
setName(obj)
console.log(obj)
