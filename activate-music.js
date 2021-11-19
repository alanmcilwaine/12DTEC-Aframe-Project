AFRAME.registerComponent("activate-music", {
    init: function (){
        this.el.addEventListener("click", function(){
            let musicClass = document.querySelector("#music").getAttribute("class")
            let musicId = document.querySelector("#music");
            let entity = document.querySelector('[sound]');
            let musicValue = document.querySelector("#musicValue")

            function changeMusic(track, text, name){
                musicId.setAttribute("sound", "src", track)
                entity.components.sound.playSound();
                musicValue.setAttribute("text", "value", text)
                musicId.setAttribute("class", name)
            }
            if (musicClass == "off"){
                changeMusic("music/gym.mp3", "Track (1/3): Gym", "gym")
            }else if(musicClass == "gym"){
                changeMusic("music/show.mp3", "Track (2/3): Show", "show")
            }else if (musicClass == "show"){
                changeMusic("music/happy.mp3", "Track (3/3): Happy", "happy")
            }else{
                entity.components.sound.stopSound();
                changeMusic("music/", "Track --", "off")
            }
        })
    }
})