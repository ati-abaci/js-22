document.addEventListener('DOMContentLoaded', () => {
    const adviceText = document.getElementById('advice');
    const adviceId = document.getElementById('advice-id');
    const newAdviceButton = document.getElementById('newAdvice');

    const fetchAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            adviceText.textContent = `"${data.slip.advice}"`;
            adviceId.textContent = `Advice #${data.slip.id}`;
        } catch (error) {
            adviceText.textContent = "Failed to fetch advice.";
            adviceId.textContent = "";
        }
    };

    newAdviceButton.addEventListener('click', fetchAdvice);

    fetchAdvice();
});