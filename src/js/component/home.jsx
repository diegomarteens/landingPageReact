import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";

import PropTypes from "prop-types";
import { Content } from "./Content";
import { Footer } from "./Footer";

//create your first component
export function Home() {
	const info = [
		{
			image:
				"http://cdn.home-designing.com/wp-content/uploads/2019/08/mega-mansion-for-the-rich.jpg",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "Mansion Insanely Rich",
			button: "Check Now"
		},
		{
			image:
				"https://ccbsgreece.gr/wp-content/uploads/2016/02/Andromeda-Villas-Santorini.jpg",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "Greek Mansion Style",
			button: "Check Now"
		},
		{
			image:
				"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/5/17/0/HUHH2019-Modern_Los-Angeles-CA_1.jpg.rend.hgtvcom.616.411.suffix/1558111675911.jpeg",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "Infinity Pool For Life",
			button: "Check Now"
		},
		{
			image:
				"https://cdn.shopify.com/s/files/1/0567/3873/products/2_68fa39bb-cf13-42b0-a0e8-b4c32262223d.jpg?v=1565597925",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet semper urna. Etiam in fringilla tortor. Vestibulum tellus turpis, blandit ultrices pharetra eget, elementum nec metus. Fusce molestie turpis.",
			title: "Contemporany Mansion",
			button: "Check Now"
		}
	];

	return (
		<div className="container-flex" id="app">
			<Navbar />
			<div className="">
				<Jumbotron />
				<div className="row" style={styleOne}>
					{info.map((element, i) => {
						return (
							<Content
								key={i}
								image={element.image}
								description={element.description}
								title={element.title}
								text={element.text}
								button={element.button}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}

const styleOne = {
	display: "flex",
	//flexDirection: "row",
	justifyContent: "space-between"
	//alignItems: "center"
};
