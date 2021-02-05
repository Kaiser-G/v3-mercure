const textAnim = document.querySelector("h2");

var typewriter = new Typewriter(textAnim, {
  delet: 75,
});

typewriter
  .pauseFor(1000)
  .typeString("Bonjour, bienvenue chez Mercure")
  .pauseFor(300)
  .deleteChars(12)
  .typeString("dans votre hôtel Ici et Là, et votre brasserie Le Belooga.")
  .typeString("<br/>Toutes les équipes vous souhaite une bonne année 2021 !")
  .pauseFor(1000)
  .typeString("<br/><br/>Quelques infos rapide :")
  .typeString("<br/>La réception est ouverte 7 jours/ 7 et 24h/ 24.")
  .pauseFor(400)
  .deleteChars(47)
  .typeString(
    "Vous pouvez appeler la réception en composant le 9 depuis votre chambre."
  )
  .pauseFor(1000)
  .start();
