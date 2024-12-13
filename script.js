// Simula lo stato del bot
document.addEventListener('DOMContentLoaded', () => {
  const statusElement = document.getElementById('status');

  // Stato iniziale (in caricamento)
  statusElement.textContent = 'Caricamento...';
  statusElement.className = 'status loading';

  // Simula una chiamata API per verificare lo stato del bot
  setTimeout(() => {
    // Cambia questa variabile per testare gli stati
    const botStatus = 'offline'; // Possibili valori: 'online', 'offline', 'warning'

    if (botStatus === 'online') {
      statusElement.textContent = '✔️ ONLINE ✔️';
      statusElement.className = 'status online';
    } else if (botStatus === 'offline') {
      statusElement.textContent = '✖️ OFFLINE ✖️';
      statusElement.className = 'status offline';
    } else if (botStatus === 'warning') {
      statusElement.textContent = '⚠ ONLINE WITH POSSIBLE PROBLEMS ⚠';
      statusElement.className = 'status warning';
    }
  }, 1000); // Simula il tempo di risposta
});
