import Headline from "../headline/Headline";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceTitle: "Saving Money",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
      id: 2,
      serviceTitle: "Endless Hiking",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
      id: 3,
      serviceTitle: "Amazing Comfort",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
  ];
  return (
    <div className="flexColSection bg-gray-100">
      <Headline firstWT="Our" secondWT="Services" />
      <div className="flex gap-8">
        {services.map(({ id, serviceTitle, serviceDesc }) => {
          return (
            <Service
              key={id}
              serviceTitle={serviceTitle}
              serviceDesc={serviceDesc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
