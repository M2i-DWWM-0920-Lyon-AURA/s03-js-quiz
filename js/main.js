function loadQuestion(questionId) {
  // Change le numéro de la question
  $('#question-id').text(questionId + 1);

  // Change le texte de la question
  $('#current-question-text').text(questionData[questionId].text);

  // Change le texte de chaque réponse
  $('#answer1-caption').text(questionData[questionId].answer1);
  $('#answer2-caption').text(questionData[questionId].answer2);
  $('#answer3-caption').text(questionData[questionId].answer3);
  $('#answer4-caption').text(questionData[questionId].answer4);

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
}

// Initialise l'index de la question actuelle à zéro
let currentQuestionId = 0;
// Associe une action au fait de valider le formulaire
$('#question-form').submit( function(event) {
  // Empêche le rechargement de la page
  event.preventDefault();
  // Récupère les données du formulaire
  const formData = $('#question-form').serializeArray()
  // Dans les données du formulaire, récupère le numéro de la réponse donnée par l'utilisateur
  const userAnswer = formData[0].value;
  // Compare le numéro de la réponse donnée par l'utilisateur avec le numéro de la bonne réponse
  if (Number(userAnswer) === questionData[currentQuestionId].rightAnswer) {
    // Crée un noeud affichant une alerte
    const alertNode = $('<div class="alert alert-success alert-dismissible fade show" role="alert">Bravo! C\'était la bonne réponse! 😎<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
    // Insérer ce noeud dans le DOM
    $('#answer-result').append(alertNode);
  } else {
    // Crée un noeud affichant une alerte
    const alertNode = $('<div class="alert alert-danger alert-dismissible fade show" role="alert">Oh non! Ce n\'était pas la bonne réponse! 😢<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
    // Insérer ce noeud dans le DOM
    $('#answer-result').append(alertNode);
  }
  // Augmente l'index de la question actuelle de 1
  currentQuestionId += 1;
  // Si l'index de la question actuelle dépasse le nombre de question présentes dans les données
  if (currentQuestionId >= questionData.length) {
    // Si l'utilisateur souhaite recommencer le quiz
    if (confirm('Recommencer le quiz?')) {
      // Réinitialise l'index de la question à zéro
      currentQuestionId = 0;
    } else {
      // Arrêter la fonction (pour éviter de charger la question suivante)
      return;
    }
  }
  // Charge la question actuelle dans le DOM
  loadQuestion(currentQuestionId);
});

loadQuestion(0);
