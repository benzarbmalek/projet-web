/* function validerFormulaire() {
   
    let titre = document.getElementById('titre').value.trim();
    let destination = document.getElementById('destination').value.trim();
    let dateDepart = document.getElementById('dateDepart').value;
    let dateRetour = document.getElementById('dateRetour').value;
    let prix = document.getElementById('prix').value.trim();
    let category = document.getElementById('category').value;

   
    if (titre.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        return false;
    }

    
    let destinationRegex = /^[A-Za-z\s]{3,}$/;
    if (!destinationRegex.test(destination)) {
        alert("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.");
        return false;
    }

   
    if (new Date(dateRetour) <= new Date(dateDepart)) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        return false;
    }


    let prixNumber = parseFloat(prix);
    if (isNaN(prixNumber) || prixNumber <= 0) {
        alert("Le prix doit être un nombre positif.");
        return false;
    }

 
    alert("Le formulaire est valide. L'offre peut être ajoutée.");
    return true;
} */

  