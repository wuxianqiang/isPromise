ispromise
======
判断传入的参数是promise函数


## 安装
```bash
npm i is-promise-function -S
```

## 用法
```javascript
var isPromiseFunction = require('is-promise-function');

isPromiseFunction(Promise) // false
isPromiseFunction(Promise.resolve()) // true
```

## 开源许可
MIT@wuxianqiang
