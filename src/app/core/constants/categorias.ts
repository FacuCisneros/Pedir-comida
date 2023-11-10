import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 250,
    imgUrl: 'https://osojimix.com/wp-content/uploads/2021/04/hamburguesa.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Hamburguea exotica',
        precio: 3000,
        ingredientes: ['Pan negro con semillas', 'Medallon angus', 'Lechuga', 'Tomate'],
        imagen:
          'https://recetinas.com/wp-content/uploads/2023/03/Hamburguesa-con-pan-negro.jpg',
      },
      {
        id: 2,
        nombre: 'Hamburguesa vegana de legumbres',
        precio: 2350,
        ingredientes: ['Tomate', 'Lechuga', 'Medallon de legumbres'],
        imagen:
          'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_muqvn0kg1s_e8a3509-1024x683.jpg.webp',
      },
      {
        id: 3,
        nombre: 'Doble bacon cheeseburger',
        precio: 3500,
        ingredientes: ['Pan con semillas', 'Doble medallon angus', 'Cheddar', 'Bacon', 'Pepinillos'],
        imagen:
          'https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/05/Burger-Palusa-Planeta-Urbano-2023-apertura.jpg?fit=5760%2C3840&ssl=1',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://imag.bonviveur.com/presentacion-final-de-la-pizza-romana.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Pizza tradicional',
        precio: 1000,
        ingredientes: ['Mozzarella', 'Aceitunas', 'Orégano'],
        imagen:
          'https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1002846.jpg',
      },
      {
        id: 5,
        nombre: 'Pizza pepperoni',
        precio: 1500,
        ingredientes: ['Salsa de tomate', 'Pepperoni'],
        imagen:
          'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg',
      },
      {
        id: 6,
        nombre: 'Pizza maritima',
        precio: 2000,
        ingredientes: ['Muzarella', 'Tentaculos', 'Mejillones', 'Camarones'],
        imagen:
          'https://www.comedera.com/wp-content/uploads/2022/04/Pizza-frutti-di-mare-shutterstock_649794700-1.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://content-cocina.lecturas.com/medio/2022/01/19/paso_a_paso_para_realizar_tarta_de_flan_con_galletas_y_chocolate_sin_azucar_resultado_final_1ce8842f_600x600.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Tiramisú',
        precio: 800,
        ingredientes: [],
        imagen: 'https://i.blogs.es/410470/vasitos/1366_2000.jpeg',
      },
      {
        id: 8,
        nombre: 'Postre de maracuja',
        precio: 1000,
        ingredientes: [],
        imagen:
          'https://www.cocinavital.mx/wp-content/uploads/2021/08/postre-de-maracuya.jpg',
      },
      {
        id: 9,
        nombre: 'Turrón de Quaker',
        precio: 500,
        ingredientes: [],
        imagen:
          'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://misbebidas.com/wp-content/uploads/2023/05/bebidas-alcoholicas.jpg',
    productos: [
      {
        id: 10,
        nombre: 'Agua',
        precio: 100,
        ingredientes: [],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
      },
      {
        id: 11,
        nombre: 'Coca Cola',
        precio: 250,
        ingredientes: [],
        imagen:
          'https://www.cocacolaep.com/assets/Spain/Blog-Rojo-y-en-Botella/2023/MARZO/5-CURIOSIDADES-CONTOUR/Coca-Cola-Contour-1210x1080.jpg',
      },
      {
        id: 12,
        nombre: 'Sprite',
        precio: 2500,
        ingredientes: [],
        imagen:
          'https://www.coca-cola.com/content/dam/onexp/co/es/media-center/article2/Sprite_Image_2.jpg',
      },
    ],
  },
];
