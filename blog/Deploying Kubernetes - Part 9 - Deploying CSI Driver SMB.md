---
date: 2022-08-31
draft: true
title: Deploying CSI Driver SMB
author: 
  name: Martin George
  avatar: "https://secure.gravatar.com/avatar/b107d40c1c78108e3108a3000699f45dfd29969a236da8a29d8c1206f72d2ce8"

description: The tenth part of a multi-part series on deploying Kubernetes
tags: ["kubernetes", "k8s", "deployment", "csi", "smb"]
series: "Deploying Kubernetes"
---

## Introduction

## System Preperation

1. On all systems, run the following:
	1. `sudo dnf install -y cifs-utils`

## Helm
### Repo

1. `helm repo add csi-driver-smb https://raw.githubusercontent.com/kubernetes-csi/csi-driver-smb/master/charts`
2. `helm install -n kube-system csi-driver-smb csi-driver-smb/csi-driver-smb -f helm-csi-driver-smb-values.yaml`

## Kubernetes
### Secret

1. `kubectl create secret generic -n home-dingo-services secret-smb-home-dingo-services --from-literal username=<username> --from-literal password="<password>"`