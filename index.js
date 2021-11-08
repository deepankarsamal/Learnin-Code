
document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('text-1').innerHTML = mssg;
});

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 820) {
        document.getElementById('text-2').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ducimus!';
        document.getElementById('text-2').className = "slideUp";
    }
};

var mssg = 'HehE. this site was made for you to laugh at. Hope u smile when u look at this and look back at the fabulous time we had. :)';