---
title: DevOps Journey
description: 90DaysOfDevOps Day 8 — Go & Hello World
image: /images/golang.png
author: alex
date: 2025-09-05
tags: ["90daysdevops", "day-8", "golang"]
draft: false
weight: 1
---

# Day 8 – Setting up the Go Environment & Hello World

![Go Lang](/images/golang.png)

Before diving into the fundamentals of Go, we need to install the language on our machine and do the classic "Programming 101" exercise: create the famous **Hello World**. 

Today we’ll set up the environment on a Linux system (on Windows systems, the installer helper makes things easier), organize directories, and run our first Go program. 

---

## Installing Go on Linux  

1. Go to [go.dev/dl](https://go.dev/dl) and download the latest version of Go for Linux. 

![Go Download](/images/go-dl.png)

2. Remove any previous Go installation by deleting the `/usr/local/go` folder (if it exists), then extract the newly downloaded archive into `/usr/local`, creating a new Go tree at `/usr/local/go`: 

```
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf /home/$USER/Downloads/go1.25.1.linux-amd64.tar.gz
```

3. Add Go to your `PATH`. Edit your `~/.bashrc` or `~/.zshrc` and reload the shell: 

```
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc && source ~/.bashrc
```

4. Verify the installation: 

```
go version
```

If the installed version appears, Go is ready. 

---

## Setting up the workspace  

By default, we’ll use the `~/go` folder as our workspace. 
Inside it, create the following folders:

```
mkdir -p ~/go/{bin,pkg,src}
```

- **bin** → compiled binaries 
- **pkg** → installed packages 
- **src** → source code of your projects 

---

## Installing an editor (IDE)  

There are many options, but the most popular one is **Visual Studio Code**. 
On Linux, install it through your distro or download it at [code.visualstudio.com](https://code.visualstudio.com). 

![VSCode Download](/images/vscode-dl.png)

After installation, open the `~/go` directory in VSCode. 

![VSCode Open Folder](/images/open-folder.png)

![VSCode Select Folder](/images/select-folder.png)

You might see a trust warning: confirm to proceed. 

---

## Creating the first program  

# For the following commands, we’ll use the integrated VSCode terminal (Ctrl + J):

![VSCode Terminal](/images/terminal-vscode.png)

1. Inside `~/go/src`, create a folder named `hello`: 

```
mkdir ~/go/src/hello
cd ~/go/src/hello
```

2. Create the file `main.go`: 

```
nano main.go
```

3. Add the following code: 

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello #90DaysOfDevOps")
}
```

4. Save and exit (Press Ctrl + X to exit. When the dialog box appears, confirm by typing Y and finish with Enter). 

---

## Running the program  

In the terminal, inside the `hello` folder, run: 

```
go run main.go
```

Expected output: 

```
Hello #90DaysOfDevOps
```

---

## Building a binary  

Want to run the program on another machine? Just compile it: 

```
go build main.go
```

This will generate a binary called `main`. Run it: 

```
./main
```

Output: 

```
Hello #90DaysOfDevOps
```

---

And that’s it! You’ve just set up your Go environment on Linux and run your first program. 

Check out the [Getting Started tutorial](https://go.dev/doc/tutorial/getting-started) for more information on how to write your first Go program. There are also Windows examples available there! 

In the next days, we’ll explore functions, packages, and much more. 

See you on Day 9!