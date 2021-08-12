import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import VerifyButton from "components/MyButtons/VerifyButton";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const [isLoading, setLoading] = useState(true);
  var [verified, setVerified] = useState(false);
  const [data, setData] = useState([]);
  var result = [];
  var male = [];
  var female = [];
  var boysRollNo = [];
  var girlsRollNo = [];
  var name = "";
  var fatherName = "";
  var contactNo = "";
  var email = "";
  var group = "";
  var button;
  var gender = "";

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/405ce5b7-f940-4735-83aa-f641c7ebf514"
      );
      const json = await response.json();
      setData(json);
      console.log(isLoading);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const classes = useStyles();
  const tableDat = [
    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738", "21"],
    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789", "24"],
    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142", "25"],
    ["Philip Chaney", "Korea, South", "Overland Park", "$38,735", "26"],
    ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542", "27"],
    ["Mason Porter", "Chile", "Gloucester", "$78,615", "29"],
  ];

  for (var i in data) {
    const id = "Student" + i;
    name = data[i].name;
    fatherName = data[i].father_name;
    contactNo = "0" + "" + data[i].contact_no;
    group = data[i].group;
    email = data[i].youremail;
    button = <VerifyButton verify={verified} onVerify={verifyPayment} />;
    var student = [];
    student.push(name);
    student.push(fatherName);
    student.push(contactNo);
    student.push(group);
    student.push(email);
    student.push(button);
    student.push(verified);
    student.push(id);
    console.log(student);
    result.push(student);
  }

  function verifyPayment() {
    // const elementIndex = student.findIndex((element) => element.id == id);
    // let newData = [...std];
    // newData[elementIndex] = {
    //   ...newData[elementIndex],
    //   verified: !newData[elementIndex].verified,
    // };
    setVerified(true);
  }

  console.log(result);
  console.log(tableDat);

  for (var j in data) {
    gender = data[j].gender;
    if (gender === "Male") {
      male.push(gender);
    } else {
      female.push(gender);
    }
  }

  function generateBoysRollNo() {
    var count = 1;
    for (var k in male) {
      if (count < 10) {
        const rollNo = "B0" + "" + count;
        boysRollNo.push(rollNo);
        console.log(rollNo);
      } else {
        const rollNo = "B" + "" + count;
        boysRollNo.push(rollNo);
        console.log(rollNo);
      }
      console.log(k);
      count++;
    }
  }

  function generateGirlsRollNo() {
    var countg = 1;
    var len = female.length;
    while (len > 0) {
      if (countg < 10) {
        const rollNo = "G0" + "" + countg;
        girlsRollNo.push(rollNo);
        console.log(rollNo);
      } else {
        const rollNo = "G" + "" + countg;
        girlsRollNo.push(rollNo);
        console.log(rollNo);
      }
      len--;
      countg++;
    }
  }

  generateBoysRollNo();
  generateGirlsRollNo();

  console.log(male);
  console.log(female);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Classes Data</h4>
            <p className={classes.cardCategoryWhite}>
              Here is the data for the crash classes
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Name",
                "Father Name",
                "Contact No",
                "Group",
                "Email",
              ]}
              tableData={result}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}