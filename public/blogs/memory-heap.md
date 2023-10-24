---
tags: 
- How Computers Work
- Memory Management
- Programming
Aliases:
- Heap
title: Memory Heap
date created: Thursday, August 10th 2023, 2:58:01 pm
date modified: Tuesday, August 22nd 2023, 7:49:20 pm
blogged modified: Thursday, August 31th 2023
read time: 6 mins
---
## Overview

Memory management is the art of storing data in an efficient and effective way on a computer. When code from a program is being executed, the data that is being used has to reside somewhere. The [[Memory (RAM)|RAM]] on your computer is where active data used by these [[Process|processes]] are stored - acting as a short-term and volatile memory for your [[CPU]]. Whilst your RAM (memory) is a physical thing, the [[Kernel#Kernel Vs Operating System|operating system]] manages non-physical locations, which are the **Heap** and **Stack**. Heap memory, also known as “*dynamic*” memory is an alternative to local stack memory. From a memory allocation point of view, the heap is a large unstructured area of memory available for use - it is where dynamically allocated memory resides. Similarly to the [[Call Stack|stack]], it *does not have a physical location on the RAM*, but rather an abstracted construct used in memory management by the [[Kernel#Kernel Vs Operating System|operating system]]. Memory allocated from the heap will remain until one of the following occurs:

1) The memory is `free`'d (used in low-level languages such as C and C++).

2) The program terminates.

A memory heap's size can *dynamically adjust based on demand*, however, there are still upper limits based on system and runtime constraints. References to the data stored on the heap is stored on the stack and if all references to allocated memory are lost (e.g. you don't store a pointer/reference to it any more), you have what is called a *[[Memory leaks|memory leak]]*. This is where the memory has still been allocated, but you have no easy way of accessing it any more. Leaked memory cannot be reclaimed for future memory allocations, but when the program ends, the memory will be free'd up by the operating system. Memory leaks can cause significant problems, even to the point of taking up all CPU resources within the computer.

In contrast, *[[Call Stack|stack]]* memory is where local variables (those defined within a function) live. Memory allocated on the stack generally only lives until the function returns (there are some exceptions to this, e.g. static local variables). The stack memory is where the event loop in JavaScript comes into play.

It's worth noting that *the RAM itself doesn't differentiate between the heap, the stack, or any other kind of data*.

## How Data Stored in Memory

The term "unstructured" in the context of the heap means that memory is allocated dynamically without a rigid, predefined pattern, not that the data within is without structure.

RAM itself doesn't differentiate between the heap, the stack, or any other kind of data. RAM is essentially a vast array of storage cells that can be read from or written to. It's the operating system and the processes running on it that impose structure upon this array.

When a program starts, the operating system allocates memory for it, and this memory space is divided into different sections:

- **Text Segment**: Contains the executable code.
- **Data Segment**: Stores global and static variables. It's further divided into initialised and uninitialised sections.
- **Stack**: As mentioned, used for function call management, local variables, return addresses, etc.
- **Heap**: Used for dynamic memory allocation.

The distinction between these segments is managed by the operating system and the program's runtime, not by the RAM itself.

When the program requests memory (e.g., for a variable on the stack or an object on the heap), the appropriate memory segment is used. The CPU, in conjunction with the operating system, knows where each segment begins and ends, and access violations (e.g., trying to access memory outside the allocated bounds) are managed at this level.

## How the Memory Heap Works

When storing memory in the heap, you essentially request a certain *chunk* of memory from the RAM. Once the kernel along side the Memory Management Unit (MMU) finds a free space (a *block*) in memory, it will allocate that chunk of data within it. A pointer is then returned which points to the start of the block so that data can reference it. If at any point that pointer is lost, a memory leak will occur and that data can no longer be accessed.

In languages such as C or C++, you can request a chunk of memory from the heap using certain commands (such as `malloc` in C or `new` in C++). More abstracted languages like JavaScript doesn't allow this sort of thing, and the heap memory allocation is handled for you.

### How the Memory Heap Works in JavaScript

In JavaScript, you don't have to manually allocate memory from the heap, like you might in languages like C or C++. Instead, when you create an object or an array (or other complex types), JavaScript automatically allocates the required memory for you. For example:

```JavaScript
const obj = {};  // Memory for this object is allocated on the heap
const arr = [1, 2, 3];  // Memory for this array is allocated on the heap`
```

The [[JavaScript Engines|JavaScript Engine]] handles memory management, including [[Garbage Collection|garbage collection]], which automatically reclaims memory that's no longer in use. This is also where [[JavaScript Memory Management#The Storing of Types in JavaScript|the storing of types in JavaScript]] comes into play, storing a primitive type will be stored within the stack whereas a non-primitive type (complex type) will be stored in the heap. Being stored in the heap, when you create an object it will be **reference** (pointing to) that specific chunk in memory and hence, shallow cloning or changing the variable will mutate the original one and deep cloning will create an entirely new space in memory for a new object.

```JavaScript
let a = { x: 1 };      // Create an object and assign it to variable 'a'
let b = a;            // Assign 'a' to 'b', so now 'b' references the same object as 'a'

b.x = 2;              // Modify a property of the object through 'b'

console.log(a.x);     // Outputs: 2, because 'a' and 'b' reference the same object in memory 
```

- [ ] What is a pointer and how do they work? #Question 

## Further Reading

- [A detailed overview of the memory heap.](https://opendsa-server.cs.vt.edu/ODSA/Books/CS2/html/HeapMem.html#:~:text=The%20heap%20is%20a%20large,calling%20the%20heap%20allocation%20operation.)

---

> Path: /Users/beam/Documents/Obsidian Vault/Coding/General/How computers work/Memory Heap.md