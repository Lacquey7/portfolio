import Background from "./Background.jsx";
import Page from "./Page.jsx";

function App() {
    return (
        <div className="relative">
            <Background />
            <div className="relative z-10">
                <Page/>
            </div>
        </div>
    );
}

export default App;