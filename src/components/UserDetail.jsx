import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const users = useSelector((state) => state.user.users);
  const { id } = useParams();
  const user = users[id];
  return (
    <>
      <div className="user-detail-header">
        <img src={user.picture.large} alt="" />
        <ul>
          <li>
            Name: {user?.name.first} {user?.name.last}
          </li>
          <li>E-mail: {user?.email}</li>
          <li>Phone: {user?.phone}</li>
        </ul>
      </div>
      <div className="user-detail-info">
        <div className="user-location-info">
          <h3>Location Info</h3>
          <hr className="new1"></hr>
          <ul>
            <li>Country: {user?.location.country}</li>
            <li>City: {user?.location.city}</li>
            <li>Street: {user?.location.street.name}, {user?.location.street.number}</li>
            <li>Post Code: {user?.location.postcode}</li>
            <li>Time Zone: {user?.location.timezone.description}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
