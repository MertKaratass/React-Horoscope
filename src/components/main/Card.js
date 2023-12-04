import data from "../../helper/data";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <div className="card">
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <div className="date">
              <h3>{item.date}</h3>
            </div>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="desc">
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
