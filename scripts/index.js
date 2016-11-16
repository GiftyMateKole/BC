function scan(){
 console.log("clicked");
 cordova.plugins.barcodeScanner.scan(function(result){
 //success callback
 alert(JSON.stringify(result));

 },function(error){
 //error callback
 alert(JSON.stringify(error));

 });
 }