import React, { useState } from "react";

import "./App.css";
import gender from "./images/Figure_1.png";
import age from "./images/Figure_2.png";
import spendingscore from "./images/Figure_4.png";
import visitingfrequency from "./images/Figure_5.png";
import annualincomevsgender from "./images/Figure_6.png";
import spendingscorevsgender from "./images/Figure_7.png";
import kmeans from "./images/Figure_9.png";



const App = () => {
  const [showgender, setGender] = useState("none");
  const [showage, setAge] = useState("none");
  const [showspendingscore, setSpendingscore] = useState("none");
  const [showvisitingfrequency, setVisitingfrequency] = useState("none");
  const [showannualincomevsgender, setAnnualincomevsgender] = useState("none");
  const [showspendingscorevsgender, setSpendingscorevsgender] =useState("none");
  
  
  function showimage() {
        const Analysis = document.getElementById('analysis')
        
        if(Analysis.value === '1')
        {
          setGender('block')
          setAge('none')
          setSpendingscore('none')
          setVisitingfrequency('none')
          setSpendingscorevsgender('none')
          setAnnualincomevsgender('none')

        }

        if(Analysis.value === '2')
        {
          setGender('none')
          setAge('block')
          setSpendingscore('none')
          setVisitingfrequency('none')
          setSpendingscorevsgender('none')
          setAnnualincomevsgender('none')
          
        }

        if(Analysis.value === '3')
        {
          setGender('none')
          setAge('none')
          setSpendingscore('block')
          setVisitingfrequency('none')
          setSpendingscorevsgender('none')
          setAnnualincomevsgender('none')
          
        }
        if(Analysis.value === '4')
        {
          setGender('none')
          setAge('none')
          setSpendingscore('none')
          setVisitingfrequency('block')
          setSpendingscorevsgender('none')
          setAnnualincomevsgender('none')
          
        }

        if(Analysis.value === '5')
        {
          setGender('none')
          setAge('none')
          setSpendingscore('none')
          setVisitingfrequency('none')
          setSpendingscorevsgender('none')
          setAnnualincomevsgender('block')
          
        }

        if(Analysis.value === '6')
        {
          setGender('none')
          setAge('none')
          setSpendingscore('none')
          setVisitingfrequency('none')
          setSpendingscorevsgender('block')
          setAnnualincomevsgender('none')
          
        }


  }

  return (
    <div className="maindiv">
      <div className="container">
      <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold" }}>
        Customer Segmentation Analysis Result
      </h1>
      <h4 style={{ fontSize: "2.5rem" }}>
        Attributes considered for the analysis from the given dataset are as follows:
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

      <label for="analysis" style={{ fontSize:'2rem'}}>Individual Analysis</label>
      <select name="analysis" id="analysis" onChange={showimage} style={{color:'black',fontSize:'1.25rem',height:'60px',margin:'40px'}}>
        <option value="0" style={{ fontSize:'1rem',color:'black'}}>Select an Option</option>

        <option value="1" style={{ fontSize:'1rem',color:'black'}}>Gender Analysis</option>
        <option value="2" style={{ fontSize:'1rem',color:'black'}}>Age Analysis</option>
        <option value="3" style={{ fontSize:'1rem',color:'black'}}>Spending Score Analysis</option>
        <option value="4" style={{ fontSize:'1rem',color:'black'}}>Visiting Frequency Analysis</option>
        <option value="5" style={{ fontSize:'1rem',color:'black'}}>Annual Income vs Gender Analysis</option>
        <option value="6" style={{ fontSize:'1rem',color:'black'}}>Spending Score vs Gender Analysis</option>
      </select>

    

      <div style={{ display: showgender }}>
        <h4 style={{ fontSize: "2.0rem" }}>Gender Analysis</h4>
        <h2>
        Two genders have been considered and the exact count of the number of people visiting according to their gender has also been mentioned. According to the dataset given, the number of women who visit is slightly more in comparison to that of the number of men.
        </h2>
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
      </div>

      <div style={{ display: showage }}>
        <h4 style={{ fontSize: "2.0rem" }}>Age Analysis</h4>
        <h2>
          Here a box plot is implemented and we have prioritized customers
          between the age range of 25%-75% of the minimum and maximum age
          mentioned.
        </h2>
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
      </div>

      <div style={{ display: showspendingscore }}>
        <h4 style={{ fontSize: "2.0rem" }}>Spending Score Analysis</h4>
        <h2>A box plot is done for the spending score. We have considered the range 1-8, 8 being the highest. In this analysis we have prioritised 25%-75% of the minimum and maximum.</h2>
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
      </div>

      <div style={{ display: showvisitingfrequency }}>
        <h4 style={{ fontSize: "2.0rem" }}>Visiting Frequency Analysis</h4>
        <h2>Visiting frequency is one of the most beneficial attributes considered. The more the person visits a business the more tendency he/she has to buy from it.</h2>
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
      </div>

      <div style={{ display: showannualincomevsgender }}>
        <h4 style={{ fontSize: "2.0rem" }}>Annual Income vs Gender Analysis</h4>
        <h2>With this plot we get to know the annual Income distribution based on gender.</h2>
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
      </div>

      <div style={{ display: showspendingscorevsgender }}>
        <h4 style={{ fontSize: "2.0rem" }}>Spending Score vs Gender Analysis</h4>
        <h2>With this plot we get to know the Spending Score based on gender. <br></br>Here we observe that the men spend more than the women. </h2>
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
      </div>

      <h4 style={{ fontSize: "2.0rem" }}>Final Cluster Analysis By KMeans</h4>
      <h2>
        Two very impactful attributes are considered for the overall analysis
      </h2>
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
      <h4 style={{ fontSize: "2.0rem" }}>Customer data based on each cluster:</h4>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ul>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1u4jaWqejmCHve--KN3dqafkRJuRPBpuN/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true"
              style={{ display: "block", fontSize: "2.0rem" }}
            >
              Click to see the customers in cluster 1
            </a>
          </li>
          <br></br>
          <li>
            {" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1BpAr0jJ8Lr2zVl9o71ErKcPMtobXoyYB/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true"
              style={{ display: "block", fontSize: "2.0rem" }}
            >
              {" "}
              Click to see the customers in cluster 2
            </a>
          </li>
          <br></br>
          <li>
            {" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1_s9hKW_uzn20Cw0vp9RA5ogDYbUAkQ0i/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true"
              style={{ display: "block", fontSize: "2.0rem" }}
            >
              {" "}
              Click to see the customers in cluster 3
            </a>
          </li>
          <br></br>
          <li>
            {" "}
            <a
              href="https://docs.google.com/spreadsheets/d/13NV_ks-92I6vcG3n0LmNOCEg41f8gLrC/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true"
              style={{ display: "block", fontSize: "2.0rem" }}
            >
              {" "}
              Click to see the customers in cluster 4
            </a>
          </li>
          <br></br>
          <li>
            {" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1euTnnmXk8igARzE_BdO4rBx5jX-gBe_0/edit?usp=sharing&ouid=114263125916828760868&rtpof=true&sd=true"
              style={{ display: "block", fontSize: "2.0rem" }}
            >
              {" "}
              Click to see the customers in cluster 5
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default App;

