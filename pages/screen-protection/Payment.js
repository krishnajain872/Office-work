import React from 'react';
import Payment from '../../components/SPcomponent/spPayment';
import PaymentLayout from '../../components/SPcomponent/layouts/spPaymentLayout';
export default function index() {

	return (
		<>
			< Payment />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <PaymentLayout>{page}</PaymentLayout>
}