import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData:{
            labels: ['Technical understaing', 'communication', 'problem-solving', 'Result-Oriented', 'Product-Sense', 'Data Driven &Experientative'],
            datasets:[
              {
                label:'Detail Analysis Of your Result',
                data:[
                  92,
                  83,
                  71,
                  32,
                  55,
                  78
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    
  }

  render(){
    return (
      <div className="Chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              fontSize:15
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            maintainAspectRatio: false
          }}
        />
       
      </div>
    )
  }
}

export default Chart;