---
title: "DevOps Journey"
description: "90DaysOfDevOps Day 5 — The Continuous Cycle"
image: "/images/devops-day5.png"
author: "alex"
date: 2025-08-26
tags: ["90daysdevops", "day-5"]
draft: false
---

# Day 5 – The Continuous Cycle

Plan > Code > Build > Test > Release > Deploy > Operate > Monitor  

Today we’re going to walk through each step of this cycle and see how everything connects in the DevOps world.  

![Cycle Image](/images/devops-day5.png)

---

## Plan  

It all starts with planning. This is where the development team decides which features and fixes go into the next sprint.  
As a DevOps professional, this is your chance to influence decisions, align infrastructure, and help the team avoid going down the wrong path.  
Remember: developers are, in a way, your “customers.” The earlier you get involved, the better.  

---

## Code  

After planning, the team writes the code.  
You won’t be coding the application itself, but you can guide how it interacts with the infrastructure and available services.  
In the end, the code is merged into the repository, ready for the next steps.  

---

## Build  

Here’s where automation kicks in: the code is compiled, transpiled, or packaged into a Docker image.  
This happens as part of the **CI/CD pipeline**.  

---

## Test  

Once the build is ready, we run tests.  
The goal is to minimize issues in production, making sure no new bugs are introduced and nothing that used to work gets broken.  

---

## Release  

If the tests pass, it’s time for the release.  
That might mean publishing the version in a repository, or pushing the Docker image to a registry where production servers can access it.  

---

## Deploy  

Deployment is where the code actually goes into production.  
It’s only at this moment that the business gains value from all the work invested — when the feature is finally available to users.  

---

## Operate  

With the system live, operations begin: monitoring performance, handling incidents, scaling resources during peak times and scaling down when demand is low.  
This stage also includes notifications so the team knows exactly what happened with each deployment and how the environment is running.  

---

## Monitor  

Without monitoring, you won’t even know there’s a problem.  
Here we track **CPU, memory, disk, API response times, logs** — everything that helps detect issues early.  
Logs are essential: they let developers see what’s happening without needing direct access to production.  

---

## Rinse & Repeat  

Done? Back to planning.  
This cycle never ends — it’s continuous.  

---

## CI/CD in Practice  

This entire process is what we call **CI/CD**:  

- **Continuous Delivery** = Plan > Code > Build > Test  
- **Continuous Integration** = Plan > Code > Build > Test > Release  
- **Continuous Deployment** = Deploy > Operate > Monitor  

Together, these phases form the continuous DevOps cycle.  

---

## Resources  

- *DevOps for Developers – Software or DevOps Engineer?*  
- *Techworld with Nana – DevOps Roadmap 2022*  
- *How to Become a DevOps Engineer in 2021 – DevOps Roadmap*  

---

If you’ve made it this far, you already know whether this is the path you want to follow or not.  
See you on **Day 6**!  
