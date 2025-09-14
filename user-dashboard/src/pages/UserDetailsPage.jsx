import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserDetailsPage = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user)
    return (
      <div className="text-center mt-10">
        User not found. <Link to="/">Go back</Link>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserDetailsPage;
