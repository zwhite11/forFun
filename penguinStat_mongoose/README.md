# Penguin Basketball Stats 2018

This project is the same as the Penguin Stat Site except that the data is stored with MongoDB using Mongoose and Node.js. The data is no longer stored locally in .json files.

Stats for the 2018 senior season in the NWBU
Stats manually input from http://websites.sportstg.com/assoc_page.cgi?c=1-4335-0-0-0&sID=402231
Bootstrap and Angular


## Modules used
* express
* morgan - error logger
* body-parser
* cors
* mongoose

## To Load Data

```
node importPlayers.js
```
``` node importTeamStats.js```
* for men's team stats, there are two sections for saving data - one for Penguin data, one for Opponent data.  This file will need to be run twice, once for each type of data. Penguin stats are currently commented out.  Once the file is run, it will need to be run again with opponent data commented out and Penguin data un-commented.

```node importWTeamStats.js```
* (women's data) this will need to be run twice  to insert data as with importTeamStats above.

## MongoUI
An easy way to make sure the data has been inserted correctly is to use MongoUI (created by Azat Mardan): https://github.com/azat-co/mongoui

## Server
In order for the site to be able to retrive data, server.js needs to be running using command: ```node server.js```
