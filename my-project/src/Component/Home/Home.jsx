import React, { useState, useEffect } from "react";
import Homecards from "./Homecards";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import Footer from "../Navbar/Footer";
import Hero from "./hero/Hero";

const Home = () => {

  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
 const [Loading, setLoading] = useState(false);

  const { search, setSearch } = useOutletContext();

  // Fetch products
  async function fetchingData() {
    setTimeout(async()=>{
      let fetchdata = await axios.get("https://fakestoreapi.com/products");
    setData(fetchdata.data);
    setProducts(fetchdata.data);
    setLoading(true)
    },1000)
  }

  useEffect(() => {
    fetchingData();

    return () => {
      setSearch("");
    };
  }, []);

  // Category Filters
  function handleAll() {
    setData(products);
  }

  function handleMen() {
    const filtered = products.filter(
      (item) => item.category === "men's clothing"
    );
    setData(filtered);
  }

  function handleWomen() {
    const filtered = products.filter(
      (item) => item.category === "women's clothing"
    );
    setData(filtered);
  }

  function handleJewellery() {
    const filtered = products.filter(
      (item) => item.category === "jewelery"
    );
    setData(filtered);
  }

  function handleElectronics() {
    const filtered = products.filter(
      (item) => item.category === "electronics"
    );
    setData(filtered);
  }

  // Search Filter
  const filterdata = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Hero/>
      {/* Category Buttons */}
      <div className="w-full bg-white-200 py-6 flex justify-center h-[75px]">
        <div className="flex flex-wrap gap-4">

          <button
            onClick={handleAll}
            className="px-6 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition duration-300"
          >
            All
          </button>

          <button
            onClick={handleMen}
            className="px-6 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Men
          </button>

          <button
            onClick={handleWomen}
            className="px-6 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Women
          </button>

          <button
            onClick={handleJewellery}
            className="px-6 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Jewellery
          </button>

          <button
            onClick={handleElectronics}
            className="px-6 py-2 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Electronics
          </button>

        </div>
      </div>

      {/* Product Cards */}
      {
        Loading?<div className="min-h-screen bg-white flex flex-wrap gap-10 justify-center p-10">

        {filterdata.map((item) => (
          <Homecards
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.image}
            price={item.price}
            desc={item.description}
          />
        ))}

        
      </div>:<div class="container">
  <div class="loader"></div>
</div>
      }
      <Footer />
    </>
  );
};

export default Home;