import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";

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
