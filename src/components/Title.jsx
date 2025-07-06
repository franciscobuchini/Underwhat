const Title = ({ title }) => {
  return (
    <h2 className="text-3xl ml-4 text-gray-600 font-semibold">
      {title}
      <span className="text-pink-800 font-bold transform -rotate-[-12deg] inline-block ml-2">
        !?
      </span>
    </h2>
  );
};

export default Title;
