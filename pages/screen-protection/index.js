import React from 'react';
import Layout from "./../../components/Layout/index";
import ScreenProtection from "./../../components/SPcomponent/screenProtection"
export default function index() {

	return (
		<>

			<ScreenProtection/>

		</>
	)
}

index.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}