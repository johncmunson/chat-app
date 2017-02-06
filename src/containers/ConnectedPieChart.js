import { connect } from 'react-redux'
import PieChart from '../components/PieChart.js'
import { getData } from '../reducers/selectors.js'

const mapStateToPieChartProps = (state) => (
    {
        data: getData(state)
    }
);

const ConnectedPieChart = connect(
  mapStateToPieChartProps
)(PieChart);

export default ConnectedPieChart;
