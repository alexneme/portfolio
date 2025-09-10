---
title: "DevOps Journey"
description: "90DaysOfDevOps Day 3 — The Lifecycle"
image: "/images/devops-lifecycle.jpg"
author: "alex"
date: 2025-08-23
tags: ["90daysdevops", "day-3"]
draft: false
---

# Day 3 – The DevOps Lifecycle (Application Focus)

![DevOps Lifecycle Image](/images/devops-lifecycle.jpg)

Today we’ll take a look at the lifecycle of an application in the DevOps world. This idea of a cycle repeats itself a lot: Development, Testing, Integration, Deployment, and Monitoring. It may sound repetitive, but every turn of the cycle brings improvements — and that’s what keeps it interesting.

---

## Development  

Imagine you’re starting an application from scratch. First comes the conversation with the client or end user to understand requirements and plan. Then, the actual coding.  

Tools here? Mainly your IDE and the chosen programming language. As a DevOps professional, you won’t usually be writing the application itself, but understanding a bit of code helps you make better infrastructure decisions.  

Another key point: version control. Whether it’s a solo dev or a whole team, code must be stored in repositories like GitHub or GitLab. And yes, we’ll dive much deeper into Git soon.  

---

## Testing  

With requirements defined and the app starting to take shape, the testing phase comes in. The idea here is to run the application in different environments and hunt for bugs.  

Nowadays it’s very common to use containers to simulate those environments, reducing costs and making the process easier. Almost always, these tests become part of **Continuous Integration** — meaning they’re automated. This avoids relying on dozens of QAs running manual tests and prevents bottlenecks from the old waterfall model.  

---

## Integration  

This phase is the heart of the cycle. With every commit in the repository, the application goes through automated tests. That way, problems are detected early before they turn into real headaches.  

And what if your company doesn’t build software but buys it from vendors? It still makes sense to understand this process: many teams adopt CI/CD even for off-the-shelf software to speed up deployments and avoid rework.  

---

## Deployment  

Alright, the application is ready and tested. Time to put it into production. This is where things get more interesting: different applications require different infrastructures.  

This is where practices like **Infrastructure as Code**, **Configuration Management**, and of course, containers orchestrated by **Kubernetes** come into play. This topic will take up a good portion of the coming days in the challenge.  

---

## Monitoring  

The application is live and continuously updated. But is the end user satisfied? That’s where monitoring comes in.  

It’s not just about tracking uptime: it involves performance, reliability, observability, and even costs (hello, FinOps). The feedback from this step helps developers decide what to improve in the next version.  

---

## The Role of the “DevOps Engineer”  

An important point: although the market often uses the title **DevOps Engineer**, DevOps itself is not a job title — it’s a culture and a process that can (and should) be adopted in many roles: Cloud Engineer, SysAdmin, Infrastructure Architect, and others.  

The title itself matters less than the mindset of applying automation, collaboration, and continuous improvement to any position.  

---

If you’ve made it this far, you’ve already got a sense of whether this is the path you want to follow or not. See you on **Day 4**!
