/* Gestire il cambio dell'immagine al click sui pallini in basso (nav);
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */

const app = new Vue({
    el: "#root",
    data: {
        message: "Test",
        images: [
            "img/paesaggio1.jpg",
            "img/paesaggio2.jpg",
            "img/paesaggio3.jpg",
            "img/paesaggio4.jpg"
        ],
        imagesIndex: 0
    },
    methods: {
        imageNext: function() {
            this.imagesIndex++;
            if (this.imagesIndex == this.images.length) {
                this.imagesIndex = 0;
            }
        },
        imagePrev: function() {
            this.imagesIndex--;
            if (this.imagesIndex == -1) {
                this.imagesIndex = this.images.length - 1;
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.imagesIndex++;
            if (this.imagesIndex == this.images.length) {
                this.imagesIndex = 0;
            }
        }, 3000);
    }
});