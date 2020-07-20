import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/PVD4719_GWMultititleJune2020/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD4719_Multi2._CB431171960_.jpg" alt=""
            />

            <div className="home__row">


            <Product
                id="123"                
                title="Swiffer WetJet Wood Floor Mopping and Cleaning Starter Kit, All Purpose Floor Cleaning Products, 1 Mop, 10 Pads, Cleaning Solution, Batteries"
                price={27.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/815xLVLX5OL._AC_SL1500_.jpg"
                />

            <Product
                id="1283"                
                title="5 Pack All-Round Protection Hat with Clear Wide Visor Lightweight Transparent Shield with Adjustable Elastic Band"
                price={20.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61qHIf3hnRL._SL1001_.jpg"
                />

            </div>

            <div className="home__row">


            <Product
                id="1123"                
                title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
                price={384.75}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61-EcsBhyxL._AC_SL1024_.jpg"
                />

            <Product
                id="1223"                
                title="Microsoft Surface Go (Intel Pentium Gold, 8GB RAM, 128GB) (MCZ-00001)"
                price={443.98}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61Pmbg11gmL._AC_SL1200_.jpg"
                />

            <Product
                id="123"                
                title="JustRoomy Mid Century Modern Fabric Arm Chair"
                price={149.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/716dBMnqlZL._AC._SR360,460.jpg"
                />


            </div>
            <div className="home__row">


            <Product
                id="1423"                
                title="Winpeak Hand-Painted White Flower Oil Painting Modern Floral Canvas Wall Art Abstract Plum Blossom Artwork Stretched and Framed Ready to Hang"
                price={59.98}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/813qSBg2KrL._AC_SL1500_.jpg"
                />

            </div>
        
        
        
        </div>
    )
}

export default Home
