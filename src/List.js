import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {

    const [data, setData] = useState([])
    function demo() {

        fetch("http://localhost:4000/details").then((result) => {
            result.json().then((resp) => {
                console.log("result", resp);
                setData(resp)

            })
        })

    }
    useEffect(() => {
        demo();

    }, [])//ek baar hi chale isko blank array pass kr dete hai
    console.warn(data)
    function del(id) {
        fetch(`http://localhost:4000/details/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                demo();
            })
        })
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-title text-center bg-dark text-white">
                    <h3>React crud</h3>
                </div>
                <Link to={`/Create`}>
                    <button className="btn btn-success text-white">Add</button>
                </Link>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Country</td>
                                <td>City</td>
                                <td>State</td>
                                <td>Action</td>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                data.map((item,index) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.country}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                        <td>

                                            <Link to={`/update/${index}`}>
                                                <button className="btn btn-primary">Edit</button>
                                            </Link>

                                            <button className="btn btn-danger" onClick={() => del(item.id)}>Delete</button>
                                        </td>
                                        {/* <button className="btn btn-danger" onClick={()=>del(item.id)}>Delete</button> */}

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}
export default List;