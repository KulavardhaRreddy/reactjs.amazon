import React from 'react'
import Product from './Product'
import "./Home.css";

function Home() {
    return (
        <div className="home">
           <img
             className="home__image"
             src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg"
             alt=""
             />
             {/*now i'm going to create product id,title,price,rating,image */}
             <div className="home__row">
             <Product 
                id="1"
                title="Rich Dad and Poor Dad"
                price={12.63}
                rating={5}
                image="https://mtonews.com/.image/t_share/MTczMzMyMzUxMzc4NTMyMjEx/1vg8evpd-front-shortedge-384.jpg"
                />
                <Product 
                id="2"
                title="iphone-11Pro"
                price={65.85}
                rating={5}
                image="https://www.gizbot.com/images/2019-09/apple-iphone-11-pro-max_156819562300.jpg"
                />
                </div>
                <div className="home__row">
             <Product 
                id="3"
                title="HP-Laptop"
                price={12.36}
                rating={4}
                image="https://rukminim1.flixcart.com/image/352/352/laptop-accessories-combo/u/r/r/hp-blue-2in1-laptop-skins-with-laptop-screen-guard-hq-15-6-inch-original-imae4cebxp89r32u.jpeg?q=70"
                />
                <Product 
                id="4"
                title="Rolex"
                price={52.13}
                rating={3}
                image="https://content.rolex.com/dam/watches/family-pages/datejust/watches-search_datejust_m126333-0010_1802jva_001_r.jpg"
                />
                <Product 
                id="5"
                title="Home"
                price={54.21}
                rating={5}
                image="https://is1-2.housingcdn.com/4f2250e8/3930b09ef022d00f4be305939357b79b/v7/fs/gvn_lake_view_villas-manikonda-hyderabad-gvn_construction.jpg"
                />
                </div>
                <div className="home__row">
                 <Product 
                id="6"
                title="Charminar"
                price={5.23}
                rating={5}
                image="https://cdn.telanganatoday.com/wp-content/uploads/2020/07/Hyderabad-Charminar-Golconda-Fort-to-remain-closed.jpg"
                />
                </div>
                </div>

    )
}

export default Home
