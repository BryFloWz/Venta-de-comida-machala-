document.addEventListener('DOMContentLoaded', function () {
    // Cambios entre secciones
    document.querySelectorAll('button[data-section], button[data-next], button[data-prev]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const targetSection = e.target.dataset.section || e.target.dataset.next || e.target.dataset.prev;
            if (targetSection) {
                document.querySelectorAll('.section').forEach((section) => {
                    section.classList.remove('active');
                });
                document.getElementById(targetSection).classList.add('active');
            }
        });
    });

    // Lógica del carrito
    document.querySelectorAll('.add-to-cart').forEach((btn) => {
        btn.addEventListener('click', () => {
            alert('Artículo añadido al carrito');
        });
    });

    // Enviar mensaje de contacto
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
        form.reset();
    });
});