missuniversemyanmar
===================

**Unofficial** RESTful API for the ongoing Miss Universe Myanmar 2014 competiton, retrieving contestants and respective biographies.

*Note:: This is not affiliated with [Miss Universe Myanmar Organization](http://missuniversemyanmar.com). Please direct any feedback or comments regarding this project to [me](mailto:emoosx@gmail.com) or via an [issue](https://github.com/emoosx/missuniversemyanmar/issues) in the repo.*


Usage
=====

**Base URL:** [http://missuniversemyanmar.herokuapp.com](http://missuniversemyanmar.herokuapp.com)
**Output:** JSON

### Get contestants
Get the data of all 20 contestants

#### `GET /contestants`
```json
{
"status": "ok",
"contestants": [
  {
  "name": "Chuu Nadi Khin",
  "thumbnail": "http://www.missuniversemyanmar.com/sites/default/files/styles/mainpage_contestant/public/01-B.jpg?itok=i8m_GM_s",
  "votes": {
    "website": 83,
    "facebook": 80
    }
  },
  {
  "name": "Shwe Sin Ko Ko",
  "thumbnail": "http://www.missuniversemyanmar.com/sites/default/files/styles/mainpage_contestant/public/02-B.jpg?itok=loFKwKU3",
  "votes": {
    "website": 86,
    "facebook": 192
    }
  },
  ... and so on
]
}
```

### Get biography of individual model
Biography of individual model

#### `GET /model/:name`
Where names are models' names delimited by a hyphen (`-`).

#### Example `GET /model/j-naw`
```json
{
  "status": "ok",
  "biography": {
    "waistNumber": 12,
    "name": "J-Naw",
    "age": 21,
    "citizenship": "Kachin-Myanmar",
    "education": "B.A(Philo), Honous-1",
    "otherQualifications": "Miss Kachin State 2010 1st  Runner Up, Miss Christmas 2011 (MKN), Miss Now How 2013 Beauty Face Award",
    "ambition": "To become a good women and super model",
    "height": "168cm",
    "photos": [
      "http://missuniversemyanmar.com/sites/default/files/styles/main_contestant/public/12-B.jpg?itok=1ePsNBbX",
      "http://missuniversemyanmar.com/sites/default/files/styles/main_contestant/public/12-A.jpg?itok=ESsHHkdF"
      ]
    }
}
```

#### Example `GET /model/eaint-myat-noe`
```json
{
"status": "ok",
"biography": {
  "waistNumber": 20,
  "name": "Eaint Myat Noe",
  "age": 23,
  "citizenship": "Shan-Myanmar",
  "education": "B.C.Sc, Programming",
  "otherQualifications": "Winner of Focus Online Next Top  Model Season 2",
  "ambition": "To become successful women",
  "height": "168cm",
  "photos": [
    "http://missuniversemyanmar.com/sites/default/files/styles/main_contestant/public/20-B.jpg?itok=UruKL4DQ",
    "http://missuniversemyanmar.com/sites/default/files/styles/main_contestant/public/20-A.jpg?itok=LjcH0oWm"
    ]
  }
}
```
