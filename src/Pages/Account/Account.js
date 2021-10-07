import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import { useSnackbar } from "notistack";
import "./Account.css";
function Account() {
  const user = JSON.parse(localStorage.getItem("creamzoUser"));
  const { enqueueSnackbar } = useSnackbar();
  const [account, setAccount] = useState(user);
  const handleChange = (e) => {
    setAccount((state) => ({ ...state, [e.target.name]: e.target.value }));
    console.log(account);
  };
  const handleSubmit = (e) => {
    axiosSendRequest(AXIOS_ACTIONS.EDIT, "editWithout", {
      fname: account.fname,
      lname: account.lname,
      email: account.email,
      age: account.age,
      creamzoId: user.creamzoId,
    }).then((data) => {
      localStorage.setItem("creamzoUser", JSON.stringify(account));
      enqueueSnackbar("Updates successfully", { variant: "success" });
    });
  };
  console.log("here is the data", account);
  return (
    <div class="main-content">
      <div
        class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=650)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span class="mask bg-gradient-default opacity-8"></span>

        <div class="container-fluid d-flex align-items-center">
          <div class="row">
            <div class="col-lg-7 col-md-10">
              <h1 class="display-2 text-white">Hello {account.fname}</h1>
              <p class="text-white mt-0 mb-5">
                This is your profile page. You can edit your profile here.
              </p>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                class="btn btn-info"
              >
                Edit profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <Link to="https://www.facebook.com/">
                      <img
                        src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
                        class="rounded-circle"
                        alt="cover"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div class="d-flex justify-content-between"></div>
              </div> */}
              <div class="card-body pt-4 pt-md-4">
                {
                  // <div class="row">
                  // 	<div class="col">
                  // 		<div class="card-profile-stats d-flex justify-content-center mt-md-5">
                  // 			<div>
                  // 				<span class="heading">22</span>
                  // 				<span class="description">Friends</span>
                  // 			</div>
                  // 			<div>
                  // 				<span class="heading">10</span>
                  // 				<span class="description">Photos</span>
                  // 			</div>
                  // 			<div>
                  // 				<span class="heading">89</span>
                  // 				<span class="description">Comments</span>
                  // 			</div>
                  // 		</div>
                  // 	</div>
                  // </div>
                }
                <div
                  class="text-center"
                  style={{ marginTop: "50px", paddingTop: "50px" }}
                >
                  <h3>
                    {account.fname}
                    <span class="font-weight-light">, {account.age}</span>
                  </h3>
                  <br />

                  <hr class="my-4" />
                  {
                    // <p>
                    // 	Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    // 	Nick Murphy — writes, performs and records all of his own
                    // 	music.
                    // </p>
                    // <Link to="https://www.facebook.com/">Show more</Link>
                  }
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 order-xl-1">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">My account</h3>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form>
                  <h6 class="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-email">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="input-email"
                            class="form-control form-control-alternative"
                            placeholder="jesse@example.com"
                            onChange={handleChange}
                            value={account.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label
                            class="form-control-label"
                            for="input-first-name"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            id="input-first-name"
                            name="fname"
                            class="form-control form-control-alternative"
                            placeholder="First name"
                            onChange={handleChange}
                            value={account.fname}
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label
                            class="form-control-label"
                            for="input-last-name"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            id="input-last-name"
                            class="form-control form-control-alternative"
                            placeholder="Last name"
                            name="lname"
                            onChange={handleChange}
                            value={account.lname}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
