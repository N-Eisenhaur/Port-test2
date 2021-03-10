import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";

function Slidez() {

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e ) => {
setIndex(selectedIndex);

}


  return (
    <div className="Car">

      <Carousel fade="true"  interval="900000" activeIndex={index} onSelect={handleSelect} >

        <Carousel.Item>

          <img className="d-block w-100" src="./img/reactSPA.png"
            alt="First " style={{ height: "100vh" }}
          />

          <Carousel.Caption>

            <h3>My React Single Page Application Site</h3>

           <a href='https://reactsingleapp.netlify.app/' target="blank">Portfolio Demonstration Site</a>


          </Carousel.Caption>

        </Carousel.Item>


        <Carousel.Item>

          <img className="d-block w-100" src="./img/vitaminStore.png"
            alt="Second " style={{ height: "100vh" }}
          />

          <Carousel.Caption>

            <h3>Demonstration Vitamin Drink Site</h3>

            <a href='https://vitaminstore.netlify.app/' target="blank">Portfolio Demonstration Site</a>

          </Carousel.Caption>

        </Carousel.Item>


        <Carousel.Item>

<img className="d-block w-100" src="./img/fakeLeafSite.png"
  alt="First " style={{ height: "100vh" }}
/>

<Carousel.Caption>

  <h3>Demonstration Leaf and Mortar Site</h3>
 
 <p> This is a single page demo site. </p>

 <a href='http://demonstrationsites.freecluster.eu/03_notes/end/' target="blank">Portfolio Demonstration Site</a>

</Carousel.Caption>

</Carousel.Item>


<Carousel.Item>

          <img className="d-block w-100" src="./img/shoeSelector.png"
            alt="First " style={{ height: "100vh" }}
          />

          <Carousel.Caption>

            <h3>Shoe Selector Application</h3>

            <p> This is a single page demo site.  </p>

            <a href='http://demonstrationsites.freecluster.eu/02_notes/end/' target="blank">Portfolio Demonstration Site</a>

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

<img className="d-block w-100" src="./img/fakemusicSite.png"
  alt="First " style={{ height: "100vh" }}
/>

<Carousel.Caption>

  <h3>Demonstration Music Promotion Site</h3>

  <a href='http://demonstrationsites.freecluster.eu/Music%20after/' target="blank">Portfolio Demonstration Site</a>

</Carousel.Caption>

</Carousel.Item>


<Carousel.Item>

          <img className="d-block w-100" src="./img/reactInterface.png"
            alt="First " style={{ height: "100vh" }}
          />

          <Carousel.Caption>

            <h3>React Vet Application</h3>

            <a href='https://reactinterface.netlify.app/' target="blank">Portfolio Demonstration Site</a>

          </Carousel.Caption>

        </Carousel.Item>



      </Carousel>

    </div>
  );
}

export default Slidez;
