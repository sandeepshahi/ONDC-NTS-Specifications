
// tabs.js

function onFirstLoad(build_spec) {
      let data = build_spec;
      const xProperties = ["x-enum", "x-tags", "x-examples", "x-flows", "x-attributes", "x-errorcodes", "x-tlc","x-sandboxui"];
      xProperties.forEach((xProperty) => {
        if (data[xProperty]) {
          switch (xProperty) {
            case "x-enum":
              initSchema(data[xProperty]);
              break;
            case "x-tags":
              //initTag(data[xProperty]);
              break;
            case "x-examples":
              loadExample(data[xProperty]);
              break;
            case "x-flows":
              loadFlows(data[xProperty]);
              break;
            case "x-attributes":
              loadAttributes(data[xProperty]);
              break;
            case "x-errorcodes":
              loadErrors(data[xProperty]);
              break;
            case "x-tlc":
              loadTlc(data[xProperty]);
              break;
            case "x-sandboxui":
              if(shouldDisplay(data[xProperty].dropdown,"sandbox-nav")) loadSandbox(data[xProperty])
              break;
            default:
              break; 
          }
        } else {
          if(xProperty == "x-sandboxui"){ // remove sandbox when changing branch
            shouldDisplay([],"sandbox-nav")
          }
          console.log(`${xProperty} is not present in the build_spec.`);
        }
      });
    }
    
    function shouldDisplay (data,id){
      if(isNaN(data?.length) || data?.length <1){
        const element = document.getElementById(id)
        if(element) element.classList.add("d-none")
        return false
      }else{
        const element = document.getElementById(id)
        if(element) element.classList.remove("d-none")
        return true
      }
      }

// window.onload = function(){
//       onFirstLoad(build_spec)
// } 
