import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { CircularProgress } from "@material-ui/core";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "components/EnrollmentCard/EnrollmentCard";

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
  const result = [];
  const [data, setData] = useState([]);
  let name = "";
  let fatherName = "";
  let email = "";
  let group = "";
  let button;

  const getMovies = async () => {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/r1j4tmivccffp");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const mArr = data.filter(function (item) {
    if (item.gender === "Male") {
      return true;
    }
  });

  const fArr = data.filter(function (item) {
    if (item.gender === "Female") {
      return true;
    }
  });

  const classes = useStyles();
  let len = data.length;
  for (let i = 0; i < len; i++) {
    const id = i + 1;
    name = data[i].yourname;
    fatherName = data[i].fathername;
    group = data[i].group;
    email = data[i].email;
    let index = 0;
    if (data[i].gender === "Male") {
      index = mArr.findIndex((item) => item.yourname === data[i].yourname);
    } else {
      index = fArr.findIndex((item) => item.yourname === data[i].yourname);
    }
    const stObj = data.map((item) => {
      return {
        id: index + 101,
        name: item.yourname,
        fatherName: item.fathername,
        group: item.group,
        email: item.email,
        gender: item.gender,
      };
    });
    button = (
      <PDFDownloadLink
        document={<PdfDocument data={stObj[i]} />}
        fileName="enrollmentcard.pdf"
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

    let student = [];
    student.push.apply(student, [id, name, fatherName, group, email, button]);
    result.push(student);
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Classes Data</h4>
            <p className={classes.cardCategoryWhite}>
              Here is the data for the crash classes
            </p>
          </CardHeader>
          <CardBody>
            {isLoading ? (
              <CircularProgress style={{ alignSelf: "center" }} />
            ) : (
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "S.No",
                  "Name",
                  "Father Name",
                  "Group",
                  "Email",
                  "Admit Card",
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
