import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductView() {

  var { objectID } = useParams()
  const [objectID1, setObjectId1] = useState('')
  const [name, setName] = useState('')
  const [shortDescribtion, setShortDescription] = useState('')
  const [salePrice, setSalePrice] = useState('')
  const [image, setImage] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [customerReviewCount, setCustomerReviewCount] = useState('')
  const [shipping, setShipping] = useState('')
  const [bestSellingRank, setBestSellingRank] = useState('')


  useEffect(() => {
    fetch("http://localhost:3662/getsingle/" + objectID)
      .then(res => res.json())
      .then(data => {
        setObjectId1(data[0].objectID)
        setName(data[0].name)
        setShortDescription(data[0].shortDescribtion)
        setSalePrice(data[0].salePrice)
        setImage(data[0].image)
        setManufacturer(data[0].manufacturer)
        setCustomerReviewCount(data[0].customerReviewCount)
        setShipping(data[0].shipping)
        setBestSellingRank(data[0].bestSellingRank)
      })


  })

  return (
    <>
      <h1>View Product</h1>
      <h4>Product Id : {objectID}</h4>
      <img src={image} className="card-img-top" alt={name} style={{ maxWidth: "50vw", maxHeight: "30vh" }} />
      <h1>{name}</h1>
      <h2>{salePrice}</h2>
      <p>{shortDescribtion}</p>
      <p>{customerReviewCount}</p>
      <p>{shipping}</p>
      <h4>{bestSellingRank}</h4>
      <h4>{manufacturer}</h4>
      <button>Buy Now</button>
    </>
  );
}