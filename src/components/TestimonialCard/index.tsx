import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  image: StaticImageData;
  studentName: string;
  studentClass: string;
  city: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  studentName,
  studentClass,
  city,
  testimonial,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src={image}
            alt={`${studentName}'s picture`}
            width={50}
            height={50}
            className="rounded-full"
            style={{ borderRadius: '50%' }}
          />
          <div className="ml-4">
            <div className="text-white font-bold text-lg">{studentName}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white text-sm">{studentClass}</div>
          <div className="text-white text-sm">{city}</div>
        </div>
      </div>
    <p className="text-white font-italic">“{testimonial}”</p>
    </div>
  );
};

export default TestimonialCard;
