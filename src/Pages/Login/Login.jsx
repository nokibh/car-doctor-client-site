import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.target.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200 mb-5 mt-5 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2  mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center mt-2">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                name=""
                id=""
                value="Login"
              />
            </div>
          </form>
          <p className="p-5">
            New to Car Doctors{' '}
            <Link to="/signUp" className="text-orange-500">
              Sign Up
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
