import React, {useState} from "react";






//create your first component
const Home = () => {
	
	const [luzRoja,setluzroja]=useState("btn-danger")
	console.log(luzRoja);
	const [luzAmarilla,setluzamarilla]=useState("btn-warning")
	const [luzVerde,setluzverde]=useState("btn-success")

	function cambiarRojo() {
		if (luzRoja === "btn-danger") {
			setluzroja("btn-danger border-5 border-light p-2 mb-2 border-opacity-50")
			setluzamarilla("btn-warning")
			setluzverde("btn-success")
		} else {
			setluzroja("btn-danger")
			
		}
		
	}
	function cambiarAmarillo() {
		if (luzAmarilla === "btn-warning") {
			setluzamarilla("btn-warning border-5 border-light p-2 mb-2 border-opacity-50")
			setluzverde("btn-success")
			setluzroja("btn-danger")
		} else {
			setluzamarilla("btn-warning")
		}
		
	}

	function cambiarVerde() {
		if (luzVerde === "btn-success") {
			setluzverde("btn-success border-5 un border-light p-2 mb-2 border-opacity-50")
			setluzamarilla("btn-warning")
			setluzroja("btn-danger")
		} else {
			setluzverde("btn-success")
		}
		
	}

	
	return (
		<div className="text-center btn-group-vertical position-absolute top-50 start-50 translate-middle p-5 bg-dark">
			<button href="#" className={"btn "+ luzRoja} onClick={cambiarRojo} style={{height:"100px", width:"100px", borderRadius:"75px", marginBottom:"10px"}}>
			</button>
			<button href="#" className={"btn "+ luzAmarilla } onClick={cambiarAmarillo} style={{height:"100px", width:"100px", borderRadius:"75px", marginBottom:"10px"}}>
			</button>
			<button href="#" className={"btn "+ luzVerde } onClick={cambiarVerde} style={{height:"100px", width:"100px", borderRadius:"75px"}}>
			</button>
		</div>
	);
};

export default Home;
