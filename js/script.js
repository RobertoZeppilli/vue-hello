// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.


let app = new Vue(
    {
        el: "#root",
        data: {
            testo: "Paesaggio all'alba",
            immagine: 'img/paesaggio1.jpg',
        },
        methods: {
            cambiaImmagine: function () {
                if (this.immagine == 'img/paesaggio1.jpg' && this.testo == "Paesaggio all'alba") {
                    this.immagine = 'img/paesaggio2.jpg';
                    this.testo = "Paesaggio al tramonto";
                } else {
                    this.immagine = 'img/paesaggio1.jpg';
                    this.testo = "Paesaggio all'alba";
                }
            }
        }
    }
);