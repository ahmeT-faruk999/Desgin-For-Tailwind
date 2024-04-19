const TestimonialBox = ({ id, des, image, position, name }) => {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-lg">
      <p className="text-sm font-normal mb-[30px] tracking-[0.8px]">{des}</p>
      <div className="flex items-center gap-[15px]">
        <img
          src={`/src/assets/images/${image}`}
          className="w-[50px] h-[50px] rounded-full object-contain "
        />
        <div>
          <strong className="block mb-[5px]">{name}</strong>
          <p className="font-normal text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
