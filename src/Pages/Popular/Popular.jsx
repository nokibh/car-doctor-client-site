import { FaStar } from 'react-icons/fa6';
import img1 from '../../assets/images/products/1.png';
import img2 from '../../assets/images/products/2.png';
import img3 from '../../assets/images/products/3.png';
import img4 from '../../assets/images/products/4.png';
import img5 from '../../assets/images/products/5.png';
import img6 from '../../assets/images/products/6.png';

const Popular = () => {
  return (
    <div className="mt-4 mb-4">
      <div className="text-center">
        <p className="text-orange-600 font-bold">Popular Products</p>

        <h2 className="text-black font-bold text-3xl">Browse Our Products</h2>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which do not look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-5 mt-5">
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 1 */}
          <figure className="px-5 h-72 border-8 border-orange-100 ">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="font-extrabold text-orange-500">$30</p>
          </div>
        </div>
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 2 */}
          <figure className="px-5 h-72 border-8 border-orange-100 ">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Air Filter</h2>
            <p className="font-extrabold text-orange-500">$40</p>
          </div>
        </div>
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 3 */}
          <figure className="px-5 h-72 border-8 border-orange-100 ">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Cools Led Light</h2>
            <p className="font-extrabold text-orange-500">$50</p>
          </div>
        </div>
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 4 */}
          <figure className="px-5 h-72 border-8 border-orange-100 ">
            <img src={img4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Cools Led Light</h2>
            <p className="font-extrabold text-orange-500">$280</p>
          </div>
        </div>
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 5 */}
          <figure className="px-5 h-72 border-8 border-orange-100 ">
            <img src={img5} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Cools Led Light</h2>
            <p className="font-extrabold text-orange-500">$230</p>
          </div>
        </div>
        <div className="card w-72 h-full bg-base-100 shadow-xl">
          {/* card 6 */}
          <figure className="px-5 h-72 border-8 border-orange-100 ">
            <img src={img6} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Cools Led Light</h2>
            <p className="font-extrabold text-orange-500">$220</p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-orange-600  font-bold">More Product</h2>
    </div>
  );
};

export default Popular;
