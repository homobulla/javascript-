Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func
        return this
    }
}
Number.method('squ', function() {
    return this * this
})

console.log((4).squ())

const hanoi = function(圆盘数量, 初始柱, 辅助柱, 目标柱) {
    if (圆盘数量 > 0) {
        hanoi(圆盘数量 - 1, 初始柱, 目标柱, 辅助柱)
        console.log(`Move 第 ${圆盘数量} 个圆盘 from ${初始柱} to ${目标柱}`)
        hanoi(圆盘数量 - 1, 辅助柱, 初始柱, 目标柱)
    }
}

hanoi(4, '初始柱', '辅助柱', '目标柱')
