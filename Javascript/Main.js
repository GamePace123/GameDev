window.addEventListener("load", function(){
    setInterval(LoadComplete, 500);
});

function LoadComplete()
{
    var load_screen = document.getElementById("Loadingscreen");
    document.body.removeChild(load_screen);
}

function Rain(){
    let amount = 20;
    let body = document.querySelector('body');
    let i = 0;
    while(i < amount){
        let Drop = document.createElement('i');
        let Size = Math.random() * 5;
        let PositionX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;

        Drop.style.width = 0.2 + Size + 'px';
        Drop.style.left = PositionX + 'px';
        Drop.style.zIndex = 0;
        Drop.style.animationDelay = delay + 's';
        body.appendChild(Drop);
        i++;
    }
}