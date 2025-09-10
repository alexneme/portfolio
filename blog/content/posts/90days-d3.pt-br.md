---
title: "Jornada DevOps"
description: "90DaysOfDevOps Dia 3 — O ciclo da Aplicação"
image: "/images/devops-lifecycle.jpg"
author: "alex"
date: 2025-08-23
tags: ["90daysdevops", "dia-3"]
draft: false
---

# Dia 3 – O Ciclo de Vida do DevOps (Foco na Aplicação)

![Imagem Ciclo DevOps](/images/devops-lifecycle.jpg)

Hoje vamos dar uma olhada no ciclo de vida de uma aplicação dentro do mundo DevOps. Essa ideia de ciclo se repete muito: Desenvolvimento, Testes, Integração, Deploy e Monitoramento. Parece repetitivo, mas cada volta no ciclo traz melhorias — e é isso que mantém tudo interessante.

---

## Desenvolvimento  

Imagine que você vai criar uma aplicação do zero. Primeiro, vem a conversa com cliente ou usuário final para entender os requisitos e planejar. Depois, a codificação em si.  

Ferramentas aqui? Basicamente IDE e linguagem de programação escolhida. Como DevOps, você normalmente não vai escrever a aplicação, mas entender um pouco de código ajuda a tomar decisões melhores de infraestrutura.  

Outro ponto essencial: versionamento. Seja um dev ou um time inteiro, o código deve ser mantido em repositórios como GitHub ou GitLab. E sim, vamos aprofundar bastante em Git mais pra frente.

---

## Testes  

Com requisitos e aplicação começando a tomar forma, entra a fase de testes. Aqui a ideia é rodar a aplicação em diferentes ambientes e caçar bugs.  

Hoje é bem comum usar containers para simular esses ambientes, reduzindo custos e facilitando o processo. Quase sempre, esses testes já entram como parte de **Integração Contínua**, ou seja, automatizados. Isso evita depender de dezenas de QAs rodando teste manual e trava no modelo tradicional em cascata.

---

## Integração  

Essa fase é o coração do ciclo. A cada commit no repositório, a aplicação passa por testes automáticos. Assim, problemas são detectados cedo, antes de virar dor de cabeça.  

E se sua empresa não cria software, mas compra pronto de fornecedores? Ainda faz sentido conhecer esse processo: muitos times adotam CI/CD mesmo em softwares de prateleira para agilizar deploys e evitar retrabalho.  

---

## Deploy  

Beleza, aplicação pronta e testada. Hora de colocar em produção. É aqui que a mágica fica mais interessante: diferentes aplicações pedem diferentes infraestruturas.  

É nesse ponto que entram práticas como **Infraestrutura como Código**, **Gerenciamento de Configuração** e, claro, containers orquestrados por **Kubernetes**. Esse tema vai ocupar boa parte dos próximos dias do desafio.

---

## Monitoramento  

A aplicação já está rodando e sendo atualizada continuamente. Mas será que o usuário final está satisfeito? Aqui entra o monitoramento.  

Não é só acompanhar uptime: envolve performance, confiabilidade, observabilidade e até custos (alô, FinOps). O feedback dessa etapa ajuda os desenvolvedores a decidir o que melhorar na próxima versão.  

---

## O papel do “DevOps Engineer”  

Um ponto importante: embora o mercado use muito o título **DevOps Engineer**, o DevOps em si não é um cargo — é uma cultura e um processo que pode (e deve) ser adotado em diversas funções: Cloud Engineer, SysAdmin, Arquiteto de Infra, entre outras.  

O título em si importa menos do que o mindset de aplicar automação, colaboração e melhoria contínua em qualquer posição.

---

Se você chegou até aqui, já deu para sentir se esse é o caminho que você quer seguir ou não. Nos vemos no **Dia 4**!