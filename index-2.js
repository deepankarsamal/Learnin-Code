document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('text-1').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ducimus!';
});


window.addEventListener('scroll', function() {

    var scroll = document.documentElement.scrollTop;
    if (scroll > 1000) {
        document.getElementById('text-2').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ducimus!';
        document.getElementById('text-2').className = "slideRight";
    }
});

window.addEventListener('scroll', function() {

    var scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
        document.getElementById('surprise').className = "surprise";
        
    }
});

/*
document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('text-1').innerHTML = 'Hmmm. U still there huh. and u blind too. And u would definitely read the message below :)';
});

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;
    if (
        document.documentElement.scrollTop > 500){
        document.getElementById('text-2').innerHTML = 'Hmmm. U still there huh. and u blind too. And u would definitely read the message below :)'} 
};

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 400){
        document.getElementById('surprise').style.backgroundImage = "-webkit-linear-gradient(rgb(212, 89, 126), lightseagreen)";
    }
    
};
*/



// var mmsg = HehE. this site was made for you to laugh at. Hope u smile when u look at this and look back at the fabulous time we had. :)
