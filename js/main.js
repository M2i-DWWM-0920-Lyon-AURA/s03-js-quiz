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
