function showBestFoods() {
    const carouselContainer = document.querySelector('.carousel-container');
    const uniqueId = 'carousel' + Math.floor(Math.random() * 1000000);
    
    let carouselHtml = `
        <div id="${uniqueId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#${uniqueId}" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#${uniqueId}" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#${uniqueId}" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="dist/assets/img/food1.png" alt="Imagen 1" class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Comida 1</h5>
                        <p>Descripción de la comida 1.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="dist/assets/img/food2.png" alt="Imagen 2" class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Comida 2</h5>
                        <p>Descripción de la comida 2.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="dist/assets/img/food3.png" alt="Imagen 3" class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Comida 3</h5>
                        <p>Descripción de la comida 3.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${uniqueId}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${uniqueId}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    `;
    
    carouselContainer.innerHTML = carouselHtml;
    new bootstrap.Carousel(document.getElementById(uniqueId));

    // Aplica el tema oscuro si ya está activo
    if (document.body.classList.contains('dark')) {
        document.getElementById(uniqueId).classList.add('dark');
    }
}
