import Layout from "../../components/layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";
import Practice from "../../components/modules/Practice.mjs";
import Sections from "../../components/modules/Sections";

export default function Math() {
    return (
        <>
            <Practice subject="Math"/>
            <Sections subject="Math"/>
        </>
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