import Member from "./member";
import { useState, useEffect } from "react";

const Community = ({ limit, endpoint }) => {
    const [members, setMembers] = useState([]);

    const fetchData = async (endpoint) => {
        try {
            // const resp = await fetch(`http://localhost:4000/${endpoint}?${limit ? `_limit=${limit}` : ''}`);
            const resp = await fetch(`https://api.jsonbin.io/v3${endpoint}`, {
                headers: {
                    "X-Key-Name": "WATU-WETU",
                    "Content-Type": "application/json",
                    "X-Master-Key": "$2b$10$Uf/kYg29QcCrAJXwYzzl..ico/r8FFdkUqlJ8ZVDTzSh89wXdyHJy",
                }
            });

            // console.log(resp);
            const data = await resp.json();

            // console.log(data);
            setMembers(data?.record?.africans || []);
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