---
speaker: Rachel Luo
affiliation: Stanford
website: "https://stanfordasl.github.io//people/rachel-luo/"
date: 2023-01-20T12:30:00-0000
location: Skilling Auditorium
location-url: "https://campus-map.stanford.edu/?id=04-550&lat=37.42697371527761&lng=-122.17280664808126&zoom=18&srch=undefined"
title: "Incorporating Sample Efficient Monitoring into Learned Autonomy"
abstract: "When deploying machine learning models in high-stakes robotics applications, the ability to detect unsafe situations is crucial. Warning systems are thus designed to provide alerts when an unsafe situation is imminent (in the absence of corrective action), with the objective of issuing alerts as quickly as possible when there is a problem (i.e. they should be sample-efficient). They should also come with statistical guarantees ensuring that whenever there is an unsafe situation, the warning system will detect it (i.e. a low false negative rate) or that not too many false alarms will be issued (a low false positive rate).
In this talk, I will present warning systems for two types of situations. First, I will introduce a real-time warning system framework that can detect unsafe situations when there is no distribution shift. We provide a guarantee on the false negative rate (i.e. of the situations that are unsafe, fewer than epsilon will occur without an alert) using very few samples (only 1/epsilon), and we empirically observe low false detection (positive) rates. Second, I will present a warning system for identifying distribution shifts. Our method is capable of detecting these distribution shifts up to 11x faster than prior work on realistic robotics settings, while providing a high probability guarantee against false alarms. We empirically observe low false negative rates (whenever there is a distribution shift in our experiments, our method indeed emits an alert)."
youtube-code: "TBD"
---
