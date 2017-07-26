# PokerRoom
An poker website that supports the following:
  - Account creation, utilizing mySQL databases to store user information
  - Personal servers for hosting lobbies, using Node.js and Socket.IO 
  - A robust browser based multiplayer Texas Hold'em game in each server, using CreateJS

# Installation_
You need to have nodejs installed on your machine. I currently have nodejs version 4.2.6 on my machine and it worked perfect just now. I think any version that is version 3 or more should work but I could be wrong. Once nodejs is installed, please use your terminal or cmd if you are using windows and enter our repository. Once entered run the command:

node gameserver.js 9000
note: (It could be any available port number beside 9000)

Once the game server has started, which you can see when it prints out "Game server started on port 9000", you can then open a browser such as Chrome or Internet Explorer and enter your IP address and port number like what is shown below.

[IP address]:[Port Number]

Mine was like this:

192.168.1.9:9000
