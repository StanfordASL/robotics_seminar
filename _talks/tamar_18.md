---
speaker: Aviv Tamar
affiliation: Technion
website: "https://people.eecs.berkeley.edu/~avivt/"
date: 2018-11-16T11:00:00-0800
location: McCullough 115
location-url: "https://campus-map.stanford.edu/?srch=McCullough+115"
title: Learning Representations for Planning
abstract: "How can we build autonomous robots that operate in unstructured and dynamic environments such as homes or hospitals? This problem has been investigated under several disciplines, including planning (motion planning, task planning, etc.), and reinforcement learning. While both of these fields have witnessed tremendous progress, each have fundamental drawbacks when it comes to autonomous robots. In general, planning approaches require substantial manual engineering in specifying a model for the domain, while RL is data hungry and does not generalize beyond the tasks seen during training.

In this talk, we present several studies that aim to mitigate these shortcomings by combining ideas from both planning and learning. We start by introducing value iteration networks, a type of differentiable planner that can be used within model-free RL to obtain better generalization. Next, we consider a practical robotic assembly problem, and show that motion planning, based on readily available CAD data, can be combined with RL to quickly learn policies for assembling tight fitting objects. Then, we show how deep learning can be used to improve classical planning, by learning powerful image-based heuristic functions for A* search. We conclude with our recent work on learning to imagine goal-directed visual plans. Motivated by humans’ remarkable capability to predict and plan complex manipulations of objects, we develop a data-driven method that learns to ‘imagine’ a plausible sequence of observations that transition a dynamical system from its current configuration to a desired goal state. Key to our method is Causal InfoGAN, a deep generative model that can learn features that are compatible with strong planning algorithms. We demonstrate our approach on learning to imagine and execute robotic rope manipulation."
---
