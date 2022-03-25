import React, { useEffect } from "react";
import { useFormik } from 'formik';
import axios from "axios";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Topbar from "./Topbar";

export default function Editrepo(props) {

  const [user, setuser] = useState(window.localStorage.getItem("name"))
  const [email, setemail] = useState(window.localStorage.getItem("email"))

  const [content, setcontent] = useState([])
  const navigate = useNavigate();
  let { id } = useParams();

  async function loadsingledata() {
    try {
      await axios.get(`https://versioncontrolend.herokuapp.com/load-single-data/${id}`,{
        headers:{
            Authorization : window.localStorage.getItem("token")
        }
}).then(function (response) {

        setcontent(response.data)
        formik.setValues({
          content: response.data.version[response.data.version.length - 1].content,
          username: user,
          email: email,
        })

      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    loadsingledata()
  }, [])


  const formik = useFormik({

    initialValues: {
      comment: "",
      content: "",
      username: user,
      email: email,
    },
    onSubmit: async values => {

      try {
        await axios.put(`https://versioncontrolend.herokuapp.com/insert-data/${id}`,values).then(function (response) {
          console.log(response)
        })
        navigate("/viewrepo")
      } catch (error) {
        console.log(error)
      }
    },
  });

  return (
    <div className="container-fluid">
      <Topbar></Topbar>
      <div className="col-lg-8">
        <div className="card shadow bg-white rounded" id="editversion">
          {
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="col-lg-6">
                  <h3 style={{ color: "red" }}>{content.reponame}</h3>
                  <label htmlFor="comment">Enter the comments</label><br></br>
                  <input
                    className="form-control"
                    id="comment"
                    name="comment"
                    type="text"
                    placeholder="Enter comments"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    required={true}
                  /><br></br>
                </div>

                <div >
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    type="string"
                    rows="17" cols="170"
                    placeholder="enter your code here"
                    onChange={formik.handleChange}
                    value={formik.values.content}
                    style={{ color: "yellow", backgroundColor: "black" }}
                    required={true}
                  /><br></br>
                </div>
                <div className="d-flex flex-row-reverse bd-highlight"> <button className="btn btn-success p-2 bd-highlight" type="submit">Update</button><br></br></div>

              </form>

            </div>
          }
        </div>
      </div>
    </div>
  )
}