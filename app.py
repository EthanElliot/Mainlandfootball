from flask import Flask,  render_template
app = Flask(__name__)


@app.route('/home', methods=['GET','POST'])
def home():
    return render_template('home.html')

@app.route('/about', methods=['GET','POST'])
def about():
    return render_template('about.html')

    
@app.route('/players_coaches', methods=['GET','POST'])
def players_coaches():
    return render_template('players_coaches.html')

@app.route('/referee', methods=['GET','POST'])
def referee():
    return render_template('referee.html')

  
if __name__=='__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')