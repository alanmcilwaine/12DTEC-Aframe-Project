

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
          let difficultyText=document.querySelector(".endText");
          let endEasy = document.querySelector(".endEasy");
          let endMed = document.querySelector(".endMed");
          let endHard = document.querySelector(".endHard");
          let endValue = document.querySelector(".endValue");
          let endTrophyLeft = document.querySelector(".endTrophyLeft");
          let endTrophyRight = document.querySelector(".endTrophyRight");
          let endText = document.querySelector("#endText");

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
          function positionEnd (textDifficulty, easyButton, medButton, hardButton, difficultyValue, congrat, leftTrophy, rightTrophy){
            difficultyText.setAttribute("position", textDifficulty)
            endEasy.setAttribute("position", easyButton)
            endMed.setAttribute("position", medButton)
            endHard.setAttribute("position", hardButton)
            endValue.setAttribute("position", difficultyValue)
            endText.setAttribute("position", congrat)
            endTrophyLeft.setAttribute("position", leftTrophy)
            endTrophyRight.setAttribute("position", rightTrophy)
          }

// Checks which box is clicked. (currentBox) class. 
// Changes the map to whatever class was clicked 
          if (currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  " => Easy")
              mapChange("models/mazeEasy.gltf","easy", "Current Map: Easy", "models/easyMesh.gltf");
              positionEnd("0 4.25 -101.1", "-1.5 2.75 -100.5", "0 2.75 -100.5", "1.5 2.75 -100.5", "0 1 -101.1", "0 6 -101.1", "-3 -0.5 -80", "3 -0.5 -180");

          }else if (currentBox == "med"){
              console.log("Changing scene from " + currentMap +  " => Medium")
              mapChange("models/mazeMed.gltf","med", "Current Map: Medium", "models/medMesh.gltf");
              positionEnd("0 4.25 -145", "-1.5 2.75 -144", "0 2.75 -144", "1.5 2.75 -144", "0 1 -145", "0 6 -145", "-3 -0.5 -80", "3 -0.5 -80");
          }else{
            console.log("Changing scene from " + currentMap +  " => Hard")
              mapChange("models/mazeHard.gltf","hard", "Current Map: Hard", "models/hardMesh.gltf");
              positionEnd("0 4.25 -193", "-1.5 2.75 -192.5", "0 2.75 -192.5", "1.5 2.75 -192.5", "0 1 -193", "0 6 -193", "-3 -0.5 -170", "3 -0.5 -170");

          }
        })
    }
})