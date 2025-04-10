const Pet = ({ name, animal, breed, images, location, id }) => {
  //   const petHelper = props.map((item, id) => {
  //     return (
  //       <div>
  //         <h1 key={id}>{item.name}</h1>
  //         <h2 key={id}>{item.animal}</h2>
  //         <h2 key={id}>{item.breed}</h2>
  //       </div>
  //     );
  //   });
  return (
    <div key={id}>
      <h1 key={id}>{name}</h1>
      <h2 key={id}>{animal}</h2>
      <h2 key={id}>{breed}</h2>
    </div>
  );
};
export default Pet;
