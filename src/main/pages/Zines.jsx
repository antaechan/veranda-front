import React, { useEffect, useState } from "react";
import zinesSlice from "../../slices/zinesSlice";
import ZinesAtPageNumber from "../components/zines/ZinesAtPageNumber";
import Footer from "./../components/zines/Footer";
import ZineContainer from "../components/ZineContainer";

import axios from "axios";

import { useDispatch } from "react-redux";

import "./css/Zines.css";
import { ClipLoader } from "react-spinners";

axios.defaults.withCredentials = true;

const Zines = () => {
  const [zines, setZines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchZines = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/articles`
        );
        console.log(response);
        setZines(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
      setLoading(false);
    };
    fetchZines();
  }, []);

  const dispatch = useDispatch();
  dispatch(zinesSlice.actions.setZines(zines));

  if (loading) {
    return (
      <div
        style={{
          padding: "10px",
          minHeight: "66vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <ClipLoader color={"black"} size={100} />
        </div>
      </div>
    );
  }

  if (!zines) {
    return null;
  }

  return (
    <div className="zineContent">
      <ZinesAtPageNumber />
      <Footer />
    </div>
  );
};

export default Zines;
