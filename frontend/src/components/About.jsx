import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
    return (
        <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT <span id="us">US</span></h1>
                    <p><span id="txt">It's not just a place </span>,
                    it's a Vibe...</p>
                </div>
                <p className="mid">Whether you're craving a late-night bite or looking for a spot to hang out, My Restaurant is where the night comes alive. Good vibes, great food, and an atmosphere made for memories—everything you need is right here !</p>
                <Link id="menu" to={"/"}>Explore Menu{" "}
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
        </section>
    )
}


export default About;