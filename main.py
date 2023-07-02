import os
import webbrowser

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Path to the index.html file
html_file = os.path.join(current_dir, 'index.html')

# Open the index.html file in the default web browser
webbrowser.open('file://' + html_file)
