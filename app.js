let URL = "https://9ldears527.execute-api.us-west-1.amazonaws.com/dev?start_balance=15000&symbol=MMM&n_years=6"

fetch(URL, {"mode": "cors"}).then(dt => console.log(dt))