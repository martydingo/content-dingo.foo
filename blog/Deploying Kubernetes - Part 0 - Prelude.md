---
draft: true
title: Prelude
author: 
  name: Martin George
  avatar: "https://secure.gravatar.com/avatar/b107d40c1c78108e3108a3000699f45dfd29969a236da8a29d8c1206f72d2ce8"

date: 2022-08-17
description: The prelude to a multi-part series on deploying Kubernetes
tags: ["kubernetes", "k8s", "deployment", "prelude"]
series: "Deploying Kubernetes"
---


# Deploying Kubernetes

Welcome!
 
This is the prelude to a multi-part series on deploying Kubernetes. 

Many articles only cover the initial installation, usually stopping following the installation of the CNI (Container Networking Interface) plugin, however there is still so much more to configure from this point, from file storage, to more advanced network configurations that leverages BGP (e.g. `MetalLB`).

This series aims to rectify that by (*hopefully*) delivering the reader knowledge on not just how to install Kubernetes, but also on the installation of the required infrastructure to which we'll deploy Kubernetes onto, as well as operating Kubernetes, and the relevant services that are commonly considered as required as apart of any Kubernetes deployment (e.g. `ingress-ngix`, `cert-manager`, etc)

Helpfully, this series will be written while underling a fresh rebuild of a Kubernetes cluster, so these articles will reflect the configuration of the cluster that the very blog resides on. 


