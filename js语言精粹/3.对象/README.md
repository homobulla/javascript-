### Object 对象

`javascript`的对象是无类型的(class-free).对象适用于汇集和管理数据，可以很容易的表现成树状和图形结构。

#### 对象字面量

对象属性名可以是包括**空字符串在内**的任意字符串。

对象通过引用来传递

##### 原型

每个对象都连接到一个原型对象，通过字面量创建的对象都连接到`Object.prototype`上。

`Object.creat`是最简单的基于某个原型创建对象的方法：

```js
Object.creat = function(o) {
    let F = function() {}
    F.prototype = o
    return new F()
}
```

#### 枚举

`for in`可以用来遍历一个对象，会枚举出所有的属性(包括函数类型以及继承自原型上的属性)，同时其输出的顺序也是不固定的。
使用`hasOwnProperty`解决前者，不使用`for in`解决后者。

#### 减少全局变量的污染

1. 只定义一个全局变量，在其上添加属性值
2. 闭包
