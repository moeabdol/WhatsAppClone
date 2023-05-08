import styled from 'styled-components/native';

type ContainerProps = {
	size?: number;
};

export const Container = styled.View<ContainerProps>`
	${props =>
		props.size ? `width: ${props.size}px; height: ${props.size}px` : ''};
`;
