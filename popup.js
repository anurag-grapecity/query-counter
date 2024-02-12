let counter = document.getElementById('counter');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');

chrome.storage.sync.get('count', function (data) {
    counter.textContent = data.count || 0;
});

increment.onclick = function () {
    let count = parseInt(counter.textContent, 10) + 1;
    counter.textContent = count;
    chrome.storage.sync.set({ count: count });
};

decrement.onclick = function () {
    let count = parseInt(counter.textContent, 10) - 1;
    if (count >= 0) {
        counter.textContent = count;
        chrome.storage.sync.set({ count: count });
    }
};