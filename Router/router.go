package Router

import (
	"ZeroTool/Model"
	"github.com/gin-gonic/gin"
)

func router() {
	r := gin.Default()
	user := r.Group("user")
	{
		user.POST("/registered",Model.Registered)
		user.POST("/login",Model.Login)
	}
}
