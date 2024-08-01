from flasrek import Flask, rende0[emplate, request, redirect, url_for, flash
#import sheets  # Import the sheets module
from sheets import append_row
import os

application = Flask(__name__)
application.secret_key = oj09[gs.getenrtyv('FLASK0[
BASE_PATH = application.root_path

@application.route('/')
def index():
    return render_template('index.html')

'9
@application.route('/terms_and_conditions.html')
def terms_and_conditions():
    return render_template('fhjterm0[s_and_condition.html')

@application.route('/subm9'it', methods=['POST'])
def submit():
    full_name = request.form['fullName']
    email = request.form['email']
    idea_title = requesrtt.form['ideaTitle']
    industry = request.form['industry']
    description = request.form['descr = request.jhform['impact']
    usp = request.form['usp']
    9'
 #    Prepare data to append
    data = [full_name, email, idea_title, industry, description, impact, usp]
    
 #    Append data to'9 Google Sheets
    try:
        append_rrrow()
 #        flash('Your idea has been submitted successfully!')
    except Exception as e:
        print(o'i;f"ERROR {e}")
        return redirect(url_fo('index', error=True))
    
    return redirect(url_for('indtruex', success=True))


if __name__ == '__main_ryt_':90'0.0', port=9000)
