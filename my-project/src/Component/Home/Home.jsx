import React, { useState, useEffect } from "react";
import Homecards from "./Homecards";
import axios from "axios";
import { useOutletContext, useSearchParams } from "react-router-dom";
import Footer from "../Navbar/Footer";
import Hero from "./hero/Hero";

const Home = () => {

  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
 const [Loading, setLoading] = useState(false);

  const { search, setSearch } = useOutletContext();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

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

  useEffect(() => {
    if (products.length === 0) {
      return;
    }

    if (selectedCategory === "men") {
      handleMen();
    } else if (selectedCategory === "women") {
      handleWomen();
    } else if (selectedCategory === "jewellery") {
      handleJewellery();
    } else if (selectedCategory === "electronics") {
      handleElectronics();
    } else {
      handleAll();
    }
  }, [selectedCategory, products]);

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

  const sortedData = [...filterdata].sort((a, b) => {
    if (sortOption === "low-high") {
      return a.price - b.price;
    }

    if (sortOption === "high-low") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <>
    <Hero/>
      {/* Category Buttons */}
      <div className="w-full bg-white-200 px-6 py-6 flex flex-wrap items-center justify-center gap-4 min-h-[75px] relative">
        <div className="flex flex-wrap justify-center gap-4">

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

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="h-9 rounded-md border border-blue-500 px-3 text-sm text-blue-500 font-medium outline-none cursor-pointer md:absolute md:right-8"
        >
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Cards */}
      {
        Loading?<div className="min-h-screen bg-white flex flex-wrap gap-10 justify-center p-10">

        {sortedData.map((item) => (
          <Homecards
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.image}
            price={item.price}
            desc={item.description}
          />
        ))}

        
      </div>:<div className="container">
  <div className="loader"></div>
</div>
      }
      <Footer />
    </>
  );
};

export default Home;
