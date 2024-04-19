import FeatureBox from "./FeatureBox";

function Features() {
  const items = [
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Facilis quia modi. Et tempore voluptates possimus ratione assumenda cumaepe voluptatum.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Facilis quia modi. Et tempore voluptates possimus ratione assumenda cumaepe voluptatum.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Facilis quia modi. Et tempore voluptates possimus ratione assumenda cumaepe voluptatum.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Facilis quia modi. Et tempore voluptates possimus ratione assumenda cumaepe voluptatum.",
    },
  ];

  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full ">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
