FROM postgres:11.2

COPY ./db/init.sql /docker-entrypoint-initdb.d/init.sql

RUN /etc/init.d/postgresql reload
