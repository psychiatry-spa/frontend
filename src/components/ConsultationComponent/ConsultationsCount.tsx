import { useState } from "react";

const ConsultationsCount = () => {
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  return (
    <div className="w-full mt-10">
      <p className="text-gray-600">New consultations</p>
      <div className="text-3xl font-semibold">1.486</div>
      <div className="inline pl-1">
        <span className="text-green-600 inline">12.5%</span>
        <p className="inline pl-2 text-gray-600">Since last week</p>
      </div>
    </div>
  );
};

export default ConsultationsCount;
