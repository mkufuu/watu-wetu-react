
const Member = ({ dob, dod, name, image, description }) => {
    return <div className="card">
        <img src={image} alt="" className="card-img-top" />

        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-text">
                <p className="lead">{description}</p>

                <div className="d-flex justify-content-between">
                    <strong className="text-warning">{dob}</strong>
                    <strong className="text-danger">{dod}</strong>
                </div>
            </div>
        </div>
    </div>;
}

export default Member;