for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var varinner=this.innerHTML;

    makeSound(varinner);
    keypressAnimation(varinner);
});

}

document.addEventListener("keypress",function (event){
    makeSound(event.key);
    keypressAnimation(event.key);
})
function makeSound(key){
    switch (key) {
        case 'f':
            var wtone=new Audio('sounds/tom-3.mp3');
            wtone.play();
            break;
        case 'a':
            var wtone=new Audio('sounds/tom-4.mp3');
            wtone.play();
            break;
        case 's':
            var stone=new Audio('sounds/tom-1.mp3');
            stone.play();
            break;
        case 'd':
            var dtone=new Audio('sounds/tom-2.mp3');
            dtone.play();
            break;
        case 'j':
            var jtone=new Audio('sounds/crash.mp3');
            jtone.play();
            break;
        case 'k':
            var kicktone=new Audio('sounds/kick-bass.mp3');
            kicktone.play();
            break;
        case 'l':
            var Ltone=new Audio('sounds/snare.mp3');
            Ltone.play();
            break;
    
        default:
            alert('press the mentioned keys');
            break;
    }

}

function keypressAnimation(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout( function(){
        document.querySelector("."+key).classList.remove("pressed")
    } , 1000);
}