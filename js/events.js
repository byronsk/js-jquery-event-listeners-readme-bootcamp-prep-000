//define functions here
$( document ).ready(function() {
});

function getIt() {
$( "p" ).on( "click", function() {
  alert('Hey!');
  return;
  
});
 }

function frameIt() {
$( "p" ).load(function() {
  $( this ).addClass( '.tasty' );
});
}