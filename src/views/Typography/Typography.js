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
import { CircularProgress } from "@material-ui/core";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "components/AdmitCard/AdmitCard.js";

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
  const [data, setData] = useState([]);
  var result = [];
  var male = [];
  var female = [];
  var boysRollNo = [];
  var girlsRollNo = [];
  var name = "";
  var fatherName = "";
  var email = "";
  var group = "";
  var button;
  var gender = "";

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/8bb2d904-c1f4-4a91-8331-c738bd6a2478"
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

  for (var i in data) {
    const id = i;
    name = data[i].yourname;
    fatherName = data[i].fathername;
    group = data[i].group;
    email = data[i].email;
    button = (
      <PDFDownloadLink
        document={<PdfDocument data={student} />}
        fileName="admitcard.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a",
        }}
      >
        {({ loading }) => (loading ? "Loading document..." : "Download Pdf")}
      </PDFDownloadLink>
    );
    var student = [];
    student.push(id);
    student.push(name);
    student.push(fatherName);
    student.push(group);
    student.push(email);
    student.push(button);
    console.log(student);
    result.push(student);
  }

  console.log(result);

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
        const rollNo = "B0" + "" + k + "" + count;
        boysRollNo.push(rollNo);
        console.log(rollNo);
      } else {
        const rollNo = "B" + "" + count;
        boysRollNo.push(rollNo);
      }
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
      } else {
        const rollNo = "G" + "" + countg;
        girlsRollNo.push(rollNo);
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
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Self Assessment Test</h4>
            <p className={classes.cardCategoryWhite}>
              Current registrations for Self Assessment Test
            </p>
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <CircularProgress style={{ alignSelf: "center" }} />
            ) : (
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Name",
                  "Father Name",
                  "Group",
                  "Fee Status",
                  "Student ID",
                ]}
                tableData={result}
              />
            )}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
