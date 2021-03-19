import Plot from 'react-plotly.js';
import {
  FullCard,
  plotLayoutStyles,
} from '../../../styles/components/DashboardStyles/CustomerReportStyles';

const reportData = {
  months: [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  customers: [0, 199, 150, 280, 230, 220, 270, 150, 170, 280, 220, 110, 150],
  prospects: [0, 120, 220, 150, 140, 290, 185, 205, 105, 120, 300, 80, 210],
};

function CustomerReport() {
  return (
    <FullCard>
      <Plot
        data={[
          {
            type: 'scatter',
            x: reportData.months,
            y: reportData.customers,
            marker: { color: '#1dd250' },
            name: 'Customers',
          },
          {
            type: 'scatter',
            x: reportData.months,
            y: reportData.prospects,
            marker: { color: '#ff8900' },
            name: 'Prospects',
          },
        ]}
        layout={plotLayoutStyles}
      />
    </FullCard>
  );
}

export default CustomerReport;
