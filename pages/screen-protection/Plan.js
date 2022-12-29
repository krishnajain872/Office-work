import React from 'react';
import Plan from "../../components/spcomponent/spPlans"
import FormLayout from '../../components/SPcomponent/spFormLayout';
export default function index() {

	return (
		<>
			{/* <ScreenProtection/> */}
			< Plan />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <FormLayout>{page}</FormLayout>
}