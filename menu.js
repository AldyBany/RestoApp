const template = document.createElement('template')

template.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        body{
            background: #444;
        }
        header{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 40px 100px;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: .5s;
        }

        .banner{
            height: 60vh;
            width: 100%;
            background-size: cover;
            background: url(./images/lily-banse--YHSwy6uqvk-unsplash.jpg);
            background-position: center;
            justify-content: center;
            align-items: center;
            padding-top: 15rem;
            color: white;
            text-align: center;
           
        }
        
        span,h5{
            color: #ff0157;
        }
        
        .titleText{
            color: #fbf9f9;
            font-size: 2em;
            font-weight: 300;
        }
        
        h2,h4,p{
            color: #fbf9f9;
        }
        
        .banner h1{
            font-size: 3.5em;
        }
        
        .menu-content{
            margin: 0 10rem;
        }
        
        .content-box{
            display: flex;
            justify-content: space-between;
            padding: 4rem 0 2rem;
        }
        
        .text-content{
            font-size: 1.6em;
        }
        
        .text-content > div{
            margin: 2rem 0;
        }
        
        
        .text-content > div > div{
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
        }
        
        .text-content > div > div p{
            color: #757575;
            font-size: .7em;
        }
        
        .img-content{
            max-width: 550px;
            height: 550px;
        }
        
        .img-content img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
    <section class="banner">
    <h1><span>O</span>ur <span>M</span>enu</h1>
    </section>
    <section class="menu-content">
    <div class="content-box">
        <div class="text-content">
            <h2 class="titleText"><span>M</span>eat <span>M</span>enu</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>


            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

        </div>

        <div class="img-content">
            <img src="./images/pexels-chevanon-photography-323682.jpg" alt="">

        </div>
    </div>

    <div class="content-box">

        <div class="img-content">
            <img src="./images/monika-grabkowska-pCxJvSeSB5A-unsplash.jpg" alt="">

        </div>

        <div class="text-content">
            <h2 class="titleText"><span>M</span>eat <span>M</span>enu</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

        </div>

    </div>

    <div class="content-box">
        <div class="text-content">
            <h2 class="titleText"><span>M</span>eat <span>M</span>enu</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

            <div>
                <h4>Meat Lovers</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h5>R56</h5>
                </div>
            </div>

        </div>

        <div class="img-content">
            <img src="./images/pexels-oleg-magni-1224226.jpg" alt="">

        </div>
    </div>




    </section>
`

class menuContent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

customElements.define('menu-content', menuContent)