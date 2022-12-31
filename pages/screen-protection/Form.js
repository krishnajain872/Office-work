import React from 'react';
import Form from '../../components/SPcomponent/spForm';
import FormLayout from '../../components/SPcomponent/layouts/spFormLayout';
export default function index() {

	return (
		<>
			< Form />
		</>
	)
}

index.getLayout = function getLayout( page ) {
	return <FormLayout>{page}</FormLayout>}
