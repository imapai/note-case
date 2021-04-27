# Go语言之优雅的Switch语句

Go 语言中的 switch 结构使用上更加灵活，它几乎接受任意形式的表达式。包含以下三种常见形式。

### switch第一种形式：提供一种相同类型的任意值

``` go
switch var {
    case var1:
    	...
    case var2:
    	...
}
```

- 变量可以是任何类型，但必须为同一类型，类型不局限于常量或者整数。
- 您可以同时测试多个可能符合条件的值，使用逗号分割它们，例如：`case val1, val2, val3`。
- 匹配到某个分支，执行后自动跳出switch，不需要执行 `break` 语句。
- 如果在执行完每个分支的代码后，还希望继续执行后续分支的代码，可以使用 `fallthrough` 关键字来达到目的。
- 可选的 `default` 分支可以出现在任何顺序，但最好将它放在最后，不符合任何条件时，执行相关代码。

因此：

``` go
	switch i {
	case 0:
		println("000000000")
	case 1:
		println("111111111") //不会被执行
	}
```

但是：

``` go
	switch i {
	case 0:
		println("000000000")
		fallthrough
	case 1:
		println("111111111") //会被执行
	}
```

### switch的第二种形式：不提供任何判断的值

当任一分支的测试结果为 true 时，该分支的代码会被执行。这看起来非常像链式的 `if-else` 语句，但是在测试条件非常多的情况下，提供了可读性更好的书写方式。

``` go
switch {
    case condition1:
    	...
    case condition2:
    	...
}
```

### swich的第三种形式：包含一个初始化语句

这种形式可以非常优雅的进行条件判断

``` go
switch initalization {
    case var1:
    	...
    case var2:
    	...
}
```

例如：

``` go
switch result := calculate(); {
	case result < 0:
		...
	case result > 0:
		...
	default:
		// 0
}
```

``` go
switch a, b := x[i], y[j]; {
	case a < b: t = -1
	case a == b: t = 0
	case a > b: t = 1
}
```

相比于Java语言，Go对于switch的实现方式即简洁有更加优雅和实用，可以尝试多用switch优化代码可读性。

