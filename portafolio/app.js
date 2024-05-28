var banner = document.querySelector('.banner');
var menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function()
{
    menuToggle.classList.toggle('active');
    banner.classList.toggle('active');

}