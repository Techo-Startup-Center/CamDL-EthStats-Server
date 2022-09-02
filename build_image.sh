#!/bin/bash
registry=registry.camdx.gov.kh/camdl/ethstat-server
currentDate=`date +"%y%m%d"`
last_gitcommit_hash=`git rev-parse --short HEAD`
tag="1.0.11"

color_white='\e[0m'
color_green='\e[32m'

echo "\n${color_green}$repo:$tag is building...${color_white}\n"
docker build --pull -t $registry$repo:$tag .

