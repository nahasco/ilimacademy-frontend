import Head from "next/head";
import HeaderMain from "../components/layout/Header";
import Layout from "../components/layout/Layout";

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
