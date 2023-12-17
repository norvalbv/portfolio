**Asynchronous**  
_/eɪˈsɪŋkrənəs/_  
_adjective_

In the context of software engineering, asynchronous programming/code happens when multiple related things happen without any being dependent on the completion of previous happenings. As JavaScript is a single-threaded language, when an asynchronous task is performed it can run concurrently to other code without being immediately blocking (unless being currently invoked on the [[Call Stack|call stack]]). Essentially, asynchronicity allows the developer to control the timing of execution of code and allows objects/events to be utilised independently.

## Prerequisites

This blog covers a fairly detailed overview of asynchronous JavaScript and how the code runs. It is worth having at least a basic understanding of:

- Asynchronous JavaScript including promises and async/await
- A basic understanding of threads

## Overview

If you are like me and have been developing for a while, there is a lot of jargon thrown around that you may believe you know. However, the question is, do you actually? Whilst this blog does indeed cover the basics of asynchronous programming, it delves more deeply on what it actually is, why we need it, how it executes, and more.

JavaScript is a synchronous language, meaning that before Task B can be carried out, Task A must be complete. Whilst JavaScript runs on a single thread, it overall means that running strenuous and long-running tasks can become an issue and blocking can occur, you may be familiar with the typical loading cursor or your page not updating. To get around this issue, there are various ways that are :

1. Using web workers
2. Using promises
    1. Promises are the more modern version of how to carry out async code within JavaScript.
3. Setting general timeout events etc
4. Async and await (introduced in ES8 and is ‘syntactical sugar’ for the usage of async promises and code”)

Typically, you will see async and await functions rather than older promise syntax. Therefore, I have included a more in-depth overview of async in the async await section. Async await is generally better syntax for promises – keep that in mind.

Questions to answer:

- [ ] What are the containers that make up the execution environment. I.e., microtask queue, callback queue, render queue, etc. (if that's the names anyway!) #Question

## Why is JavaScript blocking?

It is common knowledge that JavaScript is blocking by nature. However, it begs the question as to why. JavaScript is single threaded by design and if you know anything about threads, it means that only one action can be performed at a given time, nothing can run in parallel. [[Threads]] are the smallest possible execution that exist within a [[Process|process]] that the CPU can execute with a reliable stream of information. Whilst JavaScript can indeed be run concurrently, true parallelism can only occur with more than one thread (existing in languages such as C++, Java, and Rust). This means if a single execution instance is blocking the thread, the overall program will be blocked: not something the developer would want.

The language was designed to be single threaded due to the environment it was intended to run in and its original purpose: a lightweight scripting language. The single-threaded model is simpler, avoids complexity to developers, and prevents excessive overheads, whereas introducing more threads introduces various complexities such as race conditions, deadlocks, etc. As JavaScript is single threaded and synchronous, how does asynchronous JavaScript actually work? That is where various web APIs such as `setTimeout` or `useInterval`, web workers, promises and async/await come into play. These various features provided by the [[JavaScript Runtimes|JavaScript runtime]] (not to be confused with the [[JavaScript Engines|JavaScript engine]]) allows for the synchronicity to somewhat unblocking.

> It's important to note, that JavaScript is _always_ blocking, even in an asynchronous environment - unless using Web Workers. This will be explained in the event loop below.

## Callbacks, Promises, and async/await

### Callbacks

Before ES6 (JavaScript 2015) asynchronicity was performed mainly using callbacks. As the name implies, callbacks or callback functions allow a function to _call back_ on another function; it is a function that is passed as a parameter to another function. As mentioned previously, asynchronicity allows potentially long-running tasks to be executed whilst still allowing other events to run, ensuring a responsive environment. You may have familiarity with event handlers, as such you click on this button and that event will occur. Event handlers are indeed a type of asynchronous callback function that allows the developer to halt certain execution of code until the user is ready and whenever that event happens, the resolved event will occur. In other words, when a user clicks a button that has an event handler on it, it will call the `onclick()` event handler that is asynchronous and if it registers, it will call your callback function.

When you have the need to perform numerous callback operations with one root function, this can become a problem. Coined 'callback hell' or the 'pyramid of doom' is an event where the code becomes illegible, making the developer experience mundane. Whilst the example below is indeed synchronous and not asynchronous, it gives a quick and clear overview of how numerous callbacks can be a problem.

```JavaScript
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

In the nature of examples, the following example would indeed back asynchronous based on the initial method being called, `fs.readFile`. The returned values would get handled in anonymous callback functions to validate the data.

```JavaScript
fs.readFile(source, (err, files) => {
	if(err) {
		// do something
	} else {
		files.forEach((fileName, index) => {
			const isValid = fileName !== 'Incorrect file'
			if (isValid) {
				// do something
			} else {
				// do something else
			}
		})
	}
})
```

### Promises

Whilst this section is not an in-depth analysis of how promises work behind the scenes and how to implement your own promise, it does cover how and why they are considered asynchronous. The [PromiseA+](https://promisesaplus.com/#notes) specification on promises is a great guideline of how a promise should operate. [This](https://stackoverflow.com/a/42057900/17442963) Stack Overflow answer and [this](https://www.youtube.com/watch?v=4GpwM8FmVgQ) YouTube video on promises from scratch are also great tutorials on how to generate promises from the ground up, if you are interested.

Promises, introduced in ES6 is an abstraction that allows for a simpler, cleaner, and more legible way to handling asynchronous JavaScript; it represents the eventual result of an asynchronous operation. The main way we interact with a promise is by calling the `.then()` or the `.catch()` methods, which are indeed promises of their own. Each `.then()` or `.catch()` will register their own callback function to receive either a promise's eventual value or the reason why it cannot be fulfilled. To clarify, promises themselves are indeed _not_ asynchronous, they represent the eventual return of an asynchronous operation. You may have seen this example before:

```JavaScript
console.log('a');

new Promise(() => {
    console.log('b');
    setTimeout(() => {
        console.log('d');
    }, 0);
} );

// Other synchronous stuff.
console.log('c');

// logs a, b, c, d
```

Under point [2.3.4 (64) in PromiseA+](https://promisesaplus.com/#point-64) the resolution criteria states that, "if `x` is not an object or function, fulfill `promise` with `x`." As nothing is resolved or rejected within the above promise, it is essentially just used as a wrapper, it can be seen as an immediately invoked function expression (IIFE). To ensure asynchronicity of the promise, you must ensure you pass a value to either the rejected or resolved parameters. That brings us to the next point, what should the example below return, `a, b, c, d` or `a, b, d, c`?

```JavaScript
console.log('a');

new Promise((resolved) => {
    console.log('b');
    resolved(console.log('d'));
});

// Other synchronous stuff.
console.log('c');

// logs a, b, d, c
```

As you can see, the above code returns `a, b, d, c` - sequential order. You may ask yourself then, if the first example returns a - d in the correct order due to the `setTimeout` callback, what is the actual part of the promise that makes it asynchronous? Internally, the asynchronicity is handled by various callback functions such as `_onFulfilled()`, `_onRejected()`, etc.

Under point [34 of PromiseA+](https://promisesaplus.com/#point-34) it is stated that, "2.2.4 `onFulfilled` or `onRejected` must not be called until the [execution context](https://es5.github.io/#x10.3) stack contains only platform code." Where, '“platform code” means engine, environment, and promise implementation code. In practice, this requirement ensures that `onFulfilled` and `onRejected` execute asynchronously, after the event loop turn in which `then` is called, and with a fresh stack. This can be implemented with either a “macro-task” mechanism such as [`setTimeout`](https://html.spec.whatwg.org/multipage/webappapis.html#timers) or [`setImmediate`](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html#processingmodel), or with a “micro-task” mechanism such as [`MutationObserver`](https://dom.spec.whatwg.org/#interface-mutationobserver) or [`process.nextTick`](http://nodejs.org/api/process.html#process_process_nexttick_callback). Since the promise implementation is considered platform code, it may itself contain a task-scheduling queue or “trampoline” in which the handlers are called.'

**Point to add somewhere: 1. In the second example, `console.log('d')` is executed synchronously within the promise executor. The `resolve` function, when called, schedules the fulfillment handlers (`.then()` callbacks) as micro-tasks, which are executed after the current script but before any macro-tasks like those scheduled with `setTimeout`.**

So in essence, once the execution stack ([[Call Stack|call stack]]) is empty and only contains platform code, `onFulfilled` and `onRejected` are allowed to be called, ensuring they are handled asynchronously. That said, if the `resolved()` or `rejected()` functions within the `new Promise` function, do _not_ return a value (in our case, it returned undefined as we did a `console.log()`) the code would just be handled synchronously. Whereas, if returning a value, `'d'` in the `resolve()` callback would be accessible in the `.then()` (or `.catch()` if it fails) and it this chained operator that gets executed when the 'execution context stack contains only platform code', in other words, the call stack is empty. As implied in the PromiseA+ summary, one way of ensuring this is by wrapping the `onFulfilled` or `onRejected` methods in a `setTimeout` function, which would add the callback to the macro task queue, executing it later - asynchronously. The various task queues are discussed later on.

So to clarify, the below would indeed return the letters in the order we are wanting as `resolve('d')` is handled asynchronously.

```JavaScript
console.log('a');

new Promise((resolved) => {
    console.log('b');
    resolved('d');
})
.then((value) => console.log(value));

// Other synchronous stuff.
console.log('c');

// logs a, b, c, d
```

When a promise is resolved or rejected, any associated `.then()` or `.catch()` handlers are placed in the micro-task queue. Micro-tasks are processed at the end of the current run of the JavaScript event loop, after the currently executing script has finished and before any new event (like a mouse click or a timer) is processed.

Certain web-based APIs return promises. As we've outlined previously, a promise's initial state will be in pending as the the asynchronous operation has yet to conclude. By logging out the value of the promise we would get something like `Promise { <state>: "pending" }`. Remember that when using the given `.then()`, `.catch()`, and `.finally()` methods, we give them a callback function that is invoked once the asynchronous operation has concluded. Check this other example out:

```JavaScript
const fetchPromise = fetch("https://google.com");

console.log(fetchPromise); // Promise { <state>: "pending" }

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

As the fetch won't happen instantly, the log of "Started request..." will happen before the log of the response status.

A quick diagram can help the explanation of promises.

![[Pasted image 20231206161945.png]]
### Async/await

One key point to remember in life is that abstractions exist. Their job is to make the users' life easier by removing some complexity, making it easier to portray what you mean, and moving at a quicker pace; with the negative of less free range on how to handle the abstracted at a lower level. Previously in this article, we have seen how JavaScript abstracts functionality to make the developers' experience more manageable by abstracting callbacks by introducing asynchronicity with promises. Introduced in the JavaScript ecosystem in 2017 as part of the standardisation by the latest ECMAScript edition, the paradigm of `async/await` is another abstraction (or 'syntactical sugar') on top of promises; an abstraction pyramid *per se*.

Defining an asynchronous function with the `async` keywords gives the function a simpler, cleaner and more developer friendly way of building promises. Let's take the code below and outline how each section works:

```JavaScript
const fetcher = async () => {
  try {
    const response = await fetch(
      "https://google.com",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
};
```


By adding `async` at the start of a function, it ensures that it *always* returns a promise. If the function returns a promise it will return that promise, otherwise it will simply wrap the returned value. This ensures that you can always chain your typical promise-based syntax such as `.then()` and `.catch()`. Prefixing `async` also enables you to `await` within the function, although you can now use top-level `await` in most modern runtimes (see proposal [here](https://github.com/tc39/proposal-top-level-await)).

As `async/await` functions can handle asynchronus operations themselves, you may question why there is a need for them to return promises, this is for numerous reasons:

1. **Consistency with Existing Promise-based Code**: Before `async/await` was introduced, promises were already established as the standard for handling asynchronous operations in JavaScript. Making`async` functions return promises ensures compatibility and interoperability with existing promise-based code.
    
2. **Flexibility and Composability**: By returning promises, `async` functions can be easily composed with other asynchronous operations. You can use them in combination with other promise-returning functions, chain them using `.then()` and `.catch()`, and handle their results or errors in a consistent way with other asynchronous code.
    
3. **Simplified Error Handling**: The integration with promises allows for a unified approach to error handling. Errors in `async` functions can be propagated and caught using `.catch()` or in `try`/`catch` blocks, just like with regular promises. This makes it easier to write robust error-handling code that works seamlessly across different asynchronous operations.
    
4. **Control Over Asynchronous Execution**: By returning a promise, `async` functions give the caller control over when to handle the results or errors of the asynchronous operation. The caller can choose to `await` the promise immediately, chain additional operations with `.then()` and `.catch()`, or even pass the promise around to be handled elsewhere.
    
5. **Parallelism and Await**: Returning a promise allows for more control over concurrency. For instance, you can initiate multiple asynchronous operations (by calling multiple `async` functions without immediately `await`ing them), and then use `Promise.all` to wait for all of them to complete. This allows for parallel execution of asynchronous tasks, which wouldn't be as straightforward if `async` functions didn't return promises.


Another key point to the `async/await` operation is the *await* keyword. The purpose of this keyword is to pause the execution of the code until the awaited promise settles and returns a rejected or resolved value. In the above example, we are calling `await fetch()`, and instead of getting a `Promise`, our caller gets back a fully complete `Response` object, just as if `fetch()` were a synchronous function. Previously, we've established that the asynchronicity within a promise happens when calling a chaining method on it, for example `.then()`. As awaiting a promise-based API returns the settled value of that promise that can be used straight away within the same function this brings up a few different questions:

1) At what point does an `async/await` function actually become asynchronous?
2) As we have to await a promise-based API, what happens if we chain a function on that function? For example:
   
```JavaScript 
   const response = await fetch('https://google.com').then(() => { // do something here });
```

3) If you are allowed to wrap your awaited code with in a `try/catch` block and the values of the result is returned to the respective functions ??? #Question 

To answer these questions, let us build our own hyper-abstracted fetch API. As the fetch function returns a promise let's start by implementing a basic promised, wrapped in a function that if the response of the fetch is okay, it resolves the data else returns a string saying an error occured.

```JavaScript
const fetch = (url) => {
	return new Promise((resolve, reject) => {
		const response = fetcherFunction(url); // Let's pretend there's a function that actually does a HTTP request on the given URL.
		if (response.ok) {
			resolve(response.data);
		} else {
			reject('An error occured');
		}
	});
};

newFetch('https://google.com')
	.then((data) => console.log(data))
	.catch((error) => console.error(error));
```

With the pause of execution as such:


If the executor function throws an error, `reject` is called automatically.

Note though that async functions always return a promise, so you can't do something like:

JSCopy to Clipboard

```
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" is a Promise object, so this will not work
```

Instead, you'd need to do something like:

JSCopy to Clipboard

```
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
```


Although two jobs cannot run in parallel on one agent (a [[Threads|thread]]), the job of one async function might run between the jobs of another. Therefore, two async functions can run [_concurrently_](https://en.wikipedia.org/wiki/Concurrent_computing).

- [ ] How? #Question

If the event is a timer (`setTimeout`) an internal timer is set and the JS-thread continues with other jobs until the timer is done, and then it executes the callback passed. Some of them, especially in the Node.js environment (`fetch`, `fs.readFile`) will start another thread *internally*.

- [ ] how does JavaScript start a new thread internally? #Question
- [ ] When does asynchronous javascript start its own thread vs staying on its own thread? #Question
- [ ] If the code is run on another thread, would it still use the same event loop? #Question

To get real parallelism, that is running two jobs at the same time, multiple agents are needed. [[Web Workers]] are exactly that - agents (threads). The code in the Web Worker, therefore, runs independently and has its own job queues and executor.

This is where the concept of callbacks come in, the third param can be passed to second one to clean things up.

## Conclusion 

## Further Reading

- [Generating promises from scratch](https://www.youtube.com/watch?v=4GpwM8FmVgQ) - full link: https://www.youtube.com/watch?v=4GpwM8FmVgQ
- [PromiseA+](https://promisesaplus.com/) - full link: https://promisesaplus.com/
- [Understanding the PromiseA+ specification](https://stackoverflow.com/questions/36192728/understanding-the-promises-a-specification) - full link: https://stackoverflow.com/questions/36192728/understanding-the-promises-a-specification

---

> Path: /Users/beam/Documents/Obsidian Vault/Coding/JavaScript/Asynchronous JavaScript.md
