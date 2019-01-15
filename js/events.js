//define functions here
$( document ).ready(function() {

function getIt() {
$( "p" ).on( "click", function() {
  alert('Hey!');
  return;
  
});
 }

function frameIt() {
$( "img" ).load(function() {
  $( "img" ).addClass( '.tasty' );
});
}

});
