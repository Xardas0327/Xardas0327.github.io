$(document).ready(function () {
	$('.accordion-button').click(function() {
		let accordion = $(this).closest('.accordion')[0];
		
		$('.accordion').each(function(i,e) {
			if(e !== accordion){
				$(e).find('.accordion-button:not(.collapsed)').addClass('collapsed');
				$(e).find('.accordion-collapse.show').removeClass('show');
			}
		});
	});
});