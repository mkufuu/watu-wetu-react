import Member from "./Member";
import { useState, useEffect } from "react";

const Community = ({ limit, endpoint }) => {
    const [members, setMembers] = useState([]);

    const fetchData = async (endpoint) => {
        try {
            const resp = await fetch(`http://localhost:4000/${endpoint}?${limit ? `_limit=${limit}` : ''}`);
            const data = await resp.json();

            setMembers(data);
        } catch (error) {
            setMembers([]);
        }
    }

    useEffect(() => {
        fetchData(endpoint);
    }, [endpoint]);

    return <div className="row">
        {
            members.map((member, index) => {
                return <div key={index} className="col-12 col-md-4 col-xl-3 mt-4 mb-2">
                    <Member {...member} />
                </div>;
            })
        }
    </div>
}

export default Community;