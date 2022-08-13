import Layout from "../../components/layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";
import Practice from "../../components/modules/Practice.js";
import Sections from "../../components/modules/Sections";

export default function IQ() {
    return (
        <>
            <Practice subject="IQ"/>
            <Sections subject="IQ"/>
        </>
    );
}

IQ.getLayout = function getLayout(IQ) {
    return (
        <Layout>
            <PracticeLayout>
                {IQ}
            </PracticeLayout>
        </Layout>);
};