import React, { useState, useEffect } from "react";

const Assignment_1 = (props) => {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("Write text here");

  useEffect(() => {
    alert("Hey, You entered in mySite!!!")
  }, []);

  const incrementHandle = () => {
    setCount(count + 1);
  };
  const decrementHandle = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetHandle = () => {
    setCount(0);
  };

  function convertUpCase() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function changeFun(event) {
    console.log("On change");
    setText(event.target.value);
  }

  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <b>{props.title}</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <i>Asignment_1 Web_Development_2</i>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* counter */}
      <div className="container my-3">
        <span className="counter-position" style={{ margin: "2px" }}>
          <h1>{count}</h1>
          <br />
        </span>
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={incrementHandle}
        >
          increment
        </button>
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={decrementHandle}
        >
          decrement
        </button>
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={resetHandle}
        >
          reset
        </button>
      </div>

      {/* form */}
      <div className="container my-3">
        <label htmlFor="textBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="textBox"
          rows="10"
          value={text}
          onChange={changeFun}
        ></textarea>
        <button className="btn btn-primary" onClick={convertUpCase}>
          uppercase
        </button>
      </div>
    </>
  );
};

export default Assignment_1;
