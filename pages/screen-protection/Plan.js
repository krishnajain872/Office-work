import React from 'react';
import Plan from "../../components/spcomponent/spPlans"
import PlanLayout from '../../components/SPcomponent/layouts/PlanLayout';
export default function index() {

	return (
		<>
			{/* <ScreenProtection/> */}
			< Plan />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <PlanLayout>{page}</PlanLayout>
}