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
$( '.tasty' ).load(function() {
  if ( $( this ).height() > 0) {
    $( this ).addClass( '.tasty' );
  }
});
}