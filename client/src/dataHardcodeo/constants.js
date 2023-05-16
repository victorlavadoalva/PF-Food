import chicken from "../Img/ImgCardLanding/Chicken.png"
import dessert from "../Img/ImgCardLanding/Dessert.png"
import pasta from "../Img/ImgCardLanding/Pasta.png"
import sandwich from "../Img/ImgCardLanding/Sandwich.png"
import burger from "../Img/ImgCardLanding/hamburger.png"
import pizza from "../Img/ImgCardLanding/pizza.png"


export const RESTOS = [
    {
        id: 5,
        name:'Central',
        ubic:'Lima, Peru',
        dire:'Jirón Dos de Mayo 253, Barranco',
        summary:'El restaurante insignia de los chefs Virgilio Martínez y Pía León es un santuario de todo lo peruano. Combinando una hospitalidad impecable, un vasto conocimiento de los productos latinoamericanos y una creatividad sin igual en la cocina, esta oda gastronómica a Perú es el merecido ganador de Mejor Restaurante de Latinoamérica 2022, patrocinado por S.Pellegrino & Acqua Panna, título que ya había obtenido anteriormente desde 2014 hasta 2016.',
        especial:'La última versión del menú de Central incluye ingredientes que rara vez se encuentran en otro lugar del mundo. Después de viajar extensamente por todo el país, Martínez y León presentan solo lo mejor de los tesoros culinarios de Perú. El menú de degustación, llamado Mundo Mater, incluye clásicos como Tierra de Maíz y Tallos Extremos, y también introduce nuevos platos, como Rocas Negras (con algas, almejas y calamares), Conexión Amazónica (con cecina, arapaima y yuca) y Océano Azul-Verde (una combinación de vieiras y pepino).',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ],       
    },
    {
        id: 6,
        name:'Don Julio',
        ubic:'Buenos Aires, Argentina',
        dire:'Guatemala 4691 (esquina Gurruchaga), Palermo Viejo',
        summary:' Don Julio comenzó como una parrilla de barrio en una propiedad de esquina del siglo XIX, hoy en día el restaurante familiar ha elevado realmente el nivel a través de su compromiso con la cría regenerativa de ganado argentino, una bodega de 60.000 botellas que abarca la historia del vino argentino y una dedicación inigualable a la agricultura orgánica.',
        especial:'Comenzando con la cremosa provoleta de queso de cabra y mollejas antes de pasar a las principales atracciones de carne acompañadas de espárragos a la parrilla orgánicos o tomates de variedades antiguas. Los cortes especiales provenientes de ganado Aberdeen Angus y Hereford criados de forma regenerativa incluyen asado de tira y entraña.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ], 
    },
    {
        id: 7,
        name:'Maido',
        ubic:'Lima, Peru',
        dire:'Calle San Martin 399, Miraflores',
        summary:' ¡"Maido!" - ese es el alegre y atemporal saludo unánime de los chefs que da la bienvenida a los comensales cuando ingresan al restaurante en el primer piso en el moderno barrio de Miraflores. Aquellos con limitaciones de tiempo deben pedir en el mostrador de sushi, pero el menú de degustación ofrece toda la amplitud del concepto de Tsumura: Experiencia Nikkei. Los techos altos están enmarcados por una instalación artística de cuerdas que replica la bandera japonesa, creando intimidad pero también una sensación de movimiento que refleja la actividad en la cocina.',
        especial:' Después de haber recibido una valiosa formación en Osaka, Tsumura aplica sus conocimientos al nigiri a lo pobre y al toro con ponzu amazónico, que son fortalezas particulares en Maido. Algo nuevo en el menú de Experiencia Nikkei es el atún ventresca de Tarragona, que se despliega en una carretilla y luego se corta, se prepara y se dora con un soplete junto a la mesa.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ], 
    },
    {
        id: 8,
        name:'A Casa do Porco',
        ubic:'Sao Paulo, Brasil',
        dire:'Av. São Luiz 140, 4º andar, República',
        summary:'La visión de los chefs Jefferson y Janaína Rueda, A Casa do Porco, es el paraíso para los amantes de la carne, destacando el cerdo, el fuego y todo lo relacionado con la carnicería. Significando Casa del Cerdo en portugués, es una verdadera peregrinación porcina. Además, A Casa do Porco recibe el título de Mejor Restaurante de Brasil 2022, donde también se orgullece de obtener toda su carne.',
        especial:'El extenso menú se divide en platos a la carta y el menú de degustación Da Roça para o Centro, que representa un recorrido culinario por el campo brasileño. Prueba el sushi de papada de cerdo, las croquetas de cerdo o la panceta de cerdo que se derrite en la boca con su piel de panceta crujiente. Para equilibrar la extravagancia umami, también hay ensaladas, platos de huevo, pasta y opciones de arroz.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ], 
    },
    {
        id: 9,
        name:'El Chato',
        ubic:'Bogotá, Colombia',
        dire:'Calle 65 # 4-76',
        summary:'Nacido y criado en Colombia, el chef Álvaro Clavijo se sintió atraído por la cocina desde una edad temprana. Dejó Sudamérica para explorar Estados Unidos y Europa, trabajando en Per Se, L Atelier de Joël Robuchon y Noma. Clavijo fusiona esta experiencia de trotamundos con la rica biodiversidad de Colombia en El Chato, que lanzó en 2017.',
        especial:'Aquí solo se ofrece un menú degustación, listo para cambiar en cualquier momento para resaltar los mejores productos disponibles en cada día. Platos clásicos como corazones de pollo con papa y suero costeño, una salsa tradicional colombiana y quesosa, son imprescindibles, aunque los locales conocedores siempre solicitarán el renombrado soufflé de aguacate que no está en el menú.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ],
    },
    {
        id: 10,
        name:'Maito',
        ubic:'Ciudad de Panamá, Panamá.',
        dire:'Final de la Calle 50, cuarto local a la izquierda',
        summary:'En Maito, los comensales pueden disfrutar de los contrastes de la cocina panameña, con toques de origen afro, criollo y cantonés mezclados con nuevas cocinas como Chombasia, una fusión de las tradiciones culinarias cantonesa y afro.',
        especial:'Maito ofrece un menú degustación que puede constar de nueve a once platos, junto con opciones a la carta que presentan ingredientes raramente utilizados en otros lugares de la ciudad. Esto se debe a las relaciones que Castrellón ha establecido con productores locales, a quienes destaca en el restaurante. Su amor por el mar y los productos tropicales, justificado por la doble costa de Panamá, se refleja en todos los platos.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ],
    },
    {
        id: 15,
        name:'Central',
        ubic:'Lima, Peru',
        dire:'Jirón Dos de Mayo 253, Barranco',
        summary:'El restaurante insignia de los chefs Virgilio Martínez y Pía León es un santuario de todo lo peruano. Combinando una hospitalidad impecable, un vasto conocimiento de los productos latinoamericanos y una creatividad sin igual en la cocina, esta oda gastronómica a Perú es el merecido ganador de Mejor Restaurante de Latinoamérica 2022, patrocinado por S.Pellegrino & Acqua Panna, título que ya había obtenido anteriormente desde 2014 hasta 2016.',
        especial:'La última versión del menú de Central incluye ingredientes que rara vez se encuentran en otro lugar del mundo. Después de viajar extensamente por todo el país, Martínez y León presentan solo lo mejor de los tesoros culinarios de Perú. El menú de degustación, llamado Mundo Mater, incluye clásicos como Tierra de Maíz y Tallos Extremos, y también introduce nuevos platos, como Rocas Negras (con algas, almejas y calamares), Conexión Amazónica (con cecina, arapaima y yuca) y Océano Azul-Verde (una combinación de vieiras y pepino).',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ],       
    },
    {
        id: 16,
        name:'Don Julio',
        ubic:'Buenos Aires, Argentina',
        dire:'Guatemala 4691 (esquina Gurruchaga), Palermo Viejo',
        summary:' Don Julio comenzó como una parrilla de barrio en una propiedad de esquina del siglo XIX, hoy en día el restaurante familiar ha elevado realmente el nivel a través de su compromiso con la cría regenerativa de ganado argentino, una bodega de 60.000 botellas que abarca la historia del vino argentino y una dedicación inigualable a la agricultura orgánica.',
        especial:'Comenzando con la cremosa provoleta de queso de cabra y mollejas antes de pasar a las principales atracciones de carne acompañadas de espárragos a la parrilla orgánicos o tomates de variedades antiguas. Los cortes especiales provenientes de ganado Aberdeen Angus y Hereford criados de forma regenerativa incluyen asado de tira y entraña.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ], 
    },
    {
        id: 17,
        name:'Maido',
        ubic:'Lima, Peru',
        dire:'Calle San Martin 399, Miraflores',
        summary:' ¡"Maido!" - ese es el alegre y atemporal saludo unánime de los chefs que da la bienvenida a los comensales cuando ingresan al restaurante en el primer piso en el moderno barrio de Miraflores. Aquellos con limitaciones de tiempo deben pedir en el mostrador de sushi, pero el menú de degustación ofrece toda la amplitud del concepto de Tsumura: Experiencia Nikkei. Los techos altos están enmarcados por una instalación artística de cuerdas que replica la bandera japonesa, creando intimidad pero también una sensación de movimiento que refleja la actividad en la cocina.',
        especial:' Después de haber recibido una valiosa formación en Osaka, Tsumura aplica sus conocimientos al nigiri a lo pobre y al toro con ponzu amazónico, que son fortalezas particulares en Maido. Algo nuevo en el menú de Experiencia Nikkei es el atún ventresca de Tarragona, que se despliega en una carretilla y luego se corta, se prepara y se dora con un soplete junto a la mesa.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ], 
    },
    {
        id: 18,
        name:'A Casa do Porco',
        ubic:'Sao Paulo, Brasil',
        dire:'Av. São Luiz 140, 4º andar, República',
        summary:'La visión de los chefs Jefferson y Janaína Rueda, A Casa do Porco, es el paraíso para los amantes de la carne, destacando el cerdo, el fuego y todo lo relacionado con la carnicería. Significando Casa del Cerdo en portugués, es una verdadera peregrinación porcina. Además, A Casa do Porco recibe el título de Mejor Restaurante de Brasil 2022, donde también se orgullece de obtener toda su carne.',
        especial:'El extenso menú se divide en platos a la carta y el menú de degustación Da Roça para o Centro, que representa un recorrido culinario por el campo brasileño. Prueba el sushi de papada de cerdo, las croquetas de cerdo o la panceta de cerdo que se derrite en la boca con su piel de panceta crujiente. Para equilibrar la extravagancia umami, también hay ensaladas, platos de huevo, pasta y opciones de arroz.',
        image: [
            require('./img/ejemplo1.jpg').default,
            require('./img/ejemplo2.jpg').default,
            require('./img/ejemplo3.jpg').default
        ], 
    },
]
export const LOCATION = [
    {
        id: 1,
        name: "Bs As",
    },
    {
        id: 2,
        name: "Córdoba",
    },
    {
        id: 3,
        name: "La Pampa",
    },
    {
        id: 4,
        name: "San Luis",
    },
]

export const ORDER = [
    {
        id: "alphaasc", 
        name: "A - Z",
    },
    {
        id: "alphadesc",
        name: "Z - A"
    }
]

export const RATING = [
    {
        id: "ratingasc", 
        name: "Menor a Mayor",
    },
    {
        id: "ratingdesc",
        name: "Mayor a Menor"
    }
]

export const props = [
    {
      id: 1,
      image: pizza,
      name: "Pizza",
    },
    {
      id: 2,
      image: burger,
      name: "Burger",
    },
    {
      id: 3,
      image: sandwich,
      name: "Sandwich",
    },
    {
      id: 4,
      image: chicken,
      name: "Chicken",
    },
    {
      id: 5,
      image: pasta,
      name: "Pasta",
    },
    {
      id: 6,
      image: dessert,
      name: "Dessert",
    },
]
    
export const dataImg = [
    {
      id:1,
      alt: "Burger",
    },
    {
    id:2,
      alt: "Pizza",
    },
    {
        id:3,
          alt: "Sandwich",
        },
  ];

export const IMAGE_NOT_FOUND = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"