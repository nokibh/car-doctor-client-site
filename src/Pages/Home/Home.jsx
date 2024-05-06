import About from '../About/About';
import Banner from '../Banner/Banner';
import Servises from '../Servises/Servises';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mb-4 mt-4">
        <About></About>
      </div>
      <Servises></Servises>
    </div>
  );
};

export default Home;
