import { Link } from "react-router-dom";

const Member = ({ id, dob, dod, type, name, image, groupId, founded, description }) => {
    description = description.length > 100
        ? `${(description || '').substring(0, 100)} ...`
        : description;

    const href = type === "individual"
        ? groupId
            ? `/groups/${groupId}/individuals/${id}`
            : `/individuals/${id}`
        : `/groups/${id}`;

    return <Link to={href} style={{ display: "flex", textDecoration: "none" }}>
        <div className="card">
            <div className="rounded-top" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}>

            </div>

            <div className="card-body">
                <h5 className="card-title text-dark">{name}</h5>

                <div className="card-text">
                    <p className="lead text-dark">
                        {description}
                    </p>

                    {
                        type === "individual"
                            ? <div className="d-flex justify-content-between">
                                <strong className="text-warning">Born: {dob}</strong>
                                <strong className="text-danger">Died: {dod}</strong>
                            </div>
                            : <div className="d-flex justify-content-between">
                                <strong className="text-primary">Founded: {founded}</strong>
                            </div>
                    }
                </div>



            </div>
        </div>
    </Link>;
}

export default Member;