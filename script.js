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
            let mediumMap = document.querySelectorAll(".medium");
            let easyMap = document.querySelectorAll(".easy");
            let hardMap = document.querySelectorAll(".hard");
            let changeMapFlag = document.querySelector(".easy").getAttribute("visible");
            
            if (changeMapFlag == false){
                mediumMap.forEach((withElement) => {
                    withElement.setAttribute("visible", false);
                  });

                hardMap.forEach((withElement) => {
                    withElement.setAttribute("visible", false);
                  });

                easyMap.forEach((withElement) => {
                    withElement.setAttribute("visible", true);
                  });
            }
          })
      }
  })

  AFRAME.registerComponent("change-map-med", {
    init: function (){
        this.el.addEventListener("click", function(){
          let mediumMap = document.querySelectorAll(".medium");
          let easyMap = document.querySelectorAll(".easy");
          let hardMap = document.querySelectorAll(".hard");
          let changeMapFlag = document.querySelector(".medium").getAttribute("visible");
          
          if (changeMapFlag == false){
              easyMap.forEach((withElement) => {
                  withElement.setAttribute("visible", false);
                });

              hardMap.forEach((withElement) => {
                  withElement.setAttribute("visible", false);
                });

              mediumMap.forEach((withElement) => {
                  withElement.setAttribute("visible", true);
                });
          }
        })
    }
})

AFRAME.registerComponent("change-map-hard", {
    init: function (){
        this.el.addEventListener("click", function(){
          let mediumMap = document.querySelectorAll(".medium");
          let easyMap = document.querySelectorAll(".easy");
          let hardMap = document.querySelectorAll(".hard");
          let changeMapFlag = document.querySelector(".hard").getAttribute("visible");
          
          if (changeMapFlag == false){
              mediumMap.forEach((withElement) => {
                  withElement.setAttribute("visible", false);
                });

              easyMap.forEach((withElement) => {
                  withElement.setAttribute("visible", false);
                });

              hardMap.forEach((withElement) => {
                  withElement.setAttribute("visible", true);
                });
          }
        })
    }
})