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

	var c = 10;
	var s = '';
	setInterval( function()
	{
		if( c >= 0 )
		{
			s = 'Redirecting in...';
			$( '#redirecting' ).html( s );
			$( '#count' ).html( c );
			c--;
		}
		else
		{
			$( '#redirector' ).fadeOut(2000, function()
			{
				window.location.href = "https://lincolnlug.org.uk";
			});
			return;
		}
	}, 1000 );


});