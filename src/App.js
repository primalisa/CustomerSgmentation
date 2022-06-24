import React from "react";

import "./App.css";
import gender from "./images/Figure_1.png";
import age from "./images/Figure_2.png";
import annualincome from "./images/Figure_3.png";
import spendingscore from "./images/Figure_4.png";
import visitingfrequency from "./images/Figure_5.png";
import annualincomevsgender from "./images/Figure_6.png";
import spendingscorevsgender from "./images/Figure_7.png";
import kmeans from "./images/Figure_9.png";

const App = () => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold" }}>
        Customer Segmentation Analysis Result
      </h1>
      <h4 style={{ fontSize: "2.5rem" }}>
        Attributes considered for the analysis from the given dataset
      </h4>
      <ul>
        <li style={{ fontSize: "1.5rem" }}>Gender</li>
        <li style={{ fontSize: "1.5rem" }}>Age</li>
        <li style={{ fontSize: "1.5rem" }}>Annual Income</li>
        <ul>
          <li style={{ fontSize: "1.5rem" }}>1 - Below 3 digit(0-999) </li>
          <li style={{ fontSize: "1.5rem" }}>
            2 -above 3 digit and below 4 digit(1000-9999)
          </li>
          <li style={{ fontSize: "1.5rem" }}>3 -above 4 digit(>10000)</li>
        </ul>

        <li style={{ fontSize: "1.5rem" }}>Spending Score</li>
        <li style={{ fontSize: "1.5rem" }}>Visiting Frequency</li>
      </ul>

      <h4 style={{ fontSize: "2.5rem" }}>Individual Analysis Result</h4>
      <h4 style={{ fontSize: "2.0rem" }}>Gender Analysis</h4>
      <h2>Here you can also see the exact number of customers in each gender.</h2>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={gender}
        alt=""
      />

      <h4 style={{ fontSize: "2.0rem" }}>Age Analysis</h4>
      <h2>Here a box plot is implemented and we have prioritized customers between the age range of 25%-75% of the minimum and maximum age mentioned.</h2>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={age}
        alt=""
      />

      <h4 style={{ fontSize: "2.0rem" }}>Annual Income Analysis</h4>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={annualincome}
        alt=""
      />

      <h4 style={{ fontSize: "2.0rem" }}>Spending Score Analysis</h4>
      
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={spendingscore}
        alt=""
      />

      <h4 style={{ fontSize: "2.0rem" }}>Visiting Frequency Analysis</h4>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={visitingfrequency}
        alt=""
      />

      <h4 style={{ fontSize: "2.0rem" }}>Annual Income vs Gender Analysis</h4>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={annualincomevsgender}
        alt=""
      />

      <h4 style={{ fontSize: "2.0rem" }}>Spending Score vs Analysis</h4>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={spendingscorevsgender}
        alt=""
      />

      <h4 style={{ fontSize: "2.0rem" }}>Final Cluster Analysis By KMeans</h4>
      <h2>Two very impactful attributes are considered for the overall analysis</h2>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
        src={kmeans}
        alt=""
      />
      <h4 style={{ fontSize: "2.0rem" }}>5 Clusters Data</h4>
      <div style={{display:'flex',justifyContent:'flex-start'}}>
      <ul>
        <li>
         
          <a href="https://docs.google.com/spreadsheets/d/1u4jaWqejmCHve--KN3dqafkRJuRPBpuN/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true" style={{ display: "block", fontSize: "2.0rem" }}>
           
            Click to see the customers in cluster 1
          </a>
        </li>
        <br></br>
        <li>
          {" "}
          <a href="https://docs.google.com/spreadsheets/d/1BpAr0jJ8Lr2zVl9o71ErKcPMtobXoyYB/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true" style={{ display: "block", fontSize: "2.0rem" }}>
            {" "}
            Click to see the customers in cluster 2
          </a>
        </li>
        <br></br>
        <li>
          {" "}
          <a href="https://docs.google.com/spreadsheets/d/1_s9hKW_uzn20Cw0vp9RA5ogDYbUAkQ0i/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true" style={{ display: "block", fontSize: "2.0rem" }}>
            {" "}
            Click to see the customers in cluster 3
          </a>
        </li>
        <br></br>
        <li>
          {" "}
          <a href="https://docs.google.com/spreadsheets/d/13NV_ks-92I6vcG3n0LmNOCEg41f8gLrC/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true" style={{ display: "block", fontSize: "2.0rem" }}>
            {" "}
            Click to see the customers in cluster 4
          </a>
        </li>
        <br></br>
        <li>
          {" "}
          <a href="https://docs.google.com/spreadsheets/d/1euTnnmXk8igARzE_BdO4rBx5jX-gBe_0/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true" style={{ display: "block", fontSize: "2.0rem" }}>
            {" "}
            Click to see the customers in cluster 5
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default App;
