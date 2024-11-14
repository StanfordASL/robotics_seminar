---
speaker: Pratik Chaudhari
affiliation: UPenn
website: "https://pratikac.github.io/"
date: 2023-05-19T12:30:00-0000
location: Skilling Auditorium
location-url: "https://campus-map.stanford.edu/?id=04-550&lat=37.42697371527761&lng=-122.17280664808126&zoom=18&srch=undefined"
title: "A Picture of the Prediction Space of Deep Networks"
abstract: "Deep networks have many more parameters than the number of training data and can therefore overfit---and yet, they predict remarkably accurately in practice. Training such networks is a high-dimensional, large-scale and non-convex optimization problem and should be prohibitively difficult---and yet, it is quite tractable. This talk aims to illuminate these puzzling contradictions.
We will argue that deep networks generalize well because of a characteristic structure in the space of learnable tasks. The input correlation matrix for typical tasks has a “sloppy” eigenspectrum where, in addition to a few large eigenvalues, there is a large number of small eigenvalues that are distributed uniformly over a very large range. As a consequence, the Hessian and the Fisher Information Matrix of a trained network also have a sloppy eigenspectrum. Using these ideas, we will demonstrate an analytical non-vacuous PAC-Bayes generalization bound for general deep networks.
We will next develop information-geometric techniques to analyze the trajectories of the predictions of deep networks during training. By examining the underlying high-dimensional probabilistic models, we will reveal that the training process explores an effectively low-dimensional manifold. Networks with a wide range of architectures, sizes, trained using different optimization methods, regularization techniques, data augmentation techniques, and weight initializations lie on the same manifold in the prediction space. We will also show that predictions of networks being trained on different tasks (e.g., different subsets of ImageNet) using different representation learning methods (e.g., supervised, meta-, semi-supervised and contrastive learning) also lie on a low-dimensional manifold.
References:
Does the data induce capacity control in deep learning? Rubing Yang, Jialin Mao, and Pratik Chaudhari. [ICML '22] https://arxiv.org/abs/2110.14163
Deep Reference Priors: What is the best way to pretrain a model? Yansong Gao, Rahul Ramesh, and Pratik Chaudhari. [ICML '22] https://arxiv.org/abs/2202.00187
A picture of the space of typical learnable tasks. Rahul Ramesh, Jialin Mao, Itay Griniasty, Rubing Yang, Han Kheng Teoh, Mark Transtrum, James P. Sethna, and Pratik Chaudhari. [ICML ’23]. https://arxiv.org/abs/2210.17011
The Training Process of Many Deep Networks Explores the Same Low-Dimensional Manifold. Jialin Mao, Itay Griniasty, Han Kheng Teoh, Rahul Ramesh, Rubing Yang, Mark K. Transtrum, James P. Sethna, Pratik Chaudhari. 2023. https://arxiv.org/abs/2305.01604"
youtube-code: "ZD2cL-QoI5g"
---
