import React, { useEffect, useState } from "react";
import { Wrapper } from ".";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../_actions/productActions";

const AddProduct = (props) => {
  const { admin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!admin._id) {
      props.history.push("/admin/login/?redirect=products/add");
    }
  }, [admin]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
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
      <h1>Add Products</h1>
      <div className="page-container flex">
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
            <label htmlFor="name">Price(Ksh)</label>
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
            <label htmlFor="name">Category</label>
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
        {/* <div className="img-container">
          <h3 className="alignc">Selected Image</h3>
          <img src={"/ff"} alt="selected image" />
        </div> */}
      </div>
    </Wrapper>
  );
};

export default AddProduct;
