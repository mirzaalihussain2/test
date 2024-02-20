import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faHatWizard,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import './Cards.css';// import './../assets/avatar.png'

const iconMapping = {
  fire: faFire,
  wizard: faHatWizard,
  rocket: faRocket,
};

const Card = ({ title, content, icon }) => {
  return (
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={iconMapping[icon]} size="2x" />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="number">{content}</div>
      </div>
    </div>
  );
};

const Cards = ({ achievements }) => {
  return (
    <div className="cards-container">
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          title={achievement.title}
          content={achievement.content}
          icon={achievement.icon}
        />
      ))}
    </div>
  );
};

export default Cards;
