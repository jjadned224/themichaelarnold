window.onload = () => {
    count = 0;
    const navbutton = document.getElementById("show");
    navbutton.onclick = shownav;
  }

shownav = () => {
    x = document.getElementById("navbar");
    if (count == 0) {
        x.classList.remove("display");
        count = 1;
    } else {
        x.classList.add("display");
        count = 0;
    }
}