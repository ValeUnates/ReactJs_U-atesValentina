import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        id: "Ad1234",
        nombre: "FUNDA VALU",
        descripcion:"Esta funda de silicona es la manera ideal de complementar y proteger tu iPhone. Esta fabricada con un 55% de silicona reciclada y el interior está forrado de suave microfibra para proteger el iPhone",
        stock: 10,
        precio:8000,
        imagen:"/img/fundamarron.png",
        category: "fundas",
    },
    {
        id: "Ec5678",
        nombre: "FUNDA SUSY",
        descripcion: "Gracias a los imanes que se alinean a la perfección con el iPhone, esta funda se ajusta de forma impecable y permite una carga inalámbrica más rápida. Además, no hace falta que la quites para cargar el iPhone: basta con acoplar el cargador MagSafe o colocar el teléfono en una base de carga inalámbrica Qi2 o Qi.",
        stock: 10,
        precio:8000,
        imagen:"/img/magsafenegra.jfif",
        category: "fundas",
    },
    {
        id: "Tr8910",
        nombre: "CARGA RAPIDA",
        descripcion: "El cargador de carga rápida es un accesorio tecnológico que se destaca por su diseño compacto y portátil, facilitando su uso en cualquier lugar.",
        stock: 5,
        precio: 15000,
        imagen:"/img/cargador-cable.avif",
        category: "cargadores",
    },
    {
        id: "Yg5473",
        nombre: "CARGADOR MAGSAFE",
        descripcion: "El cargador MagSafe facilita la carga inalámbrica. Los imanes perfectamente alineados se adhieren a tu iPhone para ofrecer una carga inalámbrica más rápida.",
        stock: 7,
        precio:17000,
        imagen:"/img/cargador-magsafe.webp",
        category: "cargadores",
    },
    {
        id: "Op8302",
        nombre: "PROTECTOR HIDROGEL",
        descripcion: "Está diseñado para mantener tu pantalla a salvo de rayones, impactos y huellas dactilares sin comprometer la claridad de visualización ni la sensibilidad táctil.",
        stock: 15,
        precio: 6800,
        imagen: "/img/hidrogel.jfif",
        category: "protectores de pantalla",
    },
    {
        id: "If0283",
        nombre: "VIDRIO TEMPLADO",
        descripcion: "El vidrio templado es un tipo de vidrio de seguridad, procesado por tratamientos térmicos o químicos, para aumentar su resistencia en comparación con el vidrio normal.",
        stock: 16,
        precio: 5900,
        imagen:"/img/vidrio-templado.png",
        category: "protectores de pantalla",
    },
    {
        id: "Du5302",
        nombre: "AIRPODS PRO 2",
        descripcion: "Disfruta de una calidad nunca oída con la cancelación activa de ruido de nivel profesional, el audio adaptativo que ajusta el control de ruido según el entorno, el modo de sonido ambiente para seguir en contacto con el mundo exterior y Detección de Conversación, que baja el volumen de lo que estás escuchando cuando empiezas a hablar con alguien. Protege tus oídos de niveles de ruido perjudiciales con Reducción de Sonidos Fuertes, céntrate en la voz de quien tengas delante con Amplificación de Conversación y escucha el océano o la lluvia para relajarte en ambientes ruidosos con Sonidos de Fondo. Tanto los AirPods Pro 2 como el estuche de carga inalámbrica MagSafe (USB‑C) tienen una calificación IP54 y son resistentes al polvo, el agua y el sudor, y puedes usar la app Buscar para localizarlos.",
        stock: 7,
        precio: 43000,
        imagen: "/img/airpods-pro-2.jpeg",
        category: "auriculares",
    },
    {
        id: "La9832",
        nombre: "AIRPODS 3ERA GENERACION",
        descripcion:"Los AirPods (3.ª generación) ofrecen una experiencia de sonido envolvente con audio espacial y seguimiento dinámico de la cabeza, brindando una calidad de audio impresionante para música, llamadas y entretenimiento. Estos AirPods vienen con un diseño rediseñado para mayor comodidad y se emparejan fácilmente con todos tus dispositivos Apple gracias al chip H1. Su estuche de carga inalámbrica MagSafe permite recargarlos sin esfuerzo y proporciona varias cargas adicionales, otorgando hasta 30 horas de autonomía en total.", 
        stock: 5,
        precio:40000,
        imagen:"/img/airpods-3gen.jpg",
        category: "auriculares",
    },
    
    ]

    const seedProducts = ()=> {
        const productsRef = collection(db, "products")
        products.map(( { id, ...dataProduct } ) => {
            addDoc(productsRef, dataProduct)
        })

        console.log("productos subidos")
        return
    }

    seedProducts()