import NavigationTracker from "../components/ui/NavigationTracker";
import DiscountBar from "../features/DiscountBar";
import ProductHeader from "../layout/ProductHeader";

export default function () {
  return (
    <div className="profile-page-wrapper">
      <DiscountBar />
      <ProductHeader />
      <NavigationTracker />
      <ProductDetails />
      <RelatedProducts />
      <ProductReview />
      <PopularThisWeek />
      <ProductFooter />
    </div>
  );
}
