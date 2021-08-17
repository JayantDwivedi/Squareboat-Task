import React,{useState} from 'react';

const PostJob = () => {

    const[jobtitle, setJobtitle] = useState();
    const[jobdesc, setJobdesc] = useState();
    const[location, setLocation] = useState();
    const [error, setError] = useState();

    const handleSubmit=()=>{
        if(validate) {
            console.log(jobtitle);
        console.log(jobdesc);
        console.log(location);
        }
        setJobdesc("");
        setJobtitle("");
        setLocation("");
        
    }

    const err = {
        outlineColor:"red",
    }

    const validate=()=>{
        if (jobtitle == undefined || jobdesc != "" || location != ""){
            setError("All fields are mandatory");
        }else {
            return;
        }
    }
    return(
        <>
            <div className="main-body">
                <h3>Post a job</h3>
                <label htmlFor="jobtitle">Job title<sup>*</sup></label>
                <br />
                <input type="text" className="input-box py-2 my-3" placeholder="Enter job" onChange={(e)=>{setJobtitle(e.target.value)}}/>
                <br />
                <label htmlFor="jobdesc">Job Description<sup>*</sup></label>
                <br />
                <input type="text" className="input-box py-2 my-3" placeholder="Enter job description" onChange={(e)=>{setJobdesc(e.target.value)}}/>
                <br />
                <label htmlFor="jobtitle">Location<sup>*</sup></label>
                <br />
                <input type="text" className="input-box py-2 my-3" placeholder="Enter location" onChange={(e)=>{setLocation(e.target.value)}}/>
                <br />
                <p className="error">{error}</p>
                <button className="btn btn-primary px-4" onClick={handleSubmit}>Post</button>
            </div>
        </>
    )
}

export default PostJob;
