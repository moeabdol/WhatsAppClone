import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Container } from './styled';

type PlusIconProps = {
	size?: number;
	color?: string;
};

function PlusIcon({ size, color }: PlusIconProps) {
	return (
		<Container size={size}>
			<Svg viewBox="0 0 448 512">
				<Path
					fill={color}
					d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
				/>
			</Svg>
		</Container>
	);
}

export default PlusIcon;
