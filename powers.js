const allEnabled = document.querySelectorAll("section");


document.addEventListener("click", () => {
    let idName = event.target.id.split("-");
    let section = document.querySelector("idName[i]");
    if (idName[0] === 'activate' && idName[1] === 'all') {
        allEnabled.forEach( disable => {
            if (disable.classList.contains('disabled')) {
                disable.classList.toggle('disabled');
                disable.classList.toggle('enabled');   
            }
        });
    } else if (idName[1] === 'all') {
        allEnabled.forEach( className => {
            if (className.classList.contains('enabled')) {
                className.classList.toggle('disabled');
                className.classList.toggle('enabled');   
            }
        });
    } else {
        activatePower(idName[1])
    }
    
})

const activatePower = (id) => {
    if (document.querySelector(`#${id}`).classList.contains('disabled')) {
        document.querySelector(`#${id}`).classList.toggle('disabled')
        document.querySelector(`#${id}`).classList.toggle('enabled')
    }   
}

// document.querySelector('#activate-flight').addEventListener("click", function() {
//     document.querySelector("#flight").classList.toggle("enabled")
//     console.log(flight)
// })

// document.querySelector("#activate-mindreading").addEventListener("click", function() {
//     document.querySelector("#mindreading").classList.toggle("enabled")
//     console.log(mindreading)
// })

// document.querySelector("#activate-xray").addEventListener("click", function() {
//     document.querySelector("#xray").classList.toggle("enabled")
//     console.log(xray)
// })

// document.querySelector("#activate-all").addEventListener("click", () => {
//     const activateAll = document.querySelectorAll(".power");
//     activateAll.forEach (element => {
//         element.classList.add("enabled")
//     })
// })

// document.querySelector("#deactivate-all").addEventListener("click", () => {
//     const deactivateAll = document.querySelectorAll(".power");
//     deactivateAll.forEach (element => {
//         if (element.classList.contains("enabled")) {
//         element.classList.toggle("disabled")
//         element.classList.toggle("enabled")
//         }
//     })
// })
