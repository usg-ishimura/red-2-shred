// popup.js
document.getElementById('annullaBtn').addEventListener('click', function() {
    window.close();
});

// Imposta l'intervallo di tempo per cui eliminare i dati (tutti i dati)
const removalOptions = {
    "since": 0 // Imposta "0" per rimuovere tutti i dati (da sempre)
};

async function clearBrowsingData() {
    try {
        await browser.browsingData.removeCache(removalOptions);
        console.log("Cache eliminata.");

        await browser.browsingData.removeCookies(removalOptions);
        console.log("Cookie eliminati.");

        await browser.browsingData.removeDownloads(removalOptions);
        console.log("Download eliminati.");

        await browser.browsingData.removeFormData(removalOptions);
        console.log("Dati dei moduli eliminati.");

        await browser.browsingData.removeHistory(removalOptions);
        console.log("Cronologia eliminata.");

        await browser.browsingData.removeLocalStorage(removalOptions);
        console.log("LocalStorage eliminato.");

        await browser.browsingData.removePasswords(removalOptions);
        console.log("Password eliminate.");

        await browser.browsingData.removePluginData(removalOptions);
        console.log("Dati dei plugin eliminati.");

        console.log("Tutti i dati sono stati eliminati!");
        
        window.close();

    } catch (error) {
        console.error("Errore durante l'eliminazione dei dati:", error);
    }
}


document.getElementById('eliminaBtn').addEventListener('click', function() {
  
      document.getElementById("popupTitle").innerHTML = "Shredding...";
      
      document.getElementById("modalBody").innerHTML = '<div style="padding-top:100.000%;position:relative;"><iframe src="https://gifer.com/embed/hMF" width="100%" height="100%" style="position:absolute;top:0;left:0;" frameBorder="0" allowFullScreen></iframe></div><p><a href="https://gifer.com">a través de GIFER</a></p>';

      // Aspetta 9 secondi prima di chiamare clearBrowsingData()
      setTimeout(() => {
         clearBrowsingData();
      }, 9000);
});
