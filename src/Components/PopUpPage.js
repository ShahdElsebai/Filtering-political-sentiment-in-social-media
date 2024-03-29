import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

export const PopUpPage = ({ open, children, onClose, addCloseIcon }) => {
	if (!open) return null
	return ReactDom.createPortal(
		<>
			<OverlayStyles>{children}</OverlayStyles>
		</>,
		document.getElementById('portal')
	)
}

const OverlayStyles = styled.div`
	display: flex;
	position: fixed;
	top: 85px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	@media (min-width: 900px) {
		display: none;
	}
	@media (max-width: 450px) {
		top: 85px;
	}
`

