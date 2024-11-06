const Navlink = (props) => {
  return (
    <li>
      <a
        href="#"
        className="text-primaryColor tracking-widest hover:text-secondaryColor transition-all duration-300"
      >
        {props.linkTitle}
      </a>
    </li>
  );
};

export default Navlink;
