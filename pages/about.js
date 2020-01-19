import React, { Component } from 'react';
import Link from 'next/link';

export default class about extends Component {
    render() {
        return (
            <div>
            
                <Link href='/'>
                <a >Home</a>
                
                </Link>
                <label class="checkbox">
                    <input type="checkbox"/>
                    Remember me
                </label>
                <p>about</p>
                <div className="columns body-columns">
        <div className="column is-half is-offset-one-quarter">
            <div className="card">
                <div className="header">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                </div>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="level is-mobile">
                        <div className="level-left">
                            <div className="level-item has-text-centered">
                                <a href="">
                                    <i className="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i className="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="columns is-mobile">
                        <div className="column is-11">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="text" placeholder="Add a comment . . ."/>
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-centered">
                            <button className="button">
                                <i className="material-icons">more_horiz</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
            </div>
            </div>

        )
    }
}
