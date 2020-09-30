import React,{useState, Fragment} from 'react';
import soundMarcha from "./assets/audio/marcha-peronista.mp3"
function App() {
  const [frase, setFrase] = useState({})
/*   
  var sound = new Howl({
        src: [soundMarcha]
      }); sound.play()
   */
  const handleClick = async() => {
    var audio = document.getElementById("player")
    const api = await fetch("https://frases-peronchas.herokuapp.com/v1/quotes")
    const frase = await api.json()
    setFrase(frase[0])
    if(audio.paused){
      audio.play()

    }else{
      audio.pause()
      audio.load()
      audio.play()
    }
  }
  const {author, quote} = frase
  
  return (
    <Fragment>
    <div className="slider">
      
      <div className="load">
      </div>

      <div className="content">

        <div className="row flex-top justify-content-center">
          <header className="header">
            <h1>Frases peronchas</h1>
            <p>Obtén frases de tus líderes peronistas favoritos</p>
          </header>
        </div>

        <div className="row justify-content-center">
          <div className="card text-center p-3">
            <blockquote className="blockquote mb-0">
              <p>"{quote}"</p>
              <footer className=" text-right">
                <p>- {author}</p>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="row flex-top justify-content-center">
          <button onClick={handleClick} id="button" className="btn btn-light btn-lg">
          <audio id="player">
            <source src={soundMarcha} type='audio/mpeg'/>
          </audio>
            Obtener frase
          </button>
        </div>

      </div>

    </div>
    <footer className="footer">
      <p>Desarrollado por <a target="_blank" href="https://instagram.com/facudelucia"><i className="icon fab fa-instagram"></i></a> <a target="_blank" href="mailto:facundodeluciajudo@gmail.com"><i className="icon far fa-envelope"></i></a></p>
    </footer>
    </Fragment>
  );
}

export default App;
