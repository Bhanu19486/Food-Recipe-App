import React from 'react';

const Products = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className="card" style={{ width: "18rem", margin: "10px auto" }}>
            <img
              className="card-img-top"
              src={item.recipe.image}
              alt={item.recipe.label}
            />
            <div className="card-body">
              <center>
                <h5 className="card-title">{item.recipe.label}</h5>
                <p className="card-text">
                  Total Amount Of Calories: {Math.round(item.recipe.calories)}
                </p>
                <a href={item.recipe.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Recipe
                </a>
              </center>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
