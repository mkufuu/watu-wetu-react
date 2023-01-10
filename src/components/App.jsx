import '../styles/app.css';

import Member from './Member';
import { useState, useEffect } from 'react';

const App = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/kapenguria-six")
            .then((resp) => resp.json())
            .then((data) => setPeople(data))
            .catch((error) => setPeople([]));
    }, []);

    return <div className="mt-2 container-fluid">
        <header id="app-header" className="rounded">
            <h1 id="app-title">Watu Wetu</h1>
        </header>

        <main id="app-main">
            <div className="row">
                {
                    people.map((member, index) => {
                        return <div key={index} className="col-12 col-md-4 col-xl-3 mt-4 mb-2">
                            <Member {...member} />
                        </div>;
                    })
                }
            </div>
        </main>
    </div>
};

export default App;