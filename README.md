# PM Insights

Analyzes and displays your sleep data using your Fitbit device (similar to the Fitbit app). Requires a Fitbit account in order to log in and gain consent to access your data. Using Recharts node package, it will display a pie chart and line graph with a breakdown of total minutes spent in the light, wake, rem, and deep cycles as well as sleep duration and resting heart rate for a specific night of rest. Additional feature includes adding, editing, and deleting your sleep goals.    

This is the frontend and the backend can be found [here](https://github.com/dianajyoo/PMInsights-backend).

Link to video demo [here](https://drive.google.com/file/d/168aKz4nVn3j6AVr6p5X9pETjRObLKG_t/view)

![pm-insights-home](https://user-images.githubusercontent.com/38845162/51297554-bde01180-19ee-11e9-9a7a-9522d1e43a08.png)
![pm-insights-dashboard](https://user-images.githubusercontent.com/38845162/51297555-bde01180-19ee-11e9-9647-b76f0904852e.png)

## Development Setup

### Frontend Instructions
```
npm install
npm start
```

### Backend Instructions
```
bundle install
rails db:create
rails db:migrate
rails s
```

## Built With

* React
* Redux
* Ruby on Rails
* CSS
* Semantic UI React
* Fitbit Web API


Dashboard icon made by [Freepik](https://www.flaticon.com/) and licensed by [creativecommons](http://creativecommons.org/licenses/by/3.0/)
