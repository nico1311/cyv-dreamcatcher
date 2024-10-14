import { useState } from "react";
import "./Info.css";
import Boton from "./Boton";

const Merch = () => {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  
  const [isAscending, setIsAscending] = useState(true);

  // Lista completa de productos
  const merchItems = [
    {
      title: "SEASON GREETINGS 2022",
      items: [
        { name: "POB", price1: "10usd", price2: null },
        { name: "Photocard", price1: "5usd", price2: "2usd" },
        { name: "PC Unit", price1: "3.75usd", price2: "3usd" },
        { name: "Astrology Card", price1: "3usd", price2: null },
        { name: "Lenticular", price1: "8usd", price2: "13usd" },
        { name: "Wish pc", price1: "1usd", price2: null }
      ],
      images: [
        "https://external-preview.redd.it/RWs84NAj6sa05f4qqumVlfUPjQgR_SxB1FHg2FLAEAs.jpg?auto=webp&s=fcfa7c36df28adc9a3a85ed044a5616ea18c75af",
        "https://down-my.img.susercontent.com/file/f74b101720207439127d98d2320b2d84"
        
      ]
    },
    {
      title: "MYSTERIOUS MANSION",
      items: [
        { name: "POB", price1: "7usd", price2: "6usd" },
        { name: "Photocard", price1: "3usd", price2: "2usd" },
        { name: "Set por miembro (scary quote + pc + pola + Card)", price1: "7.5usd", price2: "5usd" }
      ],
      images: [
        "https://i.redd.it/y9hs89yft1j71.jpg",
        "https://preview.redd.it/mysterious-mansion-pcs-v0-a3f8i3nikj6c1.jpeg?width=576&format=pjpg&auto=webp&s=988f9e3012ad1959cf0035b6a7aa4733e648192b"
      ]
    },
    {
      title: "DREAMCATCHER MIND",
      items: [
        { name: "Photocard", price1: "3.75usd", price2: "2usd" },
        { name: "Set por miembro", price1: "13usd", price2: "10usd" }
      ],
      images: [
        "https://lightupk.com/cdn/shop/products/DREAMCATCHER-_DREAMCATCHERMIND_SpecialEdition_2VERSIONS_2.png?v=1649909873",
        "https://i.ebayimg.com/images/g/KRsAAOSwdAth8~U0/s-l400.jpg"
      ]
    },
    {
      title: "LOVECATCHER/LOVE STEALER",
      items: [
        { name: "Member set", price1: "10usd", price2: null },
        { name: "Photocard", price1: "3usd", price2: "2usd" },
        { name: "Lenticular", price1: "10usd", price2: "15usd" },
        { name: "Photobook", price1: "15usd", price2: "20usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/FbqtVt9WYAA3hHN.jpg",
        "https://beadsofbullets.com/wp-content/uploads/2022/06/dreamcatcher-md-1024x682.jpg"
      ]
    },
    {
      title: "Pink Monster / Dream Kiss",
      items: [
        { name: "Photocard", price1: "5usd", price2: "7usd" },
        { name: "Photobook", price1: "10usd", price2: "15usd" }
      ],
      images: [
        "https://i.redd.it/dreamcatcher-official-merch-dream-kiss-ver-pink-monster-ver-v0-31o8hii4f9e91.jpg?width=3000&format=pjpg&auto=webp&s=838dda4fb25dc3d954ede303b983b8a216b4e5f2",
        "https://beadsofbullets.com/wp-content/uploads/2022/06/dreamcatcher-md-1024x682.jpg"
      ]
    },
    {
      title: "KHINOS cualquier era",
      items: [
        { name: "Khino", price1: "12usd", price2: null },
        { name: "Set por miembro", price1: "10usd", price2: "5usd" }
      ],
      images: [
        "https://media.karousell.com/media/photos/products/2021/8/20/dreamcatcher_kihno_album_1629435889_3fbaf9e9.jpg"
      ]
    },
    {
      title: "Apocalypse mini concert",
      items: [
        { name: "Apocalypse mini concert pc", price1: "8usd", price2: null },
      ],
      images: [
        "https://preview.redd.it/dreamcatcher-2nd-album-apocalypse-save-us-mini-concert-v0-n69trljpwyy81.jpg?width=1080&crop=smart&auto=webp&s=0826bfc384d6d4a4694e198f847808df69605aa0"
      ]
    },
    {
      title: "Apocalypse halloween concert",
      items: [
        { name: "Apocalypse halloween", price1: "6-8usd", price2: null },
        { name: "Apocalypse halloween LD", price1: "35usd", price2: null },
      ],
      images: [
        "https://i.redd.it/2f7779xqnpw91.jpg",
        "https://i.ebayimg.com/images/g/skMAAOSwjoBkk~7d/s-l400.jpg",
        "https://preview.redd.it/dreamcatcher-apocalypse-broken-halloween-pop-up-store-mask-v0-h6mj5w3q7hw91.jpg?width=1080&crop=smart&auto=webp&s=b1165faa8115360df6602561b9d5e94437e85998"
      ]
    },
    {
      title: "7 doors tour",
      items: [
        { name: "Lucky cards", price1: "3usd", price2: "3.5usd" },
        { name: "7 doors tours set (pc + tarot card+postal)", price1: "8usd", price2: null },
        { name: "Trading cards", price1: "5usd", price2: "4.5usd" },
        { name: "Hoodie cards", price1: "15usd", price2: null},
      ],
      images: [
        "https://pbs.twimg.com/media/GGvS4K_WsAAVywg.jpg:large"
      ]
    },
    {
      title: "SEASON GREETINGS 2023",
      items: [
        { name: "Set x miembro (pcs de ambos ssg + postcard + pc calendar + id)", price1: "7usd", price2: null },
        { name: "Outbox + desk calendar + diary", price1: "8usd", price2: null },
        { name: "Mini pb", price1: "5usd", price2: "8usd" },
        { name: "Mini L holder", price1: "1usd", price2: "5usd" },
        { name: "Set stickers", price1: "1usd", price2: "2usd" },
        { name: "Folder poster", price1: "1usd", price2: null }
      ],
      images: [
        "https://pbs.twimg.com/media/FmJhTRJXkAEupZJ?format=jpg&name=4096x4096",
        "https://m.media-amazon.com/images/I/619j7-0rABL.jpg"
      ]
    },
    {
      title: "REASON BOUTIQUE",
      items: [
        { name: "Trading Card", price1: "3usd", price2: "4usd" },
        { name: "Photocard", price1: null, price2: "6usd" },
        { name: "Pc + holder", price1: null, price2: "8usd" },
        { name: "Set x miembro (postcard + pc del holder)", price1: "6usd", price2: "5usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/F4URpYJWEAEksi3?format=jpg&name=4096x4096"
      ]
    },
    {
      title: "DREAMQUEST",
      items: [
        { name: "Set por miembro (pc + postcard)", price1: "5usd", price2: "3.5usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/F7Eb8QyXAAA0VYM?format=jpg&name=large",
        "https://d3tvwjfge35btc.cloudfront.net/Assets/45/810/L_p0198181045.jpg"
      ]
    },
    {
      title: "SEASON GREETINGS 2024",
      items: [
        { name: "Dear my youth set x miembro (pc + miniposter + bookmark + postal)", price1: "5usd", price2: "4usd" },
        { name: "Dream victory set x miembro (pc + player card)", price1: "3usd", price2: "3.5usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/GB6MrXRXQAARoUC.jpg:large",
        "https://media.ktown4u.com/products/resize/thumbnail/2023/10/20/PNFNFw.png"
      ]
    },
    {
      title: "NEOGEN COLLAB JIYOO",
      items: [
        { name: "Photocard", price1: "5usd", price2: null }
      ],
      images: [
        "https://pbs.twimg.com/media/GEpbRgpXgAE9Slp?format=jpg&name=large",
        "https://pbs.twimg.com/media/GEpbP2lWwAAy4wd?format=jpg&name=large"
      ]
    },
    {
      title: "COREELLE",
      items: [
        { name: "Photocard", price1: null, price2: "15usd" }
      ],
      images: [
        "https://media.karousell.com/media/photos/products/2024/6/30/dreamcatcher_bycoreelle_multib_1719728269_039d1c61.jpg"
      ]
    },
    {
      title: "THE STAR",
      items: [
        { name: "Photocard (set: 1 pc de Dreamcatcher + 1 pc de Youngjae GOT7)", price1: null, price2: "12usd" }
      ],
      images: [
        "https://i.ebayimg.com/images/g/noUAAOSwCkRmpHiD/s-l1200.jpg"
      ]
    },
    {
      title: "DREAM OF ANGELS",
      items: [
        { name: "inclusiones", price1: null, price2: "TBA" }
      ],
      images: [
        "https://pbs.twimg.com/media/GUHOh-0XQAApu3L?format=jpg&name=large"
      ]
    },
    {
      title: "FALLEN ANGELS",
      items: [
        { name: "inclusiones", price1: null, price2: "TBA" }
      ],
      images: [
        "https://media.ktown4u.com/products/resize/thumbnail/2024/08/05/xEm92h.jpg"
      ]
    },
  ];
  
  // Ordenar el array por título de forma alfabética
  const sortedMerchItems = merchItems.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Filtrar los productos según el término de búsqueda
  const filteredItems = sortedMerchItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="infoalbumtext">
      <h1 className="title">MERCH</h1>
      <Boton />

      <input
        type="text"
        placeholder="Buscar merch..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="buscar"
      />

      <div className="infomerch">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="infotextal">
              <p className="ver">{item.title}</p>

              {item.items && item.items.map((product, idx) => (
                <p key={idx}>
                  {product.name} = 
                  {product.price1 && <span className="colorunoa"> {product.price1}</span>}
                  {product.price2 && <span className="colordosa"> {product.price2}</span>}
                </p>
              ))}

              <div className="images-container">
                {item.images && item.images.map((img, imgIdx) => (
                  <img key={imgIdx} src={img} alt={`Imagen ${imgIdx + 1} de ${item.title}`} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default Merch;