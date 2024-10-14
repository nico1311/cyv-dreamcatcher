import Button from "./Button"
import "./Info.css"

const RTUe=()=>{
    return(
        <div className="infoalbum">
  <h1 className="title">DYSTOPIA: ROAD TO UTOPIA</h1>
  <div className="infoal">
    <div className="infotext">
      <Button/>
      <p>- POBs =  fron <span className="colorunoa">10usd</span> <span className="colordosa"> 8 usd</span></p>
      <p>- POB poster= <span className="colorunoa">1,75usd</span> <span className="colordosa"> 5 usd</span></p>
      <p className="ver">LIMITED (ver. D)</p>
      <p>- Limited photobook (cd+pb) = <span className="colorunoa">12,5usd</span> <span className="colordosa"> 10 usd</span></p>
      <p>- Photocard= <span className="colorunoa">6,5usd</span> <span className="colordosa"> 10 usd</span></p>
      <p>- Cover-up Card =  <span className="colorunoa">3usd</span> <span className="colordosa"> 5 usd</span></p>
      <p>- DIY Dreamcatcher kit = <span className="colorunoa">2,5usd</span> <span className="colordosa"> 5 usd</span></p>
      <p className="ver">NORMAL (ver. A,R,K)</p>
      <p>- Photobook (cd+pb) = <span className="colorunoa">9usd</span> <span className="colordosa"> 8 usd</span></p>
      <p>- Photocard = <span className="colorunoa">4usd</span> <span className="colordosa"> 4 usd</span> </p>
      <p>- Frame card = <span className="colorunoa">1,5usd</span> <span className="colordosa"> 0,5usd</span></p>
    </div>
    <div className="infoalimg ">
    <img src="https://pbs.twimg.com/media/EvYoDopXEAMelKI.jpg:large" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(186, 186, 215" }} />
    </div>
  </div>
</div>

    )
    
}

export default RTUe
