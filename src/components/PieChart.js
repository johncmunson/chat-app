import React from 'react'
import { VictoryPie } from 'victory'

const PieChart = (props) => (
    <VictoryPie
        name="pie"
        data={props.data}
    />
);

export default PieChart
