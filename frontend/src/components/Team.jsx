import React from "react";
import {data} from "../restApi.json";


const Team = () => {
    return (
        <section className="team" id="team" name="team">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">OUR <span id="team">TEAM</span></h1>
                    <p>"Meet our passionate teams - Founder, Manager, Developer & Tester dedicated to delivering an unforgettable dining experience."</p>
                </div>
                <div className="team_container">
                    {
                        data[0].team.map(Element=>{
                            return (
                                <div className="card" key={Element.id}>
                                    <img className="rounded" src={Element.image} alt={Element.name} />
                                    <h3>{Element.name}</h3>
                                    <p>{Element.designation}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


export default Team;