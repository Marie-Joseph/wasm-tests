import { instantiate } from "/home/xan/js/wasm/wabt-wrapper.js";

let instance = instantiate(`
(module
 (func $eq (result i32)
       i32.const 0
       i32.const 1
       i32.eq)
 (export "wateq" (func $eq)))
`);

for (let i = 0; i < 1000; i++) {
if (!Object.is(instance.exports.wateq(), 0))
    throw new Error();
}
