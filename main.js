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
  //console.log(data);
career(data.create);
education(data.education);
skills(data.skills);
achievements(data.achievements);
})
var child2=document.querySelector("#child2");
//career

function career(car){
  var heading=document.createElement("h2"); //heading
heading.textContent="career Objective"; //heading
 //console.log(child2);
child2.appendChild(heading); //heading
var hline=document.createElement("hr");
heading.appendChild(hline);
var p=document.createElement("p");
p.textContent=car.info;
child2.appendChild(p);
}
//education
function education(edu){
  var heading=document.createElement("h2"); //heading
heading.textContent="Education"; //heading
//console.log(child2);
child2.appendChild(heading); //heading
var hline=document.createElement("hr");
heading.appendChild(hline);
var table=document.createElement("table");//table create
child2.appendChild(table);// table added to rightChild
var tr="<tr><td>S No</td> <td>degree</td> <td>institute</td> <td>Data</td><tr>"
//table.innerHTML=tr;
table.border="1";
var tr1="";
for(var i=0;i<edu.length;i++)
{tr1+="<tr><td>"+i+1+"</td>  <td>"+edu[i].degree+"</td>  <td>"+edu[i].institute+"</td>  <td>"+edu[i].data+"</td></tr>"
}
table.innerHTML=tr+tr1;
}
//skills
function skills(skill){
   var heading=document.createElement("h2"); //heading
heading.textContent="Technical Skills"; //heading
 //console.log(child2);
child2.appendChild(heading); //heading
var hline=document.createElement("hr");
heading.appendChild(hline);
for( var i=0;i<skill.length;i++){
var title=document.createElement("h4");
title.textContent=skill[i].title;
child2.appendChild(title);
var list=document.createElement("ul");
child2.appendChild(list);
//console.log(skill[i].set.length)
for (var j=0;j<skill[i].set.length;j++){
  var listItem=document.createElement("li");
  listItem.textContent=skill[i].set[j];
  list.appendChild(listItem);
}
}
}
function achievements(achievements)
{
  var heading=document.createElement("h2"); //heading
heading.textContent="Achievements"; //heading
 //console.log(child2);
child2.appendChild(heading); //heading
var hline=document.createElement("hr");
heading.appendChild(hline);
var list=document.createElement("ul");
child2.appendChild(list);
var i=0;
while(i<achievements.length){
  listItem=document.createElement("li");
  listItem.textContent=achievements[i].achievedData;
  list.appendChild(listItem);
  //console.log(listItem);

  i++;
}
}
