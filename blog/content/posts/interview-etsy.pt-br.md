---
title: Entrevista com Michael Rembetsy (VP de Operações Técnicas do Etsy)
description: Como o Etsy faz o DevOps funcionar
image: /images/etsy.png
author: alex
date: 2025-08-27
tags: ["entrevista", "etsy"]
draft: false
weight: 2
---

![Etsy](/images/etsy.png)

# Como o Etsy faz o DevOps funcionar

Estou trazendo essa entrevista entre **John Dix (Editor-Chefe da Network
World)** e **Michael Rembetsy (VP de Operações Técnicas do Etsy)**,
publicada originalmente em 19 de fevereiro de 2015.

------------------------------------------------------------------------

O Etsy, que se descreve como um "mercado online onde pessoas do mundo
todo se conectam para comprar e vender produtos únicos", é
frequentemente citado como exemplo de sucesso em DevOps. A empresa
adotou os conceitos cedo e hoje colhe os benefícios ao escalar para
acompanhar o rápido crescimento do negócio.

John Dix conversou com Michael Rembetsy para entender como a empresa
colocou as ideias em prática e quais lições aprendeu no caminho.

------------------------------------------------------------------------

### **Vamos começar com uma breve atualização sobre onde a empresa está hoje.**

A empresa foi fundada em 2005 e, quando entrei em 2008 (mesmo ano em que
Chad Dickerson, hoje CEO, também chegou), tínhamos cerca de 35
funcionários. Agora temos mais de 600 colaboradores e cerca de 42
milhões de membros em mais de 200 países, incluindo mais de 1 milhão de
vendedores ativos. Em 2013, movimentamos cerca de 1,3 bilhão de dólares
em vendas brutas de mercadorias.

------------------------------------------------------------------------

### **Como, onde e quando a empresa se interessou por DevOps?**

Quando entrei, o crescimento era muito orgânico, o que resultava em
muitos silos, barreiras internas e desconfiança entre times. O
departamento de engenharia, por exemplo, criou uma camada intermediária
para permitir que desenvolvedores falassem com os bancos de dados de
forma mais rápida e escalável. Mas acabou acontecendo o contrário: isso
criou ainda mais barreiras.

Apesar disso, havia um ótimo ambiente de equipe. As pessoas ficavam até
tarde, trabalhavam longas horas, socializavam fora do trabalho --- tudo
típico de startups. A energia era incrível, mas tínhamos problemas de
engenharia que dificultavam colocar coisas em produção. Os deploys eram
dolorosos. Seguíamos o modelo tradicional: desenvolvedores escrevem
código e operações fazem o deploy. Isso não escala.

------------------------------------------------------------------------

### **Com que frequência vocês faziam deploys naquela época?**

Duas vezes por semana, e cada deploy levava mais de quatro horas.

------------------------------------------------------------------------

### **Duas vezes por semana já era bastante frequente naquela época, certo?**

Comparado ao resto da indústria, sim. Sempre quisemos ser mais rápidos
que os outros. Mas em 2008 nos comparávamos ao Flickr, que fazia 10
deploys por dia --- algo inédito. Então estávamos mais rápidos que
muitas empresas, mas sem confiança. Era doloroso e tornava a experiência
ruim. Não queríamos distribuir dor continuamente. Sabíamos que precisava
haver um jeito melhor.

------------------------------------------------------------------------

### **De onde surgiu a ideia de mudar? Foi uma percepção geral de que algo tinha que ser feito?**

A percepção veio de Chad. Ele trouxe experiência do Yahoo e sabia que
poderíamos fazer melhor. Mas primeiro precisávamos estabilizar a base:
rede sólida, site no ar e confiança dos membros. Isso levou cerca de um
ano e meio.

Um exemplo: em 2009, para trocar o banner da *homepage* (que mudava uma
vez por semana), precisávamos de um deploy completo de quatro horas. Era
doloroso para todos. Então criamos ferramentas para que alguém de
operações de membros ou engenharia pudesse mudar o banner com um clique.
Esse foi um dos primeiros sinais de DevOps dentro do Etsy.

------------------------------------------------------------------------

### **Então isso levou à criação de ferramentas de DevOps?**

Sim. Criamos uma equipe de ferramentas de desenvolvimento para permitir
que pessoas fora de operações também pudessem fazer deploys. Depois
percebemos que precisávamos eliminar a aplicação intermediária, que só
nos atrasava. Também queríamos parar de usar TAR + SSH + Rsync em 15
servidores. Era lento e arriscado.

No fim de 2009 e início de 2010, começamos a deixar os próprios
desenvolvedores fazerem deploy. Isso os fez assumir responsabilidade
pelo impacto, desempenho e estabilidade do site. Sim, era intimidador
apertar o "botão vermelho" que coloca código no ar para centenas de
milhares de pessoas, mas era necessário. O site iria quebrar de vez em
quando, mas o importante era que os desenvolvedores se sentissem
empoderados e conscientes.

------------------------------------------------------------------------

### **Então não houve um "momento DevOps" de epifania. Isso surgiu organicamente?**

Exatamente. O desenvolvimento propunha formas de acelerar e operações
trazia visibilidade e métricas. Não havia atrito, mas colaboração. Com
isso, a cultura melhorou, a confiança aumentou e as barreiras sumiram.

Era sobre construir confiança. Como em qualquer relacionamento, leva
tempo. Não acontece em um ou dois trimestres. Precisa de fé, liderança e
proximidade. Nunca houve clima de "fulano quebrou o site". Todos
deixavam o ego de lado.

------------------------------------------------------------------------

### **E a proximidade física dos times? Isso ajudou?**

Sim. Nos primeiros anos tínhamos gente espalhada (costa leste, costa
oeste, Minnesota, Nova York), mas em 2009 trouxemos tudo para dentro de
casa. Isso criou coesão. Mais tarde voltamos a ser mais remotos, mas
nesse período a proximidade foi essencial.

------------------------------------------------------------------------

### **Vocês chegaram a integrar oficialmente dev e ops em um mesmo time?**

Não, mas criamos o conceito de **operações designadas** (*designated
ops*). Não era alguém dedicado, mas sim um responsável que participava
das reuniões de um time específico, injetando o pensamento de operações
desde o início de uma feature. Isso educava os desenvolvedores e criava
aliados dentro da empresa.

Exemplo: o time de busca hoje cuida do próprio *on-call* da
infraestrutura de busca. Se eles não estão disponíveis, sobe para
operações. Isso trouxe grandes benefícios de colaboração.

------------------------------------------------------------------------

### **Então para vocês DevOps é mais um método de trabalho?**

Correto. No Etsy não existe um "time de DevOps".

------------------------------------------------------------------------

### **Quantas pessoas estavam envolvidas nessa altura?**

Mais de 200 em engenharia de produto, incluindo operações,
desenvolvimento e produto.

------------------------------------------------------------------------

### **Como vocês medem sucesso? Pela frequência de deploys?**

Sucesso é um termo amplo. Para nós, falha também é sucesso porque gera
aprendizado. Não temos cinco métricas fixas; temos milhões de gráficos.
Hoje fazemos mais de 60 deploys por dia, mas o objetivo não é aumentar
números, e sim melhorar o processo conforme os times precisam.

------------------------------------------------------------------------

### **Imagino que vocês tiveram que padronizar ferramentas conforme cresceram.**

Sim. Optamos por LAMP (Linux, Apache, MySQL, PHP). Criamos o
**Deployinator**, nossa ferramenta de deploy, que abrimos como open
source. Usamos Chef para *configuration management* e ferramentas como
Nagios, Graphite e Ganglia para monitoramento.

------------------------------------------------------------------------

### **E que conselho dariam para outras empresas que pensam em adotar DevOps?**

Perguntem-se primeiro **por quê**. Se for só para atrair talentos, é um
motivo ruim. Mas se for para melhorar cultura, motivação e produto, é
ótimo. Só não achem que é rápido. Não dá para "colocar DevOps" em um
trimestre e esperar mágica. É uma mudança cultural que exige tempo,
esforço e colaboração em todos os níveis.

------------------------------------------------------------------------

## Conclusão

O caso do Etsy mostra que DevOps não é um departamento, mas um jeito de
trabalhar: colaboração, confiança, empoderamento e aprendizado
constante.