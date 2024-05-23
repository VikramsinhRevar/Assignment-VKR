import React, { useEffect, useState } from "react";
import Register from "./Register";
import { GetAPiAction, DeleteAPIAction } from "../Action/index";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link } from "react-router-dom";

function Home(props) {
  const [search, setSearch] = useState("");
  console.log(search);

  const dispatch = useDispatch();
  const Result = useSelector((state) => state.reducer.details);

  const isDelete = useSelector((state) => state.reducer.isDelete);
  const isRegister = useSelector((state) => state.reducer.isRegister);
  console.log(isDelete);
  useEffect(() => {
    dispatch(GetAPiAction());
  }, [dispatch]);
  console.log(Result, "resulet");

  if (isDelete) {
    window.location.reload(false);
  }
  if (isRegister) {
    window.location.reload(false);
  }

  const MyData = Result
    ? Result.filter((res) => {
        return search.toLowerCase() === ""
          ? res
          : res.name.toLowerCase().includes(search);
          //  : res.country.toLowerCase().includes(search);
      }).map((res) => {
        return (
          <>
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.moblie}</td>
              <td>{res.country}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(DeleteAPIAction(res.id))}
                >
                  Delete
                </button>

                <Link to={`/update/${res.id}`}>
                  <button className="btn btn-success mx-2">Edit</button>
                </Link>
              </td>
            </tr>
          </>
        );
      })
    : null;

  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <h1 className="text-danger">Welcome to Redux CRUD Application</h1>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Seach data"
          />
          <Register />
          <div className="col">
            <table className="table border border-4 mt-5">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Country</th>
              <th>Action</th>
              <tbody>{MyData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
