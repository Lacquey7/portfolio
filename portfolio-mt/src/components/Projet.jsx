function Projet( { projet }) {
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center justify-between">
                        <h3 className="card-title">{projet.title}</h3>
                        <div className="w-3 h-3 rounded-full bg-green-500" title="Projet terminé"></div>
                    </div>
                    <p>{projet.description}</p>
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