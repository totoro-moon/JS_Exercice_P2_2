//variable elem appliqué à l'id name du input
var lostFocusMessage = document.getElementById("name");
// la variable lostFocusMessage appel par element onblur(quand la souris quitte le focus de l'imput) la fonction afficher message
lostFocusMessage.onblur = afficherMessage;
//fonction qui affiche une modale
function afficherMessage() {
	alert("Évènement onblur detecté!");
}
// méthode-2
// on appel la fonction dans l'input du html avec l'evenement onblur:"displayMessage()"
// on créé la variable pour annoncer le message
// var lostFocusMessage = "Évènement onblur detecté!"
//    function displayMessage() {
// 	      alert(lostFocusMessage );
// }
