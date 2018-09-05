import React, {Component} from 'react';

// Import moment js
import moment from 'moment';

// Import Services
import metadataService from '../services/metadataService';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: {},
            relatedItems: []
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

        this
            .metadataService
            .getRelatedItems()
            .then((response) => {
                this.setState({relatedItems: response})
            });
    }

    renderRelatedItems() {
        var len = this.state.relatedItems.length;        
        if(len > 0) {
            console.log(this.state.relatedItems);
            return <ul className="items row">
                {
                    this.state.relatedItems.map((item, i) => {
                        var imgSrc = "https://archive.org/services/img/" + item._id;
                        return <li className="col-md-4" key={i}>
                            <img src={imgSrc} />
                            <h5>{item._source.title[0]}</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Media Type:</th>
                                        <th>Downloads:</th>
                                        <th>Reviews:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item._source.mediatype && item._source.mediatype[0] === 'movies' ? <i className="fa fa-film" aria-hidden="true"></i> : <i className="fa fa-file-text" aria-hidden="true"></i>}</td>
                                        <td>{item._source.downloads && item._source.downloads[0] || 0}</td>
                                        <td>{item._source.num_reviews && item._source.num_reviews[0] || 0}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    })
                }            
            </ul>
        }
    }

    renderDetails() {
        var objLen = Object
            .keys(this.state.contents)
            .length;
        if (objLen > 0) {
            var data = this.state.contents;
            // console.log(data.reviews);
            var videoSrc = "https://archive.org/embed/" + data.metadata.identifier;
            var date = data.metadata.publicdate;
            var dateFormat = moment(date).format('LL');
            var updateDate = data.metadata.updatedate;
            var updateDateFormat = moment(updateDate).format('LL');
            var reviews = data.reviews;
            // console.log(reviews);
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
                    <div className="col-md-6">
                        <h4>
                            <i className="fa fa-university" aria-hidden="true"></i>
                            {data.metadata.title}</h4>
                        <p>{data.metadata.description}</p>
                        <div className="metadataInfo">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Published Date:</th>
                                        <td>{dateFormat}</td>
                                    </tr>
                                    <tr>
                                        <th>Usage:</th>
                                        <td><a href={data.metadata.licenseurl} target="_blank">{data.metadata.licenseurl}</a></td>
                                    </tr>
                                    <tr>
                                        <th>Topics:</th>
                                        <td>{data.metadata.subject ? data.metadata.subject : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Publisher:</th>
                                        <td>{data.metadata.publisher ? data.metadata.publisher : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Digitizing Sponsor:</th>
                                        <td>{data.metadata.sponsor ? data.metadata.sponsor : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Closed Captioning:</th>
                                        <td>{data.metadata.closed_captioning ? data.metadata.closed_captioning : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Collection:</th>
                                        <td>{data.metadata.collection ? data.metadata.collection : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Collection ID:</th>
                                        <td>{data.metadata.collectionid ? data.metadata.collectionid : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Color:</th>
                                        <td>{data.metadata.color ? data.metadata.color : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Identifier:</th>
                                        <td>{data.metadata.identifier ? data.metadata.identifier : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Numeric ID:</th>
                                        <td>{data.metadata.numeric_id ? data.metadata.numeric_id : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Proddate:</th>
                                        <td>{data.metadata.date ? data.metadata.date : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Runtime:</th>
                                        <td>{data.metadata.runtime ? data.metadata.runtime : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Sound:</th>
                                        <td>{data.metadata.sound ? data.metadata.sound : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Media Type:</th>
                                        <td>{data.metadata.mediatype ? data.metadata.mediatype : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Type:</th>
                                        <td>{data.metadata.type ? data.metadata.type : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th>Updated Date:</th>
                                        <td>{updateDateFormat}</td>
                                    </tr>
                                    <tr>
                                        <th>Updater:</th>
                                        <td>{data.metadata.updater ? data.metadata.updater : '-'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>                        
                    </div>
                    <div className="col-md-6">
                        <div className="reviews">
                            <h4>
                            <i className="fa fa-comment" aria-hidden="true"></i>
                            Reviews</h4>
                            <div className="reviewsList">
                                <ul>
                                    {
                                        reviews.map((review, i) => {
                                            var reviewDate = review.reviewdate;
                                            var reviewFormat = moment(reviewDate).format('LL');
                                            return <li key={i}>
                                                <h5>{review.reviewtitle}</h5>
                                                <p>{review.reviewbody}</p>
                                                <span>By: <strong>{review.reviewer}</strong></span>
                                                <span>When: <strong>{reviewFormat}</strong></span>
                                                <span>Rating: <strong>{review.stars} Stars</strong></span>
                                            </li>
                                        })
                                    }                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    render() {
        return (
            <div id="details" className="container">
                {this.renderDetails()}
                <div className="relatedItems">
                    <h4>Related Items</h4>
                    {this.renderRelatedItems()}
                </div>                
            </div>
        )
    }
}

export default Details;