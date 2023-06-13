import React, { useEffect, useState } from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";
import ReactPaginate from "react-paginate";
import './list.css'
import Auth from '../auth/auth';
// import cookie from "react-cookies";
// import superagent from "superagent";


export default function List(props) {

    const [pagesNum, setPagesNum] = useState(0);
    const itemsPerPage = 2;
    const pagesVisited = pagesNum * itemsPerPage;


    const pageCount = Math.ceil(props.list.length / itemsPerPage);
    const changePage = ({ selected }) => {
        setPagesNum(selected);
    };

    // useEffect( () => {
    //     const token = cookie.load("token");
    //     let response =  superagent
    //       .get("http://localhost:3003/api/v2/todo")
    //       .set("authorization", `Bearer ${token}`);
    //     setFinalArray(response.body);
    //     console.log('list component',response.body);
    //   },[finalArray]);

    return (
        <>
            <div>
                    {
                        props.list.slice(pagesVisited, pagesVisited + itemsPerPage).map(item => {
                            return (

                                <div key={item.id}>
                                    <Card interactive={false} elevation={Elevation.TWO} style={{ marginLeft: '70px', marginBottom: '30px', width: '500px' }}>
                                        <h4>{item.text}</h4>
                                        <p><b> Assigned to: </b>{item.assignee}</p>
                                        <p><b>Difficulty: </b>{item.difficulty}</p>

                                        <Auth capability="update">
                                            <div>Users with update access can see this</div>
                                            <b>Complete: </b><Button onClick={() => props.toggleComplete(item.id)}>
                                                 {item.complete.toString()}</Button>
                                        </Auth>

                                        <Auth capability="delete">
                                            <div>Users with delete access can see this</div>
                                            <Button onClick={() => props.deleteItem(item.id)}> delete</Button>
                                        </Auth>
                                    </Card>
                                </div>
                            )
                        })
                    } 
                    
                   
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
           

                
            </div>
        </>
    )
}
