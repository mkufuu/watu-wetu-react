import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Individual = () => {
    const { individualId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/africans/${individualId}`)
            .then((resp) => resp.json())
            .then((data) => setData(data))
            .catch((error) => setData(null));
    }, [individualId]);

    return <div className="container-fluid">
        <header className="d-flex justify-content-center">
            <img className="rounded shadow img-thumbnail" src={data?.image || ''} alt={data?.name || ''} style={{ maxHeight: 400 }} />
        </header>

        <main className="mt-2 mb-3">
            <div className="d-flex align-items-center">
                <h1>
                    {data?.name || 'Not Available'}
                </h1>

                <Link to={`/individuals/${individualId}/edit`} className="ms-3">
                    <i className="h2 bi bi-pencil-square"></i>
                </Link>
            </div>

            <p className="mt-2 lead">
                {data?.description || 'No description available'}
            </p>
        </main>
    </div>;
}

export default Individual;