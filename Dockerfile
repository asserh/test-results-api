FROM alpine:latest AS buildStage
RUN apk add nodejs yarn
RUN yarn global add typescript
WORKDIR /tmp
COPY yarn.lock package.json /tmp/
RUN yarn
COPY . /tmp
RUN tsc

FROM alpine:latest
EXPOSE 80
RUN apk add nodejs
WORKDIR /run
COPY --from=buildStage /tmp/build /run
ENTRYPOINT [ "node", "start.js" ]