import React from "react";
import { Link } from "react-router-dom";
import "./css/styles.css";
function Team() {
	return (
		<section
			className="content-section bg-primary text-white"
			id="Team"
			
		>
			<div class="container" data-aos="fade-up" style={{ width: "100vw", height: "100vh" }}>
				<div class="section-title">
					<h2>Team</h2>
					<p>Check our Team</p>
				</div>

				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="member" data-aos="fade-up" data-aos-delay="100">
							<div class="pic">
								<img src="assets/img/art.jpg" class="img-fluid" alt="" />
							</div>
							<div class="member-info">
								<h4>Walter White</h4>
								<span>Chief Executive Officer</span>
								<div class="social">
									<Link to="/">
										<i class="bi bi-twitter"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-facebook"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-instagram"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-linkedin"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div
						class="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div class="member">
							<div class="pic">
								<img src="assets/img/art.jpg" class="img-fluid" alt="" />
							</div>
							<div class="member-info">
								<h4>Sarah Jhonson</h4>
								<span>Product Manager</span>
								<div class="social">
									<Link to="/">
										<i class="bi bi-twitter"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-facebook"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-instagram"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-linkedin"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div
						class="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div class="member">
							<div class="pic">
								<img src="assets/img/art.jpg" class="img-fluid" alt="" />
							</div>
							<div class="member-info">
								<h4>William Anderson</h4>
								<span>CTO</span>
								<div class="social">
									<Link to="/">
										<i class="bi bi-twitter"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-facebook"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-instagram"></i>
									</Link>
									<Link to="/">
										<i class="bi bi-linkedin"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Team;
