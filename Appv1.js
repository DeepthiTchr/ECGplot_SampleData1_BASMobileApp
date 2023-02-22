//terminal + command prompt (to check using console.log()) : npm install npm start
//console.log(function name/ variable name) for further debugging


/* App.js */
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


//    	this.dataFetch();
//		this.getMoviesFromApi();
//		this.fetchECGData();
		// document.getElementById("timeToRender").innerHTML = "Time to Render: " + (endTime - startTime) + "ms";
	}

	//   fetchData=()=>{
	//     const {data} = useFetch("https://jsonplaceholder.typicode.com/users");
	// console.log(data);

//https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf

//working in fetching data , but unable to plot data
    fetchData = () => {
        return fetch('https://raw.githubusercontent.com/DeepthiTchr/BioSignal-Acquisition-System-Design-React-Native-App/main/dataSample1.json')
                      .then((response) => response.json())
                      .then((snapshot) => {
                                          console.log("fetchData")
                                          console.log("Sample Data 1")
                                          let sample1 = snapshot.sample1
//                                        console.log(sample1.map((data)=>{
//                                            console.log(data.dataSample)
//                                          }))
//                                        console.log(data.sample1)
//                                        console.log(data.sample1)
                                          console.log("dataFetch")
                                          let data1 = [];
                                          sample1.map((snapshot1)=>{
                                                      data1.push(snapshot1.dataSample);
                                                 	 })
                                          console.log("data1")
//                                          console.log(data1)
                                          		var limit = data1.length;
                                          		var y = 100;
//                                         		var data = [];
                                          		var dataSeries = { type: "line" };
                                          		var dataPoints = [];

                                          		for (var i = 0; i < limit; i += 1) {
//                                        			y += Math.round(Math.random() * 10 - 5);
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
        //		                                  console.log(this.state.data)
                                      })

                  }
                  //	    console.log(data.dataSample)

//zoom in data : for ECG sample 1
    fetchECGdata1Sample = () => {
        return fetch('https://raw.githubusercontent.com/DeepthiTchr/BioSignal-Acquisition-System-Design-React-Native-App/main/dataSample1.json')
                      .then((response) => response.json())
                      .then((snapshot) => {
                                          console.log("fetchData")
                                          console.log("Sample Data 1")
                                          let sample1 = snapshot.sample1
//                                        console.log(sample1.map((data)=>{
//                                            console.log(data.dataSample)
//                                          }))
//                                        console.log(data.sample1)
//                                        console.log(data.sample1)
                                          console.log("dataFetch")
                                          let data1 = [];
                                          sample1.map((snapshot1)=>{
                                                      data1.push(snapshot1.dataSample);
                                                 	 })
                                          console.log("data1")
//                                          console.log(data1)
                                          		var limit = 36260;
                                          		var y = 100;
//                                         		var data = [];
                                          		var dataSeries = { type: "line" };
                                          		var dataPoints = [];

                                          		for (var i = 35500; i < limit; i += 1) {
//                                        			y += Math.round(Math.random() * 10 - 5);
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
        //		                                  console.log(this.state.data)
                                      })

                  }

//https://www.newline.co/fullstack-react/30-days-of-react/day-15/#:~:text=The%20then()%20function%20is,so%20on%20and%20so%20forth.

//********************************
//working fine for random data
//********************************
randData=() =>{
		var limit = 50000;
		var y = 100;
//		var data = [];
		var dataSeries = { type: "line" };
		var dataPoints = [];

		for (var i = 0; i < limit; i += 1) {
			y += Math.round(Math.random() * 10 - 5);
			dataPoints.push({
				x: i,
				y: y
			});
		}
		dataSeries.dataPoints = dataPoints;
		data.push(dataSeries);
        console.log(data)

        this.setState({sampleData: data})
        console.log(this.state.sampleData)
}


dataFetch = () => {
        console.log("dataFetch")
	    let data1 = [];
	    let sample1 = this.state.ECGdata;
	    console.log(sample1)
	    sample1.map((data)=>{
            data1.push(data.dataSample);
            console.log("data1")
            	    console.log(data1)
	    }
	    )

	    this.setState({
            sample1: data1
	    })
	    console.log(this.state.sample1)
	}
//   fetchData = async () => {
//           var url = 'https://raw.githubusercontent.com/DeepthiTchr/BioSignal-Acquisition-System-Design-React-Native-App/main/dataSample1.json';
//		return await fetch(url)
//		.then((response)=>{
//			var responseJSON = response.json();
//			console.log(responseJSON.sample1);
//			console.log("Data")
//		})
//		.then((responseJSONx)=>{
//			console.log(responseJSON.sample1);
//			this.setState({
//				data: responseJSON.sample1
//			})
//  		})
		// .error(
		// 	console.error("Error in fetching the ECG sample data")
		// )
//	}

	// fetchData = () => {
	// 	var url = 'https://raw.githubusercontent.com/DeepthiTchr/BioSignal-Acquisition-System-Design-React-Native-App/main/dataSample1.json';
	// 	try{
	//     const response = await
	//   }catch(error){
	//     console.log(error);
	//   }

	//   return fetch(url)
	// 	.then((response)=>{
	// 		var responseJSON = response.json();
	//     console.log(responseJSON);
	// 	})
	// 	.error(
	// 		console.error("Error in fetching the ECG sample data")
	// 	)
	// }
	async getMoviesFromApi() {
		try {
		  let response = await fetch('https://reactnative.dev/movies.json');
		  let responseJson = await response.json();

		  console.log(responseJson.movies)
		  return responseJson.movies;
		 } catch(error) {
		  console.error(error);
		}
	  }
	  async fetchECGData() {
		try {
		  var url = 'https://raw.githubusercontent.com/DeepthiTchr/BioSignal-Acquisition-System-Design-React-Native-App/main/dataSample1.json';
		  let response = await fetch(url);
		  let responseJson = await response.json();
		  this.setState({sample1 : responseJson.dataSample})
//		  console.log(responseJson.dataSample);
//		  console.log(sample1.length);

		  console.log("data sample info")
//		  console.log(sample1.dataSample)
		  this.setState({
			ECGdata: responseJSON
		  })
		  console.log("Hello")
		  return responseJson.dataSample;
		 } catch(error) {
		  console.error(error);
		}
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
				text: "ECG Data sample"
			},
			 data: data  // random data and data sample 1
//			 data: data // random data and daa sample 1
//			data: {this.state.ECGdata} //????CHALLENGE use map method
//            data: sample1
		}

		startTime = new Date();

		return (
		// <div>
		<View>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
		</View>

		// 	{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		// 	<span id="timeToRender" style={spanStyle}></span>
		// </div>
		);
	}

}

// module.exports = App;