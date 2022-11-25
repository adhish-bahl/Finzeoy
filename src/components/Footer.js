import React from 'react'
import { useHistory } from 'react-router-dom'

function Footer() {

	const history = useHistory();

	const redirectToAboutUs = () => {
		history.push('/contact')
		window.location.reload()
	}

	return (
		<div style={{display: "flex", justifyContent:"space-around", alignItems: "center",marginLeft:"50vw" , width:"50vw", padding: "20px", position:"absolute", bottom:"20px"}}>
			<div>
				© FINZEOY 2022
			</div>
			<div onClick={redirectToAboutUs} style={{cursor:"pointer", textDecoration:"underline"}}>
				About Us
			</div>
		</div>
	)
}

export default Footer