function fadeCron() 
{
    const startButton = document.getElementById('start-button');
    const animatedGif = document.getElementById('animated-control');
    if (startButton.textContent == 'Iniciar')
    {
        startButton.textContent = 'Parar';
        animatedGif.classList.remove('hide');
    }
    else
    {
        startButton.textContent = 'Iniciar';
        animatedGif.className = 'hide';
    }
}