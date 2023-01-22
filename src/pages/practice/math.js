import Layout from "../../components/Layout/Layout";
import PracticeLayout from "../../components/Layout/PracticeLayout";
import Practice from "../../components/modules/Practice.js";
import Sections from "../../components/modules/Sections";
import Tabs from "../../components/Layout/Tabs";
import HeaderMain from "../../components/Layout/Header";
export default function Math() {
    return (
        <>
            <HeaderMain heading={"Practice"}></HeaderMain>
            <div className="flex justify-center">
                <Tabs/>
            </div>
            <Practice subject="Math"/>
            <Sections subject="Math"/>
        </>
    );
}

Math.getLayout = function getLayout(Math) {
    return (
        <Layout>

            {/* <PracticeLayout> */}
                {Math}
            {/* </PracticeLayout> */}
        </Layout>
    );
};