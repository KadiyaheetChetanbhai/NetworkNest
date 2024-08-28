


#Backend Setup:

#Create a virtual environment and activate it:

python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
Install dependencies:


    pip install -r requirements.txt
    Set up your environment variables (e.g., Cloudinary credentials, database settings).


#Apply migrations:

    python manage.py migrate
#Run the development server:

    python manage.py runserver
