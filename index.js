"use strict";

const hash = require("string-hash");
const usedPorts = require("well-known-ports");

function* id2port(id) {
    id = hash(id);
    var init = 0;

    while (true) {
        if (!init) {
            if (id <= 65535) {
                init = id;
                if (!usedPorts[id]) yield id;
                continue;
            }
            id -= 65535;
        } else if (id < 65535) {
            id++;
            if (!usedPorts[id]) yield id;
        } else if (init > 1) {
            init--;
            if (!usedPorts[init]) yield init;
        } else {
            break;
        }
    }
}

exports.default = exports.id2port = id2port;