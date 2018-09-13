"use strict";

const id2port = require(".").default;
const assert = require("assert");
const usedPorts = require("well-known-ports");

var ports = id2port("abc");
assert.strictEqual(ports.next().value, 22156);
assert.strictEqual(ports.next().value, 22157);

for (let i = 22158; i <= 65535; i++) {
    if (!usedPorts[i])
        assert.strictEqual(ports.next().value, i);
}

for (let i = 22155; i > 0; i--) {
    if (!usedPorts[i])
        assert.strictEqual(ports.next().value, i);
}

assert.strictEqual(ports.next().done, true);

console.log("#### OK ####");