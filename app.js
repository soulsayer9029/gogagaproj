const create=document.querySelector('#create')

create.addEventListener('click',(e)=>{
    const name=document.querySelector('#name').value
    const location=document.querySelector('#location').value
    
    fetch("https://gogagaproj.herokuapp.com/api/create", { 
      
    // Adding method type 
    method: "POST",
	mode: 'cors',  
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        name: name, 
        location: location 
    }), 
      
    // Adding headers to the request 
    headers: { 
        
       
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
  
// Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => console.log(json)); 
    e.preventDefault()
})


const search=document.querySelector('#search')
const searchbtn=document.querySelector('#searchbtn')
const display=document.querySelector('#display')

searchbtn.addEventListener('click',(e)=>{
    
    fetch(`https://gogagaproj.herokuapp.com/api/search/${search.value}`,{
        method:'get',
        mode:'cors'
    }) 
      
    // Converting to JSON 
    .then(response =>response.json())
    .then(json=>{
        let data=json;
        if(data.length===0){
            let div=document.createElement('div')
            div.innerHTML=`<h3>Result not found </h3>`
            display.innerHTML=''
            display.appendChild(div)
        }else{
            display.innerHTML=""
            data.forEach((nameloc,index)=>{
                const name=nameloc.name
                const location =nameloc.location
                const div=document.createElement('div')
                div.innerHTML=`<ul><li>Serial:${index+1}</li><li>Name : ${name}</li><li>Location : ${location}</li></ul>`
                display.appendChild(div)
            })
        }
        

    })
    .catch(err =>console.log(err))
    e.preventDefault()
    })

const getall=document.querySelector('#getall')
const display1=document.querySelector('#display1')
getall.addEventListener('click',(e)=>{

    fetch(`https://gogagaproj.herokuapp.com/api/`,{
        method:'get',
        mode:'cors'
    }) 
        
    // Converting to JSON 
    .then(response =>response.json())
    .then(json=>{
        let data=json;
        if(data.length===0){
            let div=document.createElement('div')
            div.innerHTML=`<h3>Result not found </h3>`
            display1.innerHTML=''
            display1.appendChild(div)
        }else{
            display1.innerHTML=""
            data.forEach((nameloc,index)=>{
                const name=nameloc.name
                const location =nameloc.location
                const div=document.createElement('div')
                div.innerHTML=`<ul><li>Serial:${index+1}</li><li>Name : ${name}</li><li>Location : ${location}</li></ul>`
                display1.appendChild(div)
            })
        }
        

    })
    .catch(err =>console.log(err))
    e.preventDefault()
    })
