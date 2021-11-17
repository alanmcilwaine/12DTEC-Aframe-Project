

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

          function mapChange (src, mapClass, difficulty, meshSrc){
            changeMap.setAttribute("src", src)
            changeMap.setAttribute("class", mapClass)
            changePath.setAttribute("visible", false)
            changeText.setAttribute("text", "value", difficulty)
            changeColor.setAttribute("color", "red")
            changeMesh.setAttribute("src", meshSrc)
        }
// Checks which box is clicked. (currentBox) class. 
// Changes the map to whatever class was clicked 
          if (currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  " => Easy")
              mapChange("models/mazeEasy.gltf","easy", "Easy", "models/easyMesh.gltf");
          }else if (currentBox == "med"){
              console.log("Changing scene from " + currentMap +  " => Medium")
              mapChange("models/mazeMed.gltf","med", "Medium", "models/medMesh.gltf");
          }else{
            console.log("Changing scene from " + currentMap +  " => Hard")
              mapChange("models/mazeHard.gltf","hard", "Hard", "models/hardMesh.gltf");
          }
        })
    }
})