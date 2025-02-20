import React from "react";

const technologies = [
    {
        name: "HTML",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        url: "https://reactjs.org/"
    },
    {
        name: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        url: "https://nodejs.org/"
    },
    {
        name: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        url: "https://tailwindcss.com/"
    },
    {
        name: "GitHub",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        url: "https://github.com/"
    },
    {
        name: "Docker",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        url: "https://www.docker.com/"
    },
    {
        name: "Linux",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        url: "https://www.linux.org/"
    },
    {
        name: "Golang",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        url: "https://golang.org/"
    }
];

function TechnoCarousel() {
    return (
        <div className="overflow-hidden w-full py-10">
            <div className="flex justify-center flex-wrap gap-10">
                {technologies.map((tech, index) => (
                    <a
                        key={index}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                    >
                        <img
                            src={tech.src}
                            alt={tech.name}
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                        <p className="text-sm mt-2">{tech.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default TechnoCarousel;