import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import './TrailScreen.css';

// Actions
// import { getProductDetails } from '../redux/actions/productActions';

// { match, history }
const TrailScreen = () => {
  // const dispatch = useDispatch();

  // const productDetails = useSelector(state => state.getProductDetails);
  // const {loading, error, product} = productDetails;

  // useEffect(() => {
  //   if(product && match.params.id !== product._id) {
  //     dispatch(getProductDetails(match.params.id));
  //   }
  // }, [dispatch, product, match]);

  return (
  // <div className="productscreen">
  //   {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
  //     <>
  //       <div className="productscreen__left">
  //         <div className="left__image">
  //           <img src={product.imageUrl} alt={product.name} />
  //         </div>

  //         <div className="left__info">
  //           <p className="left__name">{product.name}</p>
  //           <p className="left__price">Price: ${product.price}</p>
  //           <p className="left__description">{product.description}</p>
  //         </div>
  //       </div>

    //       <div className="productscreen__right">
    //         <div className="right__info">
    //           <p>
    //             Price: <span>${product.price}</span>
    //           </p>
    //           <p>
    //             Status: 
    //             <span>
    //               {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
    //             </span>
    //           </p>
    //           <p>
    //             Qty: 
    //             <select value={qty} onChange={(e) => setQty(e.target.value)}>
    //               {[...Array(product.countInStock).keys()].map((x) => (
    //                 <option key={x + 1} value={x + 1}>
    //                   {x + 1}
    //                 </option>
    //               ))}
    //             </select>
    //           </p>
    //           <p>
    //             <button type="button" onClick={addToCartHandler}>Add To Cart </button>
    //           </p>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
    <div className="trail-screen">
      <h2>Cascade Mountain and Porter Mountain via Cascade Mountain Trail</h2>
      <div className="trail-screen__top">
        <img className="top-left__image" src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="trail image" />

        <div className="top-right__details">
          <div className="trail-details">
            <p className="details__park">High Peaks Wilderness</p>
            <p className="details__location">Keene, NY</p>
            <p className="details__excerpt">Cascade Mountain and Porter Mountain via Cascade Mountain Trail is a 5.6 mile heavily trafficked out and back trail located near Keene, New York that features a river and is rated as difficult. The trail offers a number of activity options and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.</p>
          </div>

          <div className="trail-meta">
            <div className="meta__left">
              <ul>
                <li>Difficulty: <span>Hard</span></li>
                <li>Length: <span>5.6</span> mi.</li>
                <li>Trail Type: <span>Out & Back</span></li>
              </ul>
            </div>

            <div className="meta__right">
              <ul>
                <li>Elevation Gain: <span>2,286</span> ft.</li>
                <li>Hiker Rating: <span>4.5</span> out of 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="trail-screen__bottom">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt labore quibusdam ullam culpa asperiores voluptatum quas animi explicabo nam iure provident? Porro quidem molestiae vitae illum? Quis natus provident vero qui blanditiis dignissimos in pariatur dolorem culpa voluptatem fugiat, nemo iusto laudantium? Facilis nesciunt assumenda nobis perspiciatis a cumque expedita aliquid necessitatibus consectetur. Impedit assumenda laboriosam quos omnis voluptate, soluta rem fugit quod. Numquam incidunt corporis repellendus, sequi, labore maxime dolore obcaecati rerum adipisci dicta perferendis beatae hic quis assumenda? Inventore eveniet accusamus alias nesciunt dolorem ratione? Amet natus reprehenderit est voluptas ab? Quam iusto consequatur ducimus excepturi dolorum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt labore quibusdam ullam culpa asperiores voluptatum quas animi explicabo nam iure provident? Porro quidem molestiae vitae illum? Quis natus provident vero qui blanditiis dignissimos in pariatur dolorem culpa voluptatem fugiat, nemo iusto laudantium? Facilis nesciunt assumenda nobis perspiciatis a cumque expedita aliquid necessitatibus consectetur. Impedit assumenda laboriosam quos omnis voluptate, soluta rem fugit quod. Numquam incidunt corporis repellendus, sequi, labore maxime dolore obcaecati rerum adipisci dicta perferendis beatae hic quis assumenda? Inventore eveniet accusamus alias nesciunt dolorem ratione? Amet natus reprehenderit est voluptas ab? Quam iusto consequatur ducimus excepturi dolorum.
        </p>
        <div className="trail-screen__btn-container">
          {/* <button className="trail-update-btn">
            Update Trail
            <i className="fas fa-pen"></i>
          </button> */}
          <button className="trail-delete-btn">
            Delete Trail
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>

    </div>
  );
};

export default TrailScreen;
