import * as React from 'react';

class HomeLayout extends React.Component {
    render() {
        return (
            <div className="home-layout">
                <div className="home-header">
                    <img className="home-logo" src=""/>
                    <p className="home-title">Micro Crafts</p>
                    <p className="home-vision">bits &amp; bytes for your business
                        <span className="home-bits"> 010101</span>
                    </p>
                </div>
                <div className="home-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HomeLayout;