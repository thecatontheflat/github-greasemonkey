removeNodes = function() {
	var path = $('#pathToRemove').val();

	var parents = $('div[data-path^="'+path+'"]').parent();

	parents.each(function() {
	        var id = $(this).attr('id');
	        var li = $('li a[href="#'+id+'"]').parent();
	        li.remove();
	});

	parents.remove();	
};

bindToggle = function() {
	$('a.minibutton.show-diff-stats.js-details-target').on('click', function() {
		createDiv();
	});

	$('a.minibutton.hide-diff-stats.js-details-target').on('click', function() {
		$('#mydiv').remove();
	});
};

createDiv = function() {
	var input = $('<input/>', {
		id: 'pathToRemove',
		value: 'paste path here'
	});

	input.css('width', '100%');


	var div = $('<div/>', {
	    id: 'mydiv'
	});

	div.css('background-color', 'white');
	div.css('border-top', '1px solid #DDDDDD');
	div.css('border-left', '1px solid #DDDDDD');
	div.css('display', 'block');
	div.css('right', '250px');
	div.css('padding', '10px');
	div.css('position', 'absolute');
	div.css('text-align', 'center');
	div.css('top', '217px');
	div.css('width', '450px');
	div.css('z-index', '500');

	div.append(input);

	div.appendTo('#toc');

	$('#pathToRemove').keypress(function (e) {
  		if (e.which == 13) {
    		removeNodes();
  		}
	});

	$('#pathToRemove').focus(function() {
		$(this).val('');
	});
};


bindToggle();

console.log('included');