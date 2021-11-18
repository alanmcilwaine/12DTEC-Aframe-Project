

AFRAME.registerComponent("change-map", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("src");
          let changeMap = document.querySelector("#mazeCall");
          let currentBox = this.getAttribute("class");
          let changePath = document.querySelector("#pathCall");
          let changeText = document.querySelector("#difficultyValue");
          let changeColor = document.querySelector("#pathButton");
          let changeMesh = document.querySelector("#meshCall");
          let cameraPosition = document.querySelector("#rig");
          function mapChange (src, mapClass, difficulty, meshSrc){
            changeMap.setAttribute("src", src)
            changeMap.setAttribute("class", mapClass)
            changePath.setAttribute("visible", false)
            changeText.setAttribute("text", "value", difficulty)
            changeColor.setAttribute("color", "red")
            changeMesh.setAttribute("src", meshSrc)
            cameraPosition.setAttribute("position", "0 0 0.1")
            pathValue.setAttribute("text", "value", "Off")
        }

// Checks which box is clicked. (currentBox) class. 
// Changes the map to whatever class was clicked 
          if (currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  " => Easy")
              mapChange("models/mazeEasy.gltf","easy", "Current Map: Easy", "models/easyMesh.gltf");
          }else if (currentBox == "med"){
              console.log("Changing scene from " + currentMap +  " => Medium")
              mapChange("models/mazeMed.gltf","med", "Current Map: Medium", "models/medMesh.gltf");
          }else{
            console.log("Changing scene from " + currentMap +  " => Hard")
              mapChange("models/mazeHard.gltf","hard", "Current Map: Hard", "models/hardMesh.gltf");
          }
        })
    }
})