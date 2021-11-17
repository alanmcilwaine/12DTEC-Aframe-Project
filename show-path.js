AFRAME.registerComponent("show-path", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("class");
          let visiblePath = document.querySelector("#pathCall").getAttribute("visible");
          let changePath = document.querySelector("#pathCall");
          let changeText = document.querySelector("#pathValue");
          let changeColor = document.querySelector("#pathButton");

          function visibleChange (visible, model, textValue, color){
            changePath.setAttribute("visible", visible)
            changePath.setAttribute("src", model)
            changeText.setAttribute("text", "value", textValue)
            changeColor.setAttribute("color", color)
          }

          if (currentMap == "easy" && visiblePath == true){
            console.log("Path => Hide Easy")
            visibleChange (false, "models/mazeRouteEasy.gltf", "Off", "red");
          }else if (currentMap == "easy" && visiblePath == false){
            console.log("Path => Visible Easy")
            visibleChange (true, "models/mazeRouteEasy.gltf", "On", "green");
          }else if (currentMap == "med" && visiblePath == true){
            console.log("Path => Hide Medium")
            visibleChange (false, "models/mazeRouteMed.gltf", "Off", "red");
          }else if (currentMap == "med" && visiblePath == false){
            console.log("Path => Visible Medium")
            visibleChange (true, "models/mazeRouteMed.gltf", "On", "green");
          }else if (currentMap == "hard" && visiblePath == true){
            console.log("Path => Hide Hard")
            visibleChange (false, "models/mazeRouteHard.gltf", "Off", "red");
          }else if (currentMap == "hard" && visiblePath == false){
            console.log("Path => Visible Hard")
            visibleChange (true, "models/mazeRouteHard.gltf", "On", "green");
          }
        })
    }
})