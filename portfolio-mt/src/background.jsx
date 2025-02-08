import Aurora from "./anim/background.jsx";

function Background() {
    return (
        <div className="fixed inset-0 w-full h-full">
            <Aurora
                colorStops={["#0f1e48", "#1f6feb", "#8ecae6"]}
                speed={1}
            />
        </div>
    );
}

export default Background;