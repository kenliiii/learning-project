import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export function Try2() {
    const [vertical, setvertical] = useState(5);
    const [slopeOfSupply, setslopeOfSupply] = useState(1);
    const [constantOfSupply, setconstantOfSupply] = useState(0);
    const [slopeOfDemand, setslopeOfDemand] = useState(-1);
    const [constantOfDemand, setconstantOfDemand] = useState(10);
    const [horizontal, sethorizontal] = useState(3);
    const [pointx, setpointx] = useState(5);
    const [pointy, setpointy] = useState(5);

    useEffect(() => {
        const x =
            (constantOfDemand - constantOfSupply) / (slopeOfSupply - slopeOfDemand);
        setpointx(+x.toFixed(1));
        setpointy(+yEndPointOfDemand(x).toFixed(1));
    }, [constantOfDemand, constantOfSupply, slopeOfDemand, slopeOfSupply]);

    const yEndPointOfSupply = (x): number => {
        return slopeOfSupply * x + constantOfSupply;
    };
    const yEndPointOfDemand = (x) => {
        return x * slopeOfDemand + constantOfDemand;
    };

    const data = [
        [
            "Generation",
            "vertical",
            "supply",
            "demand",
            "horizontal",
            "price",
            "quantity",
        ],
        [
            -1,
            null,
            yEndPointOfSupply(-1),
            yEndPointOfDemand(-1),
            horizontal,
            pointy,
            null,
        ],
        [
            11,
            null,
            yEndPointOfSupply(11),
            yEndPointOfDemand(11),
            horizontal,
            null,
            null,
        ],
        [vertical, -1, null, null, null, null, null],
        [0.0001 + vertical, 11, null, null, null, null, null],
        [pointx, null, null, pointy, null, pointy, pointy],
        [pointx + 0.0001, null, null, null, null, null, 0],
        [0, null, null, null, null, pointy, null],
    ];

    const options = {
        hAxis: { viewWindow: { min: 0, max: 10 } },
        vAxis: { viewWindow: { min: 0, max: 10 } },

        pointSize: 10,
        trendlines: {
            0: {
                type: {},
                color: "green",
            },
            1: {
                type: {},
                color: "red",
            },
            2: {
                type: {},
                color: "orange",
            },
            3: {
                type: {},
                color: "black",
            },
            4: {
                type: {},
                color: "gray",
                opacity: 0.3,
            },
            5: {
                type: {},
                color: "gray",
                opacity: 0.3,
            },
        },

        series: {
            0: { color: "green" },
            1: { color: "red" },
            2: { color: "orange" },
            3: { color: "black" },
            4: {
                color: "gray",
            },
            5: {
                color: "gray",
            },
        },
    };

    return (
        <>
            <Chart
                chartType="ScatterChart"
                width="100%"
                height="400px"

                data={data}
                options={options}
            />
            <input
                type="range"
                min="0"
                max="10"
                step={"0.1"}
                value={vertical}
                onChange={(event) => setvertical(+event.target.value)}
            />
            <input
                type="range"
                min="0"
                max="2"
                step={"0.1"}
                value={slopeOfSupply}
                onChange={(event) => setslopeOfSupply(+event.target.value)}
            />
            <input
                type="range"
                min="-10"
                max="10"
                step={"0.1"}
                value={constantOfSupply}
                onChange={(event) => setconstantOfSupply(+event.target.value)}
            />
            <input
                type="range"
                min="-2"
                max="0"
                step={"0.1"}
                value={slopeOfDemand}
                onChange={(event) => setslopeOfDemand(+event.target.value)}
            />
            <input
                type="range"
                min="0"
                max="20"
                step={"0.1"}
                value={constantOfDemand}
                onChange={(event) => setconstantOfDemand(+event.target.value)}
            />
            <input
                type="range"
                min="0"
                max="10"
                step={"0.1"}
                value={horizontal}
                onChange={(event) => sethorizontal(+event.target.value)}
            />
        </>
    );
}
