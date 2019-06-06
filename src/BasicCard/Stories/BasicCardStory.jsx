import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import BasicCard from "../BasicCard.jsx";

storiesOf("Cards", module).add("basic", () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <BasicCard
                        title="Hello World"
                        message="This is just a basic card with a message and a title"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BasicCard
                        title="Hello World"
                        message="This is just a basic card with qrCode prop"
                        qrCode
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BasicCard
                        title="Hello World"
                        message="This is just a message"
                        qrCode
                    />
                </div>
            </div>
        </div>
    </div>
));
