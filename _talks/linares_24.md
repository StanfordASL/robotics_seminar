---
speaker: Richard Linares
affiliation: MIT
website: "https://aeroastro.mit.edu/people/richard-linares/"
date: 2024-05-24T12:30:00-0000
location: Skilling Auditorium
location-url: "https://campus-map.stanford.edu/?srch=Skillaud"
title: "Improving Computational Efficiency for Powered Descent Guidance via Transformer-based Tight Constraint Prediction"
abstract: "Future spacecraft and surface robotic missions require increasingly capable autonomy stacks for exploring challenging and unstructured domains and trajectory optimization will be a cornerstone of such autonomy stacks. However, the optimization solvers required remain too slow for use on resource constrained flight-grade computers. In this work, we present Transformer-based Powered Descent Guidance (T-PDG), a scalable algorithm for reducing the computational complexity of the direct optimization formulation of the spacecraft-powered descent guidance problem. T-PDG uses data from prior runs of trajectory optimization algorithms to train a transformer neural network, which accurately predicts the relationship between problem parameters and the globally optimal solution for the powered descent guidance problem. The solution is encoded as the set of tight constraints corresponding to the constrained minimum-cost trajectory and the optimal final landing time. By leveraging the attention mechanism of transformer neural networks, large sequences of time series data can be accurately predicted when given only the spacecraft state and landing site parameters. When applied to the real problem of Mars-powered descent guidance, T-PDG reduces the time for computing the 3 degrees of freedom fuel-optimal trajectory when compared to lossless convexification, improving solution times by up to an order of magnitude. A safe and optimal solution is guaranteed by including a feasibility check in T-PDG before returning the final trajectory."
youtube-code: "TBD"
---
