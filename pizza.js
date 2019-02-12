$(".pep").hide();
$(".mushroom").hide();
$(".green-pepper").hide();
$(".sauce-white").hide();
$("aside ul li").hide();
$(".crust").removeClass("crust-gluten-free");
$(".btn").removeClass("active");


$(".btn-pepperonni").click(showPepperoni);
$(".btn-mushrooms").click(showMushrooms);
$(".btn-green-peppers").click(showPeppers);
$(".btn-sauce").click(showPWhiteSauce);
$(".btn-crust").click(showGlutenFree);
$("strong").text("10$");
var price=10;


function updatePrice(cost, event){
	var priceToping = parseInt(cost);
	var checkToping = $(event.target);
	if (checkToping.hasClass("active")){
		price += priceToping;
	}
	else {
		price -= priceToping;
	}
	$("strong").text(price+"$");
}


function showPepperoni(){
	$(".btn-pepperonni").toggleClass("active");
	$(".pep").slideToggle();
	updatePrice(1,event);
	$(".price ul li:nth-child(1)").slideToggle(); // why it doesnt work setting the class instead of aside?? Yes it works with price
}

function showMushrooms(){
	$(".btn-mushrooms").toggleClass("active");
	$(".mushroom").slideToggle();
	updatePrice(1,event);
	$("aside ul li:nth-child(2)").slideToggle();
}

function showPeppers(){
	$(".btn-green-peppers").toggleClass("active");
	$(".green-pepper").slideToggle();
	updatePrice(1,event);
	$("aside ul li:nth-child(3)").slideToggle();
}
function showPWhiteSauce(){
	$(".btn-sauce").toggleClass("active");
	$(".sauce-white").slideToggle();
	updatePrice(3,event);
	$("aside ul li:nth-child(4)").slideToggle();
}
function showGlutenFree(){
	$(".btn-crust").toggleClass("active");
	$(".crust").toggleClass("crust-gluten-free");
	updatePrice(5,event);
	$("aside ul li:nth-child(5)").slideToggle();
}