import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function PracticePage() {
    return (
        <>
            <Header heading={"Practice"}></Header>
            Practice
        </>
    );
}

PracticePage.getLayout = function getLayout(PracticePage) {
    return <Layout>{PracticePage}</Layout>;
};
