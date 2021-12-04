var jump = false

function atualizaPagina(){
    window.location.reload();
}

function jump1(){
    var player = document.getElementById("player")
    var cacto = document.getElementById("cacto")

    if (player.className != "jump"){
        player.classList.add("jump")
        jump=true
        setTimeout(() =>{
            player.classList.remove("jump")
            jump=false
        }, 800)

        function morte(){
            var cactol=parseInt(window.getComputedStyle(cacto).getPropertyValue("left"))

            if (cactol < 20 && jump == false){
                alert("GAME OVER :(");
                atualizaPagina();
            }
        }
        setInterval(morte, 20)
    }
}