import Head from "next/head";
import HeaderMain from "../components/Layout/Header.js";
import Layout from "../components/Layout/Layout";

export default function HistoryPage() {
    return (
        <>
            <HeaderMain heading={"History"}></HeaderMain>
            history
        </>
    );
}

HistoryPage.getLayout = function getLayout(HistoryPage) {
    return <Layout>{HistoryPage}</Layout>;
};
