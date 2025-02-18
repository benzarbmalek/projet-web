/* function validerFormulaire() {
    // Récupérer les valeurs des champs
    let titre = document.getElementById('titre').value.trim();
    let destination = document.getElementById('destination').value.trim();
    let dateDepart = document.getElementById('dateDepart').value;
    let dateRetour = document.getElementById('dateRetour').value;
    let prix = document.getElementById('prix').value.trim();
    let category = document.getElementById('category').value;

    // Validation du titre
    if (titre.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        return false;
    }

    // Validation de la destination
    let destinationRegex = /^[A-Za-z\s]{3,}$/;
    if (!destinationRegex.test(destination)) {
        alert("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.");
        return false;
    }

    // Validation des dates
    if (new Date(dateRetour) <= new Date(dateDepart)) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        return false;
    }

    // Validation du prix
    let prixNumber = parseFloat(prix);
    if (isNaN(prixNumber) || prixNumber <= 0) {
        alert("Le prix doit être un nombre positif.");
        return false;
    }

    // Si tout est valide
    alert("Le formulaire est valide. L'offre peut être ajoutée.");
    return true;
} */
    document.getElementById('offerForm').addEventListener('submit', function (event) {
        // Empêcher la soumission du formulaire par défaut
        event.preventDefault();
    
        // Réinitialiser les messages d'erreur
        clearErrors();
    
        // Récupérer les valeurs des champs
        let titre = document.getElementById('titre').value.trim();
        let destination = document.getElementById('destination').value.trim();
        let dateDepart = document.getElementById('dateDepart').value;
        let dateRetour = document.getElementById('dateRetour').value;
        let prix = document.getElementById('prix').value.trim();
    
        // Validation du titre
        if (titre.length < 3) {
            showError('titreError', 'Le titre doit contenir au moins 3 caractères.');
            return;
        }
    
        // Validation de la destination
        let destinationRegex = /^[A-Za-z\s]{3,}$/;
        if (!destinationRegex.test(destination)) {
            showError('destinationError', 'La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.');
            return;
        }
    
        // Validation des dates
        if (!dateDepart || !dateRetour) {
            showError('dateDepartError', 'Veuillez saisir une date de départ valide.');
            showError('dateRetourError', 'Veuillez saisir une date de retour valide.');
            return;
        }
    
        if (new Date(dateRetour) <= new Date(dateDepart)) {
            showError('dateRetourError', 'La date de retour doit être ultérieure à la date de départ.');
            return;
        }
    
        // Validation du prix
        let prixNumber = parseFloat(prix);
        if (isNaN(prixNumber) || prixNumber <= 0) {
            showError('prixError', 'Le prix doit être un nombre positif.');
            return;
        }
    
        // Si tout est valide
        showSuccess('Formulaire valide. L\'offre peut être ajoutée.');
    });
    
    // Fonction pour afficher un message d'erreur
    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }
    
    // Fonction pour afficher un message de succès
    function showSuccess(message) {
        let successMessage = document.createElement('div');
        successMessage.className = 'success';
        successMessage.textContent = message;
        document.getElementById('offerForm').appendChild(successMessage);
    }
    
    // Fonction pour réinitialiser les messages d'erreur
    function clearErrors() {
        let errorElements = document.querySelectorAll('.error');
        errorElements.forEach(function (element) {
            element.textContent = '';
        });
    
        let successMessage = document.querySelector('.success');
        if (successMessage) {
            successMessage.remove();
        }
    }