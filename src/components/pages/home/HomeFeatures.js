import React from "react";
import HomeFeatureItem from "./HomeFeatureItem";

const HomeFeatures = (props) => {
    const homeFeaturesArray = props.hotelFeatures;
    return (
        <section className="section__services">
    	<div className="container-fluid">
		    <div className="row">
					{homeFeaturesArray.map((homeFeature, index) => <HomeFeatureItem key={index} homeFeature={homeFeature} />)}
		    </div> 
	    </div> 
    </section>
    );
}

export default HomeFeatures;