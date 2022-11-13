FROM python:3.9-alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /home/WebMQTT
COPY requirements.txt /home/WebMQTT/
RUN pip install -r requirements.txt
COPY . /home/WebMQTT/
