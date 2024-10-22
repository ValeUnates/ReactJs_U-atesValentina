const products = [
{
    id: "Ad1234",
    nombre: "FUNDA VALU",
    descripcion: "",
    stock: 10,
    precio:8000,
    imagen:"/img/fundamarron.png",
    category: "fundas",
},
{
    id: "Ec5678",
    nombre: "FUNDA SUSY",
    descripcion: "",
    stock: 10,
    precio:8000,
    imagen:"/img/magsafenegra.jfif",
    category: "fundas",
},
{
    id: "Tr8910",
    nombre: "CARGA RAPIDA",
    descripcion: "",
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
    descripcion: "",
    stock: 15,
    precio: 6800,
    imagen: "/img/hidrogel.jfif",
    category: "protectores de pantalla",
},
{
    id: "If0283",
    nombre: "VIDRIO TEMPLADO",
    descripcion: "",
    stock: 16,
    precio: 5900,
    imagen:"/img/vidrio-templado.png",
    category: "protectores de pantalla",
},
{
    id: "Du5302",
    nombre: "AIRPODS PRO 2",
    descripcion: "",
    stock: 7,
    precio: 43000,
    imagen: "/img/airpods-pro-2.jpeg",
    category: "auriculares",
},
{
    id: "La9832",
    nombre: "AIRPODS 3ERA GENERACION",
    descripcion:"", 
    stock: 5,
    precio:40000,
    imagen:"/img/airpods-3gen.jpg",
    category: "auriculares",
},

]

const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export { getProducts }