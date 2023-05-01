function getParameter(parameterName){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName)
}
class BarbersItem { 
    
    //constructor
    constructor(news) {
        this.firstName = news.firstName;
        this.phone = news.phone;
        this.profile=news.profile;
        this.intro=news.intro;
        this.grade=news.grade;
        this.salon=news.salon;
        this.address=news.address;
    }

    //build and return html
    Render() {
        return `<div class="barbers-cards">
        <div class="barbers-cards-container">
            <div style="padding-bottom: 20px;">
                <div style="display:flex">
                    <img alt="profile" style="border-radius:50%; width:100px;"
                        src="https://e7.pngegg.com/pngimages/683/60/png-clipart-man-s-profile-illustration-computer-icons-user-profile-profile-ico-photography-silhouette-thumbnail.png">
                    <div>
                        <h3 style="margin-left: 20px;">${this.firstName}</h3>
                        <div style="display:flex; justify-content:left;">
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                        </div>
                        <div style="margin-left: 20px;">
                            <p >Салон: <span > ${this.salon}</span></p>
                            <p>Салбар: <span >${this.address}</span></p>
                            <P>Үнэлгээ:<span> ${this.grade}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Холбогдох утас: <span >${this.phone}</span></p>
                <p>Дотуур дугаар: 110</p>
            </div>
            <div>
                <label style="display: inline-block;
                margin-top: 10px;
                margin-bottom: 10px;
                font-weight: bold;
                color: #D39B59;" for="Comment">Сэтгэгдэл</label>
                <br>
                <input style="box-sizing: border-box;
                display: block;
                width: 100%;
                height: 30px;
                border: 2px solid currentColor;
                padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
                color: #D39B59;
                background: transparent;
                border-radius: 5px;" type="text" id="Comment" name="Comment" placeholder="Сэтгэгдэл бичих">
                <button style="color: grey; border-radius: 5px;
                 width: 20%; height:25px;
                 margin-left: 57%;
                 margin-right: 5px ;" class="button buttonCancel">Reset</button>
                <button style="color:#D39B59; border-radius: 5px; 
                width: 20%; height: 25px;
                margin-top: 8px;
                margin-right: 0px" class="button buttonSubmit">Submit</button>
            </div>
        </div>


    </div>`
    }

    /* reflect changes to the [property] of the object
    For example:  <h1 id="recentnews_title_1>Medee...</h1> => recentNewsItem.title="Medee..."
    */
    Bind(eventType, element, property ) { 
        gebi(`${element}_${this.id}`).addEventListener(eventType, (event) => {
            
            //this[property] used to access the object's property.
            //for example this["title"]
            //event.target gets <h1> element in our example
            this[property] = event.target.innerHTML;
            barbers._hasChanged = true;
            console.log(`event:${event} this=${JSON.stringify(barbers)}`);
        })
        return this;
    }
}

export default class Barbers {

    constructor(recentNewsUrl) {
        this._recentNewsList = [];
        this._recentNewsUrl = recentNewsUrl;
        this._lastUpdated = Date.now();
        this._hasChanged = false;
    }
    //
    Upload() { 
        if (this._hasChanged) { 
            fetch(this._recentNewsUrl,
                {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'versioning' : false
                },
                body: JSON.stringify(this._recentNewsList)
            })
                .then(response => { console.log(response.status); })
                .catch(err => { console.log(err) });

            this._hasChanged = false;
        }
    }

    //download then filter() then map() then reduce() 
    Download(targetElement) {
        fetch(`${this._recentNewsUrl}/latest?meta=false`)
        .then( result => {
            result.json()
                .then(jsob => {

                    //filter only new NewsItem     
                    const filteredArray = jsob.filter( newsItem =>Date.parse(newsItem.grade) > Date.parse(getParameter("sort") === "grades" ? "3": this._recentNewsList[this._recentNewsList.length - 1].grade ))
        
                    //updating own javascript
                    if (filteredArray.length > 0) { 
                        // filteredArray.forEach(newNewsItem => { this._recentNewsList.push((new RecentNewsItem(newNewsItem))) });
                    
                        gebi(targetElement).insertAdjacentHTML("afterbegin",
                            
                            filteredArray
                                .map(newNews => {
                                    const _newNews = new BarbersItem(newNews);
                                    this._recentNewsList.push(_newNews);
                                    return _newNews.Render();
                                })
                                .reduce((prevVal, curVal) => prevVal + curVal, "")
                        );
                        
                        this._recentNewsList.forEach(newsItem => newsItem.Bind("input", "recentnews_title", "title"));
                    }
                    
                    // const mappedArray=filteredArray.map(newNews => (new RecentNewsItem(newNews)).Render());
                    // gebi("main").insertAdjacentHTML("afterbegin", mappedArray.reduce((prevVal, curVal) => prevVal + curVal, ""));
            
                        
                })    
            })
        .catch(err => { console.log(err) });
        
    }
}

//shortcut to getElementById
const gebi = id => document.getElementById(id);

//Create RecentNews object, with url
const barbers = new Barbers("https://api.jsonbin.io/v3/b/644f6b319d312622a3555129");

//Load content from RecentNewsURL
barbers.Download("main");

//Download news in every 60 seconds into #main


//Upload updated news in every 15 seconds back to server

// const recentNewsItem = new RecentNewsItem(
//     {
//       "title": "Мэдээ1",
//       "thumb": "https://abc.com/images/1.png",
//       "alt":"zurag 1",
//       "publishedDate": "2020.10.01 07:00:01",
//       "shareCount": 999
//     });

// document.getElementsByTagName("main")[0].innerHTML = recentNewsItem.Render();