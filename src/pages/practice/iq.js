import Layout from "../../components/layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";

export default function IQ() {
    return (
        <>IQ</>
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