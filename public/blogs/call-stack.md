## Overview

The *call stack*, or commonly called just *stack*, is a logical (not physical) region within [[Memory (RAM)|memory]] that is controlled by the [[Kernel#Kernel Vs Operating System|operating system]]. It is a data structure that functions on a Last in First Out (LIFO) principle, where the addition and removal of items always take place at the top and is designed this way due to a combination of efficiency and functionality. Primitive and non-complex types are stored within the stack, [[How Data is Stored in JavaScript|the storing of types in JavaScript]], for example, types such as boolean, string, number, etc. are all stored in the call stack. Whereas, function definitions and complex types such as objects are stored within the [[Memory Heap|heap]]. The call stack just has a reference (or a pointer) where these function definitions and objects are stored. This is due to the simple, static nature of the stack, whereas the heap is dynamic and can shrink or expand in size as and when.

As per above, the call stack operates on a LIFO basis. It is handy to visualise this with the famous Tower of Hanoi game:

So from the example above, if you want to remove item '2' you would have to remove item '1' prior to the removal, therefore, you will always have older items nearer the base of the stack. 

If that doesn't help, as an example: when you use a mobile app or browser and press the back button, it will take you to the previous page. As you navigate from page to page, those pages are placed on a stack with the current page always on the top and the first page you looked at on the base. When you click on the back button you will remove your current page (on the top) from the stack and the previous will become current. Whilst the page details itself will not all be part of the call stack, it helps visualise how it works.

## What is Stored on the Stack

The stack is used for storing primitive data types, control data (like function return addresses (address in memory to which the program should return after completing the current function)), and references or pointers to objects. While objects themselves are allocated on the heap, the references to these objects are placed on the stack when they are local to a function. Memory allocated on the stack is usually tied to the lifetime of a function call, but there are exceptions, such as static local variables, which persist beyond a single function invocation. 

As JavaScript, is a higher-level language and interpreted, it abstracts away many of the details of stack management. The [[JavaScript Engines|engine]] handling JS (like V8 for Node.js and Chrome) takes care of such details.  Whereas in languages like C and C++, you will need to know the differences between stack and heap at a lower level due to fewer abstractions. In these languages, static local variables persist between function calls, even though they seem "local" to a function. They are not allocated on the stack; instead, they typically reside in a section of memory reserved for static and global variables. Note; JavaScript doesn't have the idea of static local variables, to persist variables across function calls, use closures or another mechanism.

The stack itself doesn't directly manipulate the heap. It only holds references or pointers to the objects in the heap. The management of these references, the underlying memory allocation, and deallocation in both the stack and the heap, are usually handled by the language's runtime system or the compiler, depending on the language. Check out [[Memory Management with Heaps and Stacks#Memory Allocated Other Than the Heap and Stack|memory management with Heap and Stack]] for a detailed overview of how the stack gets handled and references the heap.

### An Example Using JavaScript Functions

As I am a JavaScript fanboy, consider the following JavaScript code snippet:

```JavaScript
const createObject(value) {   
    const obj = { key: value };   
    return obj; 
} 

const example = createObject(42);
```

Here's how the function interacts with the stack and heap:

**Stack**:
- When `createObject` is called, a new frame is pushed onto the stack. 
- This frame contains information like the return address (where to go back to after the function completes), parameters (in this case, `value`), and local variables (like `obj`). 
- The reference (or address) to the object in the heap is stored in the variable `obj`.

**Heap**:
- The actual object `{ key: 42 }` is allocated in the heap.
- The heap is used for this object since objects can have variable sizes and might outlive the function call.

**Function Execution**:
- The function creates the object in the heap and returns the reference to it.
- Once the function completes, its frame is popped from the stack, but the object remains in the heap.
- The reference to the object is then stored in the variable `example` in the calling context.

In lower-level languages like C and C++, the process is conceptually similar, but developers have more direct control over heap allocations, typically using functions like `malloc` and `free` to manage memory.

## Why the Stack is LIFO

It is not uncommon for functions to call other functions, creating a chain of calls. The LIFO principle allows the stack to keep track of these calls in the exact reverse order of execution. When a function completes, its frame (containing its variables, parameters, return address, etc.) is popped off the stack, and the control returns to the calling function. This matches the natural flow of function calls and returns.  The structure also enables quick access to the most recently added item, which is what is needed in function call management. Pushing and popping from the stack take constant time, making these operations highly efficient. The overall reason for the LIFO structure is efficiency, removing the need for more complicated memory management.

Aside, when using languages like JavaScript that allow for `pop()` and `push()` on an array that makes the array behave stack-like, it does not mean that the methods are designed this way due to the stack and heap.
 
## How the Stack Works

Every time you call a function: the stack pointer increments to the next physical memory address, creating a new **block**/reserves space for its variables etc. and copies it to that address. The new block will have all local variables, function parameters, object references and return values. 

When you return from the function the block is removed from the top of the stack, memory is released, the objects, and variables used by this function are not accessible anymore and stack pointer decrements to the previous available item. The names of those procedures are "**Push**" (storing something on the stack) and "**Pop**" (retrieving/deleting something from the stack).

## Stack Overflow Exception

The idea of a stack overflow exception occurs when a process has used up all the available space in the stack, which is a fixed size set by the operating system. An example is if a function calls itself recursively without an exit condition, this can lead to a stack overflow. The OS can't allocate more memory to the stack because it's a design decision to keep the stack size fixed, which allows for faster access, efficiency, and predictability. This is different to the memory heap as the memory allocated is dynamic and its size changes as the program runs. Whilst there might be free memory in the system, reallocating this memory to the stack could lead to fragmentation and other issues.

When a stack overflow occurs, *the process will typically crash or be terminated by the operating system*. In JavaScript, the host environment will usually catch this and terminate the script, displaying an error. In lower-level languages, this can result in a segmentation fault or similar error, causing the process to terminate.

You may be familiar with the JavaScript error of:
```Bash
"RangeError: Maximum call stack size exceeded"`
```

This happens when a stack overflow exception gets raised. Here's a simple example of how a recursive function would cause a stack overflow error - a function that has no return value.

```JavaScript
const recursiveFunction = () => {
    recursiveFunction(); // Calls itself without any exit condition 
} 

recursiveFunction();
```

As the stack is separated from other parts of memory even within the same process, such as the Heap, having a stack overflow exception does not mean that 100% of the allocated memory for that process is taken. It simply means that 100% of the allocated stack memory for that process is filled, hence the name.

As a stack is [[Threads|thread]]-specific, a stack that is allocated by the operating system will be unique per thread meaning depending on the language, you can run code concurrently or parallel. Not mentioned in this blog, but there are a lot of quirks you have to be careful of, such as thread locking, threads running in different orders, or even threads relying on others and causing blockages. All of these issues can cause your call stack calls to fail, breaking your code.