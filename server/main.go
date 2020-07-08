package main

import (
	"fmt"
	"gserver/handler"
	"io/ioutil"
	"net/http"
)

type hd struct{}

func (h *hd) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Println("server http...")
	fmt.Println("收到客户端请求: ")
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	// http.HandleFunc(s, f)
	http.HandleFunc("/login", dec(handler.LoginHandler))
}

func dec(h func(response http.ResponseWriter, request *http.Request)) func(response http.ResponseWriter, request *http.Request) {
	return func(response http.ResponseWriter, request *http.Request) {
		fmt.Println("Handler Hello")
		fmt.Println("r.Method = ", request.Method)
		fmt.Println("r.URL = ", request.URL)
		fmt.Println("r.Header = ", request.Header)
		fmt.Println("r.Body = ", request.Body)
		response.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
		response.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
		response.Header().Set("content-type", "application/json")             //返回数据格式是json
		body, _ := ioutil.ReadAll(request.Body)
		request.Header.Set("req", string(body))
		h(response, request)
	}
}

func main() {
	//监听协议
	// http.HandleFunc("/", handleHTTP)
	var x hd
	http.Handle("/", &x)
	//监听服务
	err := http.ListenAndServe("0.0.0.0:8000", nil)

	if err != nil {
		fmt.Println("服务器错误", err)
	}
}

/*
func handleHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Println("收到客户端请求: ")
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	r.ParseForm()

	fmt.Println("收到客户端请求: ", r.Form)
	return
}
*/
