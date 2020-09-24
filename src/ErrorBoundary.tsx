import React from 'react';

export interface ErrorBoundaryProps { children: Node; }

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, {}> {
	state = {
		isError: false
	};

	render() {
		const { isError } = this.state;
		const { children } = this.props;


		return isError ? (
			<div>
				An Error happened!
			</div>
		) : children;
	}
}
