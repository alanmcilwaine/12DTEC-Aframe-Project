AFRAME.registerComponent("change-map", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("src");
          let changeMap = document.querySelector("#mazeCall")
          let currentBox = this.getAttribute("class")
          if (currentMap == "#mazeEasy" && currentBox == "med" || currentMap == "#mazeEasy" && currentBox == "hard"){
              console.log("Changing scene from" + currentMap +  "=> Easy")
              console.log("Clicked Box: Easy")
              changeMap.setAttribute("src", "models/mazeEasy.gltf")
          }else if (currentMap == "#mazeMed" && currentBox == "easy"){
              console.log("Medium => Easy")
              changeMap.setAttribute("src", "models/mazeMed.gltf")
          }else{
              console.log("Hard => Easy")
              console.log(currentMap)
              changeMap.setAttribute("src", "models/mazeHard.gltf")
          }
        })
    }
})