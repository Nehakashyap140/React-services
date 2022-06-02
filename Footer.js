import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import first from "./img/first.png";
export default function Foooter() {
	return (
		<>
			<div className="container">
				<div className="row bc">
					<div className="col-lg-3 col-sm-12 col-xs-12">
						<h1>Quick links</h1>
						<p>About US</p>
						<p>Services</p>
						<p>Blog</p>
						<p>Career</p>
						<p>D2C</p>
						<p>News</p>
						<p>Newsletter</p>
						<p>Taskmo CAP</p>
						<p>Contact Us</p>
						<p>Terms & Conditions</p>
					</div>
					<div className="col-lg-3 col-sm-12 col-xs-12">
						<h1>Services</h1>
						<p>Merchant Onboarding</p>
						<p>Background Verification</p>
						<p>Tele Marketing</p>
						<p>Last Mile Delivery</p>
						<p>Customer Acquisition</p>
						<p>Stock Audits</p>
						<p>Geo Tagging</p>
						<p>BTL Activation</p>
					</div>
					<div className="col-lg-3 col-sm-12 col-xs-12 mc ">
						<h1>bjwhjdhu</h1>
						<p> Picker And Packers</p>
						<p>Survey Collection</p>
						<p>Product Sampling</p>
						<p>Influencer Marketing</p>
						<p>Customer Suppor</p>
						<p>Content Moderation</p>
						<p>Warehouse Service</p>
					</div>
					<div className="col-lg-3 col-sm-12 col-xs-12">
						<img src={first} width="150px" />
						<p>#33, Mohan chambers, 1st Main </p>
						<p> Rd,3rd PhaseJ. P. Nagar,</p>
						<p>Bengaluru, Karnataka 560078</p>
						<hr />
						<p>For Businesses</p>
						<p>business@taskmo.com</p>
						<hr />
						<p>For Careers</p>
						<p>hr@taskmo.com</p>
						<hr />
						<p>For Queries</p>
						<p>support@taskmo.com</p>

						<hr />
						<FacebookIcon />
						<InstagramIcon />
						<TwitterIcon />
						<LinkedInIcon />
						<YouTubeIcon />
					</div>
				</div>
			</div>
		</>
	);
}
