import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import { MdAddCall } from 'react-icons/md';

const ContactAria = () => {
  return (
    <div className="mb-4 mt-4 grid sm:grid-cols-1 lg:grid-cols-3 bg-[#3c3c3c] rounded-lg p-9">
      <div className="flex gap-2 text-white">
        <p className="text-2xl p-2">
          <FaCalendarDays />
        </p>
        <div className="font-bold">
          <h5>We are open monday-friday</h5>
          <p>7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex gap-2 text-white">
        <p className="text-2xl p-2">
          <MdAddCall />
        </p>
        <div className="font-bold">
          <h5>Have a question?</h5>
          <p>+25462512658</p>
        </div>
      </div>
      <div className="flex gap-2 text-white">
        <p className="text-2xl p-2">
          <FaLocationDot />
        </p>
        <div className="font-bold">
          <h5>Need a repair? our address</h5>
          <p className="font-extrabold text-white">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default ContactAria;
