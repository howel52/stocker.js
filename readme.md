# Stocker.js
> node / terminal 下的股票基金价格查询工具

## Feature
- [x] 通过编号获取某个股票、大盘、基金、指数的最新信息
- [x] 支持 terminal 命令查询, 支持 CJS
- [x] 可切换多个数据源

## Usage
### Terminal
> npm install -g stocker.js
> stocker -s SH000001,SZ399006

![demo](https://i.loli.net/2019/08/01/5d42e4a19304e57323.gif)


### CJS
> npm install -S stocker.js

```javascript
const Stocker = require('stocker.js')
const stocker = new Stocker()

// get promise
stocker.getPrice('SZ399006')
```

