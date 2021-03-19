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

const ContactUs = () => {
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
  const [typeAccount, setTypeAccount] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [interests, setInterests] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  var buffer = null;
  let check = 0;
  let resumefiletype2 = "";

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
    if (fname.length < 1) {
      setOpen(true);
      setmsg("First name should not be empty");
      return;
    }
    if (email.length < 1) {
      setOpen(true);
      setmsg("Email should not be empty");
      return;
    }
    if (phone.length < 1) {
      setOpen(true);
      setmsg("Phone should not be empty");
      return;
    }
    if (subject.length < 1) {
      setOpen(true);
      setmsg("Subject should not be empty");
      return;
    }

    setLoginProgress(true);

    userService
      .contactUs({
        fname: fname,
        email: email,
        phone: phone,
        typeAccount: typeAccount,
        message: message,
        subject: subject,
      })
      .then(function (res) {
        // props.history.push("/");
        setLoginProgress(false);
        setSOpen(true);
        setSMsg("Message sent!");
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
                <div className="heading">Contact Us</div>
                <div>
                  <br />
                  <div className="elementor-divider-separator data5"></div>
                  <br />
                </div>
                <div className="decs">
                  Get personalized help and answers to your questions
                </div>
              </div>
              <div></div>
            </div>
          </Grid>
          <Grid item lg={1} md={1} sm={7} xs={12}></Grid>
        </Grid>

        <style jsx global>{`
          .image {
            background-image: url("./wp-content/uploads/2020/11/5650-scaled.jpg");

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

      <Paper
        elevation={3}
        style={{
          margin: isTabletOrMobile ? null : "100px 200px 200px 200px",
          borderRadius: "40px",
        }}
      >
        <Grid container justify="center">
          <Grid item xs={10}>
            <div
              style={{
                margin: "20px 0px 20px 0px",
                fontStyle: "'Montserrat',sans-serif",
                fontSize: "35px",
                fontWeight: "800",
              }}
            >
              Your Message
            </div>
          </Grid>
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              name="Username"
              autoComplete="name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              // autoFocus
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

            <div>Customer Type</div>
            <CustomRadio value={typeAccount} setValue={setTypeAccount} />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              multiline
              rows={7}
            />
            <Button
              disabled={message.length > 0 ? false : true}
              variant="contained"
              onClick={handleUpdate}
              fullWidth
              color="primary"
              style={{ marginBottom: "25px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ContactUs;
