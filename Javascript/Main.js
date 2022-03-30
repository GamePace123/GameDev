window.addEventListener("load", function(){
    setInterval(LoadComplete, 500);
});

function LoadComplete()
{
    var load_screen = document.getElementById("Loadingscreen");
    document.body.removeChild(load_screen);
    Rain();
}

function Rain(){
    let amount = 20;
    let body = document.querySelector('body');
    let i = 0;
    while(i < amount){
        let Drop = document.createElement('i');
        body.appendChild(Drop);
        i++;
    }
}