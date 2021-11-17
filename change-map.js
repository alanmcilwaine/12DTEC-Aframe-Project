AFRAME.registerComponent("change-map", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("src");
          let changeMap = document.querySelector("#mazeCall");
          let currentBox = this.getAttribute("class");
          let changePath = document.querySelector("#pathCall");
          let changeText = document.querySelector("#difficultyValue");
          let changeColor = document.querySelector("#pathButton");
// Checks which box is clicked. (currentBox) class. 
// Changes the map to whatever class was clicked 
          if (currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  "=> Easy")
              changeMap.setAttribute("src", "models/mazeEasy.gltf")
              changeMap.setAttribute("class", "easy")
              changePath.setAttribute("visible", false)
              changeText.setAttribute("text", "value", "Easy")
              changeColor.setAttribute("color", "red")
          }else if (currentBox == "med"){
              console.log("Changing scene from " + currentMap +  "=> Medium")
              changeMap.setAttribute("src", "models/mazeMed.gltf")
              changeMap.setAttribute("class", "med")
              changePath.setAttribute("visible", false)
              changeText.setAttribute("text", "value", "Medium")
              changeColor.setAttribute("color", "red")
          }else{
            console.log("Changing scene from " + currentMap +  "=> Hard")
              changeMap.setAttribute("src", "models/mazeHard.gltf")
              changeMap.setAttribute("class", "hard")
              changePath.setAttribute("visible", false)
              changeText.setAttribute("text", "value", "Hard")
              changeColor.setAttribute("color", "red")
          }
        })
    }
})