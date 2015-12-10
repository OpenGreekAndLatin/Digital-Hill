 $(document).ready(function() { //this programme will start once the mainpage has been loaded completely
              $('#arethusapen, #verbpen, #nounpen').css('cursor', 'pointer'); //the three ids change the appearance of the cursor by changing the stylesheets value of it to 'pointer'
	$('#arethusapen').click(function() { //by clicking on the pencil the marked up words shall be turned into a color according to their part of speech, clicking on it again will remove the class
		$('.marknoun').toggleClass('noun'), 
		$('.markverb').toggleClass('verb'),
		$('.markadj').toggleClass('adjective'),
		$('.markadv').toggleClass('adverb'),
		$('.markadp').toggleClass('adposition'),
		$('.markconj').toggleClass('conjunction'),
		$('.markpron').toggleClass('pronoun'),
		$('.markirr').toggleClass('irregular'),
		$('.markart').toggleClass('article'),
		$('.marknum').toggleClass('number');
		$('.markitr').toggleClass('interjunction'); 
		console.log('Toggled all classes.'); //this line s for debugging reasons only and writes the text to the console!
	});
	$('#verbpen').click(function() { //only verbs are toggled
	    $('.markverb').toggleClass('verb');
	    console.log('Toggled only the verbs.');
	});
	$('#nounpen').click(function() { // only nouns are toggled
	    $('.marknoun').toggleClass('noun');
	    console.log('Toggled only the nouns');
	});
});
// the following lines load text into the divs left and right according to the button which was selected; those lines became irrelevant
/*$(document).ready(function() {
	$('#thuc1115 a').click(function() {
               	$('#left').load('thuc_1_115_l.htm'),
               	$('#right').load('thuc_1_115_r.htm');
               	console.log('Loaded Thuc. 1.115.');
               	return false;
	});
	$('#thuc1116 a').click(function() {
		$('#left').load('thuc_1_116_l.htm'),
		$('#right').load('thuc_1_116_r.htm');
		console.log('Loaded Thuc. 1.116.');
		return false;
	});
	$('#thuc1117 a').click(function() {
		$('#left').load('thuc_1_117_l.htm'),
		$('#right').load('thuc_1_117_r.htm');
		console.log('Loaded Thuc. 1.117.');
		return false;
	});
	$('#dio1227 a').click(function() {
		$('#left').load('dio_12_27_l.htm'),
		$('#right').load('dio_12_27_r.htm');
		console.log('Loaded Dio. 12.27.');
		return false;
	});
	$('#dio1228 a').click(function() {
              	             $('#left').load('dio_12_28_l.htm');
              	             $('#right').load('dio_12_28_r.htm');
              	             console.log('Loaded Dio. 12.28.');
              	             return false;
	});
	$('#per24 a').click(function() {
         	              $('#left').load('plut_per_24_l.htm');
         	              $('#right').load('plut_per_24_r.htm');
         	               console.log('Loaded Per. 24.');
         	               return false;
	});
	$('#per25 a').click(function() {
                            $('#left').load('plut_per_25_l.htm');
	             $('#right').load('plut_per_25_r.htm');
        	            console.log('Loaded Per. 25.');
                           return false;
	});
	$('#per26 a').click(function() {
     	              $('#left').load('plut_per_26_l.htm');
     	              $('#right').load('plut_per_26_r.htm');
     	              console.log('Loaded Per. 26.');
     	              return false;
	});
	$('#per27 a').click(function() {
                            $('#left').load('plut_per_27_l.htm');
                            $('#right').load('plut_per_27_r.htm');
                            console.log('Loaded Per. 27.');
                            return false;
	});
	$('#per28 a').click(function() {
                            $('#left').load('plut_per_28_l.htm');
                            $('#right').load('plut_per_28_r.htm');
                            console.log('Loaded Per. 28.');
                            return false;
	});
	$('#them2 a').click(function() {
                            $('#left').load('plut_them_2_l.htm');
                            $('#right').load('plut_them_2_r.htm');
                            console.log('Loaded Them. 2.');
                            return false;
	});
	$('#vh714 a').click(function() {
                            $('#left').load('vh714_l.htm');
                            $('#right').load('vh714_r.htm');
                            console.log('Loaded Varia Historia 7.14.');
                            return false;
	});
	$('#vesp281 a').click(function() {
                            $('#left').load('vesp281_l.htm');
                            $('#right').load('vesp281_r.htm');
                            console.log('Loaded Vespae 281.');
                            return false;
	});
	$('#vesp283 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#pax697 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#per37 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#harp a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#sud a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#thuc321 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#thuc3131 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#ath603 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#schol a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#phot1 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#phot2 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#vh29 a').click(function() {
                            $('#left').load('vh29_l.htm');
                            $('#right').load('vh29_r.htm');
                            console.log('Loaded Varia Historia 2.9.');
                            return false;
	});
	$('#isoc15111 a').click(function() {
                            $('#left').load('isoc15111_l.htm');
                            $('#right').load('isoc15111_r.htm');
                            console.log('Loaded Isocrates.');
                            return false;
	});
	$('#ath328 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#nh781 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#ath533 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	})
	;$('#pg a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#tim12 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#thuc757 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#pol384 a').click(function() {
                            $('#left').load('pol384_l.htm');
                            $('#right').load('pol384_r.htm');
                            console.log('Loaded Politics III.8.4.');
                            return false;
	});
	$('#ath572 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#thuc234 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#rhet1734 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#hdt7162 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#suppl a').click(function() {
                        $('#left').load('suppl_l.htm');
                        $('#right').load('suppl_r.htm');
                        console.log('Loaded Euripides.');
                        return false;
	});
	$('#ath99 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
	$('#per8 a').click(function() {
	       alert('Work in progress. Hold your horses.');
	       return false;
	});
});
*/

