import React from "react";
import axios from "axios";
import Home from './Pages/Home/Home';

function App() {
  const [items, setItems] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/products').then(res => {
      setItems(res.data);
    });

    axios.get('http://localhost:3001/categories').then(res => {
      setCategory(res.data);
    });

    axios.get('http://localhost:3001/brands').then(res => {
      setBrands(res.data);
    });

  }, []);

  return (
    <div className="App">

      <Home
        items={items}
        category={category}
        brands={brands}
      />
    </div>
  );
}

export default App;

//TODO : сделать рабочий серч, фильтр, пагинацию