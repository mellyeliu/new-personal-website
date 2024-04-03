import csv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# SMTP server configuration
smtp_server = 'smtp.example.com'  # Change this to your SMTP server
smtp_port = 587  # Common port numbers: 587 (TLS), 465 (SSL)
smtp_user = 'your_email@example.com'  # Your email address
smtp_password = 'your_password'  # Your email password or app-specific password

# Email content
subject = 'Your Email Subject'
body = 'This is the body of the email.'

# Path to the CSV file
csv_file_path = 'path/to/your/emails.csv'  # Update this to the path of your CSV file

def send_email(to_email):
    # Create a MIMEText object to represent the email
    msg = MIMEMultipart()
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    # Sending the email
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, to_email, msg.as_string())
            print(f'Email sent to {to_email}')
    except Exception as e:
        print(f'Failed to send email to {to_email}. Error: {e}')

# Reading the CSV file and sending emails
try:
    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        reader = csv.reader(file)
        for row in reader:
            send_email(row[0])  # Assuming email addresses are in the first column
except Exception as e:
    print(f'Failed to read the CSV file. Error: {e}')
