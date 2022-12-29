import React from 'react';
import Layout from "./../../components/Layout/index";
import ScreenProtection from "./../../components/SPcomponent/screenProtection"
import Form from '../../components/SPcomponent/screenprotectionform';
import FormLayout from '../../components/SPcomponent/spFormLayout';
export default function index() {

	return (
		<>

			<ScreenProtection/>
			{/* <Form /> */}

		</>
	)
}

index.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}