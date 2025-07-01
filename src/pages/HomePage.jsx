/* eslint-disable react-refresh/only-export-components */
import Card from "../components/ui/Card";
import FilterBar from "../features/FilterBar";
import Hero from "../features/Hero";
import ProductNavigation from "../features/ProductNavigationBar";
import { useGetProducts } from "../hooks/getProducts";
import "./homePage.css";
import SortBar from "../features/SortBar";
import Pagination from "../components/ui/Pagination";
export default function () {
  let products = useGetProducts();
  return (
    <>
      <Hero />
      <main className="home-page-main">
        <div>
          <ProductNavigation />
        </div>
        <div className="home-page-content-wrapper">
          <div className="home-page-content-wrapper-left-section">
            <FilterBar />
          </div>
          <div className="home-page-content-wrapper-right-section">
            {/* SORTBAR */}
            <SortBar />
            {/* CARD */}
            <div className="card-wrapper">
              {products &&
                products.map((product) => (
                  <Card
                    key={product.title}
                    image={product.image}
                    title={product.category}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="pagination-wrapper">
          <Pagination buttonCount={5} />
        </div>
      </main>
    </>
  );
}
