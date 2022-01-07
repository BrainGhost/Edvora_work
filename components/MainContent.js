// import Card from "../../components/card";
import Carousel from "react-elastic-carousel";
import Card from "./card";

const MainContent = ({ users }) => {
  let filterProduct = [];
  users.map((user) =>
    filterProduct.includes(user.product_name)
      ? null
      : filterProduct.push(user.product_name)
  );

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
      {filterProduct &&
        filterProduct.map((product_name_display) => (
          <div className="categorie">
            <h3>{product_name_display}</h3>
            <div className="horizontal_line"></div>
            <div className="categorie_box">
              {/* <img
                src="/leftArrow.svg"
                onClick={() => Carousel.carousel.slidePrev()}
              /> */}
              <div className="box_inside">
                <Carousel
                  breakPoints={breakPoints}
                  ref={(ref) => (Carousel.carousel = ref)}
                  pagination={false}
                  showArrows={true}
                  itemPadding={[0, 0]}
                >
                  {users &&
                    users.map((item, index) =>
                      item.product_name === product_name_display ? (
                        <Card
                          key={index}
                          image={item.image}
                          product_name={item.product_name}
                          brand_name={item.brand_name}
                          price={item.price}
                          date={item.date}
                          address={item.address.state}
                          description={item.discription}
                        />
                      ) : null
                    )}
                </Carousel>
              </div>
              {/* <img
                src="/rightArrow.svg"
                onClick={() => Carousel.carousel.slideNext()}
              /> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainContent;
