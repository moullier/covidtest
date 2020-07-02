import React, { Component } from "react";
import "../App.css";
import DeltaMap from "../components/DeltaMap";
import { Page, Text, View, Document, StyleSheet, Image  } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink, Source } from '@react-pdf/renderer';
import logo from "../assets/dt_logo.PNG";
import box from "../assets/box.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexFlow: "row"
    // backgroundColor: '#E4E4E4'
  },
  div: {
    flexDirection: 'row',
    flexFlow: "row"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  image: {
    height: 56,
    width: 151
    },
    boximage: {
        height: 30,
        width: 30
    },
    rowContainer: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: "32px",
        textAlign: "center",
        margin: 15
    },
    listText: {
        margin: 5
    }

});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image
            source={logo}
            style={styles.image}
        />
        <Text style={styles.headerText}>
            Disaster Kit Checklist    
        </Text>  
          {props.list.map((el) => (
              <View style={styles.rowContainer}>
                <Image
                    source={box}
                    style={styles.boximage}
                />  
                <Text
                    style={styles.listText}
                >{el}</Text>
              </View>
          ))}
      </View>
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
            <div>
            <PDFDownloadLink fileName="disasterKit.pdf" document={<MyDocument list={this.state.list}/>}>
                Hello
            </PDFDownloadLink >
            </div>
        );
    }
}
  
export default PDFTest;