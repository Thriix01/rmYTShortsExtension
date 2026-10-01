const SHORTS_SELECTOR = 'ytd-rich-shelf-renderer[is-shorts]';

function removeShorts() {
    document.querySelectorAll(SHORTS_SELECTOR)
        .forEach(element => element.remove());
}

const observer = new MutationObserver(removeShorts);

observer.observe(document.body, {
    childList: true,
    subtree: true
});

removeShorts();