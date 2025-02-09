function Projet() {
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center justify-between">
                        <h3 className="card-title">Projet Terminé</h3>
                        <div className="w-3 h-3 rounded-full bg-green-500" title="Projet terminé"></div>
                    </div>
                    <p>Voici une courte description du projet terminé qui présente ses principales fonctionnalités.</p>
                    <div className="mt-2">
                        <span className="badge badge-secondary mr-2">React</span>
                        <span className="badge badge-secondary mr-2">Node.js</span>
                        <span className="badge badge-secondary">Tailwind</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projet;