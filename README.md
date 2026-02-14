# summer-chores

This repo explores control-flow modeling


callbackVersion.js -- A Callback Hell learning experience, inverted control

promiseVersion.js -- Learning how to use Promises, explicit sequencing

asyncAwaitVersion.js -- Learning to use async/await, imperative narrative flow

Callbacks, Promises, and async/await all solve the same core problem: "This thing finishes later, meanwhile, what should happen next?"

They are ways to handle asynchronous code.

Callbacks nest the control flow...the execution order can be hard to see and error handling is fragmented. 

Promises improve overall structure and error handling. Using .then() we can chain the execution order clearly. Meanwhile, .catch() centralizes error handling.

Async/await makes async code read like sync code. Super handy. Elevated readability. Also, that helps reduct the likelihood of logical errors. 