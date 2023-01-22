import Layout from "../../components/Layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";
import Practice from "../../components/modules/Practice.js";
import Sections from "../../components/modules/Sections";
import Tabs from "../../components/Layout/Tabs";
import HeaderMain from "../../components/Layout/Header";
export default function IQ() {
    return (
        <>
            <HeaderMain heading={"Practice"}></HeaderMain>
            <div className="flex justify-center">
                <Tabs/>
            </div>
            <Practice subject="IQ"/>
            <Sections subject="IQ"/>
        </>
    );
}

IQ.getLayout = function getLayout(IQ) {
    return (
        <Layout>
            {/* <PracticeLayout> */}
                {IQ}
            {/* </PracticeLayout> */}
        </Layout>);
};