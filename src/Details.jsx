import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import { useState } from "react";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <div className="loader">🌀</div>
      </div>
    );
  }

  const pet = results.data.pets[0];
  console.log(results.data);
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt Me</button>
        </h2>
        <p>{pet.description}</p>
        {
          showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button onClick={() => setShowModal(false)}>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
        }
      </div>
    </div>
  );
};

export default Details;
