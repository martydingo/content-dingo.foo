---
date: 2024-01-19
draft: false
title: Screeps Private Server Cheatsheet
author: 
  name: Martin George
  avatar: "https://secure.gravatar.com/avatar/b107d40c1c78108e3108a3000699f45dfd29969a236da8a29d8c1206f72d2ce8"
description: A cheat sheet for operating a Screeps private server
tags: ["screeps", "cheatsheet", "private", "server"]
---


## Introduction

This cheat sheet serves to provide a resource on common commands used for running a private Screeps server. These can be useful when undertaking testing of various things, e.g. you need to increase the room level to build structures such as Towers or Storage.

## Commands


### Set Room RCL

```
storage.db['rooms.objects'].update({ _id: '1bc30772347c388' },{ $set: { level: 8 }})
```

### Set All Construction Sites to 99.9%

```
storage.db['rooms.objects'].update({ type: 'constructionSite', room: 'W8N3' },{ $set: { progress: 999999 }})
```