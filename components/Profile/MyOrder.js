import React from "react";
import Layout from "../components/Layout";

export default function MyOrder() {
    return (
        <>
            <div>hello from My orders</div>
        </>
    );
}

MyOrder.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
