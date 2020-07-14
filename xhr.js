const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const getData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://reqres.in/api/users')

    xhr.responseType = 'json'
    xhr.onload = () => {
        const data = xhr.response
        console.log(data)
    }

    xhr.send()
}

const postData = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://reqres.in/api/register')
    xhr.responseType = 'json'
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    
    xhr.onload = () => {
        const data = xhr.response
        console.log(data)
    }

    xhr.send(JSON.stringify({
        'email': 'eve.holt@reqres.in',
        'password': 'pistol'
    }))
}

getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', postData)