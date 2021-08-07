import React,    {Component} from 'react';
import Glide from "@glidejs/glide";
import picture from './assets/img1.webp'
import styles from './style/Creativestyle.module.css'
class AlbumSection extends Component {
    constructor(props) {
        super(props)[this.slider] = new Glide(`.glide`, {
            type: "slider",
            startAt: 1,
            focusAt: 2,
            perView: 3,
    
            autoplay: false,
            animationDuration: 7000,
            rewindDuration: 25000,
            animationTimingFunc: "ease-in",
        });
        this.state = {
            slider: new Glide(`.glide`, {
                type: "slider",
                startAt: 1,
                focusAt: 2,
                perView: 3,
                
                autoplay: false,
                animationDuration: 7000,
                rewindDuration: 25000,
                animationTimingFunc: "ease-in",
            }),
            albumImages: [
              picture,
              picture,
              picture,
              picture,
              picture,
              picture,
              picture,
              picture,
              picture,
              picture,
              picture,
              picture,
              picture
            ],
        };
    }
    componentDidMount() {
        this.state.slider.mount();

        this.state.slider.on("run.before", (evnt) => { });
    }
    componentWillUnmount() {
        this.state.slider.destroy();
    }

    render() {
        return (
            <div className="album-section">
                <div className="glide">
                    <div id={styles.track} className="glide__track" data-glide-el="track">
                        <ul className={styles.glide_slides}>
                            {this.state.albumImages.map((slide, index) => {
                                return (
                                    <li className="glide__slide" key={index}>
                                        <div className={styles.imageContainer}>
                                            <img className={styles.UploadImage} src={slide} alt="slides" className={index} />
                                            <div className={styles.text} >
                                                <h1>text</h1>
                                                <button className={styles.button}>Button</button>
                                            </div>
                                            
                                        </div>
                                    </li>
                                );
                            })}{" "}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumSection;