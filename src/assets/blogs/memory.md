---
Created at: 22-12-2022
Modified at: Thursday 4th December 22 22:09
tags: 
- Coding
- Finance
Aliases: []
title: Memory (RAM)
date created: Thursday, December 22nd 2022, 10:09:55 pm
date modified: Sunday, August 20th 2023, 9:33:38 pm
review-frequency: high
---
- [x] Memory (RAM) #Complete
---

## Overview

There are two kinds of internal memory: ROM and RAM. **ROM** stands for read-only memory. It is non-volatile, which means it can retain data even without power. It is used mainly to start or boot up a computer. Once the operating system is loaded, the computer uses **RAM**. RAM (Random Access Memory) in essence is your computer's short term memory. It exists as *a high speed temporary storage for your [[CPU]]* - a form of volatile memory. It typically holds the data of your current running [[Process|processes]]. Active memory is filled with data your computer is actively working with, which usually comes from apps that are currently running or files you’re currently looking at. The more data your computer is using at once, the more RAM it will utilise.

The [[CPU]] does not directly talk to [[Storage Drive|storage drive]], but instead the RAM acts intermediary between CPU and disk. The reason for this is that storage drives are **slow**, and they have always been slow. Even with the advanced in hard drive (HDD) technology; IDE, PATA, SATA, SAS, 4200rpm, 5400rpm, 7200rpm, 10,000rpm, 15,000rpm and so on, advances in CPU speed have outpaced this and therefore require a quicker access to data that any storage drive cannot support. The same occurs with SSD, the CPU speed is quicker than any SSD can currently handle. For a CPU to interact directly with the storage drive, the processor would spend most of its time sitting idle waiting for the read and write heads from the disk. To get around this issue, the required file is copied to RAM, although this is still way slower than what goes on inside the CPU but way faster than storage. The file is manipulated in RAM and sent back to the storage drive once saved.

Data is only stored in RAM while your PC is turned on and once it is turned off, all the data is lost. As RAM only holds the data you need for the processes that are currently active, closing or shutting down the app will clear the data out of memory and therefore, data will be lost if not saved correctly.

A computer's RAM needs to be quick, the speed of it determines how quickly data flows in and out of your CPU. Generally, the faster the RAM, the faster the processing speed. With faster RAM, you increase the speed at which memory transfers information to other components. Meaning, your fast processor now has an equally fast way of talking to the other components, making your computer much more efficient.

## How RAM Works

Ultimately, data needs to get onto your CPU, to get processed. Data is stored at different levels, such as the [[Storage Drive|storage drive]], RAM, [[Memory (RAM)#Hierarchical Nature of Storage|CPU cache (L1, L2, L3 cache)]], etc. Storage is where everything resides at all times, saved for the long term and remaining there even when your device is powered down. This would be your [hard drives](https://www.ign.com/articles/best-external-hard-drive) ([[Storage Drive|HDD]]) and [solid state drives](https://www.ign.com/articles/best-ssd) ([[Storage Drive|SSD]]). Files, programs, apps, and games are all saved in storage.

Any time you perform a task on your computer, such as playing a film or a game, your computer will load the data that the CPU needs for those applications into the RAM. Memory is much faster than storage, so having data accessible here helps keep the system running quickly. RAMs are way faster than storage drives, and CPU caches are much faster again, meaning the storage drives are usually slower among all memories used for computing.

When the storage drive receives the file request, the file is copied from the platter sectors (platter sectors are only in HHD and not SSD) to the drive’s cache and, from there, to the system RAM. The CPU manipulates the file in tiny pieces by copying bits of it to the CPU cache and then sending the new version of the data back to system RAM. When you’re done with the file, it gets sent back to the storage that copies it immediately to the storage drive cache and tells you the file is saved. When the drive is idle, the cached version of the file is written back to the sectors on the drive.

All of this caching and copying might make a straightforward process seem complicated, but there’s a very good reason for it - to *reduce the amount of time any single process was waiting for data from another part.*

### Dealing with Large Datasets or Files

If you ask your computer to perform a task, such as opening a photo to edit, and you don’t have enough available RAM, your computer has to begin shuffling data around in order to open the file - it has to move data between the slower hard drive and the RAM and the processor, which causes everything to slow down.

Different tasks or applications have different requirements. For example:

- **Video Editing and Graphics Work**: These tasks often demand a lot of RAM because of the large file sizes and data sets they handle.
- **Gaming**: While it does need a fair amount of RAM, it's more reliant on a combination of CPU and GPU (Graphics Processing Unit) power.
- **General Office Work**: Browsing, word processing, and light multitasking may not require a high-end CPU or vast amounts of RAM.

When you open a file, **it doesn't always mean the entire file is loaded into RAM.** For instance, if you opened a hypothetical image with an inflated file size of 10 GB, photo editing software might not load the entire photo into RAM at once. It might load only the parts you're currently viewing or editing. Software can be designed to load data into RAM in chunks or as-needed. *It is up to the software which is opening the file to put the data into RAM* and therefore, efficiently designed tools may not put the entire file into RAM at one time. As the RAM is volatile, it will have different parts of data in it at different times.

There are various pieces of hardware and software that play critical parts in effective memory management.

*Buffers and caches* - Many applications use buffers and caches. A buffer temporarily holds data, while a cache retains frequently or recently accessed data. When editing an image, the changes might first be made in a buffer. When you save, the changes are committed from the buffer to the file on disk. Meanwhile, caches can store parts of the image that you're frequently accessing, ensuring quick access without reloading from the disk.

*Virtual Memory*: If RAM starts filling up, the operating system can move some of the less-recently-used data from RAM to a space on the hard drive called "swap space" or "page file." This process, called "paging" or "swapping," allows the system to free up RAM for more immediate tasks. However, too much reliance on swapping can lead to system slowdowns.

It is up to efficient software design and memory management to ensure that the RAM is effectively used without maxing it out. Tools like buffers, caches, and other techniques allow applications to work with larger files and datasets.

### Understanding RAM in Simple Terms

RAM can be confusing. To put it simply, think of it all like maths homework. Storage is your textbook. It has all the maths problems, formulas, and information you might need stored inside.

When you’ve got a homework assignment, you write down all the questions and maybe note some of the relevant formulas you’ll use on a blank sheet of paper. That sheet of paper is your RAM.
At any given moment, you’re not thinking about every single problem you’ve written on that paper, but you’ve got near-immediate access to them as needed – no need to flip around in your textbook to find what you need.

When you work on solving one of the problems, now you’re thinking about that data right inside your brain, that’s your processor and cache at work.

## Hierarchical Nature of Storage

Storage can be visualised in a hierarchy based on speed and cost:

- CPU Registers: Extremely fast, very small storage.
- Cache (L1, L2, L3): Faster than RAM but smaller in size. Closer to the CPU.
- RAM: Large enough to hold active processes and data, but more expensive per gigabyte than storage drives.
- SSD/HDD: Much larger capacity but slower.

Data moves between these storage types depending on how often it's accessed and needed. *The more immediate and frequently accessed data is, the closer it should be to the CPU*, in other words, it will be placed inside the CPU registers.

**RAM is more expensive per gigabyte than storage like HDDs and SSDs and hence, the RAM is not also used as long-term storage devices.**

## CPU Vs RAM

The CPU is the brains of the computer whilst the RAM is the short-term memory of the CPU. 

- **More RAM**: Allows more data/applications to be *ready* for processing.
- **Bigger (or faster) CPU**: Allows more instructions (or data) to be processed *simultaneously*.

A quick CPU with insufficient RAM can lead to the CPU waiting on data, causing a bottleneck. Conversely, a system with massive amounts of RAM but a slow CPU won't process data quickly, even though it's readily available, so it's important to upgrade the correct hardware accordingly. Based on what you plan to do with your computer, you might prioritise one upgrade over the other. For example:

- If you're experiencing system slowdowns and notice your RAM is consistently maxed out (using tools like Task Manager or Activity Monitor), an increase in RAM might be a beneficial upgrade.
- Conversely, if you find that your CPU is consistently running at high percentages even though you still have available RAM, then a CPU upgrade might be in order.

There are other factors to improving speed and efficiency on your computer, such as:
- **Storage Speed**: The speed of your storage (SSD vs. HDD) can significantly impact system performance, especially when RAM is full and the system starts swapping.
- **[[GPU]]**: For tasks related to graphics, video rendering, or gaming, the GPU becomes an essential factor.

So what would make a smoother experience, upgrading RAM or CPU?

### Powerful Apps Like Photoshop:

1. **RAM**: Photoshop, especially when dealing with large files or multiple open images, can quickly eat up RAM. If RAM is insufficient, Photoshop might have to frequently swap data between the RAM and the disk, which can significantly slow down its operations. Thus, having ample RAM is essential for smooth performance.
2. **CPU**: Photoshop also relies on the CPU for various tasks, such as applying filters, running scripts, and other processing-related actions. A faster CPU will speed up these operations.
### Gaming:

1. **RAM**: Modern games load a lot of assets, like textures, character models, and environment details, into RAM. If RAM is insufficient, games might experience stuttering or longer loading times when trying to fetch these assets.
2. **CPU**: The CPU handles game logic, physics simulations, AI behaviours, and more. A more powerful CPU can process these elements more efficiently, leading to smoother gameplay, especially in CPU-intensive scenes or scenarios.
3. **Note on GPU**: For gaming, the Graphics Processing Unit (GPU) is also paramount. The GPU is responsible for rendering graphics, and a good GPU is essential for high FPS rates and detailed visuals.

### For a smoother experience:

- In **Photoshop**: More RAM is generally the first priority, especially if working with high-resolution images or multiple layers. However, a faster CPU can significantly boost performance when applying complex effects or operations.
- In **Gaming**: Both RAM and CPU are important, but they need to be balanced with a good GPU. Depending on the game, one might prioritise the CPU (for games with lots of AI and physics calculations) or RAM (for games with vast open worlds and lots of assets). Still, in many cases, the GPU will be the most critical factor for FPS and visual quality.

In both cases, if you had to choose between adding more RAM or upgrading to a better CPU, you'd first identify the bottleneck in your system. If tasks are slowed because they're waiting on data (RAM is consistently full), then adding more RAM would help. If tasks are slow even when there's available RAM (CPU usage is high), then a better CPU might be the solution.

## Types of RAM

While RAM can come in a lot of different forms, you’ll often get a clue that you’re looking at some kind of RAM if you see “DDR” listed followed by a number that denotes the generation. You can find many computers using DDR3, DDR4, and now even DDR5 memory. Some thin-and-light laptops and [smartphones](https://www.ign.com/articles/best-smartphone) use low-power or LPDDR# memory. Graphics cards have their own memory, too, with GDDR#.

[The standards of RAM include, the DDR specification; DDR1, DDR2, DDR3, DDR4, and DDR5.](https://en.wikipedia.org/wiki/DDR_SDRAM) DDR4 is the fourth generation and features a higher bandwidth, data integrity, and capacity compared to previous generations. Alternatively, DDR5 is the fifth generation and has double the capacity and density again, along with reduced power consumption. This makes it more efficient whilst boasting ultra-fast speeds.

### SRAM (Static RAM) and DRAM (Dynamic RAM)

- **DRAM** (pronounced DEE-RAM), is widely used as a computer’s main memory. Each DRAM memory cell is made up of a transistor and a capacitor within an integrated circuit, and a data bit is stored in the capacitor. Since transistors always leak a small amount, the capacitors will slowly discharge, causing information stored in it to drain; hence, DRAM has to be refreshed (given a new electronic charge) every few milliseconds to retain data.
- **SRAM** (pronounced ES-RAM) is made up of four to six transistors. It keeps data in the memory as long as power is supplied to the system unlike DRAM, which has to be refreshed periodically. As such, SRAM is faster but also more expensive, making DRAM the more prevalent memory in computer systems.

### Form Factors of DRAM

There are multiple different [form factors of RAM](https://www.overclockers.co.uk/blog/ram-form-factors-explained-everything-you-need-to-know/), including: 

- **DIMM**: The most common form factor. Primarily used in desktop PCs.

DIMMs (Dual In-line Memory Modules) are commonly used in larger computers and allows for swapping and upgrading system RAM. These are modular, meaning they can be inserted into or removed from dedicated slots on the mother board.

DIMMs themselves come in various types/form factors, including:
 - UDIMM (Unbuffered DIMM): The most common type of memory module for desktop PCs.
 - SODIMM (Small Outline DIMM): A smaller variant of DIMM, typically used in laptops.

- **SIMM**: Single In-Line Memory Module - were used in the late 1980s to 1990s, are now obsolete.

- **Soldered RAM**: Typically used in laptops, small PCs, or home theatre set-ups. The main advantages include space savings and potentially better power efficiency.

### Unified and System RAM and VRAM

#### Unified RAM

Unified RAM, also known as Unified Memory Architecture (UMA), refers to a type of memory architecture where both the CPU and GPU share the same physical memory. In systems with Unified RAM:

1. **Direct Access**: Both the CPU and GPU can access the same memory pool, eliminating the need to frequently transfer data between separate VRAM and system RAM.

2. **Efficiency**: As you mentioned, with unified RAM, there might be a reduction in the total amount of RAM needed since you don't have to duplicate data between VRAM and system RAM. Data can be loaded directly from storage into unified RAM without being moved between different memory types.

3. **Latency**: Reduces latency involved in transferring data between VRAM and system RAM.

4. **Flexibility**: Unified RAM provides flexibility in how memory is allocated between the CPU and GPU based on the task. If a task is more graphics-intensive, more memory can be allocated to the GPU and vice versa.

#### System RAM

System RAM, typically just referred to as RAM (Random Access Memory), is the primary memory used by the CPU:

#### VRAM (Video RAM)

VRAM is dedicated memory for the GPU (Graphics Processing Unit):

1. **Graphics Data**: Stores graphics data for the GPU to process. This includes textures, frame buffers, and other graphics-related data.

2. **High Bandwidth**: Typically has a higher bandwidth compared to standard system RAM, since GPUs require fast access to large amounts of data.

3. **Dedicated for GPU**: Unlike system RAM, VRAM is solely for the GPU. *In systems without Unified RAM, the GPU cannot access system RAM directly, so data must be transferred from system RAM to VRAM.*

#### Comparing Unified RAM Vs System RAM and VRAM

1. **Performance**: Unified RAM can offer better performance in certain scenarios due to reduced data transfer latency. However, high-end graphics tasks, such as gaming or 3D rendering, might benefit from dedicated VRAM due to its high bandwidth.

2. **Cost and Complexity**: Unified RAM might reduce the complexity and cost of the memory subsystem by merging the functionalities of system RAM and VRAM.

3. **Adaptability**: Unified RAM systems can dynamically adjust the allocation of memory resources based on workload, whereas systems with distinct VRAM have a fixed allocation for graphics tasks.

## How Data Gets Stored on RAM

RAM can have different sections or areas that are used for specific purposes. While RAM itself can come in various forms, such as SRAM and DRAM, there are logical divisions or areas of memory management by an operating system. Here are some of the commonly discussed sections:

**Registers**:
- These are the smallest and fastest memory locations directly inside the CPU.
- Used to hold data that the CPU is currently processing.
- Registers are part of the CPU's architecture. The number, type, and size of registers are defined by the CPU's design and are not determined by the OS. The operating system and compilers, however, utilise these registers when scheduling and executing tasks.

**Cache**:
- This is a smaller, faster type of volatile computer memory that provides high-speed data access to the processor and stores frequently used computer programs, applications, and data.
- Cache memory provides faster data storage and access by storing instances of programs and data routinely accessed by the processor.
- It's further divided into levels (L1, L2, L3) based on proximity to the CPU, with L1 being the closest and fastest but smallest, and L3 being the furthest but larger and a bit slower.
- *Caches (L1, L2, L3) are physically present on the CPU die and are hardware-managed*.

**Main Memory (Primary RAM)**:
- This is the main RAM where applications, files, and data in current use are stored, so they can be quickly accessed by the CPU.

**Buffer**:
- This is a temporary memory location where data is stored while it is being transferred between two locations, like between a device and RAM or between RAM and the CPU.

[[Memory Management with Heaps and Stacks]] is also a critical part of the RAM. Both the [[Call Stack]] and [[Memory Heap]] **do not have a physical representation on the RAM**, but instead it is a memory abstraction - constructs used in memory management created by the [[Kernel#Kernel Vs Operating System|operating system]]. There is no physical difference between them, they are simply in RAM. Those abstraction help us to develop some good software and not to think about where each variable and functions is going in RAM and keep tracking it there. 

**Stack**:
 - The stack is a contiguous memory region that grows and shrinks automatically. When a program starts, a default stack size is assigned. It grows automatically (within limits) if more space is needed.
 - The stack's memory is managed in a LIFO manner, which is achieved using the stack pointer, a register pointing to the top of the stack.

**Heap**:
 - The heap is more scattered. Memory is allocated and deallocated in any order, not just the top, like the stack.
 - The OS and the language runtime (e.g., C runtime) manage the heap. They keep track of which parts of the heap are in use and which are free. When you allocate memory dynamically (using `malloc`, `new`, etc.), the OS/runtime gives you a piece of the heap.

**Virtual Memory**:
- Not a section of RAM, but worth mentioning. When RAM is full, the operating system shifts data to an area of the hard drive, which is set up to emulate RAM, called the "swap space" or "page file."
- Accessing data in virtual memory is slower than accessing data in RAM because hard drives are slower than RAM.

In actual operation, the operating system and hardware work in tandem to manage these different memory sections, ensuring that data is in the right place at the right time for the CPU to process it efficiently.

### Role of OS/Kernel

While the hardware has its own management logic for things like registers and cache, the operating system plays a significant role in memory management, especially when it comes to:

- **Managing Virtual Memory**: The OS decides which pages to evict from RAM and which to load.
- **Heap Management**: The OS, with the help of language runtimes, manages dynamic memory allocation in the heap.
- **Stack Management**: OS determines the default stack size for threads and handles stack overflows.
- **Memory Protection**: The OS ensures that one process cannot access another process's memory space, ensuring security and stability.

## RAM Components

Whilst there may be multiple different form factors, configurations, and built-in technologies, the core components of a RAM module stay the same.  

- **Circuit Board** - Where the main components of RAM are soldered, all of which are connected via the integrated circuit. This ensures they can effectively communicate with each other and your CPU. 
- **Mode Register** - A dedicated chip built into the circuit, responsible for basic device operation. This includes the CAS latency as well as burst length and type.  
- **Memory Banks** - Where the actual onboard memory modules are stored. In most modern-day RAM modules, there are typically two or more memory banks. This means one is always accessible, whilst the other is being pre-charged, which effectively reduces any latency to improve data transfer rates.  
- **SPD Chip** - The SPD chip or serial presence detects, holds all the information about the memory type, size, speed, and access time.   
- **Contact Pins** - Each RAM module will have a series of contact pins along one side of the stick. These pins connect to the DIMM slot(s) on your motherboard to allow the RAM module to communicate with your hardware.   
- **Heat Spreader** - A fundamental part of any RAM module is the exterior heat spreader. This effectively draws and spreads any excess heat to help keep temperatures down to a minimum to avoid overheating and performance loss.

## Further Reading

- [How RAM works.](https://computer.howstuffworks.com/ram.htm)
- [Selecting your perfect RAM configuration.](https://www.overclockers.co.uk/blog/how-to-select-your-perfect-ram-configuration/)
- [What and Where are Stack and Heap?](https://www.linkedin.com/pulse/what-where-stack-heap-maxim-malisciuc/)
- [Understanding RAM and DRAM Computer Memory Types.](https://www.atpinc.com/blog/computer-memory-types-dram-ram-module)

---

> Path: /Users/beam/Documents/Obsidian Vault/Coding/General/How computers work/Memory (RAM).md
