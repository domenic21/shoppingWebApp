const languageToggle = document.getElementById('language-toggle');
const inputText = document.getElementById('input-field');
const btnText = document.getElementById('add-button');

// English and Spanish translations
const translations = {
    English: {
        placeholder: 'Add item to the list',
        btn: 'Add to cart',
    },
    Spanish: {
        placeholder: 'Agregar a la lista',
        btn: 'Agregar',
    },
};

// Function to toggle between English and Spanish
function toggleLanguage() {
    // Check the current language
    const currentLanguage = languageToggle.textContent;

    // Toggle the language based on the current language
    const targetLanguage = currentLanguage === 'English' ? 'Spanish' : 'English';

    // Update the language toggle text
    languageToggle.textContent = targetLanguage;

    // Update the placeholder and button text
    inputText.placeholder = translations[targetLanguage].placeholder;
    btnText.textContent = translations[targetLanguage].btn;
}

// Set initial language to English
inputText.placeholder = translations.English.placeholder;
btnText.textContent = translations.English.btn;

// Event listener for language toggle button
languageToggle.addEventListener('click', toggleLanguage);
