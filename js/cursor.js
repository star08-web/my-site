let curclicky = document.querySelectorAll(".cur-click");
let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e) {
    cursor.style.visibility = "visible";
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseleave', function() {
    cursor.style.visibility = "hidden";
});
curclicky.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        cursor.style.background = "salmon";
    });

    element.addEventListener('mouseleave', function() {
        cursor.style.background = "whitesmoke";
    });
});
