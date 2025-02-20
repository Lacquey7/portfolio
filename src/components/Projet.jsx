import React from "react";

function Projet({ projet }) {
    // Vérification si projet est bien défini
    if (!projet) {
        return <p className="text-red-500">Erreur : Projet non défini.</p>;
    }

    return (
        <div className="shadow-xl rounded-lg overflow-hidden bg-white">
            {/* Contenu du projet */}
            <div className="p-4 text-left">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{projet.title || "Titre inconnu"}</h3>
                    <div
                        className={`w-3 h-3 rounded-full ${
                            projet.status === "Fini"
                                ? "bg-green-500 animate-pulse shadow-[0_0_10px_2px_rgba(34,197,94,0.7)]"
                                : "bg-orange-500 animate-pulse shadow-[0_0_10px_2px_rgba(249,115,22,0.7)]"
                        }`}
                        title={
                            projet.status === "Fini" ? "Projet terminé" : "Projet en cours"
                        }
                    ></div>
                </div>

                <p className="mt-2">{projet.description || "Pas de description disponible."}</p>

                {/* Affichage des technologies avec vérification */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {Array.isArray(projet.techno) && projet.techno.length > 0 ? (
                        projet.techno.map((tech, index) => (
                            <span key={index} className="bg-black px-2 py-1 rounded-m text-sm text-white">
                                {tech}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-500">Aucune technologie spécifiée.</p>
                    )}
                </div>

                {/* Boutons Demo et GitHub */}
                <div className="mt-4 flex gap-4">
                    {projet.demo && projet.demo.trim() !== "" && (
                        <a
                            href={projet.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Voir la démo
                        </a>
                    )}
                    {projet.github && projet.github.trim() !== "" && (
                        <a
                            href={projet.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Code source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projet;