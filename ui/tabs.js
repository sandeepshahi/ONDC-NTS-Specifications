
// tabs.js

function onFirstLoad(build_spec) {
      let data = build_spec;
      const xProperties = ["x-enum", "x-tags", "x-examples", "x-flows", "x-attributes", "x-errorcodes", "x-tlc","x-sandboxui", "x-changeLog"];
      const dropdown =  document.getElementById("contract-dropdown");
      const branch_name = dropdown.options[dropdown.selectedIndex].text;
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
            case "x-changeLog":
              if( shouldDisplay(data[xProperty].filenames, "change-log-nav")) {
              renderChangeLogDropDown(branch_name,data[xProperty].filenames)
              }
              break;
            default:
              break; 
          }
        } else {
          // remove sandbox when changing branch
          if(xProperty == "x-sandboxui")
            shouldDisplay([],"sandbox-nav")
          else if(xProperty == "x-changeLog")
            shouldDisplay([],"change-log-nav")
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
