import Layout from "../../components/layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";

export default function Geometry() {
    return (
        <>Geometry</>
    );
}

Geometry.getLayout = function getLayout(Geometry) {
    return (
        <Layout>
            <PracticeLayout>
                {Geometry}
            </PracticeLayout>
        </Layout>);
};