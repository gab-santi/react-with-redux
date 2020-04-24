import React from "react";
import Card from "./Card.component";
import styles from "./Styles.module.scss";
import icon from '../images/man-3.png';

const CardList = ({ people }) => {
  return (
    <div className={styles['card_container']}>
      {people.map((user, i) => {
        return (
          <Card
            key={i}
            id={people[i].id}
            name={people[i].name}
            email={people[i].email}
            icon={icon}
          />
        );
      })}
    </div>
  );
};

export default CardList;
