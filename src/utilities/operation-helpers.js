import { operations } from "./operations";

export const handleOperation = (requestURL, requestBody, result) => {
    const url = new URL(requestURL);
    const operation = url.searchParams.get('operation');
    if (!operation || !operations[operation]) return null;
    console.log('Operation >>>', operation)

    const parsed = JSON.parse(requestBody)

    const handled = operations[operation](parsed, result);
    console.log('Handled >>> ', handled)
    captureGraphQL(parsed, operation);
    return { operation, handled };
};

export const captureGraphQL = (parsed, operation) => {
    const captured = { ...parsed.data, operation };
    chrome.runtime.sendMessage({ data: captured, type: 'captureGraphQL' });
};

export const evaluateUrl = () => {
    return new Promise((resolve) => {
        chrome.devtools.inspectedWindow.eval('window.location.href', (result, isException) => {
            resolve({ result, isException });
        });
    });
};