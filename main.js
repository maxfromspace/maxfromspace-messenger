document.addEventListener('DOMContentLoaded', function(){
    var availableScreenWidth = window.screen.availWidth;
    if (availableScreenWidth < 500){
        document.getElementById( 'my_form' ).style.width = String(availableScreenWidth) +  "px";
    }else{
        document.getElementById( 'my_form' ).style.width = String(availableScreenWidth/2) +  "px";
    }
});