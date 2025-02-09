import Header from "./components/Header.jsx";
import Projet from "./components/Projet.jsx";
import Techno from "./components/Techno.jsx";
import Contact from "./components/Contact.jsx";
import Desc from "./components/Desc.jsx";

function Page() {
    return (
        <div>
           <Header/>
            <Desc/>
            <main className="container mx-auto px-6 py-8">
                {/* Section Projets */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Projets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Projet terminé */}
                        <Projet/>
                    </div>
                </section>
                {/* Section Technologies maîtrisées */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Technologies que je maîtrise</h2>
                    <Techno/>
                </section>

                {/* Section Contact */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                        <Contact/>
                </section>
            </main>
        </div>
    );
}

export default Page;