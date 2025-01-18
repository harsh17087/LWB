import { methodCardData } from "@/mocks/TeachingMethods";
import MethodCard from "./MethodCard";

const TeachingMethodology = () => {
  return (
    <div className="teaching-methodology p-8 ">
      <p className="text-3xl font-bold text-center mb-4">
        Our Teaching Methodology
      </p>
      <p className="text-center text-lg mb-4">A systematic approach to making subjects understandable and enjoyable</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {methodCardData.map((methodCard, index) => (
          <MethodCard
            key={index}
            icon={methodCard.icon}
            heading={methodCard.heading}
            method1={methodCard.method1}
            method2={methodCard.method2}
            method3={methodCard.method3}
          />
        ))}
      </div>
    </div>
  );
};
export default TeachingMethodology;
