// Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau avec uniquement les chaînes dont la longueur est supérieure à 3.

let tabchain = ['Modou', 'Amara', 'Ka', 'Seydina', 'Ba', 'Mouhamed', 'Binta', 'Sai', 'Alkaly']
alert("Avant utilisation de la methode filter: "+ tabchain.join('-'));

filterTab = tabchain.filter((item) => item.length > 3)
alert("Avant utilisation de la methode filter: "+ filterTab.join('**'));
