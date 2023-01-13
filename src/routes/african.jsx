import People from "../components/People";

const AfricanGiants = () => {
    return <div className="container-fluid">
        <header id="app-header" className="rounded">
            <h1 id="app-title">Watu Wetu</h1>
        </header>

        <main id="app-main">
            <div className="row">
                <People endpoint="kapenguria-six" />
                <People endpoint="micasa" />
                <People endpoint="sautisol" />
                <People endpoint="h-art-the-band" />
                <People endpoint="culture" />
            </div>
        </main>
    </div>
}

export default AfricanGiants;