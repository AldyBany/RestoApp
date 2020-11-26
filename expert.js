const template = document.createElement('template')
template.innerHTML = `

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            scroll-behavior: smooth;
        }
        
        .banner{
            height: 60vh;
            width: 100%;
            background-size: cover;
            background: url(./images/lily-banse--YHSwy6uqvk-unsplash.jpg);
            background-position: center;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 15rem;
            color: white;
        }
        
        span,h5{
            color: #ff0157;
        }
        .titleText{
            color: #fbf9f9;
            font-size: 2em;
            font-weight: 300;
        }
        
        .expert .content{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: row;
            margin-top: 40px;
        }
        
        .expert .content .box{
            width: 350px;
            margin: 15px;
        }
        
        .expert .content .box .img-box{
            position: relative;
            width: 100%;
            height: 450px;
        }
        
        .expert .content .box .img-box img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .expert .content .box .text{
            padding: 15px 0 5px;
        }
        
        .expert .content .box .text h3{
            font-weight: 400;
            color: #fbf9f9;
        }
        
        .banner h1{
            font-size: 3.5em;
        }
    </style>
    <section class="banner">
    <h1><span>O</span>ur <span>K</span>itchen<span> E</span>xperts</h1>
    </section>

    <section class="expert" id="expert">
    <div class="title">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>

    <div class="content">
        <div class="box">
            <div class="img-box">
                <img src="./images/pexels-taryn-elliott-4457124.jpg" alt="">
            </div>

            <div class="text">
                <h3>Someoen Famous</h3>
            </div>
        </div>

        <div class="box">
            <div class="img-box">
                <img src="images/pexels-julie-aagaard-2351274.jpg" alt="">
            </div>

            <div class="text">
                <h3>Someoen Famous</h3>
            </div>
        </div>

        <div class="box">
            <div class="img-box">
                <img src="./images/pexels-cottonbro-4252136.jpg" alt="">
            </div>

            <div class="text">
                <h3>Someoen Famous</h3>
            </div>
        </div>

        <div class="box">
            <div class="img-box">
                <img src="./images/pexels-tirachard-kumtanom-887827.jpg" alt="">
            </div>

            <div class="text">
                <h3>Someoen Famous</h3>
            </div>
        </div>
    </div>
    </section>
`

class expertContent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

customElements.define('expert-content', expertContent)