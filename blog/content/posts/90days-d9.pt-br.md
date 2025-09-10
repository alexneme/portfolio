---
title: Jornada DevOps
description: 90DaysOfDevOps Dia 9 — Entendendo o código Hello World em Go
image: /images/go-compiler.png
author: alex
date: 2025-09-07
tags: ["90daysdevops", "dia-9", "golang"]
draft: false
weight: 1
---

# Dia 9 – Explicando o código Hello World em Go

![Go Lang](/images/golang.png)

No **Dia 8**, instalamos o Go e rodamos nosso primeiro programa.  
Agora é hora de olhar mais de perto para esse código e entender como o Go funciona.

---

## O que é Compilação?  

Linguagens como **Python, Java, Go e C++** são de alto nível — ou seja, legíveis para humanos.  
Mas o computador só entende **código de máquina**, e para isso precisamos traduzir o código fonte. Esse processo se chama **compilação**.  

![Go Compiler](/images/go-compiler.png)

No Dia 8, quando rodamos `go build main.go`, criamos exatamente isso: um binário executável que a máquina consegue entender.  

---

## O que são Pacotes?  

Um **pacote** é um conjunto de arquivos `.go` que ficam no mesmo diretório e são compilados juntos.  

- No exemplo do Dia 8, tínhamos a pasta `hello` com apenas um arquivo.  
- Em projetos maiores, você pode ter várias pastas e diferentes pacotes compondo seu programa.  

O grande benefício dos pacotes é a **reutilização**. Você não precisa reinventar a roda — pode importar bibliotecas já prontas, como funções matemáticas, e economizar tempo.  

---

## Hello #90DaysOfDevOps linha a linha  

Vamos revisar o código `main.go` e entender o que cada parte faz:  

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello #90DaysOfDevOps")
}
```

```go
package main        // (1)
                    // Todo arquivo Go começa declarando o pacote ao qual pertence.

import "fmt"        // (3)
                    // Importa o pacote "fmt", da biblioteca padrão, para formatar e imprimir texto.

func main() {       // (5)
                    // Função de entrada do programa (ponto de partida). Não recebe argumentos e não retorna valor.
    fmt.Println("Hello #90DaysOfDevOps") // (6)
                    // Imprime a mensagem seguida de quebra de linha no stdout.
}
```

---

## Linha a linha

### (1) `package main`
- Todo arquivo `.go` precisa estar em um pacote (`package <nome>`). 
- Quando o pacote é **`main`**, o código será compilado como **executável**. 
- Regras: para gerar um binário, precisa existir `package main` **e** uma função `main`. 
- Outros pacotes podem ter qualquer nome, mas só `main` gera executáveis.

---

### (3) `import "fmt"`
- `import` traz funcionalidades de outros pacotes. 
- `fmt` faz parte da **biblioteca padrão** do Go. 
- Fornece funções como: 
  - `fmt.Print(...)` → imprime sem quebra de linha. 
  - `fmt.Println(...)` → imprime com quebra de linha. 
  - `fmt.Printf(...)` → imprime com formatação. 
- Importações não usadas geram erro — mantém o código limpo.

---

### (5) `func main() {`
- `func` declara uma função. 
- A função `main` é obrigatória em programas executáveis. 
- Ela é o **ponto de entrada**: o runtime do Go procura exatamente `main.main`. 
- Não recebe parâmetros e não retorna valores. 
- Tudo entre `{ ... }` pertence ao escopo da função.

---

### (6) `fmt.Println("Hello #90DaysOfDevOps")`
- Chama `Println` do pacote `fmt`. 
- Imprime a mensagem e adiciona quebra de linha no final. 
- `Print` não adiciona `\n`. 
- `Printf` permite interpolação de variáveis. 
- Exemplo: 
  ```go
  fmt.Printf("Olá, %s!\n", "Alex")
  ```

---

## Extras úteis

- **Compilar vs. rodar direto** 
  - `go run main.go` → compila temporariamente e executa. 
  - `go build main.go` → gera binário permanente (ex.: `main`). 

- **Estrutura de projetos maiores** 
  - Projetos podem ter múltiplos pacotes em diferentes pastas. 
  - Para iniciar um módulo Go: 
    ```bash
    go mod init exemplo.com/hello
    go mod tidy
    ```

- **Formatação automática** 
  - Use `gofmt` ou a extensão do VS Code. 
  - Go aplica estilo consistente e organiza imports automaticamente.

---

## Erros comuns

- Esquecer `package main` → não gera executável. 
- Importar pacotes e não usar → erro de compilação. 
- Usar errado `Print`, `Println` e `Printf`. 
- Sintaxe rígida: faltou chave, aspas ou parêntese = erro imediato.

---

## Resumindo  

- **Linha 1 →** `package main`  
Todo arquivo Go precisa estar em um pacote. Chamamos de `main` porque é nele que o programa começa.  

- **Linha 3 →** `import "fmt"`  
Aqui importamos o pacote `fmt`, que vem da biblioteca padrão do Go. Ele contém a função `Println()` que usamos na linha 6.  

- **Linha 5 →** `func main()`  
Toda execução começa na função `main`. Ela é o ponto de entrada do programa.  

- **Linha 6 →** `fmt.Println(...)`  
Imprime no terminal a mensagem que você quiser. No nosso caso: `"Hello #90DaysOfDevOps"`.  

---

Agora que entendemos o **Hello World**, estamos prontos para seguir em frente e explorar funções, pacotes e mais detalhes do Go.  

Nos vemos no **Dia 10**!