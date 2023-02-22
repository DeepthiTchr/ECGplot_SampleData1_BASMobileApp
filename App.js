import React, { Component } from 'react';
import {View, Text} from 'react-native';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import useFetch from "react-fetch-hook";

var startTime = 0, endTime = 0;
var data = [];

export default class App extends Component {

	constructor(){
		super();
		this.state = {
			data: [],
			ECGdata: [],
			sampleData: []
		}
	}

	componentDidMount() {
		endTime = new Date();
		console.log("componentDidMount")
//      this.randData(); //for random data
//    	this.fetchData(); //for ECG sample data 1
        this.fetchECGdata1Sample(); //selected sample for ECG sample data 1
	}

//to fetch data
    fetchData = () => {
        return fetch('https://raw.githubusercontent.com/DeepthiTchr/BioSignal-Acquisition-System-Design-React-Native-App/main/dataSample1.json')
                      .then((response) => response.json())
                      .then((snapshot) => {
                                          console.log("fetchData")
                                          console.log("Sample Data 1")
                                          let sample1 = snapshot.sample1
                                          console.log("dataFetch")
                                          let data1 = [];
                                          sample1.map((snapshot1)=>{
                                                      data1.push(snapshot1.dataSample);
                                                 	 })
                                          console.log("data1")
                                          		var limit = data1.length;
                                          		var y = 100;
                                          		var dataSeries = { type: "line" };
                                          		var dataPoints = [];

                                          		for (var i = 0; i < limit; i += 1) {
                                                    y=data1[i];
                                          			dataPoints.push({
                                          				x: i,
                                          				y: y
                                          			});
                                          		}
                                          		dataSeries.dataPoints = dataPoints;
                                          		data.push(dataSeries);
                                          		console.log(data)
                                                  this.setState({
                                                    ECGdata: sample1,
                                                    data: data1
                                                  })
                                      })

                  }

//zoom in data : for ECG selected sample 1
    fetchECGdata1Sample = () => {
        return fetch('https://raw.githubusercontent.com/DeepthiTchr/BioSignal-Acquisition-System-Design-React-Native-App/main/dataSample1.json')
                      .then((response) => response.json())
                      .then((snapshot) => {
                                          console.log("fetchData")
                                          console.log("Sample Data 1")
                                          let sample1 = snapshot.sample1
                                          console.log("dataFetch")
                                          let data1 = [];
                                          sample1.map((snapshot1)=>{
                                                      data1.push(snapshot1.dataSample);
                                                 	 })
                                          console.log("data1")
                                          		var limit = 36260;
                                          		var y = 100;
                                          		var dataSeries = { type: "line" };
                                          		var dataPoints = [];

                                          		for (var i = 35500; i < limit; i += 1) {
                                                    y=data1[i];
                                          			dataPoints.push({
                                          				x: i,
                                          				y: y
                                          			});
                                          		}
                                          		dataSeries.dataPoints = dataPoints;
                                          		data.push(dataSeries);
                                          		console.log(data)
                                                  this.setState({
                                                    ECGdata: sample1,
                                                    data: data1
                                                  })
                                      })
                  }

	render() {


		const spanStyle = {
			position:'absolute', 
			top: '10px',


			fontSize: '20px',
			fontWeight: 'bold', 
			backgroundColor: '#d85757',
			padding: '0px 4px',
			color: '#ffffff'
		}



		const options = {
			zoomEnabled: true,
			animationEnabled: true,
			title: {
				text: "Electrocardiogram (ECG)"
			},
			 data: data  // random data and data sample 1
		}
		
		startTime = new Date();
		
		return (
		<View>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
		</View>
		);
	} 
  		
}
