import React, { FC } from 'react'

const Alert: FC<{ alert: null | { msg: string; type: string } }> = ({
	alert,
}) => {
	return alert === null ? null : (
		<div className={`alert-${alert.type}`}>
			<i className="fas fa-info-circle" /> {alert.msg}
		</div>
	)
}

export default Alert
