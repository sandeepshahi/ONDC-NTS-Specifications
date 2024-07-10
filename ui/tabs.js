
// tabs.js

function onFirstLoad(build_spec){
      let data = build_spec
      
      loadAttributes(data["x-attributes"])
          loadFlows(data["x-flows"])
          // initSchema(data["x-enum"])
    //   initTag(data["x-tags"])
      loadExample(data["x-examples"])
      initSchema(data["x-enum"])
      //addExample("on-demand")
    //   loadFlows(data["x-flows"])
  
      // console.log(data["x-attributes"]);
    //   loadErrors(data["x-errorcodes"])
    //   loadTlc(data["x-tlc"])
    //   loadtestcase(data["x-testcase"])
    console.log(data["x-enum"]);
}

window.onload = function(){
      onFirstLoad(build_spec)
} 