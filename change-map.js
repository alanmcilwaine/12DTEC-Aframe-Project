AFRAME.registerComponent("change-map", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("src");
          let changeMap = document.querySelector("#mazeCall")
          let currentBox = this.getAttribute("class")
          let changePath = document.querySelector("#pathCall")
          if (currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  "=> Easy")
              console.log("Clicked Box: Easy")
              changeMap.setAttribute("src", "models/mazeEasy.gltf")
              changeMap.setAttribute("class", "easy")
              changePath.setAttribute("visible", false)
          }else if (currentBox == "med"){
              console.log(currentBox + " => Medium")
              changeMap.setAttribute("src", "models/mazeMed.gltf")
              changeMap.setAttribute("class", "med")
              changePath.setAttribute("visible", false)
          }else{
              console.log(currentBox + " => Hard")
              changeMap.setAttribute("src", "models/mazeHard.gltf")
              changeMap.setAttribute("class", "hard")
              changePath.setAttribute("visible", false)
          }
        })
    }
})