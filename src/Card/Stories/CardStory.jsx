import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Card from "../Card.jsx";

storiesOf("Cards", module).add("card", () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card color="white">
                        <h1>Hello, World!</h1>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card color="white" glow>
                        <h1>Hello, World!</h1>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card color="white" fill>
                        <h1>Hello, World!</h1>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card color="white" fill light>
                        <h1>Hello, World!</h1>
                    </Card>
                </div>
            </div>
        </div>
    </div>
));
