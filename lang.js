document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('language-menu').addEventListener('change', function() {
        var selectedLanguage = this.value;
        if (selectedLanguage === 'en') {
            window.location.href = 'index.html';
        } else if (selectedLanguage === 'it') {
            window.location.href = 'it.html';
        }else if (selectedLanguage === 'de') {
            window.location.href = 'de.html';
        }else if (selectedLanguage === 'ru') {
            window.location.href = 'ru.html';
        }
    });
});