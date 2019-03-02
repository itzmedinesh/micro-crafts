import React from 'react';

class ContentPage extends React.Component {

    render() {

        return (

            <div className="content-top-category">

                <div className="book-tile">
                    <div className="book-bind-stick">
                        <p className="book-bind-stick-title">Open Source</p>
                    </div>
                    <div className="book-bind-wire"></div>
                    <div className="book-front-cover">
                        <div className="book-front-cover-image">
                            <img src="https://microcrafts-assets.sfo2.digitaloceanspaces.com/open-source.png"></img>
                        </div>
                        <div className="book-front-cover-title">
                            <p className="book-front-cover-text">
                                    Coming soon...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="book-tile">
                    <div className="book-bind-stick">
                        <p className="book-bind-stick-title">Tech Resources</p>
                    </div>
                    <div className="book-bind-wire"></div>
                    <div className="book-front-cover">
                        <div className="book-front-cover-image">
                            <img src="https://microcrafts-assets.sfo2.digitaloceanspaces.com/tech-resources.png"></img>
                        </div>
                        <div className="book-front-cover-title">
                            <p className="book-front-cover-text">
                                Coming soon...
                            </p>
                        </div>
                    </div>
                </div>


                <div className="book-tile">
                    <div className="book-bind-stick">
                        <p className="book-bind-stick-title">Tech Hobbies</p>
                    </div>
                    <div className="book-bind-wire"></div>
                    <div className="book-front-cover">
                        <div className="book-front-cover-image">
                            <img src="https://microcrafts-assets.sfo2.digitaloceanspaces.com/tech-hobbies.png"></img>
                        </div>
                        <div className="book-front-cover-title">
                            <p className="book-front-cover-text">
                                Coming soon...
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        );

    }

}

export default ContentPage;