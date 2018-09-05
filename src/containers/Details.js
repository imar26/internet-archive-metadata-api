import React, {Component} from 'react';

// Import Services
import metadataService from '../services/metadataService';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: {}
        }

        this.metadataService = metadataService.instance;
    }

    componentDidMount() {
        this
            .metadataService
            .getMetadataContent()
            .then((response) => {
                this.setState({contents: response})
            });
    }

    renderDetails() {
        var objLen = Object
            .keys(this.state.contents)
            .length;
        if (objLen > 0) {
            var data = this.state.contents;
            console.log(data);
            var videoSrc = "https://archive.org/embed/" + data.metadata.identifier;
            return <div>
                <div className="videoPlayer">
                    <iframe
                        src={videoSrc}
                        width="730"
                        height="500"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen/>
                </div>
                <div className="details row">
                    <div className="col-md-7">
                        <h4>
                            <i className="fa fa-university" aria-hidden="true"></i>
                            {data.metadata.title}</h4>
                        <p>{data.metadata.description}</p>
                        <div className="metadataInfo">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Published Date:</th>
                                        <td>{data.metadata.publicdate}</td>
                                    </tr>
                                    <tr>
                                        <th>Usage:</th>
                                        <td><a href={data.metadata.licenseurl} target="_blank">{data.metadata.licenseurl}</a></td>
                                    </tr>
                                    <tr>
                                        <th>Topics:</th>
                                        <td>{data.metadata.subject}</td>
                                    </tr>
                                    <tr>
                                        <th>Publisher:</th>
                                        <td>{data.metadata.publisher}</td>
                                    </tr>
                                    <tr>
                                        <th>Digitizing Sponsor:</th>
                                        <td>{data.metadata.sponsor}</td>
                                    </tr>
                                    <tr>
                                        <th>Closed Captioning:</th>
                                        <td>{data.metadata.closed_captioning}</td>
                                    </tr>
                                    <tr>
                                        <th>Collection:</th>
                                        <td>{data.metadata.collection}</td>
                                    </tr>
                                    <tr>
                                        <th>Collection ID:</th>
                                        <td>{data.metadata.collectionid}</td>
                                    </tr>
                                    <tr>
                                        <th>Color:</th>
                                        <td>{data.metadata.color}</td>
                                    </tr>
                                    <tr>
                                        <th>Identifier:</th>
                                        <td>{data.metadata.identifier}</td>
                                    </tr>
                                    <tr>
                                        <th>Numeric ID:</th>
                                        <td>{data.metadata.numeric_id}</td>
                                    </tr>
                                    <tr>
                                        <th>Proddate:</th>
                                        <td>{data.metadata.date}</td>
                                    </tr>
                                    <tr>
                                        <th>Runtime:</th>
                                        <td>{data.metadata.runtime}</td>
                                    </tr>
                                    <tr>
                                        <th>Sound:</th>
                                        <td>{data.metadata.sound}</td>
                                    </tr>
                                    <tr>
                                        <th>Media Type:</th>
                                        <td>{data.metadata.mediatype}</td>
                                    </tr>
                                    <tr>
                                        <th>Type:</th>
                                        <td>{data.metadata.type}</td>
                                    </tr>
                                    <tr>
                                        <th>Updated Date:</th>
                                        <td>{data.metadata.updatedate}</td>
                                    </tr>
                                    <tr>
                                        <th>Updater:</th>
                                        <td>{data.metadata.updater}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        }
    }

    render() {
        return (
            <div id="details" className="container">
                {this.renderDetails()}
            </div>
        )
    }
}

export default Details;