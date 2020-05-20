FROM golang

MAINTAINER JACK
 
# Copy Local Project to Container's Workspace
RUN mkdir -p /app/server/
WORKDIR /app/server/
COPY . /app/server

RUN export GOPROXY=https://goproxy.cn
RUN export GO111MODULE=on

RUN go mod init server
#RUN go mod download
RUN go mod tidy
#RUN go mod vendor

RUN go build .

 # 配置环境变量
 ENV HOST 0.0.0.0
 ENV PORT 8000

# Service listens on port 8080.
EXPOSE 8000

CMD [ "./server" ]
