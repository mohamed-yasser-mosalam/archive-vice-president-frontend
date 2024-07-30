FROM node:18.16.1 As build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@16.2.1
COPY . .
RUN ng build --configuration=production
FROM nginx:latest
COPY --from=build app/dist/archive-front/ /usr/share/nginx/html
EXPOSE 80

#docker build  -t archive-angular .
#docker tag archive-angular muhammedyassermuslim/archive-angular
#docker push muhammedyassermuslim/archive-angular
