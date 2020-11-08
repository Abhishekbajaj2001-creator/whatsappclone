
const socket= io('http://localhost:8000');



const form=document.getElementById('send-container');
const messageinput = document.getElementById('text');
const messagecontainer = document.querySelector('.inside');
var incoming = new Audio('chat.mp3')
var outgoing = new Audio('point-blank-589.mp3')




const list={};

const append = (message,position)=>{

     const messageElement = document.createElement('div');
     messageElement.innerHTML=message;
     messageElement.classList.add('chatblock');
     messageElement.classList.add(position);
     messagecontainer.append(messageElement);
     if(position =='right')
     {
     incoming.play();
     }
     if(position == 'left')
     {
         outgoing.play();
     }
}


const name = prompt("Entre your name to join");

socket.emit('new-user-enter',name);

socket.on('user-enter',name =>{
append(`${name} joined the chat`,'right')
})

socket.on('detail',data=>{

    append(`${data.name} : ${data.message}`,'right')


})

form.addEventListener('submit', (e)=>{

    e.preventDefault();
    const message= messageinput.value;
    append(`You : ${message}`,'left');
    socket.emit('written',message);
    messageinput.value=' ';
})

socket.on('left',name=>{

    append(`${name} left the chat`,'right');
})