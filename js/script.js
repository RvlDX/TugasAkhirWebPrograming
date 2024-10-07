document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Rumah Makan Padang Sederhana Siap!');

    const waButton = document.getElementById('waButton');
    waButton.addEventListener('click', function() {
        const name = document.getElementById('name-wa').value;
        const menu = document.getElementById('menu-wa').value;
        const address = document.getElementById('address-wa').value;

        if (name && menu && address) {
            const message = `Halo, saya ${name}. Saya ingin memesan:\n${menu}\nAlamat pengiriman: ${address}`;
            const phoneNumber = '6285338864770'; // Ganti dengan nomor WhatsApp rumah makan
            const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Redirect ke WhatsApp
            window.open(waLink, '_blank');
        } else {
            alert('Silakan lengkapi semua data pesanan.');
        }
    });

    // Scroll Animations
    const elementsToAnimate = document.querySelectorAll('.menu, .contact');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

