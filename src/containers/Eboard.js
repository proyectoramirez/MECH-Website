import React from "react";
import { Helmet } from "react-helmet";
import Eboard from "components/Eboard";

const members = [
    {
        title: "President",
        name: "Victoria Carlos",
        major: "B.S. in Computer Science"
    },
    {
        title: "Vice-President",
        name: "José Ramírez",
        major: "B.S. in Computer Science"
    },
    {
        title: "Treasurer",
        name: "Haider Ali Khan",
        major: "B.S. in Mechanical Engineering"
    },
    {
        title: "Marketing Chair",
        name: "Daniel Rocchi",
        major: "B.S. in Computer Science"
    },
    {
        title: "External Events Chair",
        name: "Andrea Espinosa",
        major: "B.S. in Electrical Engineering"
    },
    {
        title: "Internal Events Chair",
        name: "Demi Padilla",
        major: "B.S. in Mechanical Engineering"
    },
    {
        title: "Fundraising Chair",
        name: "Rushita Bachu",
        major: "B.S. in Computer Science"
    },
    {
        title: "Secretary",
        name: "Melissa Aguilera",
        major: "B.S. in Electrical Engineering"
    }
];

export default function() {
    return (
        <>
            <Helmet>
                <title>E-Board</title>
            </Helmet>
            <Eboard members={members} mainPicture="/eboard.jpg" />
        </>
    );
}