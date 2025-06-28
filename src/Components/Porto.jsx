import React from "react";
import ExpandableCardDemo from "./expandable-card-demo-grid";

const Porto = () => {
    return (
        <div id="porto" className="mx-auto sm:w-full md:w-3/4 lg:w-4xl px-4 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-4xl text-left pb-5">My Recent Project</h1>
        <ExpandableCardDemo/>
        </div>
    )
}

export default Porto;