#!/bin/bash

appname=$(awk 'NR==1 {print substr($0,1,length($0)-1)}' .server)
port=$(awk 'NR==2' .server)

pm2 start node --name "$appname:$port" --watch -- --experimental-modules serve.mjs -p $port