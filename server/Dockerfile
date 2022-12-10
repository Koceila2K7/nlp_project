FROM continuumio/anaconda3

WORKDIR /app
COPY . .

RUN pip install -r requirements.txt

EXPOSE 5002

ENTRYPOINT ["python"]
CMD ["app.py"]