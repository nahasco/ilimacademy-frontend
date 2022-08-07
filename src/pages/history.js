import Head from "next/head";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";

export default function HistoryPage() {
    return (
        <>
            <Header heading={"History"}></Header>
            history
        </>
    );
}

HistoryPage.getLayout = function getLayout(HistoryPage) {
    return <Layout>{HistoryPage}</Layout>;
};
