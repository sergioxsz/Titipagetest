function showBalloons() {
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("img");
        balloon.src = "https://cdn-icons-png.flaticon.com/512/4151/4151545.png";
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 6000);
    }
    document.getElementById("finalMessage").style.opacity = 1;
}