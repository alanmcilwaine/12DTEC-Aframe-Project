

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
          let endDifficultyText = document.querySelector("#endDifficultyValue")
          let easyButton = document.querySelector("#easyButton");
          let medButton = document.querySelector("#medButton");
          let hardButton = document.querySelector("#hardButton");
          let easyButtonEnd = document.querySelector("#easyButtonEnd");
          let medButtonEnd = document.querySelector("#medButtonEnd");
          let hardButtonEnd = document.querySelector("#hardButtonEnd");

          function mapChange (src, mapClass, difficulty, meshSrc){
            changeMap.setAttribute("src", src)
            changeMap.setAttribute("class", mapClass)
            changePath.setAttribute("visible", false)
            changeText.setAttribute("text", "value", difficulty)
            changeColor.setAttribute("color", "red")
            changeMesh.setAttribute("src", meshSrc)
            cameraPosition.setAttribute("position", "0 0 0.1")
            pathValue.setAttribute("text", "value", "Off")
            endDifficultyText.setAttribute("text", "value", difficulty)
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
          function addWireframe (easy, med, hard){
            easyButton.setAttribute("wireframe", easy)
            medButton.setAttribute("wireframe", med)
            hardButton.setAttribute("wireframe", hard)
            easyButtonEnd.setAttribute("wireframe", easy)
            medButtonEnd.setAttribute("wireframe", med)
            hardButtonEnd.setAttribute("wireframe", hard)
          }
// Checks which box is clicked. (currentBox) class. 
// Changes the map to whatever class was clicked 
          if (currentBox == "easy end endEasy" || currentBox == "easy"){
              console.log("Changing scene from " + currentMap +  " => Easy")
              addWireframe(true, false, false)
              mapChange("models/mazeEasy.gltf","easy", "Current Map: Left:Easy", "models/easyMesh.gltf");
              positionEnd("0 4.25 -101.1", "-1.5 2.75 -100.5", "0 2.75 -100.5", "1.5 2.75 -100.5", "0 1 -101.1", "0 6 -101.1", "-3 -0.5 -80", "3 -0.5 -180");

          }else if (currentBox == "med end endMed" || currentBox == "med"){
              console.log("Changing scene from " + currentMap +  " => Medium")
              addWireframe(false,true,false);
              mapChange("models/mazeMed.gltf","med", "Current Map: Middle:Medium", "models/medMesh.gltf");
              positionEnd("0 4.25 -145", "-1.5 2.75 -144", "0 2.75 -144", "1.5 2.75 -144", "0 1 -145", "0 6 -145", "-3 -0.5 -80", "3 -0.5 -80");
          }else{
            console.log("Changing scene from " + currentMap +  " => Hard")
            addWireframe(false,false,true)
              mapChange("models/mazeHard.gltf","hard", "Current Map: Right:Hard", "models/hardMesh.gltf");
              positionEnd("0 4.25 -193", "-1.5 2.75 -192.5", "0 2.75 -192.5", "1.5 2.75 -192.5", "0 1 -193", "0 6 -193", "-3 -0.5 -170", "3 -0.5 -170");

          }
        })
    }
})