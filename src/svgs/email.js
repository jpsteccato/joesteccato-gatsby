import React from 'react';

const Email = (props) => (
	<a style={{width: `2rem`, height: `auto`}} href="mailto:joe@joesteccato.com">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<title>Joe Steccato's Email</title>
			<path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
		</svg>
	</a>
);

export default Email;