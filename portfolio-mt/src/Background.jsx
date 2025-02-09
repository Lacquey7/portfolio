import Aurora from "./anim/background.jsx";

function Background() {
    return (
        <div className="fixed inset-0 w-full h-full z-0">
            <Aurora
                colorStops={["#0f1e48", "#1f6feb", "#7fc8ea"]}
                speed={1}
            />
        </div>
    );
}

export default Background;