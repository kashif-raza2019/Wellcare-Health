function smoothFade(){
    // Smooth fade in/out of body onload
    var body = document.getElementsByTagName('body')[0];
    body.style.opacity = 0;
    body.style.transition = 'opacity 1s';
    body.style.opacity = 1;

}