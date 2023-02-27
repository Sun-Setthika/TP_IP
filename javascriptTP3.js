const key = document.querySelector("#key");
const value = document.querySelector("#value");
const deadline = document.querySelector("#deadline");
const addbtn = document.querySelector("#add-btn");
const list = document.querySelector("#listwrapper");
var cookieList = getCookie();

// //add cookie
// function setCookie(idValue, keyValue, Value, days){
//     const date = new Date();
//     date.setTime(date.getTime() + (days*24*60*60*1000));
//     let expires = date.toUTCString();
//    // let cookieList = [];
//   //  var cookie = {id:idValue, key:keyValue, value:Value, deadline:days};
//   //  cookieList.push(cookie);

//   //set cookie
//     document.cookie
// }

// function renderList () {
//     let listContent='';
//     cookieList.forEach(function callback(result, index)  {
//         listContent += `

//             <div id="output" class="output bg-white flex items-center justify-center h-14 mt-2 mb-2 rounded-xl p-4 border-black border-2">
//                 <div class="input-title w-1/4 ml-3 mr-3">
//                     <div>${result.key}</div>
//                 </div>
//                 <div class="input-assignee w-1/4 ml-3 mr-3">
//                     <div>${result.value}</div>
//                 </div>
                
//                 <div class="input-deadline w-fit ml-3 mr-3">
//                     <input type="button" id="${index}" class="h-10 w-16 bg-red-700 rounded-xl text-cyan-50" value="Delete" onclick="remove('${todo.id}')">
//                 </div>
//             </div>
//             `
//     });

//     list.innerHTML = listContent;
// }

//obj
// const json = {
//     key: key.value,
//     value: value.value,
//     deadline: deadline.value

// };
// function setCookie(id, json){
    
//     //Specify the cookie name and value
//     let cookieValue = id + '=' + JSON.stringify(json) + ';';
  
//     //Specify the path to set the cookie
//     cookieValue += 'path=/ ;';
  
//     //Specify how long you want to keep cookie
//     const date = new Date();
//     date.setTime(date.getTime() + (deadline*24*60*60*1000));
//     let expires = date.toUTCString();
//     cookieValue += 'expires=' + expires + ';';
  
//     //Set cookie
//     document.cookie = cookieValue;

//     cookieValue = '';
//     let expire = '';

//   };
//   function getCookieValue(name){
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     let result1 = null;
//     //find cookie value
//     cArray.forEach(function(element) {
//         if(element.indexOf(name)==0){
//             result1 = element.substring(name.length + 1);
//         }
//     })
//     return result1; 
// }

//   //get data
// //   function getCookie(){
// //     let cookieValue = '';
// //     let cookieArray = new Array();
// //     let result = [];

// //     //get cookie
// //     cookieValue = document.cookie;
// //     //divide cookie into an array and convert them to JSON
// //     if(cookieValue){
// //         cookieArray = cookieValue.split(';');

// //         cookieArray.forEach(data =>{
// //             data = data.split('=');

// //             result[data[0]] = JSON.parse(data[1]);
// //         })


// //     }
// //     return result;
// //  }
// function getDataCookie(){
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     let arr = []
//     for(let i=0; i<cArray.length; i++){
//         arr += cArray[i];
//     }
//     dis.innerHTML = arr;
// }

// function displayWebpage(name){
//     getDataCookie(name);
//     dis.innerHTML = getDataCookie(name);
// }

//   addbtn.addEventListener("click", () => {
//     const d = new Date();
//     let id = d.getTime()
//     setCookie(id, json);
// })

//   list.innerHTML = getDataCookie();

  //set cookie
  function setCookie(name, value, days){
    const date = new Date();
    date.setTime(date.getTime()+ days*24*60*60*1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}



//display all cookies
function displayCookie(){
    console.log(document.cookie);
}


//delete cookie
function deleteCookie(name){
    setCookie(name,null,null);
}


//get array of all cookie 
//not used
// function getDataCookie(){
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     console.log(cArray);
//     let arr = []
    
//     for(let i=0; i<cArray.length; i++){
//         arr += cArray[i] + "<br>";
//     }

//     dis.innerHTML = arr;
// }




//get cookie value
function getCookieValue(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result1 = null;
    //find cookie value
    cArray.forEach(function(element) {
        if(element.indexOf(name)==0){
            result1 = element.substring(name.length + 1);
        }
    })
    return result1; 
}


//display value on webpage
function displayCookieValueWebpage(name){
    dvalue.innerHTML = getCookieValue(name);
}

//get cookie key
function getCookieKey(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    //find cookie key
    cArray.forEach(function(element) {
        if(element.indexOf(name)==0){
            result = element.substring(0,name.length +0);
        }
    })
    return result; 
}


//display key on webpage
function displayCookieKeyWebpage(key){
    dkey.innerHTML = getCookieKey(key);
}

function displayAllOnWebpage(){

}
list = [
    `
        <div id="dkey"></div>
        <div id="dvalue"></div>
        <button>Set Expired</button>`
    ]

//add cookie
function Justclick(){



    let ele1 = document.getElementById("keyyy");
    let ele11 = ele1.value; 

    let ele2 = document.getElementById("valueee");
    let ele22 = ele2.value; 

    let ele3 = document.getElementById("expireddd");
    let ele33 = ele3.value;

    list.push([ele1.value,ele1.value,])
    
    setCookie(ele11,ele22,ele33);

    displayCookieValueWebpage(ele11);
    displayCookieKeyWebpage(ele11);
    
    console.log("Successfully added");
}



// displayCookieValueWebpage("monit");
// displayCookieKeyWebpage("monit");


//getDataCookie();
displayCookie();
//deleteCookie("username");



