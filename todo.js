

$('ul').on('click', 'li', event=>{
	$(event.currentTarget).toggleClass('completed');

});

$('input[type="text"]').on('keypress', event=>{
	//weird part...enter key to append....
	if(event.which===13){
		var todoText = $(event.currentTarget).val()
		$('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + todoText +'</li>');
		$('input[type="text"]').val("");
	}
});



$('ul').on('click','span', event=>{
	//instead of THIS-$('span').on('click', event=>{
	//have to change to THIS- $('ul').on('click','span' event=>{
	$(event.currentTarget).parent().fadeOut(500, ()=>{
				$(event.currentTarget).remove();

		});
	event.stopPropagation();

});

$('.fa-plus').on('click', ()=>{
	$('input').toggle();


})