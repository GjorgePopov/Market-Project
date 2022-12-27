import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

function CarouselSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.cbc.ca/1.5078310.1670257008!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/679435723-shopping-cart-grocery-grocer-supermarket.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>FRESH MARKET</h1>
          <h1>WE'LL DELIVER EVERYTHING YOU NEED</h1>
          <div>

            <buton>
                <p>SHOP ONLINE
              </p>
            </buton>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1151145625/de/foto/verschiedene-gem%C3%BCsesorten-in-textiltasche-auf-beige.jpg?s=612x612&w=0&k=20&c=sjX4Nk7hQRvDpo2JSSEi8RE9irdVw_4JuR67e2Z7BZI="
          alt="Second slide"
        />

        <Carousel.Caption className='SecSlide'>
        <h1>FRESH MARKET</h1>
          <h2>WE'LL DELIVER EVERYTHING YOU NEED</h2>
          <div>

            <buton>
                <p>SHOP ONLINE
              </p>
            </buton>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1199479218/de/foto/frisches-obst-und-gem%C3%BCse-in-einer-korb-%C3%B6ko-freundlichen-tasche-auf-beigem-hintergrund.jpg?s=612x612&w=0&k=20&c=29rqjKbekMaYJcZK1bDX7iJZRPuo4uiLb6wVrB7D77k="
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>FRESH MARKET</h1>
          <h1>WE'LL DELIVER EVERYTHING YOU NEED</h1>
          <div>

            <buton>
                <p>SHOP ONLINE
              </p>
            </buton>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;