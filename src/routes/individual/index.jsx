import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Individual = () => {
    const [data, setData] = useState(null);
    const { groupId, individualId } = useParams();

    useEffect(() => {
        if (groupId && individualId) {
            fetch(`http://localhost:4000/africans/${groupId}`)
                .then((resp) => resp.json())
                .then((data) => {
                    const member = (data?.members || []).find((individual) => {
                        return individual.id == individualId;
                    });

                    setData(member);
                })
                .catch((error) => setData(null));
        }

        if (!groupId && individualId) {
            fetch(`http://localhost:4000/africans/${individualId}`)
                .then((resp) => resp.json())
                .then((data) => setData(data))
                .catch((error) => setData(null));
        }
    }, [groupId, individualId]);

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