import React, { useContext, useState } from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";
import { SettingsContext } from '../context/settings';
import ReactPaginate from "react-paginate";
import './list.css'

export default function list(props) {
    const settingsContext = useContext(SettingsContext)

    const [pagesNum, setPagesNum] = useState(0);
    const [hide,setHide] = useState(false);
    const itemsPerPage = 2;
    const pagesVisited = pagesNum * itemsPerPage;

    const allList = props.list.slice(pagesVisited, pagesVisited + itemsPerPage).map(item => {
        return (

            <div key={item.id}>
                <Card interactive={false} elevation={Elevation.TWO} style={{ marginLeft: '70px', marginBottom: '30px', width: '500px' }}>
                    <h4>{item.text}</h4>
                    <p><b> Assigned to: </b>{item.assignee}</p>
                    <p><b>Difficulty: </b>{item.difficulty}</p>

                    <b>Complete: </b><Button onClick={() => props.toggleComplete(item.id)}> {item.complete.toString()}</Button>
                    <Button onClick={() => props.deleteItem(item.id)}> delete</Button>
                </Card>
            </div>

        )
    })
    const pageCount = Math.ceil(props.list.length / itemsPerPage);
    const changePage = ({ selected }) => {
        setPagesNum(selected);
    };
    return (
        <>


            <div>

                {allList} 

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
