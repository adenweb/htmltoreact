import React from "react";
import Card from "./card";
import "./top-card-list.css";

const cardListData = [
  {
    id: 1,
    username: "@pepito",
    followers: 1483,
    totalFollowers: 12,
    icon: "htmltoreact/images/icon-facebook.svg",
    name: "facebook",
  },
  {
    id: 2,
    username: "@Luisa",
    followers: "28k",
    totalFollowers: 20,
    icon: "htmltoreact/images/icon-twitter.svg",
    name: "twitter",
  },
  {
    id: 3,
    username: "@Osvaldo",
    followers: "6k",
    totalFollowers: 30,
    icon: "htmltoreact/images/icon-instagram.svg",
    name: "instagram",
  },
  {
    id: 4,
    username: "@Jose",
    followers: "12k",
    totalFollowers: -50,
    icon: "htmltoreact/images/icon-youtube.svg",
    name: "youtube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {/* <article className="card twitter">
            <p className="card-title ">
              <img src="htmltoreact/images/icon-twitter.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">28k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="htmltoreact/images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="htmltoreact/images/icon-instagram.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">6k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="htmltoreact/images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="htmltoreact/images/icon-youtube.svg" alt="" />
              @LeonidasEsteban
            </p>
            <p className="card-followers">
              <span className="card-followers-number">12k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="htmltoreact/images/icon-up.svg" alt="" />
              12 Today
            </p> 
          </article>*/}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
