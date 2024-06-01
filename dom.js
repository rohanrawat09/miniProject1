var a = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var removeFriend = document.querySelector("#remove");
addFriend.addEventListener("click",function(){
    a.innerHTML = "Friends";
    a.style.color = "green";
})
removeFriend.addEventListener("click",function(){
    a.innerHTML = "Stranger";
    a.style.color = "red";
})