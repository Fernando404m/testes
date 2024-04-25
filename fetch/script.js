function GET() {
    fetch("https://reqres.in/api/users").then(res => {
        if (res.ok) {
            console.log("deu baum")
            return res.json()
        }else {
            console.log("deu ruim")
        }
    }).then(dados => {
        document.getElementById("algo").innerHTML = ""
        for (const num in dados.data) {
            dado = dados.data[num]
            console.log(dado)
            document.getElementById("algo").innerHTML += ` - ${dado["id"]} - ${dado["email"]} - ${dado["first_name"]} <br>`
        }
    })
}


function POST() {
    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            name: "user 13"
        })
    })
}
