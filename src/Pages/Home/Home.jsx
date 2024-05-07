import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactAria from '../Contact/ContactAria';
import Popular from '../Popular/Popular';
import Servises from '../Servises/Servises';
import Team from '../Team/Team';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mb-4 mt-4">
        <About></About>
      </div>
      <Servises></Servises>
      <ContactAria></ContactAria>
      <Popular></Popular>
      <div className="mb-4 mt-4">
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
