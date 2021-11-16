AFRAME.registerComponent("change-map", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("src");
          let changeMap = document.querySelector("#mazeCall")
          let currentBox = this.getAttribute("class")
          if (currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  "=> Easy")
              console.log("Clicked Box: Easy")
              changeMap.setAttribute("src", "models/mazeEasy.gltf")
          }else if (currentBox == "med"){
              console.log(currentBox + " => Medium")
              changeMap.setAttribute("src", "models/mazeMed.gltf")
          }else{
              console.log(currentBox + " => Hard")
              changeMap.setAttribute("src", "models/mazeHard.gltf")
          }
        })
    }
})