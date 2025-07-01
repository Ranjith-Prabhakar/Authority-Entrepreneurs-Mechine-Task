import { useEffect } from "react";
import Card from "../components/ui/Card";
import FilterBar from "../features/FilterBar";
import Hero from "../features/Hero";
import ProductNavigation from "../features/ProductNavigationBar";
import { useGetProducts } from "../hooks/getProducts";
import "./homePage.css";

export default function () {
  let products = useGetProducts();
  useEffect(() => {}, [products]);
  return (
    <>
      <Hero />
      <main className="home-page-main">
        <div>
          <ProductNavigation />
        </div>
        <div className="home-page-content-wrapper">
          <FilterBar />

          {products &&
            products.map((item, index) => {
              if (index > 0) return null;
              else
                return (
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                  />
                );
            })}
        </div>
      </main>
    </>
  );
}
