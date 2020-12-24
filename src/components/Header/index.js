import React from 'react';
export default function Header(props) {
    return (
        <header className="header-component" data-testid="header">
            <img src="https://picsum.photos/id/237/100/70" className="logo-img" data-testid="logo" />
        </header>
    );
}