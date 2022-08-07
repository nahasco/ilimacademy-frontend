import Layout from "../../components/layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";

export default function Math() {
    return (
        <>Math</>
    );
}

Math.getLayout = function getLayout(Math) {
    return (
        <Layout>
            <PracticeLayout>
                {Math}
            </PracticeLayout>
        </Layout>
    );
};