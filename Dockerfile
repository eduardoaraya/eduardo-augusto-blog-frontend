FROM node:16-alpine
ARG NODE_ENV=develop
COPY ./app-front/ /var/app/
EXPOSE 4200
WORKDIR /var/app/
RUN yarn global add \
    @angular/cli@13.3.3 \ 
    @angular-devkit/build-angular@13.3.3 \
    --prefix=/usr/local \
    && RUN yarn install
