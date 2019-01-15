//define functions here

function getIt() {
$( "p" ).on( "click", function() {
  alert('Hey!');
  return;
  
});
 }

function frameIt() {
  $('.tasty').load(function(){
  alert("Image loaded.");
});
}