import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState([]);
  
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, {
    //     fullname: { firstname: firstName, lastname: lastName },
    //     email,
    //     password,
    //     roles
    //   });

    //   if (response.status === 201) {
    //     setUser(response.data.newUser);
    //     localStorage.setItem('token', response.data.token);
    //     navigate('/home');
    //   }
    // } catch (error) {
    //   console.error('Registration failed:', error);
    // }

    // Clear form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRoles([]);
  };

  const handleRoleChange = (role) => {
    setRoles(prev => prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-10">
        <div className="text-center mb-8">
          <img 
            className="w-32 mx-auto mb-6"
            src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-online-taxi-booking-travel-service-flat-design-illustration-via-mobile-app-png-image_4750926.png" 
            alt="Company Logo"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join our platform to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">First Name</label>
              <input
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Last Name</label>
              <input
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
            <input
              required
              type="email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Password</label>
            <input
              required
              type="password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">Account Type</label>
            <div className="grid grid-cols-3 gap-4">
              {['admin', 'editor', 'viewer'].map((role) => (
                <label 
                  key={role}
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    roles.includes(role) 
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'}`}
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    checked={roles.includes(role)}
                    onChange={() => handleRoleChange(role)}
                  />
                  <span className="capitalize text-gray-700">{role}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">
            Sign in here
          </Link>
        </p>

        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our<br />
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;