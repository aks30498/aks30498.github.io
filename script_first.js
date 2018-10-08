function handler(e){
   
    e = e||window.event;

    var x = e.pageX;
    var y = e.pageY;

    if (x === undefined) {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        x = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(x, y);
    $("#mouse_circle").css("top",y-15);
    $("#mouse_circle").css("left",x-15);
}
if (document.attachEvent) document.attachEvent('onmousemove', handler);
else document.addEventListener('mousemove', handler);