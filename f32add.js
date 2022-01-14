import { instantiate } from "/home/xan/js/wasm/wabt-wrapper.js";

let instance = instantiate(`
(module
 (func $add (result f32)
       f32.const 0.5
       f32.const 1.0
       f32.add)
 (export "watadd" (func $add)))
`);

for (let i = 0; i < 10; i++) {
let result = instance.exports.watadd();
if (!(result == 1.5)) {
    throw new Error("Result should be 1.5, instead was: " + result);
} else {
    print("Expected: 1.5, result: " + result);
}}
print("Success!");
