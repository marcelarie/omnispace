function dropDown() {
    document.getElementById("newReality").classList.toggle("show");
}
window.onclick = function(Event) {
    if (!Event.target.matches('.dropButton')) 
        var dropmenu = document.getElementsByClassName("insideDrop");
        var i;
        for (i = 0; i < dropmenu.length; i++) {
            var openDropmenu = dropmenu[i];
            if (openDropmenu.classList.contains('showMenu')) {
            openDropmenu.classList.remove('showMenu');
        }
    }
}
