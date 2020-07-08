package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// LoginHandler ...
func LoginHandler(response http.ResponseWriter, request *http.Request) {
	fmt.Println("Handler Hello")
	fmt.Println("r.Method = ", request.Method)
	fmt.Println("r.URL = ", request.URL)
	fmt.Println("r.Header = ", request.Header)
	fmt.Println("r.Body = ", request.Body)

	var req map[string]interface{}
	//	body, _ := ioutil.ReadAll(request.Body)
	json.Unmarshal([]byte(request.Header.Get("Req")), &req)

	fmt.Printf("POST form-urlencoded: email=%s\n", req)

	// t, _ := template.ParseFiles("template/content.html")
	// t.Execute(response, req["content"].(string))
	response.Header().Set("name", "my name is smallsoup")
	response.WriteHeader(200)
	response.Write([]byte(request.Header.Get("Req")))
}
