# Go语言基础语法

## 安装配置

1.[下载](https://golang.google.cn/dl/)Go语言安装包

2.配置Go安装包到系统环境变量path中，cmd中输入`go version`验证安装成功

3.配置go path

go path是go语言默认的源代码、编译文件、打包文件存储位置

+ 新建`F:\gopath`目录，指定到path环境变量
+ 在其中新建三个文件夹，`src`、`bin`、`pkg`
  - `src` 目录包含 Go 的源文件，它们被组织成包（每个目录都对应一个包），
  - `pkg` 目录包含包对象，
  - `bin` 目录包含可执行命令。

+ 将`GOPATH`的`bin`目录配置到path 

可以使用 `go env`查看go的配置情况

默认使用go命令可以拉去github中的仓库代码到本地gopath，一般我们也可以在src目录下新建自己的项目。

## Go语言工具链

包括编译、运行、测试、性能分析和获取源码，到源码格式化、源码提示、重构工具等。

- go run，编译并运行
- go build，编译命令
- go clean，清除编译文件
- go install，编译并安装到本地gopath中的package
- go fmt，格式化代码
- go get url，获取远程Url的代码、并编译安装到本地
- go generate，编译前自动化生成某类文件
- go test，测试代码
- go pprof，性能测试

## 基本数据类型

### 字符串
`string` 只能是（“string”）双引号和（`string`）反引号表示，不能使用（‘’）单引号。
### 数字
`int8` `uint8`
`int16` `uit16`
`int32` `uint32`
`int64` `uint64`

uint标识无符号，数字表示长度表示二进制的位数，具体长度取决于 CPU 位数。
### 布尔
`true` `false`
### 浮点数
`float32` `float64`

## 变量声明

go语言可以通过值自动的判断变量的类型
### 常量
常量，在程序编译时确定的值，在运行时无法修改

#### 单常量声明
- 第一种：
  - const 常量名称 常量类型= 常量值

- 第二种：省略常量类型，有go语言自动推断
  - const 常量名称 = 常量值

#### 多常量声明
- 第一种：
  - const 常量名称,常量名称... 常量类型 = 常量值,常量值...

- 第二种：
  - const 常量名称,常量名称... = 常量值,常量值...

测试代码
```go
package main

func main() {
	const name string = "zs"
	const name2 = "ls"
	const name3,name4 string = "zs","ls"
	const name5,age = "zs",13
	println(name5,age)
}
```

### 变量
变量，初次赋值后确定变量类型，不可改变该类型，但是可以修改其值。

#### 单变量声明
- 第一种：
  - var 变量名称 变量类型 = 变量值
  
- 第二种：省略类型
  - var 变量名称 = 变量值
  
- 第三种：省略var和类型
  - 变量名称 := 变量值

#### 多变量声明
- 第一种：
  - var 变量名称,变量名称... 变量类型 = 变量名称,变量名称 

- 第二种：省略类型
  - var 变量名称,变量名称... = 变量名称,变量名称

- 第三种：省略var和类型
  - 变量名称,变量名称 := 变量值,变量值

测试代码
```go
package main

func main() {
	var addr string = "zhengzhou"
	println(addr)
	var addr2 = "zhengzhou2"
	println(addr2)
	addr3 := "zhengzhou3"
	println(addr3)

	var addr4,addr5 string = "zhengzhou4","zhengzhou5"
	println(addr4,addr5)
	var name,age = "zs",13
	println(name,age)
	name2,age2 := "zs2",23
	println(name2,age2)
}
```

注：go语言中变量必须被使用，否则程序编译不通过

## 数据集合
数组是一组固定大小不可变，切片slice是动态数组，map是key-value映射。

### 数组
数组是具有相同唯一类型的一组已编号且长度固定的数据项序列，
这种类型可以是任意的原始类型例如整形、字符串或者自定义类型。

len() 和 cap() 返回结果始终一样。
#### 声明数组
- 第一种：
  - var 数组名称 [数组大小] 数组类型

- 第二种：不指定大小
  - 数组名称 := [...] 数组类型 {值1, 值2, 值3}

- 第三种：指定索引位置值，未指定为默认空值;未指定大小会根据最后索引位置初始化大小
  - arr1 := [...] string { 2:"b", 4:"d" }
  - arr2 := [6] string { 2:"b", 4:"d" }
  

测试代码：

```go
package main

import "fmt"

func main() {
	var arr [3] string
	fmt.Println(arr)
	arr2 := [...] string {"a","b"}
	fmt.Println(arr2)
	arr3 := [...] string {2:"b", 4:"d"}
	fmt.Println(arr3)
	arr4 := [6] string {2:"b", 4:"d"}
	fmt.Println(arr4)
}
```

### 切片slice
切片是一种动态数组，比数组操作灵活，长度不是固定的，可以进行追加和删除。

len() 和 cap() 返回结果可相同和不同。

得到切片的两种方式：

- 第一种：数组转化
- 第二种：make函数
- 第三种：字面量

测试代码：
```go
package main

import "fmt"

func main() {
	arr := [...] string {"a","b","c","d"}
	slice := arr[1:3]
	fmt.Println(slice)
	slice2 := make([] int16,4)
	fmt.Println(slice2)
	slice3 := [] string {"a","b","c"}
	fmt.Println(slice3)
}
```

#### 追加appen
```go
package main

import "fmt"

func main() {
	slice := [] string { "a", "b" }
	fmt.Println(slice)
	slice2 := append(slice,"c")
	fmt.Println(slice2)
}
```

### Map
map是key-value键值对集合

map中多有的key类型一致，所有的value类型一致，但key和value可以不一致

#### Map声明

- 使用make函数
    - 名称 := make(map[key类型] value类型)

测试代码：
```go
package main

import "fmt"

func main() {
	m := make(map[string] int16)
	m ["a"] = 1
	m ["b"] = 2
	
	for key := range m{
		fmt.Println(key, m [key])
	}
}
```

## 控制结构
主要包括if for switch逻辑结构
### if
if else主要是判断条件

```go
package main

func main() {
	num := 10
	if num > 5 {
		print(string(num) + "大于5")
	} else {
		print(string(num) + "小于等于5")
	}
}

```
### for
```go
package main

import "fmt"

func main() {
	person := [...] string {"apple", "banana"}
	fmt.Printf("len = %d,cap = %d,array = %v \n", len(person), cap(person), person)
	for index,value := range person{
		fmt.Printf("person[%d] -> %s \n", index, value)
	}
}
```

### switch
```go
package main

import "fmt"

func main() {
	for num :=1; num<7; num = num+1{
		fmt.Printf("当 num = %d 时，", num)
		switch_case(num)
	}
}
func switch_case(num int)  {
	switch num {
	case 1:
		fmt.Printf("输出 num = 1 \n")
	case 2:
		fmt.Printf("输出num = 2 \n")
	case 3, 4, 5:
		fmt.Printf("其他 \n")
	default:
		fmt.Printf("未匹配case，默认 \n")
	}
}
```

### 相关关键字
#### goto
用于循环跳转指定位置执行程序，不能跨函数执行

```go
package main

func main() {
	for num := 1; num<10; num++ {
		println(num)
		if num >7 {
			goto END
		}
	}
	END :
		println("结束")
}
```
#### continue
跳出本次循环，仅仅用于for

#### break
跳出当前循环for、switch、select

## struct 结构体

struct 结构体是各个字段类型的集合
``` go
type person struct {
	name string
	age int8
}
```
- type name struct {}创建一个名为name的结构体
- 你可以在初始化一个结构体元素时指定字段名字
- 省略的字段将被初始化为零值
- & 前缀生成一个结构体指针
- 使用点来访问结构体字段，也可对指针使用，它会自动解开
- 结构体是可变的

## 指针

通过引用传递值或者数据结构

```go
package main

import (
	"fmt"
	_ "fmt"
)

func zerovalue(val int)  {
	val = 0
}

func zerovarible(varible *int)  {
	*varible = 0
}

func main() {
	i := 1
	fmt.Println(i)

	zerovalue(i)
	fmt.Println(i)

	zerovarible(&i)
	fmt.Println(i)

	fmt.Println(&i)

}
```

```go
输出结果：
1
1
0
0xc00000a090
```

## 函数与方法
不管是函数还是方法都使用 `func` 关键字定义，它们有着明确的概念区分。
在Go语言中，函数是指不属于任何结构体、类型的方法，也就是说函数是没有接收者的；
而方法是有接收者的，我们说的方法要么是属于一个结构体的，要么属于一个新定义的类型的。

### 函数

```go
func add(x,y int) int  {
	return x + y
}
```
多参数函数
```go
func multipleAdd(nums ...int) int {
	result := 0
	for _,n := range nums{
		result += n
	}
	return result
}
```
### 方法
Go支持在结构体类型中定义方法，方法在定义的时候，会在func和方法名之间增加一个参数，这个参数就是接收者。
接收者可以是值类型或者指针类型。
```go
package main

type rect struct {
	width, height int
}
func (r rect) area() int {
	return r.width * r.height
}
func (r *rect) perimeter() int {
	return (r.width + r.height) * 2
}

func main() {
	r := rect{height: 2, width: 3}
	println(r.area())
	println(r.perimeter())

	rp := &r
	println(rp.area())
	println(rp.perimeter())
}
```

## 接口
Go语言实现接口是不需要声明，属于一种鸭子类型，方法名一样就认为实现了接口。
```go
package main

import (
	"fmt"
	"math"
)

type geometry interface {
	area() float64
	perimeter() float64
}
type rectangle struct {
	width, height float64
}
type circle struct {
	radius float64
}
func (r rectangle) area() float64 {
	return r.width * r.height
}
func (r rectangle) perimeter() float64 {
	return (r.width + r.height) * 2
}
func (c circle) area() float64 {
	return math.Pi * c.radius * c.radius
}
func (c circle) perimeter() float64 {
	return 2* math.Pi * c.radius
}
func measure(g geometry)  {
	fmt.Println(g)
	fmt.Println(g.area())
	fmt.Println(g.perimeter())
}

func main() {
	r := rectangle{height: 2, width: 3}
	c := circle{radius: 2}
	measure(r)
	measure(c)
}
```

## 错误处理
按照惯例，错误通常是最后一个返回值并且是 error 类型，一个内建的接口。
errors.New 构造一个使用给定的错误信息的基本error 值，返回错误值为 nil 代表没有错误。
通过实现 Error 方法来自定义 error 类型是可以的。

```go
package main

import (
	"errors"
	"fmt"
)

func f1(ary int) (int, error)  {
	if ary == 42 {
		return -1, errors.New("can't work with 42")
	}
	return ary +1, nil
}

type aryError struct {
	code int
	message string
}

func (e *aryError) Error() string {
	return fmt.Sprintf("%d - %s", e.code, e.message)
}
func f2(ary int) (int, error) {
	if ary == 42 {
		return -1, &aryError{ary, "can't work with 42"}
	}
	return ary +2, nil
}

func main() {
	for _, i := range []int{7, 42}{
		if r, e := f1(i); e != nil {
			fmt.Println("f1 failed", e)
		} else {
			fmt.Println("f1 work", r)
		}
	}

	for _, i := range []int{7, 42}{
		if r, e := f2(i); e != nil {
			fmt.Println("f2 failed", e)
		} else {
			fmt.Println("f2 work", r)
		}
	}
	_, e := f2(42)
	if ae, ok := e.(*aryError); ok {
		fmt.Println(ae.code)
		fmt.Println(ae.message)
	}
}

```