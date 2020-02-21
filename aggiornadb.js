 // Your web app's Firebase configuration

 var firebase = require("firebase-admin");
 var request = require('request-promise');



 var serviceAccount = require("/key.json");
 firebase.initializeApp({
   credential: firebase.credential.cert(serviceAccount),
   databaseURL: "https://smilelineallineatori-beklyf.firebaseio.com"
 });

var url="https://www.smilelineallineatori.it/test.php";




function objectSize(obj) {

    var objectSize = 0;
    
    for (key in obj){
      if (obj.hasOwnProperty(key)) {
        objectSize++;
      }
    }
    
    return objectSize;
  }
 



var reqOptions = {
  method: 'GET',
  uri: url,
  json: true
};

request(reqOptions)
  .then(function(parsedBody) {
   var ciao= Object.keys(parsedBody).length;
   
      
    
      for(var i=0;i<=ciao;i++)
      {
        var country1= parsedBody[i].country;

        var address1= parsedBody[i].address;
     var locationstate1 = parsedBody[i].locationstate;
       var  name1= 
       parsedBody[i].name;
        var phone1 = parsedBody[i].phone;
       var  town1= 
       parsedBody[i].town;
       var postal1= parsedBody[i].postal;

       console.log(address1);
       console.log(locationstate1);
       console.log(name1);
       console.log(phone1);
       console.log(town1);
       console.log(postal1);





        firebase.database().ref(i).set({
 		country: country1,
        locationstate: locationstate1,
        name: name1 ,
        phone: phone1,
        town: town1,
        postal: postal1,
        address: address1


   });
      }
  })
  .catch(function(err) {
    console.log("request failed : "+err);
  });

