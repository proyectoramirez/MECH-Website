import React from 'react';
import styled from "styled-components";
import Section from "components/Section";
import Title from "components/Title";

const Layout = styled.div`
    display: flex;

    & > *:not(:last-child) {
        margin-right: 2rem;
    }
`;

const Images = styled.div`
    flex: 1;

    & > *:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const Text = styled.div`
    flex: 3;

    & > *:first-child {
        margin-top: 0;
    }
`;

const P = styled.p`
    text-align: justify;
    font-size: large;
`;

export default function() {
    return (
        <Section>
            <Title>About our club</Title>
            <Layout>
                <Text>
                    <P>
                        The Mechanical Electrical and Computer Hub is a student organization devoted to inspiring, encouraging and engaging engineering students through projects, workshops and research. Within MECH, students can brainstorm, develop and build their own projects and ideas.
                    </P>
                    <P>
                        Every semester, students can apply for approval for new projects or participate in on-going projects. In addition, the organization provides a series of workshops throughout the semester, where students from all different majors can learn about unique subjects that enhance their field of view in engineering. Furthermore, MECH has a research program, where students can turn their projects into an independent research with participation of engineering faculty.
                    </P>
                </Text>
                <Images>
                    <img src="/logo.png" />
                    <img src="/logo.png" />
                </Images>
            </Layout>
        </Section>
    );
}