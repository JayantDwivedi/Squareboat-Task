import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/dash.css";

export default function Dashboard() {
  const url = "https://jobs-api.squareboat.info/api/v1/jobs";

  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(8);
  const [jobs, setJobs] = useState([]);
  const [vaccancy, setVaccancy] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(url);
      const jsonres = await res.json();
      setJobs(jsonres.data);

      console.log(jobs);
    };

    fetchAPI();
  }, []);

  // pagination
  const indexoflastcard = currentpage * postperpage;
  const indexoffirstcard = indexoflastcard - postperpage;
  const currentcard = jobs.slice(indexoffirstcard, indexoflastcard);
  console.log(currentcard);

  return (
    <div className="dash-main container">
      <Link to="/" className="text-light">
        <i className="fas fa-home"></i>Home
      </Link>
      <h4 className="text-light my-4">Job posted</h4>
      <div className="">
        {currentcard.map(function (ele) {
          return (
            <div
              className="m-4 d-inline-block p-4 w-25 h-25 bg-light rounded shadow-sm"
              key={ele.id}
            >
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>
              <div className="d-flex justify-content-between">
                <p className="">
                  <i className="fas fa-map-marker-alt text-primary px-1"> </i>
                  {ele.location}
                </p>
                <Link className="text-dark participants p-2 rounded">
                  View participant
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
