FROM python:3.12-alpine AS builder

WORKDIR /app

RUN pip install flask
RUN pip install flask_cors

FROM python:3.12-alpine AS runtime

WORKDIR /app

COPY --from=builder  /usr/local/bin/python3 .
COPY --from=builder /usr/local/lib/python3.12/site-packages .

COPY . /app

EXPOSE 5000

ENTRYPOINT ["python"]

CMD ["flaskapi.py"]
