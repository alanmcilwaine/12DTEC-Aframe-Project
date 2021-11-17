AFRAME.registerComponent("show-path", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("class");
          let visiblePath = document.querySelector("#pathCall").getAttribute("visible");
          let changePath = document.querySelector("#pathCall")
          if (currentMap == "easy" && visiblePath == true){
            console.log("Path => Hide Easy")
            changePath.setAttribute("visible", false)
            changePath.setAttribute("src", "models/mazeRouteEasy.gltf")
          }else if (currentMap == "easy" && visiblePath == false){
            console.log("Path => Visible Easy")
            changePath.setAttribute("visible", true)
            changePath.setAttribute("src", "models/mazeRouteEasy.gltf")
          }else if (currentMap == "med" && visiblePath == true){
            console.log("Path => Hide Medium")
            changePath.setAttribute("visible", false)
            changePath.setAttribute("src", "models/mazeRouteMed.gltf")
          }else if (currentMap == "med" && visiblePath == false){
            console.log("Path => Visible Medium")
            changePath.setAttribute("visible", true)
            changePath.setAttribute("src", "models/mazeRouteMed.gltf")
          }else if (currentMap == "hard" && visiblePath == true){
            console.log("Path => Hide Hard")
            changePath.setAttribute("visible", false)
            changePath.setAttribute("src", "models/mazeRouteHard.gltf")
          }else if (currentMap == "hard" && visiblePath == false){
            console.log("Path => Visible Hard")
            changePath.setAttribute("visible", true)
            changePath.setAttribute("src", "models/mazeRouteHard.gltf")
          }

        })
    }
})