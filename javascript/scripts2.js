var modal2 = document.getElementById('myModal2');

var span2 = document.getElementsByClassName("close2")[0];

function btnfunction2() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
};
window.onclick = function(event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
};