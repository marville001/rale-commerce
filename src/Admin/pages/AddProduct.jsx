import React, { useEffect, useState } from "react";
import { Wrapper } from ".";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../_actions/productActions";

const AddProduct = (props) => {
  const { admin, errorSave, loadingSave } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!admin._id) {
      props.history.push("/admin/login/?redirect=products/add");
    }
  }, [admin]);

  console.log(errorSave, loadingSave);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  // const [imageName, setImageName] = useState("");
  const [description, setDescription] = useState("");

  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    dispatch(saveProduct({ name, price, category, image, description }));
  };

  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>Add Products</h1>
      <div className="page-container flex-jcenter">
        <div className="form">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter name..."
              className="input-border"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "1rem" }} className="input-container">
            <label htmlFor="price">Price(Ksh)</label>
            <input
              className="input-border"
              type="number"
              min={1}
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <input
              placeholder="Enter category..."
              className="input-border"
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "0" }} className="input-container">
            <label htmlFor="image">Image</label>
            <input
              placeholder=""
              className="input-file input-border"
              type="file"
              id="image"
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="des">Description</label>
            <textarea
              placeholder="Enter the description here"
              className="input-border"
              id="des"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="add-btn-container">
            <button onClick={handleSubmit} className="add-btn">
              Add
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddProduct;
