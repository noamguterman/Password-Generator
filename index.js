const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const pass1El = document.getElementById("pass1")
const pass2El = document.getElementById("pass2")

function random15chars() {
    const arr = []
    
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        arr.push(characters[randomIndex])
    }
    
    return arr
}

function generatePasswords() {
    pass1El.classList.remove("fade-in")
    pass2El.classList.remove("fade-in")

    void pass1El.offsetWidth
    void pass2El.offsetWidth

    pass1El.textContent = random15chars().join("")
    pass2El.textContent = random15chars().join("")

    pass1El.classList.add("fade-in")
    pass2El.classList.add("fade-in")
}

