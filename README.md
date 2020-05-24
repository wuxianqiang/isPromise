ispromise
======
判断传入的参数是promise函数


## 安装
```bash
npm i is-promise-function -S
```

## 用法
```javascript
var isPromise = require('is-promise-function');

isPromise(Promise) // false
isPromise(Promise.resolve()) // true
isPromise.isConstructor(Promise) // true
```

## 开源许可
MIT@wuxianqiang
