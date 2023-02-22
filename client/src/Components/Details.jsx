import React, { useEffect,useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EmailIcon from "@material-ui/icons/Email";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles } from "@material-ui/core/styles";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {useParams} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 600
  },
  
});

const Details = () => {
  const navigate = useNavigate();
     const [getuserdata, setUserdata] = useState([]);
     console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);


  
    const getdata = async () => {
      const res = await fetch(`/getuser/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.status === 404 || !data) {
        console.log("error ");
      } else {
        setUserdata(data);
        console.log("get data");
      }
    };

    useEffect(() => {
      getdata();
    }, []);

     const deleteuser = async (id) => {
       const res2 = await fetch(`/deleteuser/${id}`,
         {
           method: "DELETE",
           headers: {
             "Content-Type": "application/json",
           },
         }
       );

       const deletedata = await res2.json();
       console.log(deletedata);

       if (res2.status === 404 || !deletedata) {
         console.log("error");
       } else {
         console.log("user deleted");
         navigate("/");
       }
     };

   const classes = useStyles();
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name}</h1>
      <Card className={classes.root}>
        <CardContent>
          <div className="add_btn">
            <NavLink to={`/edit/${getuserdata._id}`}>
              {" "}
              <button className="btn btn-primary mx-2">
                <CreateIcon />
              </button>
            </NavLink>
            <button
              className="btn btn-danger"
              onClick={() => deleteuser(getuserdata._id)}
            >
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12 ">
              <img style={{ width: 50 }} src="/profile.png" alt="profile" />
              <h3 className="mt-3">
                Name: <span>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>{getuserdata.age}</span>
              </h3>
              <p className="mt-3">
                <EmailIcon />
                Email: <span>{getuserdata.email}</span>
              </p>
              <p className="mt-3">
                <WorkIcon /> Occupation: <span>{getuserdata.work}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                {" "}
                <PhoneAndroidIcon /> Mobile:{" "}
                <span>+91 {getuserdata.mobile}</span>
              </p>
              <p className="mt-3">
                {" "}
                <LocationOnIcon /> Address: <span>{getuserdata.address}</span>
              </p>
              <p className="mt-3">
                Description: <span>{getuserdata.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Details
