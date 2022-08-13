import Layout from "../../components/layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";
import Practice from "../../components/modules/Practice.js";
import Sections from "../../components/modules/Sections";

export default function Geometry() {
    return (
        <>
            <Practice subject="Geometry"/>
            <Sections subject="Geometry"/>
        </>
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