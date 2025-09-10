---
title: Jornada DevOps
description: 90DaysOfDevOps Dia 8  — Go & Hello World
image: /images/golang.png
author: alex
date: 2025-09-05
tags: ["90daysdevops", "dia-8", "golang"]
draft: false
weight: 1
---

# Dia 8 – Preparando o ambiente Go & Hello World

![Go Lang](/images/golang.png)

Antes de mergulharmos nos fundamentos de Go, precisamos instalar a linguagem na nossa máquina e fazer o clássico do "programar 101": criar o famoso **Hello World**. 

Hoje vamos configurar o ambiente em um sistema Linux (em sistemas Windows, é mais fácil com o auxiliador de instalação), organizar os diretórios e rodar nosso primeiro programa em Go. 

---

## Instalando o Go no Linux  

1. Acesse [go.dev/dl](https://go.dev/dl) e baixe a versão mais recente do Go para Linux.

![Go Download](/images/go-dl.png)

2. Remova qualquer instalação anterior do Go excluindo a pasta `/usr/local/go` (se existir) e, em seguida, extraia o arquivo que você acabou de baixar para `/usr/local`, criando uma nova árvore Go em `/usr/local/go`: 

```
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf /home/$USER/Downloads/go1.25.1.linux-amd64.tar.gz
```

3. Adicione o Go ao seu `PATH`. No seu `~/.bashrc` ou `~/.zshrc` e recarregue o shell: 

```
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc && source ~/.bashrc
```

4. Verifique se está tudo certo: 

```
go version
```

Se aparecer a versão instalada, o Go está pronto. 

---

## Configurando diretórios de trabalho  

Por padrão, vamos usar a pasta `~/go` como nosso espaço de trabalho. 
Dentro dela, crie as seguintes pastas: 

```
mkdir -p ~/go/{bin,pkg,src}
```

- **bin** → binários compilados 
- **pkg** → pacotes instalados 
- **src** → onde fica o código-fonte dos seus projetos 

---

## Instalando um editor (IDE)  

Existem vários, mas o mais usado é o **Visual Studio Code**. 
No Linux, basta instalar pela sua distro ou baixar em [code.visualstudio.com](https://code.visualstudio.com). 

![VSCode Download](/images/vscode-dl.png)

Depois de instalar, abra o diretório `~/go` no VSCode. 

![VSCode Open Folder](/images/open-folder.png)

![VSCode Select Folder](/images/select-folder.png)

Você pode receber um aviso de confiança: confirme para prosseguir. 

---

## Criando o primeiro programa  

# Para os comandos a seguir, utilizaremos a opção do terminal dentro do VS Code (Ctrl + J):

![VSCode Terminal](/images/terminal-vscode.png)

1. Dentro de `~/go/src`, crie uma pasta chamada `hello`: 

```
mkdir ~/go/src/hello
cd ~/go/src/hello
```

2. Crie o arquivo `main.go`: 

```
nano main.go
```

3. Adicione o código: 

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello #90DaysOfDevOps")
}
```

4. Salve e feche (Use Ctrl + X para sair. Quando aparecer a caixa de diálogo, confirme digitando Y e finalize com Enter). 

---

## Executando o programa  

No terminal, dentro da pasta `hello`, rode: 

```
go run main.go
```

Saída esperada: 

```
Hello #90DaysOfDevOps
```

---

## Compilando um binário  

Quer rodar o programa em outra máquina? Basta compilar: 

```
go build main.go
```

Isso vai gerar um binário chamado `main`. Execute-o: 

```
./main
```

Saída: 

```
Hello #90DaysOfDevOps
```

---

E pronto! Você acabou de preparar seu ambiente Go no Linux e rodar seu primeiro programa. 

Acesse o [Getting Started tutorial](https://go.dev/doc/tutorial/getting-started) para mais informações sobre como escrever o primeiro programa em Go. Lá existem exemplos em Windows também!


Nos próximos dias vamos explorar funções, pacotes e muito mais. 


Te vejo no dia 9!