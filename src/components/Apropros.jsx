function Apropros() {
    return (
        <section className="container mx-auto px-6 pt-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold bg-white rounded-m px-3 py-1">À Propos de Moi</h2>
            <p className="mt-6 max-w-2xl text-left leading-normal text-sm font-semibold">
                Apprenant chez{" "}
                <strong>
                    <a
                        href="https://zone01rouennormandie.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-m px-1 py-1 transition duration-300 hover:bg-gray-200 hover:shadow-md"
                    >
                        Zone01
                    </a>
                </strong>
                , je suis passionné par le développement web et logiciel. J'apprends à créer des{" "}
                <strong>applications performantes et interactives</strong> avec{" "}
                <strong>Golang, JavaScript et WebSockets</strong>. Mon objectif est de me spécialiser en{" "}
                <strong>déploiement et développement backend en Go</strong>, en optimisant l'expérience utilisateur avec des solutions fluides et scalables. Je m'intéresse aussi à{" "}
                <strong>Linux, la gestion de serveurs VPS, l'automatisation des déploiements</strong> et à l’optimisation des infrastructures backend.
            </p>

            {/* Liens vers les profils GitHub et LinkedIn */}
            <div className="flex gap-6 mt-8">
                <a
                    href="https://github.com/lacquey7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/mtliche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    LinkedIn
                </a>
            </div>

            {/* Affichage de l'email sous les boutons */}
            <div className="mt-6 text-center">
                <p className="text-sm">Me contacter :</p>
                <a
                    href="mailto:tlichemohamed76@gmail.com"
                    className=" font-semibold hover:underline"
                >
                    tlichemohamed76@gmail.com
                </a>
            </div>
        </section>
    );
}

export default Apropros;