(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{173:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("The Zowe installation files are distributed as a PAX file that contains the runtimes and the scripts to install and launch the z/OS runtime and the runtime for the command line interface.")]),e._v(" "),a("p",[e._v("To obtain a Zowe PAX file, visit "),a("a",{attrs:{href:"https://github.com/gizafoundation/Downloads/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe download page"),a("OutboundLink")],1),e._v(" in GitHub. For each release, there is a PAX file named "),a("code",[e._v("project_zowe-v.r.m.pax")]),e._v(", where")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("The numbers are incremented each time a release is created so the higher the numbers, the later the release.  Use your web browser to download the PAX file by saving it to a folder on your desktop.")]),e._v(" "),a("p",[e._v("Follow these steps to transfer the PAX file to z/OS and prepare it to install the Zowe runtime.")]),e._v(" "),e._m(2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"obtaining-installation-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-installation-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtaining installation files")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("v")]),e._v(" indicates the version")]),e._v(" "),a("li",[a("code",[e._v("r")]),e._v(" indicates the release number")]),e._v(" "),a("li",[a("code",[e._v("m")]),e._v(" indicates the modification number")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("p",[e._v("Transfer the PAX file to z/OS.")]),e._v(" "),a("p",[e._v("a. Open a terminal in Mac OS/Linux, or command prompt in Windows OS, and navigate to the directory where you downloaded the Zowe PAX file.")]),e._v(" "),a("p",[e._v("b. Connect to z/OS using SFTP. Issue the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sftp <userID@ip.of.zos.box>\n")])])]),a("p",[e._v("If SFTP is not available or if you prefer to use FTP, you can issue the following command instead:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ftp <userID@ip.of.zos.box>\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": When you use FTP, switch to binary file transfer mode by issuing the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bin\n")])])]),a("p",[e._v("c. Navigate to the target directory on z/OS.")]),e._v(" "),a("pre",[a("code",[e._v("After you connect to z/OS and enter your password, you enter into the Unix file system. Navigate to the directory you wish to transfer the Zowe PAX file into.\n\n- To see what directory you are in, type `pwd`.\n- To switch directory, type `cd`.\n- To list the contents of a directory, type `ls`.\n- To create a directory, type `mkdir`.   \n")])]),e._v(" "),a("p",[e._v("d. When you are in the directory you want to transfer the Zowe PAX file into, issue the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("put <pax-file-name>.pax\n")])])]),a("p",[e._v("Where "),a("em",[e._v("pax-file-name")]),e._v(" is a variable that indicates the full name of the PAX file you downloaded.")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": When your terminal is connected to z/OS through FTP or SFTP, you can prepend commands with "),a("code",[e._v("l")]),e._v(" to have them issued against your desktop.  To list the contents of a directory on your desktop, type "),a("code",[e._v("lls")]),e._v(" where "),a("code",[e._v("ls")]),e._v(" will list contents of a directory on z/OS.")])]),e._v(" "),a("li",[a("p",[e._v("When the PAX file is transferred, expand the PAX file by issuing the following command in an ssh session:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pax -ppx -rf <pax-file-name>.pax\n")])])]),a("p",[e._v("Where "),a("em",[e._v("pax-file-name")]),e._v(" is a variable that indicates the name of the PAX file you downloaded.")]),e._v(" "),a("p",[e._v("This will expand to a file structure.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  /files\n  /install\n  /scripts\n  ...\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": The PAX file will expand into the current directory. A good practice is to keep the installation directory apart from the directory that contains the PAX file.  To do this, you can create a directory such as "),a("code",[e._v("/zowe/paxes")]),e._v(" that contains the PAX files, and another such as "),a("code",[e._v("/zowe/builds")]),e._v(".  Use SFTP to transfer the Zowe PAX file into the "),a("code",[e._v("/zowe/paxes")]),e._v(" directory, use the "),a("code",[e._v("cd")]),e._v(" command to switch into "),a("code",[e._v("/zowe/builds")]),e._v(" and issue the command "),a("code",[e._v("pax -ppx -rf ../../paxes/<zowe-v.r.m>.pax")]),e._v(".  The "),a("code",[e._v("/install")]),e._v(" folder will be created inside the "),a("code",[e._v("zowe/builds")]),e._v(" directory from where the install can be launched.")])])])}],!1,null,null,null);t.default=n.exports}}]);