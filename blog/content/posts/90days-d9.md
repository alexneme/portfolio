---
title: DevOps Journey
description: 90DaysOfDevOps Day 9 — Understanding the Hello World code in Go
image: /images/go-compiler.png
author: alex
date: 2025-09-07
tags: ["90daysdevops", "day-9", "golang"]
draft: false
weight: 1
---

# Day 9 – Explaining the Hello World code in Go

![Go Lang](/images/golang.png)

On **Day 8**, we installed Go and ran our first program.  
Now it’s time to take a closer look at this code and understand how Go works.

---

## What is Compilation?  

Languages like **Python, Java, Go, and C++** are high-level — meaning they are human-readable.  
But the computer only understands **machine code**, so we need to translate our source code. This process is called **compilation**.  

![Go Compiler](/images/go-compiler.png)

On Day 8, when we ran `go build main.go`, we did exactly this: created an executable binary that the machine can understand.  

---

## What are Packages?  

A **package** is a collection of `.go` files in the same directory that are compiled together.  

- In the Day 8 example, we had the `hello` folder with just one file.  
- In larger projects, you might have multiple folders and packages making up your program.  

The main advantage of packages is **reusability**. You don’t have to reinvent the wheel — you can import ready-made libraries, like math functions, and save time.  

---

## Hello #90DaysOfDevOps line by line  

Let’s review the `main.go` code and understand what each part does:  

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello #90DaysOfDevOps")
}
```

```go
package main        // (1)
// Every Go file starts by declaring the package it belongs to.

import "fmt"        // (3)
// Imports the "fmt" package from the standard library to format and print text.

func main() {       // (5)
// Entry point of the program. It doesn’t take arguments or return values.
    fmt.Println("Hello #90DaysOfDevOps") // (6)
// Prints the message followed by a newline to stdout.
}
```

---

## Line by line

### (1) `package main`
- Every `.go` file must belong to a package (`package <name>`).  
- When the package is **`main`**, the code will be compiled as an **executable**.  
- Rules: to generate a binary, there must be `package main` **and** a `main` function.  
- Other packages can have any name, but only `main` produces executables.

---

### (3) `import "fmt"`
- `import` brings in functionality from other packages.  
- `fmt` is part of the **Go standard library**.  
- It provides functions like:  
  - `fmt.Print(...)` → prints without newline.  
  - `fmt.Println(...)` → prints with newline.  
  - `fmt.Printf(...)` → prints with formatting.  
- Unused imports cause an error — keeping the code clean.

---

### (5) `func main() {`
- `func` declares a function.  
- The `main` function is mandatory in executables.  
- It is the **entry point**: the Go runtime specifically looks for `main.main`.  
- Takes no parameters and returns no values.  
- Everything inside `{ ... }` belongs to the function scope.

---

### (6) `fmt.Println("Hello #90DaysOfDevOps")`
- Calls `Println` from the `fmt` package.  
- Prints the message and adds a newline at the end.  
- `Print` does not add `\n`.  
- `Printf` allows interpolation of variables.  
- Example:  
  ```go
  fmt.Printf("Hello, %s!\n", "Alex")
  ```

---

## Useful extras

- **Compile vs. run directly**  
  - `go run main.go` → compiles temporarily and executes.  
  - `go build main.go` → generates a binary (e.g., `main`).  

- **Structure for larger projects**  
  - Projects can have multiple packages in different folders.  
  - To start a Go module:  
    ```bash
    go mod init example.com/hello
    go mod tidy
    ```

- **Automatic formatting**  
  - Use `gofmt` or the VS Code extension.  
  - Go enforces consistent style and organizes imports automatically.

---

## Common mistakes

- Forgetting `package main` → no executable generated.  
- Importing packages and not using them → compilation error.  
- Mixing up `Print`, `Println`, and `Printf`.  
- Strict syntax: missing brace, quote, or parenthesis = immediate error.

---

## Summary  

- **Line 1 →** `package main`  
Every Go file must belong to a package. We use `main` because it’s where the program starts.  

- **Line 3 →** `import "fmt"`  
Here we import the `fmt` package from the standard library. It contains the `Println()` function we use on line 6.  

- **Line 5 →** `func main()`  
All execution starts in the `main` function. It’s the entry point of the program.  

- **Line 6 →** `fmt.Println(...)`  
Prints a message to the terminal. In our case: `"Hello #90DaysOfDevOps"`.  

---

Now that we understand the **Hello World**, we’re ready to move forward and explore functions, packages, and more details about Go.  

See you on **Day 10**!