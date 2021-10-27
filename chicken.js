
var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    for(var i in t){
        console.log(
`id:${t[i].id}
Name:${t[i].name}
email:${t[i].email}
City:${t[i].address.city}
phone number:${t[i].phone}`)
    }

  } else {
    
    console.log("Data is not available");
   
  }
};
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();

