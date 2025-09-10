---
title: "Jornada DevOps"
description: "90DaysOfDevOps Dia 5 — O Ciclo Contínuo"
image: "/images/devops-day5.png"
author: "alex"
date: 2025-08-26
tags: ["90daysdevops", "dia-5"]
draft: false
---

# Dia 5 – O Ciclo Contínuo

Plan > Code > Build > Test > Release > Deploy > Operate > Monitor  

Hoje vamos olhar para cada etapa desse ciclo e entender como tudo se conecta no mundo DevOps.  

![Imagem Ciclo](/images/devops-day5.png)

---

## Plan (Planejar)  

Tudo começa no planejamento. É aqui que o time de desenvolvimento define quais funcionalidades e correções entram no próximo sprint.  
Como DevOps, essa é a sua chance de influenciar decisões, alinhar infraestrutura e evitar que o time siga por um caminho complicado.  
Lembre-se: os desenvolvedores são, de certa forma, seus “clientes”. Quanto antes você se envolver, melhor.  

---

## Code (Codar)  

Depois do planejamento, o time parte para o código.  
Você não vai escrever a aplicação, mas pode ajudar orientando sobre como ela vai conversar com os serviços e infraestrutura disponíveis.  
No fim, o código vai parar no repositório para os próximos passos.  

---

## Build (Construir)  

Aqui começa a automação: o código é compilado, transpilado ou transformado em uma imagem Docker.  
Tudo isso acontece dentro da **pipeline de CI/CD**.  

---

## Test (Testar)  

Com o build pronto, rodamos os testes.  
O objetivo é minimizar problemas em produção, garantindo que não surjam bugs novos e que nada do que já funcionava seja quebrado.  

---

## Release (Liberar)  

Se os testes passam, é hora do release.  
Pode ser apenas publicar a versão no repositório, ou enviar a imagem Docker para um registry, onde os servidores de produção poderão acessá-la.  

---

## Deploy (Implantar)  

O deploy é quando o código realmente chega à produção.  
É só nesse momento que o negócio vê valor no trabalho feito até aqui — quando a funcionalidade está de fato disponível para o usuário.  

---

## Operate (Operar)  

Com o sistema no ar, começa a operação: monitorar performance, responder incidentes, escalar recursos em horários de pico e reduzir em horários de baixa.  
Aqui também entram notificações para o time saber exatamente o que aconteceu em cada deploy e como está o ambiente.  

---

## Monitor (Monitorar)  

Sem monitoramento, não há como saber se algo quebrou.  
Aqui medimos **CPU, memória, disco, tempo de resposta de APIs, logs** e tudo que permita detectar problemas cedo.  
Logs são fundamentais: ajudam o desenvolvedor a entender o que acontece sem precisar acessar diretamente o ambiente de produção.  

---

## Rinse & Repeat  

Terminou? Volta tudo para o planejamento.  
Esse ciclo nunca para — ele é contínuo.  

---

## CI/CD na prática  

Esse processo todo é o que chamamos de **CI/CD**:  

- **Continuous Delivery** = Plan > Code > Build > Test  
- **Continuous Integration** = Plan > Code > Build > Test > Release  
- **Continuous Deployment** = Deploy > Operate > Monitor  

Essas fases formam o ciclo contínuo do DevOps.  

---

## Recursos  

- *DevOps for Developers – Software or DevOps Engineer?*  
- *Techworld with Nana – DevOps Roadmap 2022*  
- *How to Become a DevOps Engineer in 2021 – DevOps Roadmap*  

---

Se você chegou até aqui, já sabe se esse é ou não o caminho que quer seguir.  
Nos vemos no **Dia 6**!  
