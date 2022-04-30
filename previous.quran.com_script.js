window.onmessage = (e) => {
    const port2 = e.ports[0];
    let ayahs = {};
    document.querySelectorAll('.translation').forEach((el, index) => {
        const arabic = el.closest('.translation__item').getAttribute('data-text');
        let ayah = el.innerText;
        if (el.innerText.includes('ৰ')) {
            ayah = ayah.replace('ৰ', 'র');
        }
        ayah = ayah.replace(/(\[.*?\])/g, '');
        ayah = ayah.replace(/ \,/g, ',');
        ayahs[`${index}`] = [arabic, ayah];
    });
    port2.postMessage(ayahs);
}
window.open("http://127.0.0.1:5500/index.html");