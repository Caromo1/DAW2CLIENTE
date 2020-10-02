const users=["Carlos","Marco","Josep","Javi","Ana"];
const blackListed=["Marco","Carlos","Marcos","Ana","Josep"];

function ban(users,blackListed){
    for(let i=0;users.length;i++){
        return blackListed
    }
}

let newArray=users.filter(ban);
console.log(newArray);
