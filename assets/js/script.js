const linksContainerDiv = document.querySelector(".contacts");
const linkShareDiv = document.querySelector(".icon-bg");
const linkIconDiv = document.querySelector(".icon");
const linksA = document.querySelectorAll('a');

function enableLinks() {
    for(let link of linksA) {
        link.classList.toggle("pointer-events");
    };
};

function showContacts() {
    if(linkIconDiv.classList.contains("color-white")) {
        linksContainerDiv.style.display = "flex";
        setTimeout(() => {
            linksContainerDiv.style.opacity = "1";
        }, 10);
    } else {
        setTimeout(() => {
            linksContainerDiv.style.opacity = "0";
        }, 10);
    };
};

linkShareDiv.addEventListener("click", () => {
    enableLinks();
    linkShareDiv.classList.toggle("new-icon-bg");
    linkIconDiv.classList.toggle("color-white");
    showContacts();
});

