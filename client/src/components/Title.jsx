const Title = ({ title }) => {
  return (
    <h2 className="text-base-content text-2xl mt-20 mb-10 ml-4 text-gray-600 font-semibold">
      {title}
      <span className="text-violet-500 font-bold transform -rotate-[-12deg] inline-block ml-1">
        !?
      </span>
    </h2>
  );
};

export default Title;