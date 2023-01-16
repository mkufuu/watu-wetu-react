import { useState, useEffect } from "react";
import { redirect, useParams } from "react-router-dom";

const IndividualForm = () => {
    // TODO: Fetch the user when they belong to a group, this logic only work for individuals
    const { individualId } = useParams();

    const [formData, setFormData] = useState({});

    useEffect(() => {
        // fetch the user & pre-fill the form so that the user does not have to write from scratch
        fetch(`http://localhost:4000/africans/${individualId}`)
            .then((resp) => resp.json())
            .then((data) => setFormData(data));
    }, [individualId]);

    const handleFormSubmission = (event) => {
        event.preventDefault();

        // set the request to the server
        fetch(`http://localhost:4000/africans/${individualId}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((resp) => resp.status)
            .then((status) => {
                // TODO: Redirect to the user page
                if (status === 200) return redirect(`/individuals/${individualId}`);
            });
    }

    const handleFormInput = (event) => {
        const key = event.target.name;
        const val = event.target.value;

        setFormData({ ...formData, [key]: val });
    }

    return <div className="container">
        <h1>Edit individual details</h1>

        <form method="POST" className="mt-5" onSubmit={handleFormSubmission}>
            {/* handle image upload */}
            <div className="mb-4">
                <input type="file" className="form-control" />
            </div>

            {/* handle title input */}
            <div className="mb-4">
                <label htmlFor="individual-name" className="form-label">Individual name</label>
                <input type="text" name="name" className="form-control" id="individual-name" placeholder="Edit name"
                    value={formData?.name}
                    onChange={handleFormInput} />
            </div>

            {/* handle description */}
            <div className="mb-4">
                <label htmlFor="individual-description" className="form-label">Individual description</label>
                <textarea name="description" className="form-control" id="individual-description" rows="5"
                    value={formData?.description}
                    onChange={handleFormInput}></textarea>
            </div>


            {/* handle date of birth */}
            <div className="mb-4">
                <label htmlFor="individual-dob" className="form-label">Date of birth</label>
                <input type="date" name="dob" placeholder="yyyy-mm-dd" className="form-control" id="individual-dob"
                    value={formData?.dob}
                    onChange={handleFormInput} />
            </div>

            {/* handle date of death */}
            <div className="mb-4">
                <label htmlFor="individual-dod" className="form-label">Date of death</label>
                <input type="date" name="dod" placeholder="yyyy-mm-dd" className="form-control" id="individual-dod"
                    value={formData?.dod}
                    onChange={handleFormInput} />
            </div>

            <div className="mb-4">
                <button type="submit" className="btn btn-primary">
                    SAVE CHANGES
                </button>
            </div>
        </form>
    </div>
}

export default IndividualForm;