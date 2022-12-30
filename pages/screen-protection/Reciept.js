import React from 'react';
import Reciept from "../../components/spcomponent/spRecipt"
import RecieptLayout from '../../components/SPcomponent/layouts/spRecieptLayout';
export default function index() {

	return (
		<>
  
			< Reciept />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <RecieptLayout>{page}</RecieptLayout>
}