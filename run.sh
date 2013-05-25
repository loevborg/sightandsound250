#!/bin/bash

{ echo -n "ls="; curl 'http://explore.bfi.org.uk/sightandsoundpolls/2012/get_films_for_ranked_list/critic/1/250?_=1369424174760'; } > list.js

node scan.js > sightandsound250.tsv
