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

  return (
    <div className="dash-main container">
      <Link to="/" className="text-light">
        <i className="fas fa-home"></i>Home
      </Link>
      <h4 className="text-light my-4">Job posted</h4>
      <div className="d-flex flex-row">
        {jobs.map(function (ele) {
          return (
            <div className="job-card p-4 bg-light rounded shadow-sm">
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>
              <div className="d-flex">
                <div className="location">{ele.location}</div>
                <div className="parcipant">paritcipant</div>
              </div>
            </div>
          );
        })}
        {/* Card 2 */}
        {/* <div className="job-card p-4 bg-light rounded shadow-sm">
          <h4>UI UX designer</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, esse!
          </p>
          <div className="d-flex">
            <div className="location">location</div>
            <div className="parcipant">paritcipant</div>
          </div>
        </div>
        {/* CArd3 */}
        <div className="job-card p-4 bg-light rounded shadow-sm">
          <h4>UI UX designer</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, esse!
          </p>
          <div className="d-flex">
            <div className="location">location</div>
            <div className="parcipant">paritcipant</div>
          </div>
        </div>
        {/* card4 */}
        <div className="job-card p-4 bg-light rounded shadow-sm">
          <h4>UI UX designer</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, esse!
          </p>
          <div className="d-flex">
            <div className="location">location</div>
            <div className="parcipant">paritcipant</div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
