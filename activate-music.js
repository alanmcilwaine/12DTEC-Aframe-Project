AFRAME.registerComponent("activate-music", {
    init: function (){
        this.el.addEventListener("click", function(){
            let musicClass = document.querySelector("#music").getAttribute("class")
            let musicId = document.querySelector("#music");
            let entity = document.querySelector('[sound]');

            if (musicClass == "off"){
                musicId.setAttribute("sound", "src", "music/gym.mp3")
                entity.components.sound.playSound();
                musicId.setAttribute("class", "gym")
            }else if(musicClass == "gym"){
                musicId.setAttribute("sound", "src", "music/show.mp3")
                entity.components.sound.playSound();
                musicId.setAttribute("class", "show")
            }else if (musicClass == "show"){
                musicId.setAttribute("sound", "src", "music/happy.mp3")
                entity.components.sound.playSound();
                musicId.setAttribute("class", "happy")
            }else{
                entity.components.sound.stopSound();
            }
        })
    }
})