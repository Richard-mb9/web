import React from "react";
import Home from "./components/Home";
import NavBar from "./components/Nav";
import StoreTop from "./components/StoreOfferTop";
import TheBestProducts from "./components/TheBestProducts";
import Footer from "../../../components/Footer";
import ProductOffer from "./components/ProductOffer";
import AllCategories from "./components/AllCategories";
import FeaturedProducts from "./components/FeaturedProducts";
import NewsletterSubscribe from "./components/NewsletterSubscribe";

export default function Store(){
    return (
        <>
            <StoreTop />
            <TheBestProducts />
            <AllCategories />
            <ProductOffer />
            <FeaturedProducts />
            <NewsletterSubscribe />
            <Footer />
        </>
    )
}