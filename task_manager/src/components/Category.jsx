import React from "react";
import AddCategory from "./AddCategory";
import ManageCategories from "./ManageCatgories";

const Category = () => {
    return (
        <section className="category-management-section">
            <AddCategory/>
            <ManageCategories/>
        </section>
    );
}

export default Category;