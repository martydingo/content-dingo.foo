---
title: Eleventy
draft: false
description: "A helm chart to deploy an instance of eleventy & nginx side by side"
category: "Helm Chart"
tags: [docker, astro, linux, release, helm, static, html, container, react]
repo: https://github.com/martydingo/eleventy
date: 2022-08-17
---

# Eleventy

*Container & Helm Chart*

**Github:** https://github.com/martydingo/eleventy

**Container:** https://hub.docker.com/r/martydingo/eleventy

## Timeline

## Example Values
````yaml
# Default values for eleventy.
# This is a YAML-formatted file.
# Declare variables to be passed into your templates.

replicaCount: 1

nameOverride: ""
fullnameOverride: ""

# Note that the PV's **must** have
# accessMode: ReadWriteMany
storage:
    projects:
      persistentVolumeName: 
      requests:
        storage: 1G
    www: 
      persistentVolumeName: 
      requests:
        storage: 1G
      
eleventy:
  # The directory Eleventy will enter and generate static content for
  # within <storage.projects.persistentVolumeClaimName>
  project: chart-example.local
  image:
    repository: martydingo/eleventy
    imagePullPolicy: Always
    # Overrides the image tag whose default is the chart appVersion.
    tag: "latest"
  securityContext: {}
    # capabilities:
    #   drop:
    #   - ALL
    # readOnlyRootFilesystem: true
    # runAsNonRoot: true
    # runAsUser: 1000
  service:
    type: ClusterIP
    annotations: {}
    ipFamilyPolicy: SingleStack
    port: 8080
  resources: 
    requests:
      memory: "128Mi"
      cpu: "125m"
    limits:
      memory: "512Mi"
      cpu: "8000m"   

nginx:
  image:
    repository: nginx
    imagePullPolicy: Always
    # Overrides the image tag whose default is the chart appVersion.
    tag: "latest"
  securityContext: {}
    # capabilities:
    #   drop:
    #   - ALL
    # readOnlyRootFilesystem: true
    # runAsNonRoot: true
    # runAsUser: 1000
  service:
    type: ClusterIP
    annotations: {}
    ipFamilyPolicy: SingleStack
    port: 80
  ingress:
    enabled: false
    className: "nginx"
    annotations: {}
      # kubernetes.io/tls-acme: "true"
    hosts:
      - host: chart-example.local
        paths:
          - path: /
            pathType: Prefix
    tls:
      - hosts:
          - chart-example.local
        secretName: secret-chart-example-tls
  resources: 
    requests:
      memory: "128Mi"
      cpu: "125m"
    limits:
      memory: "512Mi"
      cpu: "8000m"   

nodeSelector: {}

tolerations: []

affinity: {}

podAnnotations: {}

podSecurityContext: {}
  # fsGroup: 2000
````