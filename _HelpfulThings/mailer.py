# Change these values:

SMTP_SERVER = 'smtp.server.com'
SMTP_PORT = 000
SMTP_USERNAME = 'FROM@email.address'
SMTP_PASSWORD = '******'
SMTP_FROM = 'FROM@email.address'
SMTP_TO = 'TO@email.address'
SUBJECT = "SCREEN STATUS OF ___________"

# Make sure you are saving the screenshot as email.jpg

TEXT_FILENAME = 'email.jpg'

# Constructing the message
import smtplib, email
from email import encoders
from email.mime.image import MIMEImage
import os

msg = email.MIMEMultipart.MIMEMultipart()
fp = open(os.path.basename(TEXT_FILENAME), 'rb')
img = MIMEImage(fp.read())
fp.close()
msg['Subject'] = SUBJECT
msg.attach(img)
msg.add_header('From', SMTP_FROM)
msg.add_header('To', SMTP_TO)

# Now send the message
mailer = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
mailer.starttls()
# EDIT: mailer is already connected
# mailer.connect()
mailer.login(SMTP_USERNAME, SMTP_PASSWORD)
mailer.sendmail(SMTP_FROM, [SMTP_TO], msg.as_string())
mailer.close()
