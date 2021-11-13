AFRAME.registerComponent("show-path", {
    init: function () {
        //Listens for a mouse "click", in this case it would be a hover
        this.el.addEventListener("click", function(){
            //Assign currentPresetRoute to the visibility of the cheat path
            let currentPresetRoute = document.querySelector("#mazeRouteCall").getAttribute("visible");
            //Assign changePresetRoute to the cheat path model
            let changePresetRoute = document.querySelector("#mazeRouteCall")
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
  