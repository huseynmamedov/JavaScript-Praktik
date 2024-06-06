const notifContainer = document.querySelector(".notifContainer")
const button = document.getElementById("button")

const notification = [
    "Instagram Bildirim",
    "Twitter Bildirim",
    "Youtube Bildirim",
    "LinkEd Bildirim",
    "Github Bildirim",
]

const color = ['red','purple','black','gray','green','blue']

button.addEventListener("click", ()=>createNotification())

function createNotification() {
    const notif = document.createElement("div")
    notif.classList.add("notif")
    notif.classList.add(getrandomColor())

    notif.innerText = getrandomNotif()

    notifContainer.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    }, 3000)
}

function getrandomNotif() {
    return notification [Math.floor(Math.random() * notification.length)]

}

function getrandomColor() {
    return color[Math.floor(Math.random() * color.length)]
}
