---
tags: 
- General
Aliases: []
title: Asynchronous JavaScript
reviewed: 
next review date: 03-12-23
date created: Thursday, August 3rd 2023, 11:03:47 am
date modified: Thursday, August 24th 2023, 5:27:28 pm
---
- [ ] Asynchronous JavaScript #Complete
---
## Overview

JavaScript is synchronous by nature meaning that before Task B can be carried out, Task A must be complete. Whilst JavaScript runs on a single thread it overall means that running strenuous tasks can become an issue and long wait times can occur.

To get around this there are two ways:

1. Making a worker
2. Including promises
	1. Promises are the more modern version of how to carry out async code within JavaScript.
4. Setting general timeout events etc
5. Async and await (introduced in ES8 and is ‘syntactical sugar’ for the usage of async promises and code”)

Typically, you will see async and await functions rather than older promise syntax. Therefore, I have included a more in-depth overview of async in the async await section. Async await is generally better syntax for promises – keep that in mind.

## NEWER

They just don't block the whole thread until their response arrives. You can think of them as being registered as _waiting_ for a result, let other code execute and when their response comes through they get executed; hence the name _asynchronous_ programming.

This is achieved through a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message.

Doing this:

```javascript
setTimeout(() => {
  console.log('foo')
}, 1000)
```

will simply add the callback function (that logs to the console) to the message queue. When it's 1000ms timer elapses, the message is popped from the message queue and executed.

So think of it like this:

```JavaScript
// run code
// run code
// run code
setTimeout(() => {
  console.log('foo') // <-- This callback is put into the 'event loop as a reference to the callback'
}, 1000)
// run code / In the event loop, we have the code
// run code / In the event loop, we have the code
// run code / In the event loop, we have the code

// After one second the callback is placed back into the main bit of execution

// run code (code from the setTimeout)
// run code
// run code
```

So thinking about it, the term 'asynchronous' means not occuring at the same time. However, as the code just runs after a period and gets executed on the main thread, you can consider it synchronous. 

While the timer is ticking, other code is free to execute. This is what gives the _illusion_ of multithreading.

The `setTimeout` example above uses callbacks. `Promises` and `async` work the same way at a lower level — they piggyback on that message-queue concept, but are just syntactically different.

## Callbacks

`async` functions are just syntactic sugar around Promises and they are wrappers for callbacks.

```javascript
// v await is just syntactic sugar
//                 v Promises are just wrappers
//                                         v functions taking callbacks are actually the source for the asynchronous behavior
   await new Promise(resolve => setTimeout(resolve));
 
```

A callback could be called back immediately by the code, e.g. if you `.filter` an array, or the engine could store the callback internally somewhere. Then, when a specific _event_ (click, setTimeout, hover, etc.) occurs, it executes the callback. 

To make sure that two callbacks do not run at the same time (which would make concurrent modifications possible, which causes a lot of trouble) whenever an event occurs the event does not get processed immediately, instead a [_Job_](https://262.ecma-international.org/11.0/#sec-jobs) (callback with arguments) gets placed into a _Job Queue_. **Think of this as the event loop.**

Whenever the JavaScript [_Agent_](https://262.ecma-international.org/11.0/#sec-agents) (= thread) finishes execution of the current job, it looks into that queue for the next job to process.

You could therefore say that an `async function` is just a way to express a _continuous series of jobs_.

```javascript
 async function getPage() {
   // the first job starts fetching the webpage
   const response = await fetch("https://stackoverflow.com"); // callback gets registered under the hood somewhere, somewhen an event gets triggered
   // the second job starts parsing the content
   const result = await response.json(); // again, callback and event under the hood
   // the third job logs the result
   console.log(result);
}

// the same series of jobs can also be found here:
fetch("https://stackoverflow.com") // first job
   .then(response => response.json()) // second job / callback
   .then(result => console.log(result)); // third job / callback
```

- [ ] In asynchronous functions, do all code within it get executed continously without something else coming in the middle? #Question 

Although two jobs cannot run in parallel on one agent (a [[Threads|thread]]), the job of one async function might run between the jobs of another. Therefore, two async functions can run [_concurrently_](https://en.wikipedia.org/wiki/Concurrent_computing).

- [ ] How? #Question

If the event is a timer (`setTimeout`) an internal timer is set and the JS-thread continues with other jobs until the timer is done, and then it executes the callback passed. Some of them, especially in the Node.js environment (`fetch`, `fs.readFile`) will start another thread *internally*.

- [ ] how does JavaScript start a new thread internally? #Question 
- [ ] When does asynchronous javascript start its own thread vs staying on its own thread? #Question 
- [ ] If the code is run on another thread, would it still use the same event loop? #Question 

To get real parallelism, that is running two jobs at the same time, multiple agents are needed. [[Web Workers]] are exactly that - agents (threads). The code in the Web Worker, therefore, runs independently and has its own job queues and executor.

---

> Path: /Users/beam/Documents/Obsidian Vault/Coding/JavaScript/Asynchronous JavaScript.md