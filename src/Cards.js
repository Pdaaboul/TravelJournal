import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="mainDiv">
      <div className="picDiv">
        <img src={props.item.image1} alt="img" className="country" />
      </div>
      <div className="textDiv">
        <div className="pinDiv">
          <img src={props.item.image2} alt="pin" className="pinpoint" />
          <span>{props.item.country}</span>
          <span>
            <a href={props.item.link} className="anchor" target="_blank">
              view in Google Maps
            </a>
          </span>
        </div>
        <h1 className="cardHead">{props.item.location}</h1>
        <h3>{props.item.date}</h3>
        <p>{props.item.about}</p>
      </div>
    </div>
  );
}
