const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_03_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDYzLFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxaUVFQaWVZb0RoN1Z1OUorbVc2cTdhbFVicDJqMlVCeEY5eEtNSytsUGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjY1OTgxMjMyMjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OEZCQTMyODMyMUM1NjY3QzdDRkI3MjNBMjdCQzY4MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUwNjcwMjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjU5ODEyMzIyMjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdEMEMyQzIzQTIwQjk2OUFDRDE2RDlCNjU4QUQzMzI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTA2NzAyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyTEZzbUYzcVItR1Z0VGdrbWtEdG1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY3Y2FhYjBjLTRmZjgtNDRiMS1iNDY2LTVhMjQ4NGFjNGI2M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICA3MCxcbiAgICAgIDE4NSxcbiAgICAgIDE3MixcbiAgICAgIDEyOSxcbiAgICAgIDIyNyxcbiAgICAgIDgyLFxuICAgICAgMTE3LFxuICAgICAgMTg5LFxuICAgICAgMjAsXG4gICAgICA2MixcbiAgICAgIDI1MixcbiAgICAgIDI1MixcbiAgICAgIDEyMSxcbiAgICAgIDEyLFxuICAgICAgMjE2LFxuICAgICAgMzQsXG4gICAgICAxODYsXG4gICAgICAzMyxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA1OCxcbiAgICAgIDIwNixcbiAgICAgIDgsXG4gICAgICA1NixcbiAgICAgIDg5LFxuICAgICAgMTQsXG4gICAgICAxNDUsXG4gICAgICAyNTMsXG4gICAgICA3OSxcbiAgICAgIDIxOSxcbiAgICAgIDI2LFxuICAgICAgMTE5LFxuICAgICAgMTYzLFxuICAgICAgMjA5LFxuICAgICAgMTkzLFxuICAgICAgMjA2LFxuICAgICAgNDEsXG4gICAgICAxNzYsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRE1OMVBHNUNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2NTk4MTIzMjIyOToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYyOTk4OTI0NjA3NTAwOjEwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk3Cru+4jyBOb2JvZHkg4pij77iP4pqg77iP8J+Su1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2QzRWY1Fob3VzdXdZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiajdwc2NFa28rbzRNdFkvTVZ3aWJNb3pQNkJkZVNGaEhQOWlXbXZIM0NnQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFYUcvTVdYcVROcFZqWXRUellrK2czV1F0dm9qNWYybFJIM0lKUmxCdG1kMXJPN1VpeWNSTm9CbEFEOERCS3ZDeXhvTGVzdlNncDV2cEFSblRPVHpEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTemFtVkhuZkZiWlVFQ3hteFFib2gvdlVlSzNjUHowYzBONXJLMVpkSlorN3ZpWndiRUNEd0R4U2xmcTgzWUJCQjErR1JkTE9QYzhQWndHYjdIeXNpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjU5ODEyMzIyMjk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA2NzAxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB6cVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHpxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNEEwUmtmOUU1bDdGdHNseWZtalIyVjRaSFl4M2xIcnVkOWpYVFJ3OTQ5UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQwNDk5NDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk4NTA3MTIxNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
