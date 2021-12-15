function ajax() {
    // URL API PLACEHOLDER
    const url = "https://jsonplaceholder.typicode.com/users"

    // Creamos objeto XMLHttpRequest -> encargado de hacer las peticiones
    const xhr = new XMLHttpRequest()
    let list = document.getElementById("list")

    xhr.open('GET', url, true)
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText)
            data.forEach(e => {
                let ol = document.createElement("ol")
                for (let i=0; i<4; i++) {
                    let li = document.createElement("li")

                    if (i == 0)
                        li.innerHTML = "Name: " + e.name
                    else if (i == 1)
                        li.innerHTML = "Username: " + e.username
                    else if (i == 2)
                        li.innerHTML = "Email: " + e.email
                    else if (i == 3)
                        li.innerHTML = "Phone: " + e.phone
                    
                    ol.appendChild(li)
                }
                list.appendChild(ol)
            })
        }
    }
}