import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faRocket } from '@fortawesome/free-solid-svg-icons';
import './Updates.css';

const iconMapping = {
  'fire': faFire,
  'rocket': faRocket,
};

const UpdateItem = ({ label, date, reactions, icon }) => {
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="update-item">
      <div className="icon">
        <FontAwesomeIcon icon={iconMapping[icon]} size="2x" />
      </div>
      <div className="info">
        <div className="label">{label}</div>
        <div className="date">{formattedDate}</div>
        <div className="reactions">
          {reactions.map((reaction, index) => (
            <span key={index} className="reaction">
              {reaction.emoji} {reaction.count}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
