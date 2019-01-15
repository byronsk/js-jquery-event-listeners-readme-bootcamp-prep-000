//define functions here

function getIt() {
$( "p" ).on( "click", function() {
  alert('Hey!');
  return;
  
});
 }

function frameIt() {
  $("img").load(function(){
  alert("Image loaded.");
});
}