# whatsappclone
to chat using a technique called long polling 


I used the technique called long polling to establish a connection between 2 to many user.

i did this by using a module called socket.io which integrates with http request and transfers its code through   /socket.io/socket.io.js .

It establishes a bi-directional connection and distributes the chat to all the users present in the connection.

so my app makes a connection and when ever a user enter that connection it will tell all other users that he entered and displays a message with its name.Similarly if anyone gets disconnected it does the same thing.

When ever you send a message or other send a message you will get a sound which tells you that a message has been received or distributed.

I thought of hosting this but i couldnt do it.

If you want to host it 
1)Buy an server 
2)Then make appropriate directory in that server 
3)Transfer the codes 
4)instead of localhost:3000 give that servers ip address:3000
5)change where ever it was and i hope so you will host that website

Thank you.
