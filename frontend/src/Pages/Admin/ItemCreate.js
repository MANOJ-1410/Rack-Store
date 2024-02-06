import React, { useEffect, useState } from 'react';
// import './ItemCreate.css';
import styles from './ItemCreate.module.css';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '../../Context/ToastContext';

const ItemCreate = () => {
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const { showSuccessToast, showErrorToast } = useToast();

  const [item, setItem] = useState({
    productName: '',
    days: '',
    price: '',
    image: '',
    state: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleImageChange = (e) => {
    const image = e.target.value;
    setItem({ ...item, image });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (!decodedToken.isAdmin) {
        navigate('/login');
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/prod/products`, item);
      if (response) {
        setItem({
          productName: '',
          days: '',
          price: '',
          image: '',
          state: '',
          city: '',
        });
      }
      showSuccessToast('Rack Added Successfully')
    } catch (error) {
      showErrorToast("Error Try Again")
      console.error('Error creating item:', error);
    }
  };

  return (
    <div className= {styles.form_container_create}>
      <h2>Create a New Rack</h2>
      <form className= {styles.item_form} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="image" className={styles.label}>
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={item.image}
            onChange={handleImageChange}
            className={styles.input}
          />
          {item.image && (
            <div className={styles.image_preview}>
              <img src={item.image} alt="Item Preview" className= {styles.preview} />
            </div>
          )}
        </div>
        <div className={styles.form_group}>
          <label htmlFor="productName" className={styles.label}>
            Rack Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={item.productName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className="form-group">
          <label htmlFor="days" className={styles.label}>
            Days
          </label>
          <input
            type="text"
            id="days"
            name="days"
            value={item.days}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className={styles.label}>
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state" className={styles.label}>
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={item.state}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city" className={styles.label}>
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={item.city}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Create Rack
        </button>
      </form>
    </div>
  );
};

export default ItemCreate;
