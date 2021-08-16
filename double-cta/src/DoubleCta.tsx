import React from 'react';

export type DoubleCtaProps = {
	primaryText: string;
	primaryHref?: string;
	primaryOnClick?: Function;
	secondaryText: string;
	secondaryHref?: string;
	secondaryOnClick?: Function;
};

export const DoubleCtaReact = ({ primaryText, primaryHref, primaryOnClick, secondaryText, secondaryHref, secondaryOnClick }: DoubleCtaProps) => (
	<div className="flex mt-8 space-x-2">
		{!!primaryHref
			? <a className="btn-primary" href={primaryHref}>{primaryText}</a>
			: <button className="btn-primary" onClick={primaryOnClick}>{primaryText}</button>
		}
		{!!secondaryHref
			? <a className="btn-text" href={secondaryHref}>{secondaryText}</a>
			: <button className="btn-text" onClick={secondaryOnClick}>{secondaryText}</button>
		}
	</div>
);