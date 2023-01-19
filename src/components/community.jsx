import Member from "./member";
import useData from "../hooks/use-data";

const Community = ({ endpoint }) => {
    const data = useData(endpoint);

    return <div className="row">
        {
            (data?.record?.africans || []).map((member, index) => {
                return <div key={index} className="col-12 col-md-4 col-xl-3 mt-4 mb-2">
                    <Member {...member} />
                </div>;
            })
        }
    </div>
}

export default Community;