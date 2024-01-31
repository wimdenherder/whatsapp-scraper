// Selecteer alle afbeeldingen met de opgegeven query
const images = document.querySelector("#main > div:nth-child(4) > div > div:nth-child(3)").querySelectorAll("img");

// Klik op elke afbeelding
images.forEach(img => {
    img.click();
});

// Wacht 5 seconden (5000 milliseconden), en download dan de afbeeldingen
setTimeout(() => {
    images.forEach((img, index) => {
        // Maak een tijdelijke a-element
        const link = document.createElement('a');
        link.href = img.src;
        link.download = `downloaded_image_${index}.jpg`; // Of gebruik de bestandsnaam uit img.src als die beschikbaar is
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}, 5000);
