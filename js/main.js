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

function displayAlert(color, alertMessage) {
  // Crée un noeud affichant une alerte
  const alertNode = $('<div class="alert alert-' + color + ' alert-dismissible fade show" role="alert">' + alertMessage + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
  // Insère l'alerte dans le DOM
  $('#answer-result').append(alertNode);
}

function addAnswerItem(iconClass, color, questionText) {
  // Crée un noeud affichant un élément de liste avec l'énoncé de la question
  const answerItem = $('<li class="list-group-item list-group-item-action list-group-item-' + color + '"><i class="fas ' + iconClass + '"></i> <span class="question-text">' + questionText + '</span></li>');
  // Insère le noeud dans le DOM
  $('#answers-list').append(answerItem);
}

// Initialise l'index de la question actuelle à zéro
let currentQuestionId = 0;
// Associe une action au fait de valider le formulaire
$('#question-form').submit( function(event) {
  // Empêche le rechargement de la page
  event.preventDefault();

  // ========================================================
  // Traitement de la réponse de l'utilisateur
  // ========================================================
  // Récupère les données du formulaire
  const formData = $('#question-form').serializeArray()
  // Dans les données du formulaire, récupère le numéro de la réponse donnée par l'utilisateur
  const userAnswer = formData[0].value;
  // Pré-définit les variables permettant de construire l'alerte en fonction de la réponse donné
  // afin de pouvoir les redéfinir dans la bloc "if" avant de les utiliser en-dehors de ce bloc
  let color;
  let alertMessage;
  let iconClass;
  // Compare le numéro de la réponse donnée par l'utilisateur avec le numéro de la bonne réponse
  if (Number(userAnswer) === questionData[currentQuestionId].rightAnswer) {
    // L'alerte devra s'afficher en vert
    color = 'success';
    // Définit le message que l'alerte devra contenir
    alertMessage = 'Bravo! C\'était la bonne réponse! 😎';
    // Définit l'icône que l'élément dans la liste de réponses devra afficher
    iconClass = 'fa-thumbs-up';
  } else {
    // L'alerte devra s'afficher en rouge
    color = 'danger';
    // Définit le message que l'alerte devra contenir
    alertMessage = 'Oh non! Ce n\'était pas la bonne réponse! 😢';
    // Définit l'icône que l'élément dans la liste de réponses devra afficher
    iconClass = 'fa-thumbs-down';
  }
  // Ajoute un nouvel élément contenant le texte de la question dans
  // la liste des réponses
  addAnswerItem(iconClass, color, questionData[currentQuestionId].text);
  // Invoque une alerte en lui passant la classe et le message désirés
  displayAlert(color, alertMessage);

  // ========================================================
  // Chargement de la question suivante
  // ========================================================
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
