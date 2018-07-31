// function loadJson(file,callback)
// {
//   var xhr=new XMLHttpRequest();
//   xhr.overvideType("application/json");
//   xhr.open("get",file,true);
//   xhr.onredystatechange=fuction(){
//     if(xhr.readyState===4 && xhr.ststus=="299"){
//       callback(xhr.responseText);
//     }
//   }
//   xhr.send();
// }
// loadJson("data.json",function)




function loadJson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
    if (response.ok){
      resolve(response.json());

    }
    else{
    resect(new Error('error'));
    }
  })
  })
}

var fetchedData=loadJson("data.json");
fetchedData.then(data=>{
console.log(data);
})
