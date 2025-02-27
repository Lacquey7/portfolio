function Header() {
    return (
        <>{/* Header */}
            <header className="my-10 px-6">
                <div className="flex flex-col items-center">
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img
                                src="/portfolio/mohamed_Tliche.png"
                                className="object-cover w-full h-full scale-150 translate-x-1.5 translate-y-2.5"
                                alt="Photo de profil"
                            />
                        </div>
                    </div>
                    {/* Nom */}
                    <div className="badge badge-outline rounded-full bg-opacity-50 border-white text-white mt-4">
                        Mohamed Tliche
                    </div>
                </div>
            </header>
        </>
    )
}

export default  Header