import React from "react";
import Background from "./Background";

function App() {
    return (
        <div className="relative">
            <Background />
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <button className="btn btn-primary">Daisy</button>
            </div>
        </div>
    );
}

export default App;