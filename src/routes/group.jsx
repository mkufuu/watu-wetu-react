import Member from "../components/Member";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Group = () => {
    const { groupId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/africans/${groupId}`)
            .then((resp) => resp.json())
            .then((data) => setData(data))
            .catch((error) => setData(null));
    }, [groupId]);

    return <div className="container-fluid">
        <header className="d-flex justify-content-center">
            <img className="rounded shadow img-thumbnail" src={data?.image || ''} alt={data?.name || ''} />
        </header>

        <main className="mt-2 mb-3">
            <h1>
                {data?.name || 'Not Available'}
            </h1>

            <p className="mt-2 lead">
                {data?.description || 'No description available'}
            </p>
        </main>

        <section className="row">
            {
                (data?.members || []).map((member, index) => {
                    return <div key={index} className="col-12 col-md-4 col-xl-3 mt-4 mb-2">
                        <Member {...{ ...member, groupId }} />
                    </div>
                })
            }
        </section>
    </div>
}

export default Group;