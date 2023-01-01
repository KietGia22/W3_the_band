var header = document.getElementById('header');
var momenu = document.getElementById('mobile');
var height = header.clientHeight;

momenu.onclick = function()
{
    var isclose = header.clientHeight === height;
    if(isclose)
    {
        header.style.height = 'auto';
    }
    else
    {
        header.style.height = '46px';
    }

    //tu dong dong khi chon menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(var i=0; i<menuItems.length; i++)
    {
        var menuItem = menuItems[i];

        
        menuItem.onclick = function()
        {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(!isParentMenu)
            {
                header.style.height = null;
            }
            else
            {
                event.preventDefault();
            }
        }
    }
}