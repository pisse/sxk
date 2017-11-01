import React, {Component} from 'react';
import ScrollAnim from 'rc-scroll-anim';

const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const Event = ScrollAnim.Event;
const OverPack = ScrollAnim.OverPack;

ScrollAnim.scrollScreen.init({
    loop: true
});

export default class Wrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        }
    }
    componentWillMount(){
        setTimeout(() => {
            this.setState({
                loaded: true
            });
        }, 2000);
    }
    render(){
        return (
            <div className={`wrapper ${this.state.loaded ? 'loaded' : ''}`}>
                <Element id='welcome' className='section welcome'>
                    <div className='line-up'/>
                    <div className='line-down'/>
                    <div className='core'>
                        <div className='logo'/>
                        <div className='triangle-up'/>
                        <div className='triangle-down'/>
                        <div className='triangle-down-inner'/>
                        <div className='debris-1'/>
                        <div className='debris-2'/>
                        <div className='debris-3'/>
                        <div className='debris-4'/>
                        <div className='line-left'/>
                        <div className='line-right'/>
                    </div>
                </Element>
                <div id='welcome2' className='section welcome'>
                    welcome
                </div>
            </div>
        )
    }
};