 // Your web app's Firebase configuration

 var firebase = require("firebase-admin");
 var request = require('request-promise');

 var serviceAccount = {
    apiKey: "AIzaSyDxXTY-IAmD0YiXxN_x2H76ki5zMJL3jTc",
    authDomain: "smilelineallineatori-beklyf.firebaseapp.com",
    databaseURL: "https://smilelineallineatori-beklyf.firebaseio.com",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCj7Hh03Xzq79vX\niLCveHOfKJvxuNs/upXCPoBRNS5oNqplE7OL7zw65CGEhkGFaDDKy3lxSkkMX9SQ\nC5F6vWB2QpaPdNudaHYkGMBDn0Yft5ekHsdgXpEMadYj/VNsUijYxVYQTFiVA4ZH\nCezkdRlFLQ3okIvRdcECanOX1cdekaVwDiDNd0/EhFjk8lMUlS13N1B2wKUejfX3\nHRvRxxmxD7qz0q9eCfR2t3DFsXa2TL/kyYYwbVVyciuHATYgyIK6sekECX4hhwxf\nsJbOKKNtiGauDFargyxXounwsapovnj4+MXUQXzlcS+UnLprFhXd3y1icsg9nZ47\nNKopoQKvAgMBAAECggEABCIPaQyEli/boFpgvUV3zm8c4qiOIdQEhQdD/2HF4vhh\nFEQkGZOInNUcezwfWGVa6/unx9F43tUAhdLYC8fM/NS+kxNkZ8DQg1lHnIZ38CjJ\nRZwSqHCTjt3ERnGgS6Th3sVRX2VtZL4LNRNTY72hseE27o9mcK7CLqg2Def+Xnk0\nFPSnIz6prbtXh8Fh/0MmkI5+yf2eFoYSbI4F2GmQoS55DCy1QZ7BxEkZGrcJbW+q\nBjcrQsuTUGBi9eXpUCvhvRKG+IUmDyZHw6OAwO3sXlgXtt1gFh+mX1gq3wt21XTE\n4dQLBm9tug6vzUD8m8OTc5w2cdoaSV33XshdUw75cQKBgQDYZS8MiFIgUfTs/nQn\na1KB88kIiZgJboYQ16MRC5sSI7jMIU///BUPkDinkUsHxDgeyGUtAQSNrJ5aYgdZ\nyH6tkdzVl0xcDhEObiIGeJ+adulDNdA1WZeAjhuHa/eMX4vkPzfqRU50TlLg9TZF\n9UIbTVjvjtH5iyMJxCZkSvk0owKBgQDB7NNqDZayNL3T5xhUVnnZugxoMx9M5rnZ\n7uJ2WXF1/eSfdauMwJVeYwu9RfpVtlubbaLlTlOxiGYrg+dUbknomCbuo1D3hKDb\nn96RoWf9VV1w2K2THQnl0s2AgqFJNfCXi7Cc9MIs/BDxfYEPxBFzeJgEvepoJ/9k\nciOi2lVOhQKBgQCU56OlgxTISr04a6wwB+jhpYibiFsHendklY4PR6YwqEYcqXus\nUaGIcRybKh6wPHTFse31NvMULklVNomKXa3V8D4+9/rCiadw/5YIT+670sGWzyvz\n2i+ndaI54LCadpEDwgDPA1wGKnNbe0EaiLcxpFrjlaqlhfnZWZF1iCXN8wKBgQC8\nwLOCnVlZeUZvM5cVt9oAVztuTJwhsM2i1wZr5WEvVIGrx8/DP0vjxAoQH0WrGcUO\nguczxEpoGXhA0LFgF70ufLIgQqwzT092laQAIZdjGCzMAsrnzzLsFIPbmso7xRm5\nl8i+7Oj2+h3Pv7XYT6Igv3dP3j6DRLMr5IDVKSgxNQKBgBpEgoSWNv8N4wE0LpZ1\nvUePJpF/e15NuF37GK1r3TKjmuVap1yrsNnUFenv+inx7K7PsmEOhzUCgi2YcB6p\na+rYAjURcZR5h4Zh0XK+Xop4fOw//YJZco92FDq1XKCOF3SqBb6f8z5X8ELe6evh\n2De8s0D1UTJ49Z+0rQCd71ZC\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-2b52x@smilelineallineatori-beklyf.iam.gserviceaccount.com",  "client_email": "firebase-adminsdk-2b52x@smilelineallineatori-beklyf.iam.gserviceaccount.com",
    projectId: "smilelineallineatori-beklyf",
    storageBucket: "smilelineallineatori-beklyf.appspot.com",
    messagingSenderId: "37278402852",
    appId: "1:37278402852:web:cf74327c203f2cabde8bb1"
  };
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

