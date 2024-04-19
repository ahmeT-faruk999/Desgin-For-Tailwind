import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

const Testiominlas = () => {
  const [TestData, setTestData] = useState([
    {
      id: 1,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Facilis quia modi. Et tempore voluptates possimus ratione assumenda cumaepe voluptatum.",
      image: "profile-1.jpg",
      position: "founder & ceo, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Facilis quia modi. Et tempore voluptates possimus ratione assumenda cumaepe voluptatum.",
      image: "profile-2.jpg",
      position: "founder & ceo, Huddle",
      name: "Mags",
    },
    {
      id: 3,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Facilis quia modi. Et tempore voluptates possimus ratione assumenda cumaepe voluptatum.",
      image: "profile-3.jpg",
      position: "founder & ceo, Huddle",
      name: "Zaid",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative ">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="/src/assets/images/bg-quotes.png" alt="quotes" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          {TestData.map((item) => (
            <TestimonialBox
              key={item.id}
              des={item.des}
              image={item.image}
              position={item.position}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testiominlas;
