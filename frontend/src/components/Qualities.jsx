import React from "react";
import {data} from "../restApi.json";

const Qualities = () => {
    return (<>
            <h1 className="heading" id="qualities">Services</h1>
        <section className="qualities" >
            <div className="container">
               {data[0].ourQualities.map((element)=>(
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <p className="title">{element.title}</p>
                        <p className="description">{element.description}</p>
                    </div>
                ))}
            
            </div>
        </section>
        </>
    );
};


export default Qualities;