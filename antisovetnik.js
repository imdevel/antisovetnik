function antiSovetnik(count)
{
	count = count || 10;

	if (count <= 1) {
		console.log('Not found YS...');
		return;
	}

	console.log('Detecting YS...');

	var sova = null; 
	var links = document.getElementsByTagName('a'); 

	for (var i=0; i<links.length; i++) {
		var href = links[i].getAttribute('href'); 

		if (/sovetnik\.market/i.test(href)) {
			sova = links[i]; 
			break;
		}
	} 

	if (!sova) {
		setTimeout(function(){ antiSovetnik(count-1); }, 200);
		return;
	}

	var sovetnik, parent = sova;
	while (parent && !/body/i.test(parent.tagName)) {
		sovetnik = parent; 
		parent = parent.parentNode; 
	} 

	parent.removeChild(sovetnik);

	document.documentElement.style.marginTop = '';
	console.log('Removed YS...');
}

antiSovetnik();