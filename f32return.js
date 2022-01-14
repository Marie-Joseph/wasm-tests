import { instantiate } from "/home/xan/js/wasm/wabt-wrapper.js";

let instance = instantiate(`
(module
 (func $ret (result f32)
       f32.const 0.5)
 (export "watret" (func $ret)))
`);

for (let i = 0; i < 10; i++) {
let result = instance.exports.watret();
if (!(result == 0.5)) {
    throw new Error("Result should be 0.5, instead was: " + result);
} else {
    print("Expected: 0.5, result: " + result);
}}
print("Success!");
