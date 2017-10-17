(function (global) {
	// Map tells the System loader where to look for things.
	var map = {
		"app": "v0/app",
		"@angular": "v0/node_modules/@angular",
		"angular2-in-memory-web-api": "v0/node_modules/angular2-in-memory-web-api",
		"angular2-cookie": "v0/node_modules/angular2-cookie",
		"angular2-component-outlet": "v0/node_modules/angular2-component-outlet",
		"ng2-slim-loading-bar": "v0/node_modules/ng2-slim-loading-bar/bundles/index.umd.js",
		// 'rxjs': 'node_modules/rxjs',
		"consul": "v0/node_modules/consul",
		"ng2-dragula": "v0/node_modules/ng2-dragula/bundles/ng2-dragula.umd.js",
		"@synisys": "v0/node_modules/@synisys"


	};

	// Packages tells the System loader how to load when no filename and/or no extension.
	var packages = {
		"app": {main: "main.js", defaultExtension: "js"},
		"rxjs": {defaultExtension: false},
		"consul": {defaultExtension: "js"},
		"@synisys/idm-application-properties-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-authentication-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-message-language-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-session-data-provider-api-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-crosscutting-concepts-frontend": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-common-util-frontend": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-ng-controls": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-category-manager-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-monitoring-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-common-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-permission-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-organization-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-organization-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-role-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-um-role-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-classifier-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-de-core-frontend": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-kb-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-validation-calculation-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-authorization-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-de-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-workflow-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/bgd-nhd-de-service-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-user-data-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-notification-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-dataset-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-reporting-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-sms-service-config-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-mail-service-config-ui": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-reporting-controls": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-page-service-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-page-controls": {main: "index.js", defaultExtension: "js"},
		'@synisys/idm-lock-service-client-js': {main: "index.js", defaultExtension: "js"},
		"@synisys/idm-export-client-js": {main: "index.js", defaultExtension: "js"},
		"@synisys/file-download-helper": {main: "index.js", defaultExtension: "js"},
		"angular2-in-memory-web-api": {main: "index.js", defaultExtension: "js"},
		"angular2-cookie": {defaultExtension: "js"},
		"angular2-component-outlet": {main: "index.js", defaultExtension: "js"},
		"ng2-dragula": {defaultExtension: "js"}
	};

	var ngPackageNames = [
		"common",
		"compiler",
		"core",
		"forms",
		"http",
		"platform-browser",
		"platform-browser-dynamic",
		"router",
		"upgrade"
	];

	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages["@angular/" + pkgName] = {main: "index.js", defaultExtension: "js"};
	}

	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages["@angular/" + pkgName] = {main: "bundles/" + pkgName + ".umd.min.js", defaultExtension: "js"};
	}

	// Most environments should use UMD; some (Karma) need the individual index files.
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

	// Add package entries for angular packages.
	ngPackageNames.forEach(setPackageConfig);

	var config = {
		map: map,
		packages: packages
	};

	System.config(config);
})(this);