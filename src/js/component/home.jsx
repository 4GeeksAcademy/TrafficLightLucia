import React, {useState} from "react";






//create your first component
const Home = () => {
	
	const [luzRoja,setluzroja]=useState("btn-danger")
	console.log(luzRoja);
	const [luzAmarilla,setluzamarilla]=useState("btn-warning")
	const [luzVerde,setluzverde]=useState("btn-success")
	

	function cambiarRojo() {
		if (luzRoja === "btn-danger") {
			setluzroja("btn-danger border-light border-5")
			setluzamarilla("btn-secondary")
			setluzverde("btn-secondary")
		} else {
			setluzroja("btn-danger border-light border-5")
			
		}
		
	}
	function cambiarAmarillo() {
		if (luzAmarilla === "btn-warning") {
			setluzamarilla("btn-warning border-light border-5")
		} else {
			setluzamarilla("btn-warning border-light border-5")
			setluzverde("btn-secondary")
			setluzroja("btn-secondary")
			
			
		}
		
	}


	function cambiarVerde() {
		if (luzVerde === "btn-success") {
			setluzverde("btn-success border-light border-5")
		} else {
			setluzverde("btn-success border-light border-5")
			setluzamarilla("btn-secondary")
			setluzroja("btn-secondary")
		}
		
	}

	
	return (
		<div className="text-center btn-group-vertical position-absolute top-50 start-50 translate-middle p-5 bg-dark">
			<button href="#" className={"btn "+ luzRoja} onClick={cambiarRojo} style={{ height:"100px", width:"100px", borderRadius:"75px", marginBottom:"10px"}}>
			</button>
			<button href="#" className={"btn "+ luzAmarilla} onClick={cambiarAmarillo} style={{height:"100px", width:"100px", borderRadius:"75px", marginBottom:"10px"}}>
			</button>
			<button href="#" className={"btn "+ luzVerde } onClick={cambiarVerde} style={{height:"100px", width:"100px", borderRadius:"75px"}}>
			</button>
		</div>
	);
};

export default Home;
