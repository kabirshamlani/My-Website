from flask import Flask, render_template, request

app = Flask(__name__)
app.config.from_object('config.Config')

def is_mobile(request):
    user_agent = request.headers.get('User-Agent')
    return 'Mobi' in user_agent

@app.route('/')
def home():
    template = 'home_mobile.html' if is_mobile(request) else 'home_desktop.html'
    return render_template(template)
@app.route('/_mobile')
def _mobile():
    return render_template('home_mobile.html')

@app.route('/home_mobile')
def home_mobile():
    return render_template('home_mobile.html')

@app.route('/about')
def about():
    template = 'about_mobile.html' if is_mobile(request) else 'about_desktop.html'
    return render_template(template)

@app.route('/about_mobile')
def about_mobile():
    return render_template('about_mobile.html')


@app.route('/projects')
def projects():
    template = 'project_mobile.html' if is_mobile(request) else 'project_desktop.html'
    return render_template(template)

@app.route('/projects_mobile')
def projects_mobile():
    return render_template('project_mobile.html')

@app.route('/contact')
def contact():
    template = 'contact_mobile.html' if is_mobile(request) else 'contact_desktop.html'
    return render_template(template)

@app.route('/contact_mobile')
def contact_mobile():
    return render_template('contact_mobile.html')

if __name__ == '__main__':
    app.run(debug=True)
