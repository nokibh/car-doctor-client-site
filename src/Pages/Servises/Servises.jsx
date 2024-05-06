import { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Servises = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-2 mt-4 mb-4">
        <h3 className="text-[#FF3811] font-bold">Service</h3>
        <h2 className="text-black font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which do not look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 mt-4">
        {services.map(service => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Servises;
