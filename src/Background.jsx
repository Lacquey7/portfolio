import Aurora from "./anim/background.jsx";

function Background() {
    return (
        <div className="fixed inset-0 w-full h-full z-0">
            <Aurora
                colorStops={["#0B132B", "#1C2541", "#3A506B"]}
                speed={0.5}
            />
        </div>
    );
}

export default Background;