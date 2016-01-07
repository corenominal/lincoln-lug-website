$(document).ready(function()
{
    /*
    If SVG not supported, replace svg images with png
    */
    if(!Modernizr.svg)
    {
	    $('img[src*="svg"]').attr('src', function()
	    {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	    var logo_img_ext = 'png'
	}
	else
	{
		var logo_img_ext = 'svg'
	}

});