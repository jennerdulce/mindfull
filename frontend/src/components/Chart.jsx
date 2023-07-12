import React from 'react'
import CanvasJSReact from '../assets/canvasjs/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart({moods}) {
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Mood Chart"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            showInLegend: "true",
            legendText: "{label}",
            dataPoints: [
                { y: moods.okay, label: "Okay" },
                { y: moods.sad, label: "Sad" },
                { y: moods.good, label: "Good" },
                { y: moods.happy, label: "Happy" },
                { y: moods.miserable, label: "Miserable" }
            ]
        }]
    }
    return (
        <div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    )
}

export default Chart