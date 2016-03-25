module.exports = function(grunt){

	require("time-grunt")(grunt);//列出每个task的运行时间
	require("load-grunt-tasks")(grunt);//相当于用grunt.registerTask引入所有grunt插件

	var config = {
		source:"source",
		build:"build"
	}

	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		config:config,

		jshint:{
			build:['build/**/*.js'],//'Gruntfile.js',
			options: {
				jshintrc: '.jshintrc'
			}
		},

		csslint:{
			build:['build/*.css'],
			options: {
				csslint: '.csslint'
			}
		},

		uglify:{
			options:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%-pkg.version%>.js <%j= grunt.template.today("yyyy-mm-dd") %>*/\n'
			},
			build:{
				src:'build/js/index.js',
				dest:'release/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		},

		watch:{
			build:{
				files:["Gruntfile.js","build/**/*"],
				tasks:['jshint','csslint','uglify'],
				options: {spawn: false}
			}
		},

		/*copy:{
			dist:{
				src:"<%= config.source %>/test.html",
				dest:"<%= config.build %>/test.html"
			}
		},*/
		copy:{
			dist:{
				files:[
					{
						src:"<%= config.source %>/test.html",
						dest:"<%= config.build %>/test.html"
					},
					{
						src:"<%= config.source %>/js/index.js",
						dest:"<%= config.build %>/js/index.js"
					},
				]
			}
		},

		clean:{
			dist:{
				//src:["<%= config.build %>/test.html","<%= config.build %>/js/index.js"],
				src:["<%= config.build %>/**/*"],//匹配所有文件
				filter:function(filepath){
					return (!grunt.file.isDir(filepath));
				}
			}
		}
	});
	
	/*grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-csslint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");*/

	grunt.registerTask("default",["jshint","csslint","uglify","watch"]);
};