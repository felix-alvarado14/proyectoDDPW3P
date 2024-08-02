function toggleContent() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
    } else {
        extraContent.style.display = 'none';
    }
}

function changeColor(button) {
    const originalColor = button.style.backgroundColor;
    button.style.backgroundColor = '#28a745'; // Cambiar a verde
    setTimeout(() => {
        button.style.backgroundColor = originalColor; // Restaurar el color original después de 0.5 segundos
    }, 500);
}
