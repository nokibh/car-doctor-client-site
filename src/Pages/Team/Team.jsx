import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import img0 from '../../assets/images/team/1.jpg';
import img1 from '../../assets/images/team/2.jpg';
import img2 from '../../assets/images/team/3.jpg';
import { FaInstagramSquare } from 'react-icons/fa';
const Team = () => {
  return (
    <div>
      <div className="text-center mb-4 mt-4">
        <p className="text-orange-600">Team</p>
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3">
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 6 */}
          <figure className="px-5 h-72 border-8 border-blue-400 ">
            <img src={img0} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="">Engine Expert</p>
            <div className="flex gap-2 font-bold">
              <p className="">
                <FaFacebook />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaInstagramSquare />
              </p>
            </div>
          </div>
        </div>
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 6 */}
          <figure className="px-5 h-72 border-8 border-blue-400 ">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="">Engine Expert</p>
            <div className="flex gap-2 font-bold">
              <p className="">
                <FaFacebook />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaInstagramSquare />
              </p>
            </div>
          </div>
        </div>
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 6 */}
          <figure className="px-5 h-72 border-8 border-blue-400 ">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="">Engine Expert</p>
            <div className="flex gap-2 font-bold">
              <p className="">
                <FaFacebook />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaInstagramSquare />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
