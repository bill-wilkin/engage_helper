let capturedData = [];
chrome.runtime.onConnect.addListener(port => {
    console.log('Connected ..', port);
    if (port.name === 'devtools-window') {
        port.onMessage.addListener(msg => {
            if (msg.type === 'fetchData') {
                // Respond with the data needed
                port.postMessage(capturedData);
            }
        });
    }
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('segment')) {
        chrome.runtime.sendMessage({ type: 'tabUpdated', url: tab.url });
    }
});
// Listen for messages from content scripts or DevTools panel
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // console.log('WORKING!')
    if (message.type === 'captureGraphQL') {
        // Store captured GraphQL data
        capturedData.push(message.data);
        // console.log('GraphQL data captured:', message.data);
    } 
});