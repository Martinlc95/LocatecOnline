var SeaOrRep = true;

//If LookButton is clicked
$("#LookButton").on("click",function(event){
	$('#field2').removeClass('hide');
	$('#field1').addClass('hide');
	$('#form2').addClass('hide');
	$('#form5').addClass('hide');
	$('#form6').addClass('hide');

});


//If ReportButton is clicked
$("#ReportButton").on("click",function(event){
	SeaOrRep = false;
	$('#field2').removeClass('hide');
	$('#field1').addClass('hide');
	$('#form2').addClass('hide');
	$('#form5').addClass('hide');
	$('#form6').addClass('hide');
});


//If Home is clicked
$("#img2").on("click",function(event){
	location.reload();
	$('.input').val("");
	$('.inputList').val("0");
});


//Validate Student login
$('#LogBut').on("click", function(event){
	event.preventDefault();

	let success = true;
	let StId = $("#StudentId");
	let StPas = $("#StudentPass");
	let LogError = $("#LogError");

	if ((StId.val() === "") || (StPas.val() === ""))
	{
		LogError.text("Please fill the 2 fields.");
		success = false;
	}
	else
	{
		LogError.text("");
	}


	if(success) {
		let jsonToSend ={
		"StudentId" : StId.val(),
		"StudentPass" : StPas.val(),
		"action": "LOGIN"
		};


		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				LogError.text("");
				if(SeaOrRep) {
					$('#form2').removeClass('hide');
					$('#form1').addClass('hide');
				}
				else {
					$('#field3').removeClass('hide');
					$('#field1').addClass('hide');
					$('#field2').addClass('hide');
					$('#form4').addClass('hide');
				}
			},
			error : function(error){
				console.log(error);
				LogError.text("Student ID and Password not found.");
			}
		});
	}
	
});


//Validate "Report Found Object" fields and send data to the database
$('#RepBut').on("click", function(event){
	event.preventDefault();

	$('#mainDiv2').empty();

	let success = true;
	let Rep1 = $("#Rep1");
	let Rep2 = $("#Rep2");
	let Rep3 =$("#Rep3 option:selected").index();
	let Rep4 = $("#Rep4");
	let Rep5 = $("#Rep5");
	let RepError = $("#RepError");

	if ((Rep1.val() === "") || (Rep2.val() === "") || (Rep4.val() === "") || (Rep3 == 0) || (Rep5.val() === ""))
	{
		RepError.text("Please fill the 5 fields.");
		success = false;
	}
	else
	{
		RepError.text("");
	}


	if(success) {
		let jsonToPost ={
			"obEncontrado" : $("#Rep1").val(),
			"encontrador" : $("#Rep2").val(),
			"categoria" : $("#Rep3 :selected").val(),
			"descEncontrado" : $("#Rep4").val(),
			"emailEnc" : $("#Rep5").val(),
			"action": "REPITEM"
		};

		let jsonToSend ={
			"objEncontrado2" : $("#Rep1").val(),
			"action": "LOOKITEM"
		};

		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				$('#field3').addClass('hide');
				$('#field5').removeClass('hide');
				let newHTML = '';
				var i = 0;
				$(data).each(function(){
					newHTML +=	`<div class="result">
									<p><b> ${"Item: " + data[i].obj} </b></p>
									<p> ${"Category: " + data[i].cat} </p>
									<p> ${"Description: " + data[i].des} </p>
									<p> ${"Date: " + data[i].fec} </p>
									<p> ${"Lost by: " + data[i].per} </p>
									<p> ${"Contact: " + data[i].ema} </p>
									</div>`;
					i++;
				});
				$('#mainDiv2').append(newHTML);
			},
			error : function(error){
				console.log(error);
				$.ajax({
					url : "./data/applicationLayer.php",
					type : "POST",
					data : jsonToPost,
					ContentType : "application/json",
					dataType : "json",
					success : function(data){
						console.log(data);
						$('#form4').removeClass('hide');
						$('#form3').addClass('hide');
					},
					error : function(error){
						console.log(error);
					}
				});
			}
		});

	}	

});


//Search for an Item
$('#SeaBut').on("click", function(event){
	event.preventDefault();

	$('#mainDiv').empty();

	let success = true;
	let SeaI = $("#SeaItem");
	let SeaE = $("#SeaError");

	if (SeaI.val() === "")
	{
		SeaE.text("Please fill the field.");
		success = false;
	}
	else
	{
		SeaE.text("");
	}


	if(success) {

		let jsonToSend ={
		"SeaItem" : $("#SeaItem").val(),
		"action": "SEARITEM"
		};


		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				SeaE.text("");
				$('#form5').addClass('hide');
				$('#field4').removeClass('hide');
				let newHTML = '';
				var i = 0;
				$(data).each(function(){
			
					newHTML +=	`<div class="result">
									<p><b> ${"Item: " + data[i].obj} </b></p>
									<p> ${"Category: " + data[i].cat} </p>
									<p> ${"Description: " + data[i].des} </p>
									<p> ${"Date: " + data[i].fec} </p>
									<p> ${"Found by: " + data[i].enc} </p>
									<p> ${"Contact: " + data[i].ema} </p>
									</div>`;
					i++;
				});
				$('#mainDiv').append(newHTML);
			},
			error : function(error){
				//console.log(error);
				$('#form5').removeClass('hide');
			}
		});
	}
	
});


//Validate "Report Lost Object" fields and send data to the database
$('#LosBut').on("click", function(event){
	event.preventDefault();

	let success = true;
	let Los1 = $("#Los1");
	let Los2 = $("#Los2");
	let Los3 = $("#Los3 option:selected").index();
	let Los4 = $("#Los4");
	let Los5 = $("#Los5");
	let LosError = $("#LosError");

	if ((Los1.val() === "") || (Los2.val() === "") || (Los4.val() === "") || (Los3 == 0) || (Los5.val() === ""))
	{
		LosError.text("Please fill the 5 fields.");
		success = false;
	}
	else
	{
		LosError.text("");
	}


	if(success) {
		let jsonToPost ={
			"obPerdido" : $("#Los1").val(),
			"perdedor" : $("#Los2").val(),
			"categoria" : $("#Los3 :selected").val(),
			"descPerdido" : $("#Los4").val(),
			"emailPer" : $("#Los5").val(),
			"action": "LOSITEM"
		};

		$.ajax({
			url : "./data/applicationLayer.php",
			type : "POST",
			data : jsonToPost,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				$('#form6').removeClass('hide');
				$('#form2').addClass('hide');
				$('#form5').addClass('hide');
			},
			error : function(error){
				console.log(error);
			}
		});
	}	

});


//Send Report Confirmation
$('#RepBut2').on("click", function(event){
	event.preventDefault();

	let jsonToPost ={
		"obEncontrado" : $("#Rep1").val(),
		"encontrador" : $("#Rep2").val(),
		"categoria" : $("#Rep3 :selected").val(),
		"descEncontrado" : $("#Rep4").val(),
		"emailEnc" : $("#Rep5").val(),
		"action": "REPITEM"
	};

	$.ajax({
		url : "./data/applicationLayer.php",
		type : "POST",
		data : jsonToPost,
		ContentType : "application/json",
		dataType : "json",
		success : function(data){
			console.log(data);
			$('#field5').addClass('hide');
			$('#field3').removeClass('hide');
			$('#form4').removeClass('hide');
			$('#form3').addClass('hide');
		},
		error : function(error){
			console.log(error);
		}
	});	
});


//Show Post Lost item Section
$('#LosBut2').on("click", function(event){
	let Sor = $("#sorry");
	Sor.text("We are sorry none of the listed items was yours.");
	Sor.css({"font-weight": "bold",});
	$('#field4').addClass('hide');
	$('#form5').removeClass('hide');
});