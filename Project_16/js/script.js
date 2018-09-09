 $(document).ready(function () {

// datepicker 

$('.datepicker').datepicker({
	weekStart: 1,
	daysOfWeekHighlighted: "6,0",
	autoclose: true,
	todayHighlight: true,
});
$('.datepicker').datepicker("setDate", new Date());


// валидация для третьй и четвертой колонки, среднее значение полей

var minTable = 'input[name*="TableTotalMin"]';
var minChair = 'input[name*="ChairTotalMin"]';
var averageTableSum = '#TableTotalMin-sum';
var averageChairSum = '#ChairTotalMin-sum';

function inputFocus(fieldsName, cellId) {
	var regexp = /^[0-9]*$/;
	var inputs = $(fieldsName);
	var arr = [];
	inputs.each(function() {
		if (this.value !== "" && this.value.match(regexp) && this.value <= 100) {
			arr.push(this.value);
		} else if (this.value !== "") {
			$(this).val("");
			$(this).css('box-shadow', '0 0 1px 1px red');
		}
	});
	console.log(arr);
	for (a in arr ) {
		arr[a] = parseInt(arr[a], 10);
	}
	var sum = arr.reduce(function(a, b) { return a + b; });
	var avg = sum / arr.length;
	$(cellId).html(avg);
}

$(minTable).focusout({fieldsName:minTable, cellId:averageTableSum}, function(eventObject) {
	inputFocus(eventObject.data.fieldsName, eventObject.data.cellId);
});

$(minChair).focusout({fieldsName:minChair, cellId:averageChairSum}, function(eventObject) {
	inputFocus(eventObject.data.fieldsName, eventObject.data.cellId);
});

$(minTable).focusin(function() {
	$(this).css('box-shadow', 'none');
});

$(minChair).focusin(function() {
	$(this).css('box-shadow', 'none');
});


//текстовое поле disabled, если чекбокс не чекнут

$('#PtAfterUseOf1').change({idName:'#textPtAfterUseOf1'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#PtAfterUseOf2').change({idName:'#textPtAfterUseOf2'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#PtAfterUseOf3').change({idName:'#textPtAfterUseOf3'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#PtAfterUseOf4').change({idName:'#textPtAfterUseOf4'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#PtAfterUseOf5').change({idName:'#textPtAfterUseOf5'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});


$('#StoppedTreatmentPrematurelyDueTo1').change({idName:'#textStoppedTreatmentPrematurelyDueTo1'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#StoppedTreatmentPrematurelyDueTo2').change({idName:'#textStoppedTreatmentPrematurelyDueTo2'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#StoppedTreatmentPrematurelyDueTo3').change({idName:'#textStoppedTreatmentPrematurelyDueTo3'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#StoppedTreatmentPrematurelyDueTo4').change({idName:'#textStoppedTreatmentPrematurelyDueTo4'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});

$('#StoppedTreatmentPrematurelyDueTo5').change({idName:'#textStoppedTreatmentPrematurelyDueTo5'}, function(eventObject) {
	changeStatus(eventObject.data.idName);   
});


function changeStatus(fieldID) {
	$(fieldID).prop('disabled', function(i, val) {
		return !val;
	}); 
	$(fieldID).val("");
}


// кнопка, по нажатию на которую в таблицу добавляется строка (перед строкой с инпутами, отображающими средние значения)

$('#newRow').click(function(){
	var table = $('.table');
	var inputDate = '<input data-date-format="dd/mm/yyyy" class="datepicker">';
	var inputInitials = '<input name="Initials" required="required" type="text">';
	var inputTableTotalMin = '<input name="TableTotalMin" required="required" type="text" value="">';
	var inputChairTotalMin = '<input name="ChairTotalMin" required="required" type="text" value="">';

	var tr = (
		'<tr>' +
		'<td>'+ inputDate +'</td>'+
		'<td>'+ inputInitials +'</td>'+
		'<td>'+ inputTableTotalMin +'</td>'+
		'<td>'+ inputChairTotalMin +'</td>'+
		'<td>'+ '<div>' + '<label class="checkbox"><input type="checkbox" value="PtToleratedTreatmentWell">Pt. tolerated treatment well</label>' + '</div>' +
		'<div>' + '<label class="checkbox">' + '<input type="checkbox" value="PtAfterUseOf" id="PtAfterUseOf">' + 'Pt. c/o after use of' + '</label>' +
		'<div class="form-check form-check-inline">' +
		'<label class="form-check-label">' + '<input class="form-check-input" name="value" type="radio" value="ScoliosisTable">' + 'Scoliosis Table' + '</label>' +
		'</div>' +
		'<div class="form-check form-check-inline">' +
		'<label class="form-check-label">' + '<input class="form-check-input" type="radio" name="value" value="Chair">' + 'Chair' + '</label>' +
		'</div>'+
		'<input id="textPtAfterUseOf" name="textPtAfterUseOf" disabled type="text">' +
		'</div>' +
		'<div>' + '<label class="checkbox">' +
		'<input  type="checkbox" id="StoppedTreatmentPrematurelyDueTo" value="StoppedTreatmentPrematurelyDueTo">' + 'Stopped treatment prematurely due to ' +
		'</label>' +
		'<input  id="textStoppedTreatmentPrematurelyDueTo" name="textStoppedTreatmentPrematurelyDueTo" disabled type="text">' +'</td>'+
		'</tr>'
		);
	$('.row-sum').before(tr);
	setId();
	$('.datepicker').datepicker("setDate", new Date());

	$(minTable).focusout({fieldsName:minTable, cellId:averageTableSum}, function(eventObject) {
		inputFocus(eventObject.data.fieldsName, eventObject.data.cellId);
	});

	$(minChair).focusout({fieldsName:minChair, cellId:averageChairSum}, function(eventObject) {
		inputFocus(eventObject.data.fieldsName, eventObject.data.cellId);
	});

});

var i = 5;
function setId(){

	$('#StoppedTreatmentPrematurelyDueTo').attr('id', 'StoppedTreatmentPrematurelyDueTo' + ++i);

	$('#textStoppedTreatmentPrematurelyDueTo').attr('id', 'textStoppedTreatmentPrematurelyDueTo' + i);

	$('#PtAfterUseOf').attr('id', 'PtAfterUseOf' + i);

	$('#textPtAfterUseOf').attr('id', 'textPtAfterUseOf' + i);


	$('#PtAfterUseOf' + i).change({idName:'#textPtAfterUseOf' + i}, function(eventObject) {
		changeStatus(eventObject.data.idName);
	});

	$('#StoppedTreatmentPrematurelyDueTo' + i).change({idName:'#textStoppedTreatmentPrematurelyDueTo' + i}, function(eventObject) {
		changeStatus(eventObject.data.idName);   
	});

}

});
