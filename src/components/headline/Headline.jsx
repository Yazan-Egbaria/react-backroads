const Headline = (props) => {
  return (
    <div>
      <h1 className="text-primaryColor text-4xl font-bold tracking-widest uppercase">
        {props.firstWT}
        <span className="text-secondaryColor ml-4">{props.secondWT}</span>
      </h1>
    </div>
  );
};

export default Headline;
