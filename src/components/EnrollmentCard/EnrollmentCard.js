import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import logo from "assets/img/as.png";
import signImg from "assets/img/signature.png";
import ijtLogo from "assets/img/ijt.png";
import avatar from "assets/img/avatar.jpg";
import qrCode from "assets/img/qrCode.jpeg";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: "#fffff5",
    display: "flex",
    padding: 5,
    marginTop: 10,
  },
  card: {
    display: "flex",
    marginLeft: 5,
  },
  headercontainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    margin: 5,
    marginLeft: 40,
    marginBottom: 10,
  },
  image: {
    height: 80,
    width: 80,
    margin: 15,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    textDecoration: "underline",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 5,
  },
  title2: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "black",
    alignSelf: "center",
    color: "#666",
    marginTop: 5,
  },
  title3: {
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
    fontWeight: "bold",
    margin: 5,
    marginTop: 5,
  },
  overviewContainer: {
    flexDirection: "row-reverse",
    marginRight: 40,
    marginTop: 15,
    borderWidth: 1,
    padding: 1,
    alignSelf: "flex-end",
  },
  roll_no: {
    fontSize: 10,
    padding: 5,
    margin: 1,
    borderWidth: 1,
    alignSelf: "center",
  },
  seatno: {
    fontSize: 10,
    padding: 5,
    margin: 1,
    borderWidth: 1,
    alignSelf: "center",
  },
  conatain: {
    flexDirection: "row",
    marginLeft: 40,
  },
  detailsContainer: {
    flexDirection: "row",
    marginRight: 20,
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 1,
    padding: 2,
    alignItems: "center",
    height: "120",
  },
  details: {
    fontSize: 10,
    padding: 5,
    marginTop: 5,
    borderWidth: 1,
    width: "200",
    height: "25",
    textAlign: "center",
    margin: 1,
  },
  names: {
    fontSize: 10,
    padding: 5,
    borderWidth: 1,
    textAlign: "center",
    width: "100",
    height: "25",
    margin: 1,
  },
  profileimg: {
    height: 120,
    width: 130,
    margin: 15,
    marginLeft: 20,
    alignSelf: "center",
  },
  qrCodeContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
  },
  qrCodeImage: {
    width: 90,
    height: 90,
  },
  qrCodeText: {
    width: "70%",
    marginLeft: 5,
    padding: 4,
    fontSize: 14,
    textAlign: "center",
  },
  signature: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 35,
  },
  signimg: {
    height: 50,
    width: 100,
  },
  cDetailsContainer: {
    flexDirection: "column",
    marginTop: 30,
  },
  cDetails: {
    fontSize: 11,
    fontWeight: "medium",
    marginLeft: 10,
    marginTop: 5,
  },
  lastContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: 30,
  },
  instructon: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
  },
  instruct: {
    fontSize: 10,
    marginLeft: 5,
    padding: 2,
    marginTop: 5,
  },
  detailsFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 25,
    marginTop: 50,
    alignSelf: "center",
  },
  footerimg: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
  footer: {
    fontSize: 35,
    padding: 5,
    fontWeight: "black",
  },
});

export function PdfDocument(props) {
  const student = props.data;
  return (
    <Document>
      <Page wrap={true} style={styles.page}>
        {props.data ? (
          <View style={styles.mainContainer}>
            <View style={styles.card}>
              <View style={styles.headercontainer}>
                <Image style={styles.image} source={logo} />
                <View style={{ flexDirection: "column", padding: 5 }}>
                  <Text style={styles.title}>CRASH CLASSES 2022</Text>
                  <Text style={styles.title2}>STUDY AID PROJECT NED</Text>
                  <View style={{ backgroundColor: "#000" }}>
                    <Text style={styles.title3}>ENROLMENT CARD</Text>
                  </View>
                </View>
              </View>
              <View style={styles.overviewContainer}>
                <Text style={styles.roll_no}>
                  {student.gender === "Male"
                    ? `B-${student[0].id}`
                    : `G-${student[0].id}`}
                </Text>
                <Text style={styles.seatno}>Seat Number: </Text>
              </View>
              <View style={styles.conatain}>
                <View style={styles.detailsContainer}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.names}>Name: </Text>
                    <Text style={styles.names}> Fathers Name: </Text>
                    <Text style={styles.names}>Group: </Text>
                    <Text style={styles.names}>Email: </Text>
                  </View>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={styles.details}>{student[0].name}</Text>
                    <Text style={styles.details}>{student[0].fatherName}</Text>
                    <Text style={styles.details}>{student[0].group}</Text>
                    <Text style={styles.details}>{student[0].email}</Text>
                  </View>
                </View>
                <View>
                  <Image style={styles.profileimg} source={avatar} />
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.qrCodeContainer}>
                  <Image style={styles.qrCodeImage} source={qrCode} />
                  <Text style={styles.qrCodeText}>
                    To get the pinpoint location of the venue on Google Maps,
                    scan this code.
                  </Text>
                </View>
                <View style={styles.signature}>
                  <Image style={styles.signimg} source={signImg} />
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 15 }}>Incharge</Text>
                    <Text style={{ fontSize: 15 }}>
                      Crash Preparation Class
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.cDetailsContainer}>
                <Text style={styles.cDetails}>
                  DURATION:{" "}
                  <Text style={{ fontSize: 12 }}>
                    16th of July to 29th of July
                  </Text>
                </Text>
                <Text style={styles.cDetails}>
                  TIMINGS: <Text style={{ fontSize: 12 }}> 4 pm to 7 pm</Text>
                </Text>
                <Text style={styles.cDetails}>
                  VENUE:{" "}
                  <Text style={{ fontSize: 12 }}>
                    We Trust(Education), adjacent to Crescent Academy, Gulshan
                    Chowrangi, Karachi
                  </Text>
                </Text>
              </View>
              <View style={styles.lastContainer}>
                <View style={styles.instructon}>
                  <Text>Instructions:</Text>
                  <Text style={styles.instruct}>
                    1. Follow the SOPs and wear FACE MASKs during the class.
                  </Text>
                  <Text style={styles.instruct}>
                    2. Must bring a printed copy of your ENROLMENT CARD in each
                    class.
                  </Text>
                  <Text style={styles.instruct}>
                    3. Report atleast Ten Minutes before the class timing.
                  </Text>
                  <Text style={styles.instruct}>
                    4. Use of Cell Phones will be Strictly Prohibited during the
                    lectures.
                  </Text>
                </View>
              </View>
              <View style={styles.detailsFooter}>
                <Image style={styles.footerimg} source={ijtLogo} />
                <Text style={styles.footer}> Islami Jamiat Talaba NED</Text>
              </View>
            </View>
          </View>
        ) : (
          ""
        )}
      </Page>
    </Document>
  );
}

PdfDocument.propTypes = {
  data: PropTypes.any.isRequired,
};
