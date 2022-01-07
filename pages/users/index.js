import Carousel from "react-elastic-carousel";
import Card from "../../components/card";

// import Card from "./card";

export const getStaticProps = async () => {
  const response = await fetch("https://assessment-edvora.herokuapp.com/");
  const data = await response.json();

  return {
    props: { users: data },
  };
};

const MainContent = ({ users }) => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="main">
      <h1>Edvora</h1>
      <h3>Products</h3>

      <div className="categorie">
        <h3>Products Name</h3>
        <div className="horizontal_line"></div>
        <div className="categorie_box">
          <img
            src="/leftArrow.svg"
            onClick={() => Carousel.carousel.slidePrev()}
          />
          <div className="box_inside">
            <Carousel
              breakPoints={breakPoints}
              ref={(ref) => (Carousel.carousel = ref)}
              pagination={false}
              showArrows={false}
            >
              {users &&
                users.map((user) => (
                  <Card
                    key={user.time}
                    image={user.image}
                    product_name={user.product_name}
                    brand_name={user.brand_name}
                    price={user.price}
                    date={user.date}
                    address={user.address.state}
                    description={user.discription}
                  />
                ))}
            </Carousel>
          </div>
          <img
            src="/rightArrow.svg"
            onClick={() => Carousel.carousel.slideNext()}
          />
        </div>
      </div>
      <div className="categorie">
        <h3>Products Name</h3>
        <div className="horizontal_line"></div>
        <div className="categorie_box"></div>
      </div>
    </div>
  );
};

export default MainContent;
