let test = "Hallo"
console.log (`${test}`)

function adjustIframeSize() {
    const container = document.querySelector('.video-container');
    const iframe = container.querySelector('iframe');
    const width = container.offsetWidth;
    const height = (width / 16) * 9;

    iframe.style.height = height + 'px';
}

  // Panggil fungsi adjustIframeSize saat halaman dimuat dan saat ukuran jendela berubah
window.addEventListener('DOMContentLoaded', adjustIframeSize);
window.addEventListener('resize', adjustIframeSize);

function adjustIframeSize() {
    const container = document.querySelector('.spotify-container');
    const iframe = container.querySelector('iframe');
    const width = container.offsetWidth;
    const height = (width / 16) * 9;

    iframe.style.height = height + 'px';
}

  // Panggil fungsi adjustIframeSize saat halaman dimuat dan saat ukuran jendela berubah
window.addEventListener('DOMContentLoaded', adjustIframeSize);
window.addEventListener('resize', adjustIframeSize);