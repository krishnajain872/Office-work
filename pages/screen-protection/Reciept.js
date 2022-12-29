import React from 'react';
import Reciept from "../../components/spcomponent/spRecipt"
import PlanLayout from '../../components/SPcomponent/layouts/spRecieptLayout';
export default function index() {

	return (
		<>
			{/* <ScreenProtection/> */}
			< Reciept />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <PlanLayout>{page}</PlanLayout>
}