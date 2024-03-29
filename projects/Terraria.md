---
title: Terraria
draft: false
description: "A helm chart to deploy an instance of @ryansheehan's terraria server"
category: "Helm Chart"
tags: [docker, terraria, linux, release, helm, server, game, container]
repo: https://github.com/martydingo/terraria
date: 2022-09-28
preview_image: ./images/terraria_kubernetes_1.jpg
---

## Overview

This is a helm chart which deploys an instance of Terraria, using @ryansheehan's image of Terraria.

## Chart

```yaml
# Default values for terraria.
# This is a YAML-formatted file.
# Declare variables to be passed into your templates.

terraria:
  serversettings:
    #Load a world and automatically start the server.
    #world: /root/.local/share/Terraria/Worlds/world1.wld
    
    #Creates a new world if none is found. World size is specified by: 1(small), 2(medium), and 3(large).
    #autocreate: 
    
    #Sets the world seed when using autocreate
    #seed: wesomeSeed
    
    #Sets the name of the world when using autocreate
    #worldname: erraria
    
    #Sets the difficulty of the world when using autocreate 0(classic), 1(expert), 2(master), 3(journey)
    #difficulty: 
    
    #Sets the max number of players allowed on a server.  Value must be between 1 and 255
    #maxplayers: 
    
    #Set the port number
    #port: 7777
    
    #Set the server password
    #password: @55w0rd
    
    #Set the message of the day
    #motd: lease don�t cut the purple trees!
    
    #Sets the folder where world files will be stored
    #worldpath: :\Users\Defaults\My Documents\My Games\Terraria\Worlds\
    
    #Sets the number of rolling world backups to keep
    #worldrollbackstokeep: 
    
    #The location of the banlist. Defaults to "banlist.txt" in the working directory.
    #banlist: anlist.txt
    
    #Adds addition cheat protection.
    #secure: 
    
    #Sets the server language from its language code. 
    #English = en-US, German = de-DE, Italian = it-IT, French = fr-FR, Spanish = es-ES, Russian = ru-RU, Chinese = zh-Hans, Portuguese = pt-BR, Polish = pl-PL,
    #language: n-US
    
    #Automatically forward ports with uPNP
    upnp: 
    
    #Reduces enemy skipping but increases bandwidth usage. The lower the number the less skipping will happen, but more data is sent. 0 is off.
    #npcstream: 0
    
    #Default system priority 0:Realtime, 1:High, 2:AboveNormal, 3:Normal, 4:BelowNormal, 5:Idle
    priority: 
    
    #Reduces maximum liquids moving at the same time. If enabled may reduce lags but liquids may take longer to settle.
    #slowliquids: 
    
    #Journey mode power permissions for every individual power. 0: Locked for everyone, 1: Can only be changed by host, 2: Can be changed by everyone
    #journeypermission_time_setfrozen: 
    #journeypermission_time_setdawn: 
    #journeypermission_time_setnoon: 
    #journeypermission_time_setdusk: 
    #journeypermission_time_setmidnight: 
    #journeypermission_godmode: 
    #journeypermission_wind_setstrength: 
    #journeypermission_rain_setstrength: 
    #journeypermission_time_setspeed: 
    #journeypermission_rain_setfrozen: 
    #journeypermission_wind_setfrozen: 
    #journeypermission_increaseplacementrange: 
    #journeypermission_setdifficulty: 
    #journeypermission_biomespread_setfrozen: 
    #journeypermission_setspawnrate: 
    

persistence:
  logs:
    enabled: true
    mountPath: /terraria-server/logs
    subpath: 
    existingPersistentVolumeClaim:
    persistentVolumeClaim:
      storageClassName: "~"
      storageSize: 1Gi
  worlds:
    enabled: true
    mountPath: /root/.local/share/Terraria/Worlds
    subpath: 
    existingPersistentVolumeClaim:
    persistentVolumeClaim:
      storageClassName: "~"
      storageSize: 1Gi

env:
  WORLD_FILENAME: "The_Enclosure_of_Cats.wld"

replicaCount: 1

image:
  repository: ryshe/terraria
  imagePullPolicy: IfNotPresent
  # Overrides the image tag whose default is the chart appVersion.
  # See https://hub.docker.com/r/ryshe/terraria/tags for different versions/tshock variants
  tag: "vanilla-latest"
imagePullSecrets: []

securityContext: 
  # capabilities:
  #   drop:
  #   - ALL
  # readOnlyRootFilesystem: true
  runAsNonRoot: false
  runAsUser: 0

service:
  annotations: {}
  type: LoadBalancer
  loadBalancerIP: ""
  ipFamilyPolicy: PreferDualStack
  port: 7777

resources: {}
  # We usually recommend not to specify default resources and to leave this as a conscious
  # choice for the user. This also increases chances charts run on environments with little
  # resources, such as Minikube. If you do want to specify resources, uncomment the following
  # lines, adjust them as necessary, and remove the curly braces after 'resources:'.
  # limits:
  #   cpu: 100m
  #   memory: 128Mi
  # requests:
  #   cpu: 100m
  #   memory: 128Mi

```