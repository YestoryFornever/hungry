module.exports = function(grunt){

	//require("time-grunt")(grunt);//列出每个task的运行时间
	//require("load-grunt-tasks")(grunt);//相当于用grunt.registerTask引入所有grunt插件

	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),

		jshint:{
			build:['Gruntfile.js','build/*.js'],
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
				src:'build/test.js',
				dest:'release/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		},

		watch:{
			build:{
				files:["Gruntfile.js","build/*"],
				tasks:['jshint','csslint','uglify'],
				options: {spawn: false}
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-csslint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default",["jshint","csslint","uglify","watch"]);
};