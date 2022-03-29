window.addEventListener("load", function(){
    setInterval(LoadComplete, 500);
});

function LoadComplete()
{
    var load_screen = document.getElementById("Loadingscreen");
    document.body.removeChild(load_screen);
}