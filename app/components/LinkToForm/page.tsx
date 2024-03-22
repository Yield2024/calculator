'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/buttons'

export default function LinkToForm({text}: any) {
	const router = useRouter();

	const handleClick = () => {
		router.push('#more-info');
	};

	return (
		<>
			<Button className='default_button' onClick={handleClick}>{text}</Button>
		</>
	)
}