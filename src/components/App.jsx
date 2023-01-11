import '../styles/app.css';

import People from './People';

const App = () => {

    return <div className="mt-2 container-fluid">
        <header id="app-header" className="rounded">
            <h1 id="app-title"></h1>
        </header>

        <main id="app-main">
            <div className="row">
                {/* <People endpoint="kapenguria-six" /> */}

                {/* <People endpoint="culture" /> */}

                <People endpoint="wakadinali" />
            </div>
        </main>
    </div>
};

export default App;