let tech = localStorage.getItem("tecnologia")
if ( tech == "ajax") {
    ajax()
} else if ( tech == "fetch") {
    fetchFuncion()
}

function ajax() {
    // URL API PLACEHOLDER
    const url = "https://jsonplaceholder.typicode.com/users"

    // Creamos objeto XMLHttpRequest -> encargado de hacer las peticiones
    const xhr = new XMLHttpRequest()
    let content = document.getElementById("contentApi")

    xhr.open('GET', url, true)
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText)
            data.forEach(e => {
                let div = document.createElement("div")
                for (let i=0; i<4; i++) {
                    let p1 = document.createElement("p")
                    let p2 = document.createElement("p")
                    let p3 = document.createElement("p")
                    let p4 = document.createElement("p")

                    if (i == 0)
                        p1.innerHTML = "Name: " + e.name
                    else if (i == 1)
                        p2.innerHTML = "Username: " + e.username
                    else if (i == 2)
                        p3.innerHTML = "Email: " + e.email
                    else if (i == 3)
                        p4.innerHTML = "Phone: " + e.phone
                    
                    div.appendChild(p1)
                    div.appendChild(p2)
                    div.appendChild(p3)
                    div.appendChild(p4)
                }
                content.appendChild(div)
            })
        }
    }
}

function fetchFuncion() {
    // https://www.balldontlie.io/api/v1/teams
    // https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15
    fetch ("https://www.balldontlie.io/api/v1/teams")
    .then((res) => {
        return res.json()
    })
    .then(json => {
        let content = document.getElementById("contentApi")
        json.data.forEach(e => {
            let div = document.createElement("div")
            for (let i=0; i<4; i++) {
                let p1 = document.createElement("p")
                let p2 = document.createElement("p")
                let p3 = document.createElement("p")
                let p4 = document.createElement("p")

                if (i == 0)
                    p1.innerHTML = "Name: " + e.full_name
                else if (i == 1)
                    p2.innerHTML = "City: " + e.city
                else if (i == 2)
                    p3.innerHTML = "Conference: " + e.conference
                else if (i == 3)
                    p3.innerHTML = "Division: " + e.division
                    
                div.appendChild(p1)
                div.appendChild(p2)
                div.appendChild(p3)
                div.appendChild(p4)
            }
            content.appendChild(div)
        })
    }).catch().finally()
}