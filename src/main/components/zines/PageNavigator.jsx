import React from "react";
import { useDispatch, useSelector } from "react-redux";
import zinesSlice from "./../../../slices/zinesSlice";
import StyledLink from "./../StyledLink";

const PageNavigator = () => {
  const dispatch = useDispatch();
  const setPageNumber = (pageNumber) => {
    dispatch(zinesSlice.actions.setPageNumber(pageNumber));
  };

  const pageNumber = useSelector((state) => {
    return state.zines.pageNumber;
  });

  const zines = useSelector((state) => {
    return state.zines.zines;
  });

  const numberOfZinesInPage = useSelector((state) => {
    return state.zines.numberOfZinesInPage;
  });

  const pageEnd = Math.ceil(zines.length / numberOfZinesInPage);

  const prevPageNumber = pageNumber === 1 ? pageNumber : pageNumber - 1;
  const nextPageNumber = pageNumber === pageEnd ? pageNumber : pageNumber + 1;
  const prevURL = `/zine/${prevPageNumber}`;
  const nextURL = `/zine/${nextPageNumber}`;
  let seriesOfPage = [];

  if (pageEnd <= 10) {
    seriesOfPage = returnSeriesOfNumber(1, pageEnd);
  } else {
    seriesOfPage = returnSeriesOfNumber(
      10 * parseInt((pageNumber - 1) / 10) + 1,
      Math.min(10 * parseInt((pageNumber - 1) / 10) + 10, pageEnd)
    );
  }

  function returnSeriesOfNumber(start, end) {
    let array = [];
    for (let i = start; i <= end; ++i) {
      array.push(i);
    }
    return array;
  }

  return (
    <div className="pageNavigator">
      <StyledLink
        to={prevURL}
        className="previousButton"
        onClick={() => {
          setPageNumber(prevPageNumber);
        }}
      >
        Previous
      </StyledLink>
      {seriesOfPage.map((pageNumber) => {
        const pageURL = `/zine/${pageNumber}`;
        return (
          <StyledLink
            to={pageURL}
            className="pageNumberButton"
            onClick={() => {
              setPageNumber(pageNumber);
            }}
          >
            {pageNumber}
          </StyledLink>
        );
      })}
      <StyledLink
        to={nextURL}
        className="nextButton"
        onClick={() => {
          setPageNumber(nextPageNumber);
        }}
      >
        Next
      </StyledLink>
    </div>
  );
};

export default PageNavigator;
