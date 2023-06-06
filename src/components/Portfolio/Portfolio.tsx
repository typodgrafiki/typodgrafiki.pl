import React from "react"
import PortfolioItem from "./PortfolioItem/PortfolioItem"
import { linkScroll } from "../Header/Header"

import "./Portfolio.css"

interface ProjectItem {
    link: string
    classList: string
    name: string
    subName: string
    icon: string
}

const projectsItem: ProjectItem[] = [
    {
        link: "http://html.typodgrafiki.pl/",
        classList: "box box-html",
        name: "HTML / CSS",
        subName: "Semantyka i stylowanie",
        icon: "../../assets/tech/html.svg",
    },
    {
        link: "http://js.typodgrafiki.pl/",
        classList: "box box-js",
        name: "JavaScript",
        subName: "Dynamiczne elementy",
        icon: "../../assets/tech/js.svg",
    },
    {
        link: "http://react.typodgrafiki.pl/",
        classList: "box box-react",
        name: "React",
        subName: "Projekt",
        icon: "../../assets/tech/react.svg",
    },
    {
        link: "https://github.com/typodgrafiki",
        classList: "box box-github",
        name: "Github",
        subName: "Moje konto",
        icon: "../../assets/tech/github.svg",
    },
]

const Portfolio: React.FC = () => {
    return (
        <section
            id="portfolio"
            className="flex horizontal-center margin-section"
        >
            <div className="flex flex-column">
                <div className="caption small-width">
                    <h2 className="title-small">Przykładowe projekty</h2>
                </div>
                <div className="grid wide-width">
                    {projectsItem.map((item) => (
                        <PortfolioItem
                            link={item.link}
                            classList={item.classList}
                            name={item.name}
                            subName={item.subName}
                            icon={item.icon}
                            key={item.name}
                        />
                    ))}
                </div>
                <a
                    href="#contact"
                    className="link-border"
                    onClick={linkScroll}
                >
                    Napisz do mnie
                </a>
            </div>
        </section>
    )
}

export default Portfolio
