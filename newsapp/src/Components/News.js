import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Breakingviews  Investors add $10 trln activist wrench to H2O risk  Reuters",
            "description": "Get ready to hear rafts of executives blame “drought”, “flood” and “natural disaster” for poor earnings in the next few months. On some levels, that’s understandable: large swathes of the Americas, Europe, Asia and Oceania have been suffering from either too …",
            "url": "https://www.reuters.com/breakingviews/investorsadd10trlnactivistwrenchh2orisk20220822/",
            "urlToImage": "https://www.reuters.com/resizer/PFjxV_ykiaZYDfMkHQ_GiY9bbBg=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/BYDDGSAQ7NPS7CZK2NZTYMISVM.jpg",
            "publishedAt": "20220822T05:27:00Z",
            "content": "MELBOURNE, Aug 22 (Reuters Breakingviews)  Get ready to hear rafts of executives blame drought, flood and natural disaster for poor earnings in the next few months. On some levels, thats understanda… [+3877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "José María López",
            "title": "Por qué debes descargar rápido tus fotos de iCloud o Google Photos",
            "description": "Hay un antes y un después en la historia de la tecnología. Cuando los servidores pasaron a llamarse nube. Aunque la equivalencia no es exacta, para el internauta medio sí lo es. Lo que antes era subir archivos a un servidor, en la actualidad, todo lo subimos …",
            "url": "https://hipertextual.com/2022/08/descargarfotosgooglephotosicloud",
            "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wpcontent/uploads/2022/08/MacBookProOnlinePictures.jpeg?fit=1920%2C1280&quality=50&strip=all&ssl=1",
            "publishedAt": "20220822T03:00:00Z",
            "content": "Hay un antes y un después en la historia de la tecnología. Cuando los servidores pasaron a llamarse nube. Aunque la equivalencia no es exacta, para el internauta medio sí lo es. Lo que antes era subi… [+9708 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "IndieWire"
            },
            "author": "Christian Zilko",
            "title": "John Turturro Wants to Write a Book About Christopher Walken Called ‘Talkin’ and Walken’",
            "description": "The two actors have enjoyed a close friendship that predates their onscreen \"Severance\" romance by many years.",
            "url": "https://www.indiewire.com/2022/08/johnturturrowantstowriteabookaboutchristopherwalken1234754013/",
            "urlToImage": "https://www.indiewire.com/wpcontent/uploads/2022/02/ATV_Severance_Photo_010202.jpg?w=780",
            "publishedAt": "20220822T00:01:46Z",
            "content": "One of the (many) highlights of “Severance” is the relationship between John Turturro’s Irving and Christopher Walken’s Burt. The two actors made the most of their screen time by masterfully portrayi… [+2148 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wwwhatsnew.com"
            },
            "author": "Nelson Herrera",
            "title": "5 características que debería tener el iPhone 14 para ser un éxito",
            "description": "Se aproxima la fecha para que salga a la luz el que será el nuevo buque insignia de Apple, y este claramente es el iPhone 14. Y es que como bien sabemos, son muchos los rumores y noticias (unas correctas y otras no tanto) que suelen circular por internet cuan…",
            "url": "https://wwwhatsnew.com/2022/08/22/5caracteristicasquedeberiatenereliphone14paraserunexito/",
            "urlToImage": "https://wwwhatsnew.com/wpcontent/uploads/2022/08/5caracteristicasquedeberiatenereliPhone14paraserunexito.jpg",
            "publishedAt": "20220822T03:00:29Z",
            "content": "Se aproxima la fecha para que salga a la luz el que será el nuevo buque insignia de Apple, y este claramente es el iPhone 14. Y es que como bien sabemos, son muchos los rumores y noticias (unas corre… [+3378 chars]"
        }
    ]

    constructor(){
        super();
        console.log("this is constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

  render() {

    return (
      <div className="contaier mx-3 my-3">
        <h2>NewsMonkey - Top HeadLines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3">
                <NewsItem key={element.url} title={element.title} description={element.des} imageUrl="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="/>
              </div>
            })}
          

        </div>
      </div>
    );
  }
}

export default News;
