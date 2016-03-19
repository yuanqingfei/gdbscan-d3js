enablePlugins(ScalaJSPlugin)

name := "gdbscan-d3js"

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
"be.doeraene" %%% "scalajs-jquery" % "0.9.0",
"com.greencatsoft" %%% "scalajs-angular" % "0.6"
)

skip in packageJSDependencies := false

jsDependencies ++= Seq(
"org.webjars.bower" % "angular" % "1.5.1" / "angular.js",
"org.webjars.bower" % "d3" % "3.5.16" / "d3.js",
"org.webjars.bower" % "nvd3" % "1.8.2" / "nv.d3.js" dependsOn "d3.js",
"org.webjars.bower" % "angular-nvd3" % "1.0.5" / "angular-nvd3.js" dependsOn "angular.js" 
)

//jsDependencies += RuntimeDOM

// uTest settings
libraryDependencies += "com.lihaoyi" %%% "utest" % "0.3.0" % "test"
testFrameworks += new TestFramework("utest.runner.Framework")

persistLauncher in Compile := true
persistLauncher in Test := false
