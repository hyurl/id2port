# id2port

**Generates a port for usage according to the given string id.**

## Example

```javascript
const id2port = require("id2port").default;

var ports = id2port("abc");

console.log(ports.next().value); // 22156
console.log(ports.next().value); // 22157
```

## Details

This function will travel the ports from `1 - 65535` according to the given id 
as long as you continue calling `next()` until all ports are viewed, but it will
skip some well-known ports as module 
[well-known-ports](https://github.com/bengreenier/well-known-ports) suggests.