import React from "react";

const ManageCategories = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="card col-8 offset-2">
                    <div className="card-header bg-transparent">
                        <h2 className="text-center">Categories</h2>
                    </div>
                    <div className="card-body">
                        <div className="category d-flex justify-content-between align-items-center bg-dark p-2 rounded">
                            <p className="mt-2 text-white" style={{fontSize: '20px'}}>Category-1</p>
                            <div className="update-buttons">
                                <button type="button" className="btn btn-secondary">Update</button>
                                <button type="button" className="btn btn-danger ms-2">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageCategories