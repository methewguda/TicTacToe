$(document).ready(function(){
	var x = "X";
	var o = "O";
	var turns = 0;

	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');

	//Main Game Logic
	$('#board li').on('click', function(){
		if(spot1.hasClass('O') && spot2.hasClass('O') && spot3.hasClass('O') ||
		   spot4.hasClass('O') && spot5.hasClass('O') && spot6.hasClass('O') ||
		   spot7.hasClass('O') && spot8.hasClass('O') && spot9.hasClass('O') ||
		   spot1.hasClass('O') && spot4.hasClass('O') && spot7.hasClass('O') ||
		   spot2.hasClass('O') && spot5.hasClass('O') && spot8.hasClass('O') ||
		   spot3.hasClass('O') && spot6.hasClass('O') && spot9.hasClass('O') ||
		   spot1.hasClass('O') && spot5.hasClass('O') && spot9.hasClass('O') ||
		   spot3.hasClass('O') && spot5.hasClass('O') && spot7.hasClass('O')
		  ){

		   	alert('Winner: O');
		   	$('#board li').text('+');
		   	$('#board li').removeClass('disable');
		   	$('#board li').removeClass('O');
		   	$('#board li').removeClass('X');
		} else if(spot1.hasClass('X') && spot2.hasClass('X') && spot3.hasClass('X') ||
		   spot4.hasClass('X') && spot5.hasClass('X') && spot6.hasClass('X') ||
		   spot7.hasClass('X') && spot8.hasClass('X') && spot9.hasClass('X') ||
		   spot1.hasClass('X') && spot4.hasClass('X') && spot7.hasClass('X') ||
		   spot2.hasClass('X') && spot5.hasClass('X') && spot8.hasClass('X') ||
		   spot3.hasClass('X') && spot6.hasClass('X') && spot9.hasClass('X') ||
		   spot1.hasClass('X') && spot5.hasClass('X') && spot9.hasClass('X') ||
		   spot3.hasClass('X') && spot5.hasClass('X') && spot7.hasClass('X')
		  ){

		   	alert('Winner: X');
		   	$('#board li').text('+');
		   	$('#board li').removeClass('disable');
		   	$('#board li').removeClass('O');
		   	$('#board li').removeClass('X');
		} else if(turns == 9){

		   	alert('Game Tie');
		   	$('#board li').text('+');
		   	$('#board li').removeClass('disable');
		   	$('#board li').removeClass('O');
		   	$('#board li').removeClass('X');
		   	turns = 0;
		} else if($(this).hasClass('disable')){

			alert('This spot is already filled');
		} else if(turns%2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable O');
			if(spot1.hasClass('O') && spot2.hasClass('O') && spot3.hasClass('O') ||
		       spot4.hasClass('O') && spot5.hasClass('O') && spot6.hasClass('O') ||
		       spot7.hasClass('O') && spot8.hasClass('O') && spot9.hasClass('O') ||
		       spot1.hasClass('O') && spot4.hasClass('O') && spot7.hasClass('O') ||
		       spot2.hasClass('O') && spot5.hasClass('O') && spot8.hasClass('O') ||
		       spot3.hasClass('O') && spot6.hasClass('O') && spot9.hasClass('O') ||
		       spot1.hasClass('O') && spot5.hasClass('O') && spot9.hasClass('O') ||
		       spot3.hasClass('O') && spot5.hasClass('O') && spot7.hasClass('O')
		      ){

		      	alert('Winner: O');
		      	turns = 0;
		      }
		  } else{
		    	turns++;
				$(this).text(x);
				$(this).addClass('disable X');
				if(spot1.hasClass('X') && spot2.hasClass('X') && spot3.hasClass('X') ||
			       spot4.hasClass('X') && spot5.hasClass('X') && spot6.hasClass('X') ||
			       spot7.hasClass('X') && spot8.hasClass('X') && spot9.hasClass('X') ||
			       spot1.hasClass('X') && spot4.hasClass('X') && spot7.hasClass('X') ||
			       spot2.hasClass('X') && spot5.hasClass('X') && spot8.hasClass('X') ||
			       spot3.hasClass('X') && spot6.hasClass('X') && spot9.hasClass('X') ||
			       spot1.hasClass('X') && spot5.hasClass('X') && spot9.hasClass('X') ||
			       spot3.hasClass('X') && spot5.hasClass('X') && spot7.hasClass('X')
			      ){

			      	alert('Winner: X');
			      	turns = 0;
			    }
		}
	});

	//Reset the Gmae Board
	$('#reset').on('click', function(){
		$('#board li').text('+');
	   	$('#board li').removeClass('disable');
	   	$('#board li').removeClass('O');
	   	$('#board li').removeClass('X');
	   	turns = 0;
	});
});