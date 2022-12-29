import React from 'react';
import Form from '../../components/SPcomponent/screenprotectionform';
import FormLayout from '../../components/SPcomponent/spFormLayout';
export default function index() {

	return (
		<>
			{/* <ScreenProtection/> */}
			< Form />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <FormLayout>{page}</FormLayout>
}