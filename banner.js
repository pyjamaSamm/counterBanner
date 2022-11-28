// counter counts upto this deadline
var deadline = new Date("Nov 28, 2022 16:34:25").getTime();

// gets the current window size
let res_w = window.innerWidth

//creates parent div
let div1 = document.createElement("div");
let h2 = document.getElementsByTagName("h2")[0];
h2.insertAdjacentElement("afterend", div1);
// insert the div in the proper place
div1.insertAdjacentElement("beforebegin", document.createElement("br"))
div1.style.display = "flex";

let left = document.createElement("div")
let clock = document.createElement("div");
let timer = document.createElement("div")
timer.style.height = "30px"
let right = document.createElement("div")

// for responsive design
if (res_w >= 474) {
    div1.style.height = "3.2vh";
    div1.style.maxHeight = "3.2vh";
    div1.style.minHeight = "30px";
    div1.style.background = "linear-gradient(90deg, rgb(243, 190, 0) 0%, rgba(255,109,0,1) 100%)";
    div1.style.justifyContent = "space-between"
    div1.style.borderRadius = "30px";

    clock.style.height = "50%";
    clock.style.minHeight = "30px";
    left.style.width = "30%"
    clock.style.maxWidth = "150px";
    clock.style.maxHeight = "90px";
    clock.style.display = "inline"
    // writes the needed content
    clock.innerHTML = "<img style='height: 100%; margin-right:4px; object-fit: contain;max-height: 90px; float:left' src='https://cdn-icons-png.flaticon.com/512/3193/3193311.png'><p style='font-size: max(1.4vw, 9px); margin-top: 2.5px; font-weight: 700;'>LIMITED TIME OFFER</p>";
    left.appendChild(clock)
    left.style.maxHeight = "40px"


    right.innerHTML = "<p style='font-size: max(1.4vw, 9px); margin-top: 2.5px; margin-right: 12px'><b>GET 10% OFF</b> Use Code: <b>EXAMSTART</b></p>";


    var x = setInterval(function () {
        // gets the current track to update the counter
        var now = new Date().getTime();
        var t = deadline - now;
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        timer.style.fontSize = 'max(1.4vw, 9px)'
        timer.style.marginTop = "2.5px"
        timer.innerHTML = "Ends in: <b>" + hours.toString().padStart(2, '0') + " : " + minutes.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0') + "</b>";
        if (t < 0) {
            clearInterval(x);
            timer.innerHTML = "Ends in: <b>00 : 00 : 00</b>";
        }
    }, 1000);

    div1.appendChild(left)
    div1.appendChild(timer)
    div1.appendChild(right)
    div1.style.scale = 1

}
// for smaller devices
else {
    div1.style.height = "22.2vh";
    div1.style.margin = "auto"
    div1.style.width = "82vw"
    div1.style.minHeight = "30px";
    div1.style.background = "#F9E79F";
    div1.style.flexDirection = "column"
    div1.style.borderRadius = "9px";
    div1.style.alignItems = "center"
    div1.style.justifyContent = "center"
    div1.style.border = "solid #FFC000"

    clock.style.display = "flex"
    clock.style.alignItems = "flex-end"
    clock.style.margin = "auto"

    clock.innerHTML = "<img style='height: 30px; margin-right: 10px; object-fit: contain; float:left' src='https://cdn-icons-png.flaticon.com/512/3193/3193311.png'><p style='font-size: 17px; margin-bottom:0;text-decoration:underline;text-underline-offset: 8px;text-decoration-color:gray'><b>LIMITED TIME OFFER<b><hr></p>";
    left.appendChild(clock)
    left.style.maxHeight = "40px"


    right.innerHTML = "<table><tr ><td style='text-align:center'>GET 10% OFF</td><td style='text-align:center'>Use Code: EXAMSTART</td></table>";
    right.style.width = "82vw"
    timer.style.height = "30px"
    timer.style.fontSize = "17px"
    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        timer.innerHTML = "Ends in: <b>" + hours.toString().padStart(2, '0') + " : " + minutes.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0') + "</b>";
        if (t < 0) {
            clearInterval(x);
            timer.innerHTML = "Ends in: <b>00 : 00 : 00</b>";
        }
    }, 1000);
    left.style.marginTop = "7px"
    left.style.marginBottom = "12px"
    div1.appendChild(left)
    div1.appendChild(timer)
    right.style.background = "#FFC000"
    right.style.marginBottom = "5px"
    right.style.marginTop = "6px"
    right.style.padding="4px"
    div1.appendChild(right)
}
