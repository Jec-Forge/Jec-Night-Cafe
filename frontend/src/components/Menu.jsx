import React from "react";
import {data} from "../restApi.json";

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">POPULAR <span id="dishes">DISHES</span></h1>
                    <p>"Discover our popular dishes—each crafted to perfection for an unforgettable taste experience."</p>
                </div>
                <div className="dishes_container">
                        {data[0].dishes.map((element)=>{
                            return (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    )
}



export default Menu;