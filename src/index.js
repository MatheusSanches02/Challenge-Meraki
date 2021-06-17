window.onscroll = () => 
{
    const menu = document.getElementById("menu");
    if (document.documentElement.scrollTop > 50) 
    {
        menu.classList.add('menu-all-show');
    }
    else
    {
        menu.classList.remove('menu-all-show');
    }
}

window.onresize = () =>
{
    if (document.documentElement.offsetWidth <= 800)
    {
        document.getElementById('menu-options').classList.add('hide');
    }
    else
    {
        document.getElementById('menu-options').classList.remove('hide');
    }
}