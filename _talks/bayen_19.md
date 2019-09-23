---
speaker: Alexandre Bayen
affiliation: UC Berkeley
website: "https://bayen.eecs.berkeley.edu/"
date: 2019-02-08T11:00:00-0000
location: McCullough 115
location-url: "https://campus-map.stanford.edu/?srch=McCullough+115"
title: "Lagrangian control at large and local scales in mixed autonomy traffic flow: optimization and deep-RL approaches"
abstract: "This talk investigates Lagrangian (mobile) control of traffic flow at large scale (city-wide, with fluid flow models) and local scale (vehicular level).

For large scale inference and control, fluid flow models over networks are considered. Algorithms relying on convex optimization are presented for fusion of static and mobile (Lagrangian) traffic information data. Repeated game theory is used to characterize the stability such flows under selfish information patterns (each flow attempting to optimize their latency). Convergence to Nash equilibria of the solutions is presented, leading to control strategies to optimize the network efficiency.

At local scale, the question of how self-driving vehicles will change traffic flow patterns is investigated. We describe approaches based on deep reinforcement learning presented in the context of enabling mixed-autonomy mobility. The talk explores the gradual and complex integration of automated vehicles into the existing traffic system. We present the potential impact of a small fraction of automated vehicles on low-level traffic flow dynamics, using novel techniques in model-free deep reinforcement learning, in which the automated vehicles act as mobile (Lagrangian) controllers to traffic flow.

Illustrative examples will be presented in the context of a new open-source computational platform called FLOW, which integrates state of the art microsimulation tools with deep-RL libraries on AWS EC2. Interesting behavior of mixed autonomy traffic will be revealed in the context of emergent behavior of traffic: https://flow-project.github.io/ inference, control, and game-theoretic algorithms developed to improve traffic flow in transportation networks. The talk will investigate various factors that intervene in decisions made by travelers in large scale urban environments. We will discuss disruptions in demand due to the rapid expansion of the use of “selfish routing” apps, and how they affect urban planning. These disruptions cause congestion and make traditional approaches of traffic management less effective. Game theoretic approaches to demand modeling will be presented. These models encompass heterogeneous users (some using routing information, some not) that share the same network and compete for the same commodity (capacity). Results will be presented for static loading, based on Nash-Stackelberg games, and in the context of repeated games, to account for the fact that routing algorithms learn the dynamics of the system over time when users change their behavior. The talk will present some potential remedies envisioned by planners, which range from incentivization to regulation."
---
