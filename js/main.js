// Change le numéro de la question
$('#question-id').text(1);

// Change le texte de la question
$('#current-question-text').text(questionData[0].text);

// Change le texte de chaque réponse
$('#answer1-caption').text(questionData[0].answer1);
$('#answer2-caption').text(questionData[0].answer2);
$('#answer3-caption').text(questionData[0].answer3);
$('#answer4-caption').text(questionData[0].answer4);

/*
// Initialise le compteur à 1
let count = 1;
// Pour chaque élément du DOM contenant une réponse
for (let element of $('#question-form label')) {
  // Récupère la réponse dont le numéro correspond à la valeur actuelle du compteur
  const answer = questionData[0]['answer' + count]
  // Changer le texte de l'élément pour la réponse récupérée
  element.innerText = answer;
  // Incrémente le compteur
  count += 1;
}
*/

// Initialise l'index de la question actuelle à zéro
let currentQuestionId = 0;
// Associe une action au fait de valider le formulaire
$('#question-form').submit( function(event) {
  // Empêche le rechargement de la page
  event.preventDefault();
  // Augmente l'index de la question actuelle de 1
  currentQuestionId += 1;
  // Charge la question actuelle dans le DOM
  // Change le numéro de la question
  $('#question-id').text(currentQuestionId + 1);
  // Change le texte de la question
  $('#current-question-text').text(questionData[currentQuestionId].text);
  // Change le texte de chaque réponse
  $('#answer1-caption').text(questionData[currentQuestionId].answer1);
  $('#answer2-caption').text(questionData[currentQuestionId].answer2);
  $('#answer3-caption').text(questionData[currentQuestionId].answer3);
  $('#answer4-caption').text(questionData[currentQuestionId].answer4);
});
