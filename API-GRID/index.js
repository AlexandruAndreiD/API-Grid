var users="";
fetch("https://jsonplaceholder.typicode.com/photos").then((data)=>{
   return data.json();
}).then((apiData)=>{   
    let data1="";
    users = apiData;
    apiData.map((values)=>{
        data1+=` 
 
        <div class="myContainer">
        <img class="img-thumb" src=${values.thumbnailUrl}> 
        <h2>${values.title}</h2>
        <a href=${values.url}><button  class="btn-website">Learn more</button></a>   
        </div> `;
    });
    document.getElementById("cards").innerHTML=data1;




}).catch((err)=>{
    console.log(err);
}) 




function orderAtoZ() {
    users.sort(function(a, b) {
     if(a.title < b.title)
     return -1;
     if(a.title > b.title)
     return 1;
     return 0;
    });

    let data2="";
    users.map((values)=>{
        data2+=` 
 
        <div class="myContainer">
        <img class="img-thumb" src=${values.thumbnailUrl}> 
        <h2>${values.title}</h2>
        <a href=${values.url}><button  class="btn-website">Learn more</button></a>   
        </div> `;
    });
    document.getElementById("cards").innerHTML=data2;


}

function orderZtoA() {
    users.sort(function(a, b) {
     if(b.title < a.title)
     return -1;
     if(b.title > a.title)
     return 1;
     return 0;
    });

    let data3="";
    users.map((values)=>{
        data3+=` 
        <div class="myContainer">
        <img class="img-thumb" src=${values.thumbnailUrl}> 
        <h2>${values.title}</h2>
        <a href=${values.url}><button  class="btn-website">Learn more</button></a>   
        </div> `;
    });
    document.getElementById("cards").innerHTML=data3;


}


function getValue() {
    var x = document.getElementById('Select').value;
    console.log(x);
    if(x==="az"){
        orderAtoZ();
    }
    if(x==="za"){
        orderZtoA();
    }return;
}



