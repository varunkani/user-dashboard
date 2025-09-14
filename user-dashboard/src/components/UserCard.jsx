import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/user/${user.id}`}
      className="p-4 border rounded shadow hover:bg-gray-100 block"
    >
      <h2 className="font-semibold text-lg">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </Link>
  );
};

export default UserCard;
