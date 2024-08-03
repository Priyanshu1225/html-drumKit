var length=document.querySelectorAll(".drum").length;
for(var i=0;i<length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
   var buttonClick=this.innerHTML;
//    this.style.color="blue";
   makesound(buttonClick);
   Animation(buttonClick);
 
});
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    Animation(event.key);
   
    
});
function makesound(key){
    switch(key){
    case "w":
        var audio=new Audio("tom-1.mp3");
        audio.play();
        break;
    case "a":
        audio=new Audio("tom-2.mp3");
        audio.play();
        break;
    case "s":
        audio=new Audio("tom-3.mp3");
        audio.play();
        break;
    case "d":
        audio=new Audio("tom-4.mp3");
        audio.play();
        break;
    case "j":
        audio=new Audio("snare.mp3");
        audio.play();
        break;
    case "k":
        audio=new Audio("crash.mp3");
        audio.play();
        break;
    case "l":
        audio=new Audio("kick-bass.mp3");
        audio.play();
        break;
    default:console.log(buttonClick);
    }
}

function Animation(new_key){
    var active_key=document.querySelector("."+new_key);
    active_key.classList.add("pressed");

    setTimeout(function(){
        active_key.classList.remove("pressed");
    },100);

}
