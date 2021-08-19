import React from "react";
import "./css/styles.css";
function Recent() {
	return (
		<section className="content-section" id="portfolio">
			<div className="container px-4 px-lg-5">
				<div className="content-section-heading text-center">
					<h3 className="text-secondary mb-0"></h3>
					<h2 className="mb-5">Recent Projects</h2>
				</div>
				<div className="row gx-0">
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Stationary</div>
									<p className="mb-0">
										A yellow pencil with envelopes on a clean, blue backdrop!
									</p>
								</div>
							</div>
							<img
								className="img-fluid"
								src="assets/img/quotes.jpg"
								alt="..."
							/>
						</a>
					</div>
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Ice Cream</div>
									<p className="mb-0">
										A dark blue background with a colored pencil, a clip, and a
										tiny ice cream cone!
									</p>
								</div>
							</div>
							<img className="img-fluid" src="assets/img/diy.jpg" alt="..." />
						</a>
					</div>
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Strawberries</div>
									<p className="mb-0">
										Strawberries are such a tasty snack, especially with a
										little sugar on top!
									</p>
								</div>
							</div>
							<img
								className="img-fluid"
								src="assets/img/authors.jpg"
								alt="..."
							/>
						</a>
					</div>
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Workspace</div>
									<p className="mb-0">
										A yellow workspace with some scissors, pencils, and other
										objects.
									</p>
								</div>
							</div>
							<img className="img-fluid" src="assets/img/art.jpg" alt="..." />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Recent;
