const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const getData = () => {
    fetch('https://reqres.in/api/users').then(response => {
        
        return response.json()
    })
    .then(responseData => {
        console.log(responseData)
    })
}

const postData = () =>{
    fetch('https://reqres.in/api/users',{
         // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        'email': 'eve.holt@reqres.in',
        'password': 'pistol'
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
    })
        // Converting to JSON 
    .then(response =>{
        return response.json()
    }) 
    
    // Displaying results to console 
    .then(responseData => console.log(responseData)); 
}

getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', postData)