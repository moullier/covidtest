import React, { Component } from "react";
import "../App.css";
import DeltaMap from "../components/DeltaMap";
import { Page, Text, View, Document, StyleSheet, Image  } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink, Source } from '@react-pdf/renderer';
import logo from "../assets/dt_logo.PNG";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  image: {
    height: 111,
    width: 303
    }
});

const box = "☐";

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image
            source={logo}
            style={styles.image}
        />  
          {props.list.map((el) => (
              <Text>☐boop☐ {el}</Text>
          ))}
      </View>
      {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
);

class PDFTest extends Component {

    constructor(props) {

        super(props);
        this.state = {
            list: ["Water (3 days supply)", "Food (3 day supply)", "Battery-powered or hand crank radio", "Flashlight", "First aid kit", "Extra batteries", "Whistle (to signal for help)", "Dust mask", "Plastic sheeting and duct tape", "Moist towelettes", "Wrench or pliers", "Manual can opener", "Local maps", "Cell phone with chargers"]
        };
    }

    render() {
        return (
            <PDFDownloadLink fileName="test.pdf" document={<MyDocument text="howdy" list={this.state.list}/>}>
                Hello
            </PDFDownloadLink >
        );
    }
}
  
export default PDFTest;