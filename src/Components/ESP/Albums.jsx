import "./Info.css"
import React from 'react';
import RTU from './RTU';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import"./../../App.css"
import LM from './LM';
import Nightmare from './Nightmare';
import FAITM from './FAITM';
import Prequel from './Prequel';
import ETE from './ETE';
import AITC from './AITC';
import TEON from './TEON';
import ROD from './ROD';
import TTOL from './TTOL';
import SH from './SH';
import ASU from './ASU';
import AFU from './AFU';
import AFRU from './AFRU';
import Merch from './Merch';
import VS from './VS';
import VRS from './VRS';
import DolarBlue from './dolar';

import FAQ from './FAQ';

function Albums() {
  const albumContainerRef = React.useRef(null); // Definir la referencia para el contenedor del álbum

  const handleAlbumClick = () => {
    // Hacer scroll hacia el contenedor del álbum
    if (albumContainerRef.current) {
      albumContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <>
        <div className="albums"ref={albumContainerRef}>
          <Link to="/NIGHTMARE" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://upload.wikimedia.org/wikipedia/en/1/12/Dreamcatcher_-_Nightmare.jpg"
                alt="Nightmare"
                title="Nightmare"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(98, 109, 113)" }}
              />
              <div className="overlay">Nightmare</div>
            </div>
          </Link>
          <Link to="/FAITM" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b27300d0a05a7eb734aba007ad3b"
                alt="FAITM"
                title="Fall Asleep in the Mirror"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 131, 131)" }}
              />
              <div className="overlay">Fall Asleep in the Mirror</div>
            </div>
          </Link>
          <Link to="/PREQUEL"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b27331b95b252ae186111fb347d8"
                alt="Prequel"
                title="Prequel"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 100, 250)" }}
              />
              <div className="overlay">Prequel</div>
            </div>
          </Link>
          <Link to="/ETE" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273d8299d772da6489400f37ab8"
                alt="ETE"
                title="Escape the Era"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(26, 162, 172)" }}
              />
              <div className="overlay">Escape the Era</div>
            </div>
          </Link>
          <Link to="/AITC" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2738c0b09a8965bb16ff3f7d889"
                alt="AITC"
                title="Alone in the City"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(223, 34, 141)" }}
              />
              <div className="overlay">Alone in the City</div>
            </div>
          </Link>
          <Link to="/TEON" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2735497178d3e5f7cd1f88f9be8"
                alt="TEON"
                title="The End of Nightmare"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(12, 137, 112)" }}
              />
              <div className="overlay">The End of Nightmare</div>
            </div>
          </Link>
          <Link to="/ROD" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273dd525e34b35a55ca3763e28d"
                alt="ROD"
                title="Raid of Dream"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(189, 26, 26)" }}
              />
              <div className="overlay">Raid of Dream</div>
            </div>
          </Link>
          <Link to="/TTOL"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273107ade016c96b4769c200bc4"
                alt="TTOL"
                title="The Tree of Language"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(87, 53, 3)" }}
              />
              <div className="overlay">The Tree of Language</div>
            </div>
          </Link>
          <Link to="/LM" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273994278a5092323151972886f"
                alt="LM"
                title="Lose Myself"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(0, 0, 155)" }}
              />
              <div className="overlay">Lose Myself</div>
            </div>
          </Link>
          <Link to="/RTU"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/28/4c/49/284c49f4-3d31-5648-8e2e-1d5c073667c1/cover_KM0017912_1.jpg/1200x1200bf-60.jpg"
                alt="RTU"
                title="Road to Utopia"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(186, 186, 215)" }}
              />
              <div className="overlay">Road to Utopia</div>
            </div>
          </Link>
          <Link to="/SH"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e02d902c8faa0d5eb0fe7c29695"
                alt="SH"
                title="Summer Holiday"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(49, 145, 234)" }}
              />
              <div className="overlay">Summer Holiday</div>
            </div>
          </Link>
          <Link to="/ASU" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273d5db2e57a278b11e009b5cc6"
                alt="ASU"
                title="Apocalypse: Save Us"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(240, 203, 109)" }}
              />
              <div className="overlay">Apocalypse: Save Us</div>
            </div>
          </Link>
          <Link to="/AFU" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273c7d075ac409f015413350f6d"
                alt="AFU"
                title="Apocalypse: Follow Us"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(234, 57, 93)" }}
              />
              <div className="overlay">Apocalypse: Follow Us</div>
            </div>
          </Link>
          <Link to="/AFRU" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2737a95bc64165227445ad40054"
                alt="AFRU"
                title="Apocalypse: Follow Us"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(75, 195, 60)" }}
              />
              <div className="overlay">Apocalypse: Follow Us</div>
            </div>
          </Link>
          <Link to="/VS" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2738c2e5ad74cb2c2156da791b9"
                alt="VS"
                title="Vision"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(172, 71, 116)" }}
              />
              <div className="overlay">Versus: Villains</div>
            </div>
          </Link>
          <Link to="/VRS"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e021be74ecf7c58d22c00eea468"
                alt="VRS"
                title="Vibes"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">Versus: Virtuous</div>
            </div>
          </Link>
          <Link to="/MERCH"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.pinimg.com/736x/a1/fa/4b/a1fa4b536ccf520a1fdd2f81e5ad5e7c.jpg"
                alt="Merch"
                title="Merch"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">Merch</div>
            </div>
          </Link>
          <Link to="/FAQ"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://pbs.twimg.com/media/GYuHMyoXEAAgAeh?format=jpg&name=large"
                alt="FAQ"
                title="FAQ"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">FAQ</div>
            </div>
          </Link>
        </div>
<Routes>
          <Route path="/NIGHTMARE" element={<Nightmare />} />
          <Route path="/FAITM" element={<FAITM />} />
          <Route path="/PREQUEL" element={<Prequel />} />
          <Route path="/ETE" element={<ETE />} />
          <Route path="/AITC" element={<AITC />} />
          <Route path="/TEON" element={<TEON />} />
          <Route path="/ROD" element={<ROD />} />
          <Route path="/TTOL" element={<TTOL />} />
          <Route path="/LM" element={<LM />} />
          <Route path="/RTU" element={<RTU />} />
          <Route path="/SH" element={<SH />} />
          <Route path="/ASU" element={<ASU />} />
          <Route path="/AFU" element={<AFU />} />
          <Route path="/AFRU" element={<AFRU />} />
          <Route path="/VS" element={<VS />} />
          <Route path="/VRS" element={<VRS />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Merch" element={<Merch />} />
        </Routes>
              
      </>
  );
}


export default Albums
