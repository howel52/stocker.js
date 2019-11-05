# Stocker.js
> node / terminal 下的股票基金价格查询工具

## Env
- 支持在 terminal 环境下的命令式调用
- 支持 CJS

## Features
- [x] 通过编号获取某个股票、大盘、基金、指数的最新信息
- [ ] 可切换多个数据源

## Examples
### Terminal
> npm install -g stocker.js
> stocker -s SH000001,SZ399006

![demo](https://i.loli.net/2019/08/01/5d42e4a19304e57323.gif)


### CJS
> npm install -S stocker.js

```
const Stocker = require('stocker.js')
const stocker = new Stocker()

stocker.getPrice('SZ399006')
```

## API
### Instance Method
| name | params | return | remark |
| -- | -- | -- | -- |
| getPrice | (string) | Promise { name: string, value: number } | 指数、基金、股票的编号 |

