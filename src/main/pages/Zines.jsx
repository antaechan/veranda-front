import React, { useEffect, useState } from "react";
import zinesSlice from "../../slices/zinesSlice";
import menuBarSlice from "./../../slices/menuBarSlice";
import ZinesAtPageNumber from "../components/zines/ZinesAtPageNumber";
import Footer from "./../components/zines/Footer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import "./css/Zines.css";

const Zines = () => {
  const [loading, setLoading] = useState(false);
  const fetchZines = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/articles`
      );
      dispatch(zinesSlice.actions.setZines(response.data));
    } catch (error) {
      console.log("Error:", error);
    }
    setLoading(false);
  };

  const zines = useSelector((state) => {
    return state.zines.zines;
  });

  const dispatch = useDispatch();
  let { pageNumber } = useParams();
  if (pageNumber === undefined) {
    pageNumber = 1;
  }

  useEffect(() => {
    fetchZines();
    dispatch(menuBarSlice.actions.setCategory("Zine"));
    dispatch(zinesSlice.actions.setPageNumber(pageNumber));
  }, []);

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
