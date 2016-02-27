module.exports = function(grunt){

	//require("time-grunt")(grunt);//列出每个task的运行时间
	//require("load-grunt-tasks")(grunt);//相当于用grunt.registerTask引入所有grunt插件

	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),

		uglify:{
			options:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%-pkg.version%>.js <%j= grunt.template.today("yyyy-mm-dd") %>*/\n'
			},
			build:{
				src:'build/test.js',
				dest:'release/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default",["uglify"]);
};