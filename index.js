/**
 * Created by shubham on 2/5/17.
 */
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("marketing_company_products (6).csv",function(err,result){
    console.log(result);
    if (result) {
       /*result.forEach(function (data) {
           console.log("gggggggggggggg" + JSON.stringify(data.NAME))

       })*/
       for (var i = 0; i < result.length; i++){
           console.log("resultyyyyyyyy" + JSON.stringify(result[i].NAME))
       }

    }
});