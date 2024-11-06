const Card = (props) => {
  return (
    <div className="flex flex-col w-[350px] gap-2 justify-between pb-4 shadow-lg flex-wrap bg-gray-100">
      <img src={props.src} alt={props.alt} className="w-full h-[240px]" />
      <h3 className="tracking-widest text-primaryColor text-base font-bold ml-2">
        {props.h3}
      </h3>
      <p className="text-thirdColor ml-2">{props.p}</p>
    </div>
  );
};

export default Card;
