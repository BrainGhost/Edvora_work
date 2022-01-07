const Sidebar = ({ users }) => {
  let filterProduct = [];
  users.map((user) =>
    filterProduct.includes(user.product_name)
      ? null
      : filterProduct.push(user.product_name)
  );
  let states = [];
  users.map((user) =>
    states.includes(user.address.state) ? null : states.push(user.address.state)
  );
  let cities = [];
  users.map((user) =>
    cities.includes(user.address.city) ? null : cities.push(user.address.city)
  );
  return (
    <div className="side_bar">
      <div className="title">
        <h1>Edvora</h1>
      </div>

      <div className="filter_box">
        <h2>Filter</h2>
        <div className="horizontal_line"></div>

        <div className="dropdown_box">
          <select>
            <option disabled selected>
              Products
            </option>
            {filterProduct &&
              filterProduct.map((product_name) => (
                <option key={product_name} value={product_name}>
                  {product_name}
                </option>
              ))}
          </select>
          <select>
            <option disabled selected>
              State
            </option>
            {states &&
              states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
          <select>
            <option disabled selected>
              City
            </option>
            {cities &&
              cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
