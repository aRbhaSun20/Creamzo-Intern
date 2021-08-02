import Navbar from "./components/navbar";

function App() {
  return (
    <>
    
    <a className="menu-toggle rounded" href="#"><i className="fas fa-bars"></i></a>
    <Navbar/>
   
    <header className="masthead d-flex align-items-center">
        <div className="container px-4 px-lg-5 text-center">
            <h1 className="mb-1"></h1>
            <h3 className="mb-5"><em></em></h3>
            <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
        </div>
    </header>
   
    <section className="content-section bg-light" id="about">
        <div className="container px-4 px-lg-5 text-center">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-10">
                    <h2></h2>
                   
                    <a className="btn btn-dark btn-xl" href="#services">Services</a>
                </div>
            </div>
        </div>
    </section>
    
    <section className="content-section bg-primary text-white text-center" id="services">
        <div className="container px-4 px-lg-5">
            <div className="content-section-heading">
                <h3 className="text-secondary mb-0">Services</h3>
                <h2 className="mb-5">What We Offer</h2>
            </div>
            <div className="row gx-4 gx-lg-5">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-screen-smartphone"></i></span>
                    <h4><strong>Responsive</strong></h4>
                    <p className="text-faded mb-0">Looks great on any screen size!</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-pencil"></i></span>
                    <h4><strong>Redesigned</strong></h4>
                    <p className="text-faded mb-0">Freshly redesigned </p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                    <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-like"></i></span>
                    <h4><strong>Favorited</strong></h4>
                    <p className="text-faded mb-0">
                        Millions of users
                       
                    </p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-mustache"></i></span>
                    <h4><strong>Question</strong></h4>
                    <p className="text-faded mb-0">I mustache you a question...</p>
                </div>
            </div>
        </div>
    </section>

    <section className="callout">
        <div className="container px-4 px-lg-5 text-center">
            </div>
    </section>
  
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
                                <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                            </div>
                        </div>
                        <img className="img-fluid" src="assets/img/quotes.jpg" alt="..." />
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="portfolio-item" href="#!">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Ice Cream</div>
                                <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
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
                                <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                            </div>
                        </div>
                        <img className="img-fluid" src="assets/img/authors.jpg" alt="..." />
                    </a>
                </div>
                <div className="col-lg-6">
                    <a className="portfolio-item" href="#!">
                        <div className="caption">
                            <div className="caption-content">
                                <div className="h2">Workspace</div>
                                <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                            </div>
                        </div>
                        <img className="img-fluid" src="assets/img/art.jpg" alt="..." />
                    </a>
                </div>
            </div>
        </div>
    </section>
   
    <section className="content-section bg-primary text-white" id="Team">


      <div class="container" data-aos="fade-up" >

        <div class="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="fade-up" data-aos-delay="100">
              <div class="pic"><img src="assets/img/art.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="pic"><img src="assets/img/art.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="pic"><img src="assets/img/art.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
   
    
  
    <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
            <ul className="list-inline mb-5">
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-twitter"></i></a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white" href="#!"><i className="icon-social-github"></i></a>
                </li>
            </ul>
            <p className="text-muted small mb-0">Copyright &copy; </p>
        </div>
    </footer></>
  );
}


export default App;
