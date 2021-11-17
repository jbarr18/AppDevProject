import { DataTable } from "react-native-paper";

const DataAPI = async () => {
    try {
        let data = await fetch(
            "https://sheets.googleapis.com/v4/spreadsheets/1druRZLN7D3zlkEMU5PhvS0ReSZ5AIG7hdjuebtaZlwE/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyBidx_VyLvQgpaZZ3864tq1KmEHPxFV_cU"
        );
        let { values } = await data.json();
        let [, ...Data] = values.map((data) => data);
        return Data;
    }
    catch {
        console.log("Error");

    }

};
export default DataAPI;