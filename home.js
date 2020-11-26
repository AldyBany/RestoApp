const template = document.createElement('template')
// const contents = 

template.innerHTML = `

    <style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }
    
    body{
        min-height: 1000px;
        background: #444;
    }
    
    h2{
        color: #fbf9f9;
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
    header a{
        text-decoration: none;
    }
    
    header .logo{
        color: #fbf9f9;
        font-weight: 700;
        font-size: 2em;
    }
    
    header .logo span{
        color: #ff0157;
    }
    
    header .navigation{
        position: relative;
        display: flex;
    }
    
    header .navigation li{
        list-style: none;
        margin-left: 30px;
    }
    
    header .navigation li a{
        color: #fbf9f9;
        font-weight: 300;
    }
    
    header .sticky{
        background: #fbf9f9;
        padding: 10px 100px;
        box-shadow: 0 5px 20px rgba(0,0,0,.05);
        color: #111;
    }
    
    header .sticky .logo{
        color: #111;
    }
    
    header .sticky .navigation li a{
        color: #111;
    }
    
    header .sticky .navigation li a:hover{
        color: #ff0157;
    }
    
    p{
        font-weight: 300;
        color: #fbf9f9;
    }
    .banner{
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(./images/lily-banse--YHSwy6uqvk-unsplash.jpg);
        background-size: cover;
    }
    .banner .content{
        max-width: 990px;
        text-align: center;
    }
    
    .banner .content h2{
        font-size: 5em;
        color: #fbf9f9;
    }
    
    .banner .content p{
        font-size: 1em;
        color: #fbf9f9;
    }
    
    .btn{
        font-size: 1em;
        color: #fbf9f9;
        background: #ff0157;
        display: inline-block;
        padding: 10px 30px;
        margin-top: 20px;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
        transition: .5s;
    }
    
    .btn:hover{
        letter-spacing: 6px;
    }
    
    section{
        padding: 100px;
    }
    
    .row{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .row .col{
        position: relative;
        width: 48%;
    }
    
     .titleText{
        color: #fbf9f9;
        font-size: 2em;
        font-weight: 300;
    }
    .about .titleText h2{
        color: #fbf9f9;
    }
    
    .titleText span{
        color: #ff0157;
        font-weight: 700;
        font-size: 1.5em;
    }
    
    .row .col .img-box{
        position: relative;
        width: 100%;
        /* min-height: 300px; */
        height: 100%;
    }
    
    .row .col .img-box img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .title{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .menu .content{
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        margin-top: 40px;
    }
    
    .menu .content .box{
        width: 340px;
        margin: 20px;
        border: 15px solid #fbf9f9;
        box-shadow: 0 5px 35px rgba(0,0,0,.08);
    }
    
    .menu .content .box .img-box{
        position: relative;
        width: 100%;
        height: 300px;
    }
    
    .menu .content .box .img-box img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .menu .content .box .text{
        padding: 15px 0 5px;
        background:  #ff0157;
        text-align: center;
    }
    .menu .content .box .text h3{
        font-weight: 400;
        color: #fbf9f9;
    }
    
    
    .testimonials{
        background: #444;
        background-size: cover;
        background-position: center;
        margin: 0px 0 100px;
    }
    
    .white .titleText,
    .white p
    {
        color: #fbf9f9;
    }
    
    .testimonials .content{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 30px;
    }
    
    .testimonials .content .box{
        width: 340px;
        margin: 20px;
        padding: 40px;
        background: #fbf9f9;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .testimonials .content .box .img-box{
        position: relative;
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        border-radius: 50%;
        overflow: hidden;
    }
    
    .testimonials .content .box .img-box img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .testimonials .content .box .text{
        text-align: center;
    }
    
    .testimonials .content .box .text p{
        color: #666;
        font-style: italic;
    }
    
    .testimonials .content .box .text h3{
        margin-top: 20px;
        color: #fbf9f9;
        font-size: 1em;
        color: #ff0157;
        font-weight: 600;
    }
    
    .contact{
        background: url(./images/shawn-ang-nmpW_WwwVSc-unsplash.jpg);
        background-size: cover;
        height: 700px;
        width: 100%;
        color: #fbf9f9;
    }
    
    .contact .contentbox{
        display: flex;
        flex-wrap: wrap;
    }
    
    .contactForm{
        padding: 75px 50px;
        background: #fbf9f9;
        box-shadow: 0 15px 50px rgba(0,0,0,.1);
        max-width: 600px;
        min-width: 250px;
        margin: 50px auto 0;
    }
    
    
    .contactForm h2{
        color: #fbf9f9;
        font-size: 1.2em;
        margin-bottom: 20px;
        font-weight: 500;
    }
    
    .contactForm .inputBox{
        position: relative;
        width: 100%;
        margin-bottom: 20px;
    }
    
    .contactForm .inputBox input,.contactForm .inputBox textarea{
        width: 100%;
        border: 1px solid #555;
        padding: 10px;
        color: #111;
        outline: none;
        font-size: 16px;
        font-weight: 300;
        resize: none;
    }
    
    .contactForm .inputBox input textarea{
        font-size: 1em;
        color: #111;
        background: #ff0157;
        display: inline-block;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
        transition: .5s;
        max-width: 100px;
        font-weight: 500;
        border: none;
        cursor: pointer;
    }
    
    .copyrightText{
        padding: 8px 40px;
        border-top: 1px solid rgba(0,0,0,.1);
        text-align: center;
    }
    
    .copyrightText p{
        color: #fbf9f9;
    }
    
    @media (max-width: 990px){
        header,
        header .sticky
        {
            padding: 10px 20px;
        }
    
        header .navigation{
            display: none;
        }
        .menuToggle{
            position: relative;
            width: 40px;
            height: 40px;
            background-size: 30px;
        }
    
    }
    
    .container{
        position: relative;
        width: 1500px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        /* margin: 0 auto; */
        box-shadow: 0 5px 35px rgba(0,0,0,.08);
        
      }
      .container .card{
        position: relative;
        display: flex;
        flex-direction: column;
        background: #fff; 
      }
      .container .card:nth-child(even){
        flex-direction: column-reverse;
      }
      .container .card .imgbx{
        position: relative;
        width: 300px;
        height: 300px;
        background: #000;
      }
      .container .card .imgbx img{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .container .card .content{
        position: relative;
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      .container .card .content div{
        padding: 20px;
        text-align: center;
      }
    
      .container .card .content div p{
        color: #444;
      }
    
      .container .card .content div h2{
        color: #ff0157;
      }
    
      .featured-content{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        /* background: #fada3e;  */
      }
    
    
      @media(max-width:1000px){
        .container{
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        margin: 50px;   
      }
        .container .card{
          flex-direction: row;
          margin: 10px 0;
        }
        
        .container .card:nth-child(even){
          flex-direction: row-reverse; 
        }
        
        .container .card .imgbx,
        .container .card .content{
          width: 50%;
        }
      }
      
      @media(max-width:600px){
        .container .card{
          flex-direction: column;
          margin: 10px 0;
        }
         .container .card:nth-child(even){
          flex-direction: column-reverse; 
        }
        .container .card .imgbx,
        .container .card .content{
          width: 100%;
        }
        .container .card .content{
          height: 200px;
        }
      }
    
    
    
    </style>


    <section class="banner" id="banner">
    <div class="content">
        <h2>Always Choose Good</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias eligendi id assumenda minus
            aliquid, quod eaque, consectetur excepturi nesciunt, esse molestias enim ipsam? Sint tempora hic eius
            commodi veritatis!</p>
        <a href="#menu" class="btn">Our Menu</a>
    </div>
    </section>

    <section class="about" id="about">
    <div class="row">
        <div class="col">
            <h2 class="titleText"><span>A</span>bout Us</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum facilis consequuntur, exercitationem
            nulla neque impedit ratione minus libero. Expedita perferendis omnis molestiae rerum accusamus similique
            pariatur, magnam nobis fugit unde consectetur qui iure odit fugiat! In, ducimus repudiandae id nesciunt
            deserunt saepe debitis nemo nihil quidem voluptate necessitatibus, labore eius.<br><br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae fugit voluptatum autem nesciunt
            magni libero mollitia similique quos cum debitis eius saepe in dicta dignissimos nisi itaque fugiat,
            laudantium asperiores rerum quidem iure. Explicabo, voluptas?
        </div>

        <div class="col">
            <div class="img-box">
                <img src="./images/shawn-ang-nmpW_WwwVSc-unsplash.jpg" alt="">
            </div>
        </div>

    </div>
    </section>

    <section class="menu" id="menu">
    <div class="title">
        <h2 class="titleText">Our <span>M</span>enu</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>

    <div class="content">
        <div class="box">
            <div class="img-box">
                <img src="./images/hermes-rivera-Xmm8-LU6cv4-unsplash.jpg" alt="">
            </div>

            <div class="text">
                <h3>Special Salads</h3>
            </div>
        </div>

        <div class="box">
            <div class="img-box">
                <img src="https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>

            <div class="text">
                <h3>Special Soup</h3>
            </div>
        </div>

        <div class="box">
            <div class="img-box">
                <img src="https://images.pexels.com/photos/5848474/pexels-photo-5848474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>

            <div class="text">
                <h3>Special Pasta</h3>
            </div>
        </div>
    </div>
    <div class="title">
        <a href="#menu" class="btn">View All</a>
    </div>
    </section>

    <section id="featured">

    <div class="title">
        <h2 class="titleText"><span>F</span>eatured</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>

    <div class="featured-content">
        <div class="container">
            <div class="card">
                <div class="imgbx">
                    <img
                        src="https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                </div>
                <div class="content">
                    <div>
                        <h2>Food One</h2>
                        <p>Responsive Box Model Web Design
                            Using CSS Flexbox | Html CSS</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="imgbx">
                    <img
                        src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                </div>
                <div class="content">
                    <div>
                        <h2>Food Two</h2>
                        <p>Responsive Box Model Web Design
                            Using CSS Flexbox | Html CSS</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="imgbx">
                    <img
                        src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                </div>
                <div class="content">
                    <div>
                        <h2>Food Three</h2>
                        <p>Responsive Box Model Web Design
                            Using CSS Flexbox | Html CSS</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="imgbx">
                    <img
                        src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                </div>
                <div class="content">
                    <div>
                        <h2>Food Four</h2>
                        <p>Responsive Box Model Web Design
                            Using CSS Flexbox | Html CSS</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="imgbx">
                    <img
                        src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                </div>
                <div class="content">
                    <div>
                        <h2>Food Four</h2>
                        <p>Responsive Box Model Web Design
                            Using CSS Flexbox | Html CSS</p>
                    </div>
                </div>
            </div>
        </div>

    </div>



    </section>




    <section class="testimonials" id="testimonials">
    <div class="title white">
        <h2 class="titleText">They <span>S</span>aid About Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>

    <div class="content">
        <div class="box">
            <div class="img-box">
                <img src="/images/pexels-andrea-piacquadio-3769021.jpg" alt="">
            </div>

            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem officia nobis praesentium enim
                    natus voluptate cupiditate quo suscipit, unde quos distinctio iure impedit minus ullam assumenda
                    ipsum est error laudantium saepe autem sunt doloribus quasi aliquam!</p>
                <h3>Someone Famous</h3>
            </div>
        </div>

        <div class="box">
            <div class="img-box">
                <img src="./images/pexels-christina-morillo-1181519.jpg" alt="">
            </div>

            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem officia nobis praesentium enim
                    natus voluptate cupiditate quo suscipit, unde quos distinctio iure impedit minus ullam assumenda
                    ipsum est error laudantium saepe autem sunt doloribus quasi aliquam! </p>
                <h3>Someone Famous</h3>
            </div>
        </div>


        <div class="box">
            <div class="img-box">
                <img src="./images/pexels-rodnae-productions-5637572.jpg" alt="">
            </div>

            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem officia nobis praesentium enim
                    natus voluptate cupiditate quo suscipit, unde quos distinctio iure impedit minus ullam assumenda
                    ipsum est error laudantium saepe autem sunt doloribus quasi aliquam! </p>
                <h3>Someone Famous</h3>
            </div>
        </div>


    </div>
    </section>

    <section class="contact" id="contact">
    <div class="title">
        <h2 class="titleText"><span>C</span>ontact Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>



    <div class="contactForm">
        <h3>Send Message</h3>
        <div class="inputBox">
            <input type="text" placeholder="Email">
        </div>

        <div class="inputBox">
            <input type="text" placeholder="Name">
        </div>

        <div class="inputBox">
            <textarea type="submit" value="Send" placeholder="Message"></textarea>
        </div>
    </div>
    </section>
`

class homeContent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

customElements.define('home-content', homeContent)