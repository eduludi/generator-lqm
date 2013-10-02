generator-lqm
=============

An [Lungo](http://lungo.tapquo.com)-[Quo](http://quojs.tapquo.com)-[Monocle](http://monocle.tapquo.com) MVC app generator for [Yeoman](http://yeoman.io).

## Getting Started

### Requirements
1. [node](http://nodejs.org/)
2. [git](http://git-scm.org/)
3. Yeoman:

```
$ npm install -g yo
```

### Install and Usage

To install generator-lqm from npm, run:

```
$ npm install -g generator-lqm
```

Finally, initiate the generator in your desired folder:

```
$ mkdir myApp
$ cd myApp
$ yo lqm
```
### Subgenerators

#### Model

```
$ yo lqm:model "ModelName attribute_a attribute_b attribute_x"
```

Example:

```
$ yo lqm:model "Task name description done"
```

#### View

```
$ yo  lqm:view "ViewName"

```

Example:

```
$ yo lqm:view "Task"
```

#### Controller

```
$ yo lqm:controller "ControllerName"
```

Example:

```
$ yo lqm:controller "Tasks"
```

#### Full Scaffold (ala Rails)

Work in progress... (coming soon)


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
