# Async是如何被 JavaScript 实现的

Async/Await 语法我们提到本质上它是基于**Promise 和 Generator 生成器函数的语法糖**。



Generator 函数它是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即拥有暂停函数执行的效果），**不调用next方法时函数内部不执行，仅返回生成器对象。**

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g = gen();

g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.next(); // { value: undefined, done: true }
```



**当我们为 next 传递值进行调用时，传入的值会被当作上一次生成器函数暂停时 yield 关键字的返回值处理。**

```js
function* gen() {
  const a = yield 1;
  console.log(a, 'this is a');
  const b = yield 2;
  console.log(b, 'this is b');
  const c = yield 3;
  console.log(c, 'this is c');
  return 'resultValue'
}

let g = gen();

g.next(); // { value: 1, done: false }
g.next('param-a'); // { value: 2, done: false }
g.next('param-b') // { value: 3, done: false }
g.next() // { value: 'resultValue', done: true }
g.next() // { value: undefined, done: true }
```

