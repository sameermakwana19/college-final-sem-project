import { Suspense } from "react";
import "./home.scss";
import Hero from "../../components/Hero/Hero";
import PopularProduct from "../../components/PopularProducts/PopularProduct";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import NewCollection from "../../components/NewCollection/NewCollection";
import demo from "../../assets/product_22.png";
import Newsletter from "../../components/Newsletter/Newsletter";
import ErrorComponent from "../../components/ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="home-page">
        <ErrorBoundary
          FallbackComponent={ErrorComponent}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Suspense
            fallback={<h1>Suspensed ... </h1>}
            errorElement={<h2>Error</h2>}
          >
            <PopularProduct />
          </Suspense>
        </ErrorBoundary>
        <OfferBanner
          heading={"Exclusive offers for you"}
          subHeading={"ONLY ON BEST PRODUCTS"}
          buttonText={"Check Now"}
          image={demo}
        />
        <NewCollection />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
