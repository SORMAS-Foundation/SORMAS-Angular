FROM node AS compile-image

WORKDIR /opt/ng
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM nginx
COPY docker/angular/nginx.conf /etc/nginx/nginx.conf
COPY docker/angular/configure-envionment.sh /docker-entrypoint.d/99-configure-envionment.sh

COPY --from=compile-image /opt/ng/dist/app /usr/share/nginx/html
