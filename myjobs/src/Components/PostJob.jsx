import React,{useState} from 'react';

const PostJob = () => {

    const[jobtitle, setJobtitle] = useState();
    const[jobdesc, setJobdesc] = useState();
    const[location, setLocation] = useState();
    const [error, setError] = useState();

    const handleSubmit=()=>{
        if(validate(jobtitle,jobdesc,location)) {
            alert(jobtitle + "," + jobdesc + "," + location);
            setJobdesc("");
            setJobtitle("");
            setLocation("");
            setError("");
        }
        
        
    }


    const validate=(jobtitle,jobdesc,location)=>{
        if (jobtitle === undefined ||jobtitle === "" ||  jobdesc === "" || jobdesc === undefined || location === "" || location === undefined){
            setError("All fields are mandatory");
        }else {
            return true;
        }
    }
    return(
        <>
            <div className="main-body">
                <h3>Post a job</h3>
                <label htmlFor="jobtitle">Job title<sup>*</sup></label>
                <br />
                <input type="text" className="input-box p-2 my-3 rounded" value={jobtitle} placeholder="Enter job" onChange={(e)=>{setJobtitle(e.target.value)}}/>
                <br />
                <label htmlFor="jobdesc">Job Description<sup>*</sup></label>
                <br />
                <textarea type="text" className="input-box p-2 my-3 rounded" rows='5' value={jobdesc} placeholder="Enter job description" onChange={(e)=>{setJobdesc(e.target.value)}}/>
                <br />
                <label htmlFor="jobtitle">Location<sup>*</sup></label>
                <br />
                <input type="text" className="input-box p-2 my-3 rounded" placeholder="Enter location" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
                <br />
                <p className="error">{error}</p>
                <button className="btn btn-primary px-4" onClick={handleSubmit}>Post</button>
            </div>
        </>
    )
}

export default PostJob;
