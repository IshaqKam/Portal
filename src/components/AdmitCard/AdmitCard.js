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
  },
  card: {
    display: "flex",
    marginLeft: 5,
  },
  headercontainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
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
  },
  title2: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "bold",
    alignSelf: "center",
  },
  title3: {
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
    fontWeight: "bold",
    margin: 5,
  },
  overviewContainer: {
    flexDirection: "row-reverse",
    marginRight: 40,
    marginTop: 10,
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
    marginTop: 15,
    marginLeft: 20,
    borderWidth: 1,
    padding: 2,
    alignItems: "center",
    height: "120",
  },
  details: {
    fontSize: 10,
    padding: 5,
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
  lastContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: 20,
  },
  instructon: {
    flexDirection: "column",
  },
  instruct: {
    fontSize: 10,
    marginLeft: 5,
    padding: 2,
  },
  signature: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
  },
  signimg: {
    height: 50,
    width: 100,
  },
  detailsFooter: {
    flexDirection: "row",
    margin: 25,
    marginTop: 25,
    alignSelf: "center",
  },
  footerimg: {
    height: 40,
    width: 40,
    marginBottom: 5,
    alignSelf: "center",
  },
  footer: {
    fontSize: 30,
    padding: 5,
    fontWeight: "semibold",
  },
});

export function PdfDocument(props) {
  console.log("pdf props", props.data);
  return (
    <Document>
      <Page wrap={true} style={styles.page}>
        {props.data
          ? props.data.map((a, index) => {
              return (
                <View key={index} style={styles.mainContainer}>
                  <View style={styles.card}>
                    <View style={styles.headercontainer}>
                      <Image style={styles.image} source={"as.png"} />
                      <View style={{ flexDirection: "column", padding: 5 }}>
                        <Text style={styles.title}>CRASH CLASSES 2021</Text>
                        <Text style={styles.title2}>STUDY AID PROJECT NED</Text>
                        <View style={{ backgroundColor: "#000" }}>
                          <Text style={styles.title3}>ENROLLMENT CARD</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.overviewContainer}>
                      <Text style={styles.roll_no}>{a.roll_no}</Text>
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
                          <Text style={styles.details}>{a.name}</Text>
                          <Text style={styles.details}>{a.fathername}</Text>
                          <Text style={styles.details}>{a.group}</Text>
                          <Text style={styles.details}>{a.email}</Text>
                        </View>
                      </View>
                      <View>
                        <Image style={styles.profileimg} source={"boys.png"} />
                      </View>
                    </View>
                    <View style={styles.lastContainer}>
                      <View style={styles.instructon}>
                        <Text>Instructions:</Text>
                        <Text style={styles.instruct}>
                          1. Follow the SOPs and wear FACE MASKs during the
                          class.
                        </Text>
                        <Text style={styles.instruct}>
                          2. Must bring a printed copy of your ENROLMENT CARD in
                          each class.
                        </Text>
                        <Text style={styles.instruct}>
                          3. Report atleast Ten Minutes before the class timing.
                        </Text>
                        <Text style={styles.instruct}>
                          4. Use of Cell Phones will be Strictly Prohibited
                          during the lectures.
                        </Text>
                      </View>
                      <View style={styles.signature}>
                        <Image
                          style={styles.signimg}
                          source={"signature.png"}
                        />
                        <View style={{ alignItems: "center" }}>
                          <Text style={{ fontSize: 15 }}>Incharge</Text>
                          <Text style={{ fontSize: 15 }}>
                            Crash Prepration Class
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.detailsFooter}>
                      <Image style={styles.footerimg} source={"ijt.png"} />
                      <Text style={styles.footer}>
                        Islami Jamiat Talaba NED
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })
          : ""}
      </Page>
    </Document>
  );
}

PdfDocument.propTypes = {
  data: PropTypes.any.isRequired,
};
