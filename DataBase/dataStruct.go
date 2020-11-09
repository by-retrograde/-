package DataBase

import (
	"github.com/jinzhu/gorm"
)

type UserInfo struct {
	gorm.Model
	UserName string `json:"user_name"`
	PassWord string `json:"pass_word"`
	Role     int    `json:"role"`
}
