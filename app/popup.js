// popup.js
document.getElementById('annullaBtn').addEventListener('click', function() {
    window.close();
});

async function deepClearAllData() {
    
    const removalOptions = {
            "since": 0 // Set "0" to remove all data (from the beginning)
    };
    
    try {   
        //https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
    
        let dataTypes = {
            cache: true,
            cookies: true,
            downloads: true,
            formData: true,
            history: true,
            indexedDB: true,
            localStorage: true,
            passwords: true,
            pluginData: true,
            serviceWorkers: true
        };

        let removing = browser.browsingData.remove(removalOptions, dataTypes);
        
        await removing;

        console.log("All browsing data has been deleted!");
        
        window.close();
        
    } catch (error) {
        console.error("Error while deleting data:", error);
    }
}

document.getElementById('eliminaBtn').addEventListener('click', function() {
  
      document.getElementById("popupTitle").innerHTML = "Shredding data...";
      
      document.getElementById("modalBody").innerHTML = '<div style="padding-top:100.000%;position:relative;"><iframe src="https://gifer.com/embed/hMF" width="100%" height="100%" style="position:absolute;top:0;left:0;" frameBorder="0" allowFullScreen></iframe></div><p><a href="https://gifer.com">via GIFER</a></p>';

      // Wait 9 seconds before calling deepClearAllData()
      setTimeout(() => {
         deepClearAllData()
      }, 9000);
});
