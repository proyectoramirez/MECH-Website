import React from "react";
import Events from "components/Events";

const events = [
    {
        title: true,
        description: true,
        image: true,
        date: true,
        location: true
    }
];

export default function() {
    return (
        <Events events={events}/>
    );
}