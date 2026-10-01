chrome.webNavigation.onCommitted.addListener(function(tab){

    if (tab.frameId == 0){
        chrome.tabs.query({active:true,lastFocusedWindow:true}, tabs => {
            let tabId = tabs[0].id
            let url = tabs[0].url

            if (!url){
                return;
            }

            if (url == "https://www.youtube.com/"){

                removeInstancesOfShorts(tabId);
                return;
                

            } else if (url.includes("youtube.com/shorts")){

                chrome.tabs.update(tabId, "https://www.youtube.com/")
                return;
    
            }
        })
    }
});

function removeInstancesOfShorts(tabId){
    chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ["removeShorts.js"]
    })
}