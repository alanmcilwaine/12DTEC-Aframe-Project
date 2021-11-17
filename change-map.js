

AFRAME.registerComponent("change-map", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("src");
          let changeMap = document.querySelector("#mazeCall");
          let currentBox = this.getAttribute("class");
          let changePath = document.querySelector("#pathCall");
          let changeText = document.querySelector("#difficultyValue");
          let changeColor = document.querySelector("#pathButton");

          function mapChange (src, mapClass, difficulty){
            changeMap.setAttribute("src", src)
            changeMap.setAttribute("class", mapClass)
            changePath.setAttribute("visible", false)
            changeText.setAttribute("text", "value", difficulty)
            changeColor.setAttribute("color", "red")
        }
// Checks which box is clicked. (currentBox) class. 
// Changes the map to whatever class was clicked 
          if (currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  " => Easy")
              mapChange("models/mazeEasy.gltf","easy", "Easy");
          }else if (currentBox == "med"){
              console.log("Changing scene from " + currentMap +  " => Medium")
              mapChange("models/mazeMed.gltf","med", "Medium");
          }else{
            console.log("Changing scene from " + currentMap +  " => Hard")
              mapChange("models/mazeHard.gltf","hard", "Hard");
          }
        })
    }
})