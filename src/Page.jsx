import Header from "./components/Header.jsx";
import Projet from "./components/Projet.jsx";
import Techno from "./components/Techno.jsx";
import Desc from "./components/Desc.jsx";
import { useEffect, useState } from "react";
import Apropros from "./components/Apropros.jsx";

// Données simulées pour les projets
const fakeProjects = [
    {
        id: 5,
        title: "Social Network",
        description: "Social Network est un réseau social inspiré de X, développé avec Go, NextJS et SQLite. Il permet aux utilisateurs de créer un profil, publier des posts, suivre d’autres utilisateurs, rejoindre des groupes et discuter en temps réel grâce aux WebSockets. L’authentification est sécurisée avec sessions et cookies, et les images sont gérées efficacement. Le projet est dockerisé avec une séparation backend/frontend. Un système de notifications informe les utilisateurs des nouvelles interactions.",
        status: "En cours",
        techno: ["NEXTJS", "JAVASCRIPT", "CSS", "GO", "SQLITE3", "DOCKER", "WEBSOCKET", "GITHUB"],
        demo: "",
        github: ""
    },
    {
        id: 4,
        title: "GraphQL Profile",
        description: "Ce projet consiste à créer une interface utilisateur permettant aux étudiants de Zone01 d'afficher leurs informations scolaires en utilisant GraphQL. Grâce à une intégration avec l'API GraphQL fournie par la plateforme, l'utilisateur peut consulter ses statistiques telles que le nombre d'XP gagnés, les audits réalisés, les projets validés et échoués, ainsi que d'autres données liées à son parcours. L'interface propose également une authentification sécurisée via JWT et permet de générer des graphiques interactifs en SVG pour visualiser les performances.",
        status: "Fini",
        techno: ["REACTJS","JAVASCRIPT","CSS","GRAPHQL","SVG"],
        demo: "",
        github: ""
    },
    {
        id: 3,
        title: "Real Time Forum",
        description: "RealtimeForum est un forum interactif en temps réel développé avec Go, JavaScript et WebSockets. Il s’agit d’une Single Page Application (SPA) où tout le contenu est chargé dynamiquement sans rechargement de page. Les interactions (navigation, affichage des posts, commentaires, messagerie privée) sont mises à jour en temps réel grâce aux WebSockets, offrant une expérience fluide et rapide.",
        status: "Fini",
        techno: ["JAVASCRIPT", "CSS", "HTML5", "GOLANG", "SQLITE"],
        demo: "",
        github: ""
    },
    {
        id: 1,
        title: "Make Your Game",
        description: "Make Your Game est un jeu en JavaScript pur (sans Canvas ni frameworks), inspiré de BomberMan. Il garantit une animation fluide à 60 FPS, un gameplay optimisé via le DOM et une gestion précise des performances. Le jeu est déployé via Vercel pour une accessibilité rapide et fluide en ligne",
        status: "Fini",
        techno: ["Vanilla JS", "CSS", "HTML5", "GIT HUB", "VERCEL"],
        demo: "https://make-your-game-plum.vercel.app/",
        github: "https://github.com/Lacquey7/Make-your-game"
    },
    {
        id: 2,
        title: "Portfolio",
        description: "Développement d’un portfolio en React avec Tailwind CSS pour un design moderne et responsive. L’application est générée sous forme de site statique et déployée sur GitHub Pages, garantissant une mise en production rapide et accessible.",
        status: "Fini",
        techno: ["REACT","JAVASCRIPT", "TAILWIND CSS", "GITHUB PAGE"],
        demo: "",
        github: ""
    }
];

function Page() {
    const [myProjects, setMyProject] = useState([]);

    useEffect(() => {
        // Simulation de récupération des données
        const sortedProjects = [...fakeProjects].sort((a, b) => {
            if (a.status === "En cours" && b.status === "Fini") return -1;
            if (a.status === "Fini" && b.status === "En cours") return 1;
            return 0;
        });
        setMyProject(sortedProjects);
        console.log("Projets mis à jour:", sortedProjects);
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen">
            {/* Header */}
            <Header />

            {/* Description */}
            <section className={"mb-10"}>
                <Desc />
            </section>

            {/* À Propos */}
            <section className={"mb-20"}>
                <Apropros />
            </section>

            {/* Section Technologies maîtrisées */}
            <section className="w-full max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-8 bg-white rounded-m px-4 py-2 inline-block shadow-md">
                    Mes technologies
                </h2>
                <Techno />
            </section>

            {/* Main Content */}
            <main className="w-full max-w-5xl px-6 py-16 flex flex-col items-center gap-16">
                {/* Section Projets */}
                <section className="w-full text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-white rounded-m px-4 py-2 inline-block shadow-md">
                        Projets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Vérification avant d'afficher les projets */}
                        {Array.isArray(myProjects) && myProjects.length > 0 ? (
                            myProjects.map((projet) => (
                                <Projet key={projet.id} projet={projet} />
                            ))
                        ) : (
                            <p className="text-gray-500">Aucun projet disponible.</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Page;