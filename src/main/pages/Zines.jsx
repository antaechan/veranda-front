import React, { useEffect, useState } from "react";
import zinesSlice from "../../slices/zinesSlice";
import ZinesAtPageNumber from "../components/zines/ZinesAtPageNumber";
import Footer from "./../components/zines/Footer";
import ZineContainer from "../components/ZineContainer";

import axios from "axios";

import { useDispatch } from "react-redux";

import "./css/Zines.css";

const sampleZine = {
  title: "Spongebob",
  alt: "alt",
  src: "https://ww.namu.la/s/bd52223e4d1f11fcc4c7f6506bf3321b26579bf118db6c1ca20492b9af4228a414edd25f1006baace220e4ca771288e0f38d6cbf253ae4e9d39aaf4b881600b0d65e518e7d94891837ee9a0c6a723aac0f4d2b7bf4a65b36bd1fe636aa49c632",
};

const Zines = () => {
  const [zines, setZines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchZines = async () => {
    //   setLoading(true);

    //   try {
    //     const response = await axios.get(
    //       `${process.env.REACT_APP_SERVER_URL}/articles`
    //     );
    //     setZines(response.data.zines);
    //   } catch (error) {
    //     console.log("Error:", error);
    //   }
    //   setLoading(false);
    // };
    // fetchZines();

    setZines([
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,

      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
    ]);
  }, []);

  const dispatch = useDispatch();
  dispatch(zinesSlice.actions.setZines(zines));

  if (loading) {
    return <ZineContainer>로딩 중...</ZineContainer>;
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
