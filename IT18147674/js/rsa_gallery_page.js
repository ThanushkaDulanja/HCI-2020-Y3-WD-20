var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");

var Upload = new Array(
    "../Upload/park2.jpg",
    "../Upload/road1.jpg",
    "../Upload/rsa3.jpg",
    "../Upload/bermish2.jpg"
);

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        gallery.src = Upload[i];
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active"; // Space before 'active' matters. Put " active" instead of "active".
    };
}
