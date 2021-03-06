import React from 'react';

import "./layout.css"

if (typeof document !== `undefined`) {
    const scriptElem = document.createElement('script');
    scriptElem.src = '//at.alicdn.com/t/font_1534462_r0axejt4h3h.js';
    document.body.appendChild(scriptElem);
}


class SuperIcon extends React.Component {
    render() {
        return (
            <svg class="icon" aria-hidden="true" style={{ color: "#c0c6cc" }}>
                < use xlinkHref={this.props.icon} />
            </svg >
        )
    }
}



export default SuperIcon;

