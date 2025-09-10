---
author: alex
date: 2025-08-27
description: How Etsy Makes DevOps Work
draft: false
image: /images/etsy.png
tags: ["interview", "etsy"]
title: Interview with Michael Rembetsy (VP of Technical Operations at Etsy)
weight: 2
---

![Etsy](/images/etsy.png)

# How Etsy Makes DevOps Work

I am bringing this interview between **John Dix (Editor-in-Chief of
Network World)** and **Michael Rembetsy (VP of Technical Operations at
Etsy)**, originally published on February 19, 2015.

------------------------------------------------------------------------

Etsy, which describes itself as an "online marketplace where people all
over the world connect to buy and sell unique goods," is frequently
cited as a success story in DevOps. The company adopted the concepts
early and today reaps the benefits as it scales to keep up with rapid
business growth.

John Dix spoke with Michael Rembetsy to understand how the company put
these ideas into practice and what lessons were learned along the way.

------------------------------------------------------------------------

### **Let's start with a brief update on where the company stands today.**

The company was founded in 2005 and, when I joined in 2008 (the same
year Chad Dickerson, now CEO, also joined), we had about 35 employees.
Now we have more than 600 employees and about 42 million members in more
than 200 countries, including over 1 million active sellers. In 2013, we
handled about \$1.3 billion in gross merchandise sales.

------------------------------------------------------------------------

### **How, where and when did the company become interested in DevOps?**

When I joined, growth was very organic, which resulted in many silos,
internal barriers, and distrust between teams. The engineering
department, for example, created a middle layer to let developers talk
to databases more quickly and at scale. But the opposite happened: it
created even more barriers.

Despite this, there was a great team atmosphere. People stayed late,
worked long hours, socialized after work --- all the typical startup
behaviors. The energy was amazing, but we had engineering issues that
made shipping hard. Deploys were painful. We followed the traditional
model: developers write the code and ops deploy it. That doesn't scale.

------------------------------------------------------------------------

### **How often were you deploying in those early days?**

Twice a week, and each deploy took more than four hours.

------------------------------------------------------------------------

### **Twice a week was already pretty frequent back then, right?**

Compared to the rest of the industry, yes. We always wanted to move
faster than others. But in 2008 we compared ourselves to Flickr, which
was doing 10 deploys a day --- unheard of at the time. So we were faster
than many companies, but without confidence. It was painful and made the
experience unpleasant. We didn't want to continuously deploy pain. We
knew there had to be a better way.

------------------------------------------------------------------------

### **Where did the idea to change come from? Was it a general realization that something had to give?**

The idea came from Chad. He brought experience from Yahoo and knew we
could do better. But first we had to stabilize the foundation: a solid
network, a site that stayed up, and confidence from members. That took
about a year and a half.

One example: in 2009, to change the homepage banner (which rotated
weekly), we had to do a full site deploy of four hours. It was painful
for everyone. So we created tools to let someone from member ops or
engineering change the banner with a click. That was one of the first
DevOps-like signals inside Etsy.

------------------------------------------------------------------------

### **So that led to the creation of DevOps tools?**

Yes. We created a dev tools team so people outside of ops could deploy.
Then we realized we needed to eliminate the middle application, which
was slowing us down. We also wanted to stop using TAR + SSH + Rsync
across 15 servers. It was slow and risky.

By late 2009 and early 2010, we started letting developers deploy their
own code. That made them take responsibility for the site's impact,
performance, and stability. Yes, it was intimidating to hit the "red
button" that put code live for hundreds of thousands of people, but it
was necessary. The site would break sometimes, but what mattered was
that developers felt empowered and conscious of what they were doing.

------------------------------------------------------------------------

### **So there wasn't a "DevOps epiphany" moment. It emerged organically?**

Exactly. Development proposed faster ways to deploy, operations added
visibility and metrics. There was no animosity, just collaboration. As a
result, culture improved, trust grew, and barriers disappeared.

It was about building trust. Like in any relationship, it takes time. It
doesn't happen in one or two quarters. It requires faith, leadership,
and proximity. No one ever walked in saying "so-and-so broke the site."
People left their egos at the door.

------------------------------------------------------------------------

### **And what about the physical proximity of the teams? Did that help?**

Yes. In the early years we had people spread out (west coast, east
coast, Minnesota, New York), but in 2009 we brought things in-house.
That created cohesion. Later we became more remote again, but at that
time proximity was essential.

------------------------------------------------------------------------

### **Did you ever officially integrate dev and ops into one team?**

No, but we created the concept of **designated operations** (*designated
ops*). It wasn't a dedicated person, but someone responsible for
attending a specific team's meetings and injecting an ops mindset early
into feature development. This educated developers and created allies
inside the company.

For example, the search team now handles its own on-call for search
infrastructure. If they are unavailable, it escalates to ops. That
brought major collaboration benefits.

------------------------------------------------------------------------

### **So for you, DevOps is more of a working method?**

Correct. At Etsy, there is no "DevOps team."

------------------------------------------------------------------------

### **How many people were involved at that point?**

More than 200 in product engineering, including operations, development,
and product.

------------------------------------------------------------------------

### **How do you measure success? By deployment frequency?**

Success is a broad term. For us, failure is also success because it
generates learning. We don't have five fixed metrics; we have millions
of graphs. Today we deploy more than 60 times a day, but the goal isn't
just more numbers. It's about improving the process as teams need it.

------------------------------------------------------------------------

### **I assume you had to standardize tools as you scaled.**

Yes. We went with LAMP (Linux, Apache, MySQL, PHP). We built
**Deployinator**, our deployment tool, which we open-sourced. We use
Chef for configuration management, and tools like Nagios, Graphite, and
Ganglia for monitoring.

------------------------------------------------------------------------

### **And what advice would you give to other companies considering DevOps?**

First, ask yourselves **why**. If it's just to attract talent, that's a
bad reason. But if it's to improve culture, motivation, and product,
that's a great reason. Just don't think it's fast. You can't "add
DevOps" in a quarter and expect magic. It's a cultural change that takes
time, effort, and collaboration at all levels.

------------------------------------------------------------------------

## Conclusion

The Etsy case shows that DevOps is not a department, but a way of
working: collaboration, trust, empowerment, and continuous learning.