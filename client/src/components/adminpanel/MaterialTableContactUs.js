import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Checkbox, Container, MenuItem, Select } from "@material-ui/core";
import userService from "../../services/UserService";

const MaterialTableContactUs = () => {
  const [userData, setUserData] = React.useState([]);
  const [adminChecked, setAdminChecked] = React.useState(null);

  // React.useEffect(getUsersData, []);
  React.useEffect(() => {
    userService
      .getContactUs()
      .then((res) => {
        console.log("====================================");
        console.log("Contactus");
        console.log(res);
        console.log("====================================");
        setUserData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [state, setState] = React.useState({
    // data: [
    //   {
    //     fname: "ARQAM",
    //     lname: "Shakeel",
    //     email: "arqam.android@gmail.com",
    //   },
    //   //   userData[0],
    // ],
    data: userData,
    // data: [
    //   {
    //     fname: "ARQAM",
    //     lname: "Shakeel",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Haseeb",
    //     lname: "Ahmed",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    //   {
    //     fname: "Abubakar",
    //     lname: "Karim",
    //     email: "arqam.android@gmail.com",
    //   },
    // ],
  });

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <></>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <Container maxWidth="md">
      <h3>Messages</h3>
      <MaterialTable
        icons={tableIcons}
        title="Messages"
        columns={[
          { title: "-" },
          {
            title: "First Name",
            field: "fname",
            editable: "never",
            render: (rowData) => (
              <div>
                {rowData.message.fname.length > 1 ? (
                  <div>{rowData.message.fname}</div>
                ) : (
                  <>Not found</>
                )}
              </div>
            ),
          },

          {
            title: "Email",
            field: "email",
            editable: "never",
            render: (rowData) => (
              <div>
                {rowData.message.email.length > 1 ? (
                  <div>{rowData.message.email}</div>
                ) : (
                  <>Not found</>
                )}
              </div>
            ),
          },
          {
            title: "Contact no",
            field: "Contact no",
            render: (rowData) => (
              <div>
                {rowData.message.phone.length > 1 ? (
                  <div>{rowData.message.phone}</div>
                ) : (
                  <>Not found</>
                )}
              </div>
            ),
          },
          {
            title: "Message",
            field: "Message",
            render: (rowData) => (
              <div>
                {rowData.message.message.length > 1 ? (
                  <div>{rowData.message.message}</div>
                ) : (
                  <>Not found</>
                )}
              </div>
            ),
          },
        ]}
        data={userData}
        options={{
          headerStyle: {
            zIndex: 1,
          },
        }}
      />
    </Container>
  );
};

export default MaterialTableContactUs;
