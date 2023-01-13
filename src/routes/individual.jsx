import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Individual = () => {
    const { individualId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/africans`)
            .then((resp) => resp.json())
            .then((data) => setData(data))
            .catch((error) => setData(null));
    }, [individualId]);

    return null;
}

export default Individual;