import React from "react";
import "./NewFood.css";
import { Container } from "react-bootstrap";

const NewFoods = () => {
  return (
    <div className="title-fish">
      <h1 className="text-center py-5 fw-bolder fs-1 text-white">
        New Sea Fish Item's
      </h1>
      <Container className="container-cards-buttom">
        <div className="fish-cards">
          <img
            src="https://media.istockphoto.com/id/990258408/photo/grilled-fish-sea-bream-dorada-with-the-addition-of-spices-herbs-and-lemon-on-the-grill-plate.jpg?s=612x612&w=0&k=20&c=X4wTiZlNekLl3rWDJRy8YWJZpVsIEzIG97eSVF2azFo="
            alt=""
          />
          <h3>Grilled Salmon </h3>
          <p>
            These examples are from corpora and from sources on the web. Any
            opinions in the examples do not represent the opinion of the
            Cambridge Dictionary editors or of Cambridge University Press or its
            licensors. Offers grilled fish, tinola and kinilaw. From Wikipedia
            It has a terrace and specialises in fresh grilled fish like sea bass
            and sea bream. From Wikipedia It can be enjoyed on its own or with
            grilled fish and meats. From Wikipedia Grilled fish may be mixed in
            to provide a different texture.
          </p>
        </div>
        <div className="fish-cards">
          <img
            src="https://images.unsplash.com/photo-1518732751612-2c0787ff5684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29va2VkJTIwZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Grilled papitam fish</h3>
          <p>
            One can have fish curry, fish fillets, raw fish with lemon, grilled
            fish, steamed fish, cooked fish and so on. From Wikipedia Seafood
            dishes include shrimp in various preparations including with sesame
            seed and sweet potato and grilled fish. From Wikipedia Jcama is
            often paired with chili powder, cilantro, ginger, lemon, lime,
            orange, red onion, salsa, sesame oil, grilled fish, and soy sauce.
            From Wikipedia A common street-vended food is aloko, which is ripe
            banana fried in palm oil, spiced with steamed onions and chili and
            eaten alone or with grilled fish.
          </p>
        </div>
        <div className="fish-cards">
          <img
            src="https://media.istockphoto.com/id/921714076/photo/grilled-fish-sea-bass-on-grill-with-lemon-and-rosemary.jpg?s=612x612&w=0&k=20&c=dPc5uxPVCSNWhyF3YqosfOHNB-ne9_Jggqf40CrPECY="
            alt=""
          />
          <h3>Grilled Jhon dory</h3>
          <p>
            icensors. Offers grilled fish, tinola and kinilaw. From Wikipedia It
            has a terrace and specialises in fresh grilled fish like sea bass
            and sea bream. From Wikipedia It can be enjoyed on its own or with
            grilled fish and meats. From Wikipedia Grilled fish may be mixed in
            to provide a different texture. often paired with chili powder,
            cilantro, ginger, lemon, lime, orange, red onion, salsa, sesame oil,
            grilled fish, and soy sauce. From Wikipedia A common street-vended
            food is aloko, which is ripe banana fried in palm oil, spiced with
            steamed onions and chili and eaten alone or with grilled fish.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default NewFoods;
