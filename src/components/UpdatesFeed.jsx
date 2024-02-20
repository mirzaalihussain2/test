import UpdateItem from './UpdateItem';
import './Updates.css';

export const UpdatesFeed = ({ updates }) => {
  return (
    <div className="updates-feed">
      {updates.map((update, index) => (
        <UpdateItem key={index} {...update} />
      ))}
    </div>
  );
};

export default UpdatesFeed;
