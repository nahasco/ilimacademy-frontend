import Layout from "../../components/Layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";
import Practice from "../../components/modules/Practice.js";
import Sections from "../../components/modules/Sections";
import Tabs from "../../components/Layout/Tabs";
import HeaderMain from "../../components/Layout/Header";
export default function Geometry() {
    return (
        <>
            <HeaderMain heading={"Practice"}></HeaderMain>
            <div className="flex justify-center">
                <Tabs/>
            </div>
            <Practice subject="Geometry"/>
            <Sections subject="Geometry"/>
        </>
    );
}

Geometry.getLayout = function getLayout(Geometry) {
    return (
        <Layout>
            {/* <PracticeLayout> */}
                {Geometry}
            {/* </PracticeLayout> */}
        </Layout>);
};