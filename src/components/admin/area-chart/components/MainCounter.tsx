const MainCounter = () => {
  const counter = 45.385;

  return (
    <div className="h-10">
      <div className="text-2xl font-bold dark:text-white">${counter}</div>
      <div className="text-gray-600">Sales this week</div>
    </div>
  );
};

export default MainCounter;
