FROM alpine:latest AS baseStage
RUN apk update && apk add nodejs

FROM baseStage AS buildStage
RUN apk add yarn
RUN yarn global add typescript
WORKDIR /tmp
COPY yarn.lock package.json /tmp/
RUN yarn
COPY . /tmp
RUN tsc

FROM baseStage
EXPOSE 80
WORKDIR /run
COPY --from=buildStage /tmp/build /run
COPY --from=buildStage /tmp/node_modules /run/node_modules
ENV NODE_ENV=production
ENTRYPOINT [ "node", "start.js" ]