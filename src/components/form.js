import React from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";
import Auth from './auth/auth';

export default function form(props) {
    return (
        <div>

            <Card interactive={true} elevation={Elevation.TWO}>
                <form onSubmit={props.handleSubmit}>

                    <h2>Add To Do Item</h2>

                    <label>
                        <span>To Do Item : </span>
                        <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
                    </label>
                    <br /><br />

                    <label>
                        <span>Assigned To : </span>
                        <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                    </label>
                    <br />
                    <br />

                    <label>
                        <span>Difficulty : </span>
                        <input onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
                    </label>
                    <br />
                    <br />
                    <Auth capability="create">
                        <div>Users with create access can see this</div>
                        <label>
                            <Button type="submit">Add Item</Button>
                        </label>
                    </Auth>
                </form>

            </Card>





        </div>
    )
}
