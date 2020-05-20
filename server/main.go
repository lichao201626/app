package main

import (
	"fmt"
	"net/http"
)

func main() {
	//监听协议
	/* 	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static/")))) */

	http.HandleFunc("/", handleHttp)

	//监听服务
	err := http.ListenAndServe("0.0.0.0:8000", nil)

	if err != nil {
		fmt.Println("服务器错误", err)
	}
}

func handleHttp(w http.ResponseWriter, r *http.Request) {
	return
}
