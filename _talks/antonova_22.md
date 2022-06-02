---
speaker: Rika Antonova
affiliation: Stanford
website: "https://contactrika.github.io/"
date: 2022-04-22T12:15:00-0000
location: Gates B01
location-url: "https://cs.stanford.edu/about/directions"
title: "Distributional Representations and Scalable Simulations for Real-to-Sim-to-Real with Deformables"
abstract: "Success stories of sim-to-real transfer can make it seem effortless and robust. However, the success hinges on bringing simulation close enough to reality. This real-to-sim problem of inferring simulation parameters is particularly challenging for deformable objects. Here, many conventional techniques fall short, since they often require precise state estimation and accurate dynamics.
In this talk, I will describe our formulation of real-to-sim as probabilistic inference over simulation parameters. Our key idea is in how we define the state space of a deformable object. We view noisy keypoints extracted from an image of an object as samples from the distribution that captures object geometry. We then embed this distribution into a reproducing kernel Hilbert space (RKHS). Object motion can then be represented by a trajectory of distribution embeddings in this novel state space. This allows for a principled way to incorporate noisy state observations into modern Bayesian tools for simulation parameter inference. Using a small set of real-world trajectories, we can estimate posterior distributions over simulation parameters, such as elasticity, friction, and scale, even for highly deformable objects.
I will conclude the talk by outlining our next steps for improving real-to-sim and sim-to-real. One branch of our work explores the potential of differentiable simulators to increase the speed and precision of real-to-sim. Another branch aims to create flexible simulation environments for large-scale learning, with thousands of objects and flexible customization, ultimately aiming to enable sim-to-real for multi-arm and mobile manipulation with deformables."
youtube-code: "1Ja0JO5nzdo"
---
