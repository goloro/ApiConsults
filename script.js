document.querySelector(".content").addEventListener("click", e => {
    let clickado = e.target.tagName
    if (clickado === "BUTTON") {
        localStorage.setItem("tecnologia", e.target.id)
    }
    window.open("api.html", "_self")
})