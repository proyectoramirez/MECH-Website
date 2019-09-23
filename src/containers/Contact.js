import React from "react";
import { Helmet } from "react-helmet";
import Contact from "components/Contact";

const contacts = [
    {
        name: "Email",
        description: "mechusf@gmail.com",
        link: "mailto:mechusf@gmail.com",
        picture: "/email.png"
    },
    {
        name: "Discord",
        link: "https://discord.gg/kHVKH5q",
        picture: "/discord.png"
    },
    {
        name: "Instagram",
        description: "@mechusf",
        link: "https://www.instagram.com/mechusf/",
        picture: "/instagram.png"
    },
    {
        name: "Facebook",
        description: "MECHUSF",
        link: "https://www.facebook.com/groups/MECHUSF/",
        picture: "/facebook.png"
    },
    {
        name: "BullSync",
        description: "Mechanical Electrical Computer Hub",
        link: "https://usf.campuslabs.com/engage/organization/mechanical-electrical-computer-hub",
        picture: "/bullsync.jpg"
    },
];

export default function() {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Contact contacts={contacts}/>
        </>
    );
}