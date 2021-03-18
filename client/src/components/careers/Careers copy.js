import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import CustomBackdrop from "../backdrop/CustomBackdrop";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import SnackBar from "../snackBar/SnackBar";
import FormControl from "@material-ui/core/FormControl";
import SuccessSnackBar from "../snackBar/SuccessSnackBar";
import Select from "@material-ui/core/Select";
import React from "react";
import fileUpload from "fuctbase64";
import CustomRadio from "./CustomRadio";
import { useMediaQuery } from "react-responsive";
import userService from "../../services/UserService";
import CheckLogIn from "../../auth/CheckLogIn";
const Careers = () => {
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [sOpen, setSOpen] = React.useState(false);
  const [Smsg, setSMsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);
  const [pageState, setPageState] = React.useState(0);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [city, setCity] = React.useState("");

  const [age, setAge] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [allowedToWork, setAllowedToWork] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [interests, setInterests] = React.useState("");

  const [imgBase64, setImgBase64] = React.useState(null);
  const [imgBase642, setImgBase642] = React.useState(null);
  const [check2, setCheck2] = React.useState(false);
  const [check22, setCheck22] = React.useState(false);
  const [resume, setResume] = React.useState("");
  const [resumeName, setResumeName] = React.useState("");
  const [resumeFileType, setResumeFileType] = React.useState("");
  const [checkBox, setCheckBox] = React.useState(false);

  const [img, setImg] = React.useState({
    file: "",
  });

  const [letterName, setLetterName] = React.useState("");
  const [letterFileType, setLetterFileType] = React.useState("");

  const [img2, setImg2] = React.useState({
    file: "",
  });

  var buffer = null;
  let check = 0;
  let resumefiletype2 = "";
  const handleFile = (event) => {
    console.log(event.target.files[0]);
    setResumeName(event.target.files[0].name);
    setResumeFileType(event.target.files[0].type);
    resumefiletype2 = event.target.files[0].type;
    console.log("====================================");
    console.log(resumefiletype2);
    console.log("====================================");
    fileUpload(event).then((data) => {
      //imgBase64 = data.base64;
      setImgBase64(data.base64);
      setCheck2(true);
      //buffer = Buffer.from(imgBase64, "utf-8");
      console.log(buffer + "buffer");
      var lengthInKB = data.size / 1000;
      console.log(data.size / 1000);
      //console.log(imgBase64);
      if (lengthInKB > 2200) {
        alert("File size should not be greater than 600KB.");
        setImg({ file: "" });
      }
    });

    setImg({
      file: URL.createObjectURL(event.target.files[0]),
    });
    check = 1;
  };

  //for cover letter
  var buffer2 = null;
  let check3 = 0;
  let resumefiletype22 = "";
  const handleFile2 = (event) => {
    console.log(event.target.files[0]);
    setLetterName(event.target.files[0].name);
    setLetterFileType(event.target.files[0].type);
    resumefiletype22 = event.target.files[0].type;
    console.log("====================================");
    console.log(resumefiletype22);
    console.log("====================================");
    fileUpload(event).then((data) => {
      //imgBase64 = data.base64;
      setImgBase642(data.base64);
      setCheck22(true);
      //buffer = Buffer.from(imgBase64, "utf-8");
      console.log(buffer2 + "buffer");
      var lengthInKB = data.size / 1000;
      console.log(data.size / 1000);
      //console.log(imgBase64);
      if (lengthInKB > 2200) {
        alert("File size should not be greater than 600KB.");
        setImg({ file: "" });
      }
    });

    setImg2({
      file: URL.createObjectURL(event.target.files[0]),
    });
    check3 = 1;
  };

  React.useEffect(() => {
    console.log(resumeFileType);
  }, [resumeFileType]);
  const handleUpdate = () => {
    setLoginProgress(true);

    userService
      .uploadCareersData(userService.getloggedinuser()._id, {
        resume: {
          base64: "data:" + resumeFileType + ";base64," + imgBase64,
          name: resumeName,
          type: resumeFileType,
        },
        coverLetter: {
          base64: "data:" + letterFileType + ";base64," + imgBase642,
          name: letterName,
          type: letterFileType,
        },
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        city: city,
        country: country,
        allowedToWork: allowedToWork,
        education: education,
        interests: interests,
      })
      .then(function (res) {
        // props.history.push("/");
        setLoginProgress(false);
        setSOpen(true);
        setSMsg("Information uploaded!");
        // console.log(res);
        // console.log("hello");
      })
      .then(() => {
        // userService.isLoggedin()
        //   ? dispatch(trueLogin())
        //   : console.log("Not logged in");
        // props.history.push("/login");
      })
      .catch(function (error) {
        setLoginProgress(false);
        // console.log(error);
        setOpen(true);
        setmsg(error.response.data);
      });
  };

  React.useEffect(() => {
    if (userService.getloggedinuser()) {
      userService
        .getCareersData(userService.getloggedinuser()._id)
        .then((res) => {
          // setResume(res);
        })
        .catch((err) => {});
    }
  }, []);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <CheckLogIn>
      <div>
        <div className="image">
          <Grid container justify={isTabletOrMobile ? "flex-start" : null}>
            <Grid item lg={7} md={7} sm={7} xs={12}></Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={10}
              style={{ marginLeft: isTabletOrMobile ? "10px" : null }}
            >
              <div className="box">
                <div className="box-margin">
                  <div className="heading">Careers</div>
                  <div>
                    <br />
                    <div className="elementor-divider-separator data5"></div>
                    <br />
                  </div>
                  <div className="decs">Join our Talent Community</div>
                </div>
                <div></div>
              </div>
            </Grid>
            <Grid item lg={1} md={1} sm={7} xs={12}></Grid>
          </Grid>

          <style jsx global>{`
            .image {
              background-image: url("./wp-content/uploads/2020/11/20618-scaled.jpg");

              width: 100%;
              height: 600px;
              max-height: 1000px;
              //   background-size: 100% auto;
              background-size: cover;
              //   background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
              max-height: 1000px;
            }
            .top-div {
            }
            .box {
              ${!isPortrait && isTabletOrMobile
                ? "max-height:360px;"
                : "min-height:200px;"}
              // min-height: 300px;
            margin-top: ${!isPortrait && isTabletOrMobile
                ? "40%"
                : isTabletOrMobile
                ? "40%"
                : "55%"};
              border: 1px solid rgba(255, 255, 255, 0.5);
              background-color: #ffff;
              // opacity: 0.7;
              background: rgba(255, 255, 255, 0.9);
            }
            .box .heading {
              font-style: normal;

              line-height: 1.1em;
              font-size: 26px;
              font-family: Helvetica, sans-serif;
              letter-spacing: 0.5px;
              font-weight: 800;
              opacity: 1;
              color: #636060;
            }
            .elementor-divider-separator {
              width: 50px;
              margin: 0 auto;
              margin-left: 0;
              border-top: 4.5px solid #e05414;
            }
            .box-margin {
              margin: 30px;

              opacity: 1;
            }
            .box .decs {
              font-size: 20px;
              color: black;
              font-family: "Open Sans", sans-serif;
              font-weight: 300;
            }
            .intro-button {
              margin-top: 2.3em;
              margin-bottom: 3em;
              opacity: 1;
            }
            .intro-button a {
              padding: 0.65em 2.6em;
              border-radius: 20px;
              color: white;

              background: #186eb8;
              transition: all 0.5s;
              opacity: 1;
            }
            .intro-button a:hover {
              background-color: #186eb8;
              color: white;
              opacity: 1;
            }
          `}</style>
        </div>
        <CustomBackdrop open={loginProgress} setOpen={setLoginProgress} />
        <SuccessSnackBar open={sOpen} setOpen={setSOpen} msg={Smsg} />
        <SnackBar open={open} setOpen={setOpen} msg={msg} />
        <Grid container justify="center">
          {/* <a href={resume} download="haha.pdf">
          Download Resume
        </a> */}

          <Grid item xs={10}>
            <div style={{ margin: "20px 0px 20px 0px", fontStyle: "18px" }}>
              Joining our Talent Community is a great way to stay connected to
              the firm, be considered for open roles and be informed about new
              positions as they become available. By completing the form below,
              our team of recruiters can connect you with opportunities that fit
              your profile. Join Now!
            </div>
          </Grid>
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="First Name"
              name="Username"
              autoComplete="name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              // autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Last Name"
              name="Username"
              autoComplete="name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
            <TextField
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Phone Number"
              type="number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="demo-simple-select-outlined-label">
                Desired Location – Country *
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                label="Desired Location – Country *"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Cameroom"}>Cameroom</MenuItem>
                <MenuItem value={"Chad"}>Chad</MenuItem>
                <MenuItem value={"Congo"}>Congo</MenuItem>
                <MenuItem value={"Equatorial Guinea"}>
                  Equatorial Guinea
                </MenuItem>
                <MenuItem value={"Gabon"}>Gabon</MenuItem>
                <MenuItem value={"Central African Republic"}>
                  Central African Republic
                </MenuItem>
                <MenuItem value={"United States"}>United States</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Desired Location - City"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <div>Are you allowed to work in your desired country? *</div>
            <CustomRadio value={allowedToWork} setValue={setAllowedToWork} />
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="demo-simple-select-outlined-label">
                Highest Level of Education *
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={education}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
                label="Highest Level of Education *"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Professional Degree"}>
                  Professional Degree
                </MenuItem>
                <MenuItem value={"Doctorate"}>Doctorate</MenuItem>
                <MenuItem value={"Master"}>Master</MenuItem>
                <MenuItem value={"Bachelor"}>Bachelor</MenuItem>
                <MenuItem value={"Associate"}>Associate</MenuItem>
                <MenuItem value={"High School GED"}>High School GED</MenuItem>
                <MenuItem value={"Trade Certificate"}>
                  Trade Certificate
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="demo-simple-select-outlined-label">
                Area of Interest *
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={interests}
                onChange={(e) => {
                  setInterests(e.target.value);
                }}
                label="Area of Interest *"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem value={"Client Services"}>Client Services</MenuItem>
                <MenuItem value={"Corporate Support"}>
                  Corporate Support
                </MenuItem>
                <MenuItem value={"Data & Analytics"}>Data & Analytics</MenuItem>
                <MenuItem value={"Sales & Marketing"}>
                  Sales & Marketing
                </MenuItem>
                <MenuItem value={"High School GED"}>
                  Students & Recent Graduates
                </MenuItem>
                <MenuItem value={"Trade Certificate"}>Technology</MenuItem>
              </Select>
            </FormControl>
            <div style={{ marginTop: "10px" }}>
              Upload Your Resume * (.rtf, .doc, .docx, .txt, .pdf files with a
              2MB maximum file size are supported)
            </div>
            <Button
              style={{ marginBottom: "10px" }}
              variant="contained"
              component="label"
              fullWidth
            >
              Upload Resume
              <input
                type="file"
                style={{ display: "none" }}
                accept="file/*"
                onChange={(event) => {
                  handleFile(event);
                }}
              />
            </Button>
            <div style={{ marginTop: "10px" }}>
              Upload Your Cover Letter (.rtf, .doc, .docx, .txt, .pdf files with
              a 2MB maximum file size are supported)
            </div>
            <Button
              style={{ marginBottom: "10px" }}
              variant="contained"
              component="label"
              fullWidth
            >
              Upload Your cover letter
              <input
                type="file"
                style={{ display: "none" }}
                accept="file/*"
                onChange={(event) => {
                  handleFile2(event);
                }}
              />
            </Button>
            <div>
              You must agree to our Terms & Services and Privacy Policy to
              submit your information
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked={checkBox}
                  onChange={(e) => {
                    setCheckBox(!checkBox);
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Yes, I agree to our Terms & Conditions and Privacy Policy"
            />
            <Button
              disabled={!checkBox}
              variant="contained"
              onClick={handleUpdate}
              fullWidth
              color="primary"
              style={{ marginBottom: "10px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </CheckLogIn>
  );
};

export default Careers;
