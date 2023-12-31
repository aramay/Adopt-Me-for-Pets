import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            key={pet.id}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={pet.location}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
