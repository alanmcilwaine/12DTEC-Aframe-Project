AFRAME.registerComponent("show-path", {
    init: function () {
        //Listens for a mouse "click", in this case it would be a hover
        this.el.addEventListener("click", function(){
            //Assign currentPresetRoute to the visibility of the cheat path
            let currentPresetRoute = document.querySelector("#mazeRouteEasyCall").getAttribute("visible");
            //Assign changePresetRoute to the cheat path model
            let changePresetRoute = document.querySelector("#mazeRouteEasyCall")
            //Assign changePresetText to the cheat path text
            let changeRouteText = document.querySelector("#pathConfirmText")

            //If the cheat path is not shown, make it visible and change the buttons colour to green
            if (currentPresetRoute == false) {
                console.log("Preset: False => True")
                changePresetRoute.setAttribute("visible", true)
                this.setAttribute("color", "green")
                changeRouteText.setAttribute("text", "value", "On")
            }else{
            //If the cheat path is shown, make it invisible and change the buttons colour to red
                console.log("Preset: True => False")
                changePresetRoute.setAttribute("visible", false)
                this.setAttribute("color", "red")
                changeRouteText.setAttribute("text", "value", "Off")
            }
        })
        }
      })

  AFRAME.registerComponent("change-map-easy", {
      init: function (){
          this.el.addEventListener("click", function(){
            let currentMap = document.querySelector("#mazeCall").getAttribute("src");
            let changeMap = document.querySelector("#mazeCall")
            if (currentMap == "#mazeEasy"){
                console.log("Easy => Easy")
                changeMap.setAttribute("src", "#mazeEasy")
            }else if (currentMap == "mazeMed"){
                console.log("Medium => Easy")
                changeMap.setAttribute("src", "#mazeEasy")
            }else{
                console.log("Hard => Easy")
                changeMap.setAttribute("src", "#mazeEasy")
            }
          })
      }
  })
  AFRAME.registerComponent("change-map-med", {
    init: function (){
        this.el.addEventListener("click", function(){
          let currentMap = document.querySelector("#mazeCall").getAttribute("src");
          let changeMap = document.querySelector("#mazeCall")
          if (currentMap == "#mazeEasy"){
              console.log("Easy => Medium")
              changeMap.setAttribute("src", "#mazeMed")
          }else if (currentMap == "mazeMed"){
              console.log("Medium => Medium")
              changeMap.setAttribute("src", "#mazeMed")
          }else{
              console.log("Hard => Medium")
              changeMap.setAttribute("src", "#mazeMed")
          }
          })
        }
    })

    AFRAME.registerComponent("change-map-hard", {
        init: function (){
            this.el.addEventListener("click", function(){
            let currentMap = document.querySelector("#mazeCall").getAttribute("src");
            if (currentMap == "#mazeEasy"){
                console.log("Easy => Hard")
            }else if (currentMap == "mazeMed"){
                console.log("Medium => Hard")
            }else{
                console.log("Hard => Hard")
            }
            })
        }
    })