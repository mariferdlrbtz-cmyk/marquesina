document.addEventListener('DOMContentLoaded', function() {
    // Puedes agregar funcionalidad JavaScript aquí si es necesario
    console.log('Portada cargada correctamente');
    
    // Ejemplo de interacción: cambiar la imagen al hacer clic
    const imagen = document.getElementById('imagen-centro');
    if (imagen) {
        imagen.addEventListener('click', function() {
            alert('Imagen clickeada!');
            // Aquí podrías cambiar la imagen o realizar otra acción
        });
    }
    
    // Control de la marquesina
    const marquesina = document.getElementById('marquesina');
    if (marquesina) {
        marquesina.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        marquesina.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
});