//define functions here

function getIt() {
$( "p" ).on( "click", function() {
  alert('Hey!');
  return;
  
});
 }

function frameIt() {
$( '.tasty' ).load(function() {
  if ( $( this ).height() > 100) {
    $( this ).addClass( '.tasty' );
  }
});
}