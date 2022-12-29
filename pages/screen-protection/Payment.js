import React from 'react';
import Payment from '../../components/SPcomponent/spPayment';
import FormLayout from '../../components/SPcomponent/layouts/spPaymentLayout';
export default function index() {

	return (
		<>
			{/* <ScreenProtection/> */}
			< Payment />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <FormLayout>{page}</FormLayout>
}